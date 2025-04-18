import { useEffect, useState } from "react";
import { useNavigate } from "react-router";

const ErrorPage = () => {
    const [countDown, setCountDown] = useState(5);
    const navigate = useNavigate();

    useEffect(() => {
        const timer = setInterval(() => {
            setCountDown((prev) => prev - 1);
        }, 1000);

        setTimeout(() => {
            navigate("/");
        }, 5000);

        return () => clearInterval(timer);
    }, [navigate]);

    return (
        <div className="page-container h-screen flex flex-col items-center justify-center gap-8 text-center">
            <p className="text-4xl text-gray-200 font-bold">An error occurred!</p>
            <p className="px-5 text-2xl text-gray-300 font-semibold">
                This page doesn't exist or you don't have access to it.
            </p>
            <p className="text-lg text-gray-400">
                You will be directed to the home page after{" "}
                <span className="text-xl text-gray-300 font-bold">{countDown}</span>{" "}
                seconds.
            </p>
        </div>
    );
}

export default ErrorPage;