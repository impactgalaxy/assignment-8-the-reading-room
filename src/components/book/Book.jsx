import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Typography,
    Button,

} from "@material-tailwind/react";

import PropTypes from "prop-types";
import { Link } from "react-router-dom";
export default function Book({ books }) {
    const { bookName, image, author, category, rating, tags, bookId } = books || {};
    const card = <Card >
        <CardHeader floated={false} className="flex-grow">
            <img
                src={image}
                alt={bookName}
                className="h-52 object-cover block m-auto w-full"
            />
        </CardHeader>
        <CardBody>
            <div className="flex py-3">
                {tags.map((text, idx) => <Button key={idx} variant="text" className="text-blue-700" size="sm">
                    {text}
                </Button>)
                }
            </div>
            <div className="mb-3 flex items-center justify-between">
                <Typography variant="h5" color="blue-gray" className="font-medium">
                    {bookName}
                </Typography>

            </div>
            <Typography color="gray">
                By: {author}
            </Typography>
            <div className="w-3/4 border-2 m-auto mt-4"></div>
        </CardBody>
        <CardFooter className="pt-3 flex justify-between items-center">
            <div>
                {category}
            </div>
            <div>

                <Typography
                    color="blue-gray"
                    className="flex items-center gap-1.5 font-normal"
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="-mt-0.5 h-5 w-5 text-yellow-700"
                    >
                        <path
                            fillRule="evenodd"
                            d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                            clipRule="evenodd"
                        />
                    </svg>
                    {rating}
                </Typography>

            </div>
        </CardFooter>
    </Card>

    return (
        <Link className="w-full max-w-[26rem] shadow-lg flex flex-col cursor-pointer" to={`/all-books/${bookId}`}>{card}</Link>

    );
}
Book.propTypes = {
    books: PropTypes.object.isRequired
}
