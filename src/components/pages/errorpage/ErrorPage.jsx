import { Link } from "react-router-dom";

const ErrorPage = () => {
    return (
        <div className="flex justify-center items-center h-[100vh]">
            <div className="text-center">
                <h2 className="text-5xl font-bold">Not found page!</h2>
                <Link className="btn btn-neutral mt-5">Go to home</Link>
            </div>
        </div>
    );
};

export default ErrorPage;