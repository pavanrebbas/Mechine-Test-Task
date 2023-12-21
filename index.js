import ReactDOM from "react-dom/client";
import { Fragment } from "react";
import Header from "./src/Components/Header";
import Homepage from "./src/Components/Homepage";
import CreateAds from "./src/Components/CreateAds";
// import TextAdForm from "./src/Components/TetxAdForm";
import MediaAdFrom from "./src/Components/MediaAdForm";
import TextAdForm from "./src/Components/TetxAdForm";
// import Doughnut from "./src/Components/Doughnutchart";
import 'bootstrap/dist/css/bootstrap.min.css'; // BOOTSTRAP LINK 
// import Toggle from "./src/Components/Toggle";
import { RouterProvider, createBrowserRouter, Outlet } from "react-router-dom";



const Applayout = () => {

    return (
        <Fragment>
            <Header />
            <Outlet />
        </Fragment>
    )
};


const appRouter = createBrowserRouter([

    {
        path: "/",
        element: <Applayout />,
        children: [
            {
                path: "/",
                element: <Homepage />
            },

            {
                path: "/create",
                element: <CreateAds />
            },

            {
                path: "/mediaAd",
                element: <MediaAdFrom />
            },
            {
                path: "/textAd",
                element: <TextAdForm />
            },
            /*  {
                 path: "/mediaAdform",
                 element: <MediaAdFrom />
             } */
        ]
    },
])


const root = ReactDOM.createRoot(document.getElementById("root"))

root.render(<RouterProvider router={appRouter}></RouterProvider>)