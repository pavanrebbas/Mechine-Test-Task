import { Fragment, useState } from "react"
import { Col, Container, Row, Table } from "react-bootstrap";
import Doughtnutchart from "./Doughnutchart";
import DataTable from "./DataTable";
import { Switch } from "antd";


const Homepage = () => {


    const mockdata = [
        {

            Campaigns: "cosmetics",
            clicks: 712,
            Cost: 4272,
            Conversions: 8,
            Revenue: 16568,

        },

        {

            Campaigns: "serums",
            clicks: 3961,
            Cost: 27331,
            Conversions: 115,
            Revenue: 362526,

        },

        {


            Campaigns: "Fashwash",
            clicks: 9462,
            Cost: 76831,
            Conversions: 123,
            Revenue: 266800,

        },

        {


            Campaigns: "Shampoos",
            clicks: 439,
            Cost: 2151,
            Conversions: 5,
            Revenue: 11029,

        },


        {

            Campaigns: "Conditioners",
            clicks: 1680,
            Cost: 3864,
            Conversions: 49,
            Revenue: 175254,

        },



        {

            Campaigns: "Fashwash2",
            clicks: 4976,
            Cost: 29370,
            Conversions: 189,
            Revenue: 623106,

        },


        {

            Campaigns: "Total",
            clicks: 26510,
            Cost: 143819,
            Conversions: 489,
            Revenue: 1573563,

        },

    ];


    // usestate for table and char//
    const [toggle, settoggle] = useState(false);
    const handleclick = () => {
        settoggle(!toggle)
    };


    //usestate for sorting the data
    const [data1, setdata] = useState(mockdata);
    const [order, setorder] = useState("ASC");

    //////sorting/////
    const sorting = (col) => {
        if (order == "ASC") {
            const sorted = [...data1].sort((a, b) =>
                a[col.toLowerCase()] > b[col.toLowerCase()] ? 1 : -1
            );
            setdata(sorted);
            setorder("DSC");
        };

        if (order == "DSC") {

            const sorted = [...data1].sort((a, b) =>

                a[col.toLowerCase()] < b[col.toLowerCase()] ? 1 : -1
            );
            setdata(sorted);
            setorder("ASC");
        }
    };







    return (

        <Fragment>
            <Container className="my-4 py-5">
                <Row>
                    <Col>
                        <Table striped bordered>
                            <thead>
                                <tr>
                                    <th onClick={() => sorting("Campaigns")}>Campaigns</th>
                                    <th onClick={() => sorting("clicks")}>clicks</th>
                                    <th onClick={() => sorting("Cost")}>Cost</th>
                                    <th onClick={() => sorting("Conversions")}>Conversions</th>
                                    <th onClick={() => sorting("Revenue")}>Revenue</th>
                                </tr>
                            </thead>
                            <tbody>

                                {
                                    data1.map((products) => {
                                        return (
                                            <tr>
                                                <td>{products.Campaigns}</td>
                                                <td>{products.clicks}</td>
                                                <td>USD - {products.Cost}</td>
                                                <td>{products.Conversions}</td>
                                                <td>{products.Revenue}</td>
                                            </tr>
                                        )
                                    })
                                }
                            </tbody>

                        </Table>
                    </Col>

                    <Col>

                        {
                            toggle ? <DataTable /> : <Doughtnutchart />
                        }
                        <div className="float-end">
                            <Switch onClick={handleclick}  />
                        </div>
                    </Col>
                </Row>
            </Container>

        </Fragment>
    )
};

export default Homepage;