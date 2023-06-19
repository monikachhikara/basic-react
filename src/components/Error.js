import { useRouteError } from "react-router-dom";

function Error(){
    const err = useRouteError();
    console.log(err);
    return (
        <div className="error">
            <h1>404 Page not found</h1>
            <h3>Go back to the home page.</h3>
            <h4>{err.status}</h4>
        </div>
    )
}

export default Error;