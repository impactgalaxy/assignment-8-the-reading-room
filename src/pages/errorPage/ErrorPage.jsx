import { Link } from "react-router-dom";

export default function ErrorPage() {
    return (
        <div className="absolute top-0 w-full h-full flex items-center justify-center flex-col gap-5">
            <h1 className="text-4xl font-bold">Oops sorry! Your page not found</h1>
            <Link to="/" className="btn btn-link text-2xl">Home</Link>


        </div>
    )
}