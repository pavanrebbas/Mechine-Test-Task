import { Fragment } from "react";
import { useState } from "react";
import { Table } from "react-bootstrap";

const Doughtnutchart = () => {

    const Data = [

        {

            Group: "male",
            Clicks: 348,
            Cost: 12528,
            Conversions: 42,
            Revenue: 62118
        },
        {

            Group: "male",
            Clicks: 348,
            Cost: 12528,
            Conversions: 42,
            Revenue: 62118
        },
        {

            Group: "male",
            Clicks: 348,
            Cost: 12528,
            Conversions: 42,
            Revenue: 62118
        },
        {

            Group: "male",
            Clicks: 348,
            Cost: 12528,
            Conversions: 42,
            Revenue: 62118
        }

    ];
    const [data, setdata] = useState(Data)
    return (

        <Fragment>
            <h1>Doughtnutchart</h1>

            <Table striped bordered>
                <thead>
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
        </Fragment>
    )
};

export default Doughtnutchart;