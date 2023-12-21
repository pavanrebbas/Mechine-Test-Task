import { Fragment, useEffect, useRef } from "react";
import Chart from "chart.js/auto";

const Doughtnutchart = () => {


    //////DOUGHTNUT CHART/////
    const chartRef = useRef(null);
    const chartInstance = useRef(null);

    useEffect(() => {
        if (chartInstance.current) {
            chartInstance.current.destroy();
        }
        const myChartRef = chartRef.current.getContext("2d")

        chartInstance.current = new Chart(myChartRef, {
            type: 'doughnut',
            data: {
                datasets: [
                    {
                        data: [40, 35, 25],
                        backgroundColor: [
                            'rgb(255,140,0)',
                            'rgb(135, 206, 235)',
                            'rgb((255,255,255))'
                        ],
                    }
                ],
                labels: [
                    '40% Male ',
                    '35% Female',
                    '25% Unknown'
                ],

            },



        });

        return () => {
            if (chartInstance.current) {
                chartInstance.current.destroy();
            }
        }
    }, [])


    return (

        <Fragment>

            <div  style={{ width: "100%", height: "70%" }}>
                <canvas ref={chartRef} />


            </div>



        </Fragment>
    )
};

export default Doughtnutchart;