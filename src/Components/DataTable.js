import { Fragment, useState } from "react"
import { Table } from "react-bootstrap";



const DataTable = () => {





    const Data = [

        {

            Group: "male",
            Clicks: 348,
            Cost: 12528,
            Conversions: 42,
            Revenue: 62118
        },
        {

            Group: "female",
            Clicks: 692,
            Cost: 24912,
            Conversions: 35,
            Revenue: 5175,
        },
        {

            Group: "unknown",
            Clicks: 105,
            Cost: 3943,
            Conversions: 3,
            Revenue: 44989
        },
        {

            Group: "Total",
            Clicks: 1145,
            Cost: 41383,
            Conversions: 80,
            Revenue: 71782
        }

    ];
    const [data, setdata] = useState(Data)





    return (

        <Fragment>
            <Table striped bordered>
                <thead>
                    <tr>
                        <td>Ad insights</td>
                    </tr>
                    <tr>
                        <th> Group</th>
                        <th> Clicks</th>
                        <th> Cost</th>
                        <th> Conversions</th>
                        <th> Revenue</th>
                    </tr>
                </thead>

                <tbody>
                    {
                        data.map((d) => {

                            return (
                                <tr>
                                    <td>{d.Group}</td>
                                    <td>{d.Clicks}</td>
                                    <td>USD- {d.Cost}</td>
                                    <td>{d.Conversions}</td>
                                    <td>{d.Revenue}</td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </Table>


        </Fragment >
    )
};

export default DataTable;