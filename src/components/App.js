    import React, {lazy, Suspense} from "react";
    import ReactDOM  from "react-dom/client";
    import Body from './Body';
    import Header from "./Header";
    import About from "./About";
    import ContactUs from "./ContactUs";
    import Error from "./Error";
    import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
    import RestaurantMenu from "./RestaurantMenu";
    
    const Grocery = lazy(()=> import("./Grocery"));

    function App(){
        return (
            <div className="app">
                <Header />
                <Outlet />
            </div>
            )
    }

    const appRouter = createBrowserRouter([
        {
            path:"/",
            element: <App />,
            children:[
                {
                    path:"/",
                    element:<Body />
                },
                {
                    path:"/about",
                    element:<About />,
                },
                {
                    path:"/contactus",
                    element:<ContactUs />,
                },
                {
                    path:"/grocery",
                    element:(
                        <Suspense fallback={<h1>Loading...</h1>}>
                            <Grocery />
                         </Suspense>
                         ),
                },
                {
                    path:"/restaurants/:resId",
                    element:<RestaurantMenu />
                }
            ],
            errorElement:<Error />
        },
    ]);

    const root = ReactDOM.createRoot(document.getElementById('root'));
    root.render(<RouterProvider router={appRouter}/>);