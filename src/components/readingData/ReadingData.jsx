import {
    Card,
    CardHeader,
    CardBody,
    Typography,
    Button,
} from "@material-tailwind/react";
import { MdPublic } from "react-icons/md";
import { IoPeopleSharp } from "react-icons/io5";
import { LuBookCopy } from "react-icons/lu";
import PropTypes from "prop-types";

export default function ReadingData({ reads }) {
    const { image, bookName, author, category, tags, totalPages, publisher, yearOfPublishing, rating } = reads || {};

    return (
        <Card className="w-full  flex-row py-4 lg:p-8 items-center mb-4">
            <CardHeader
                shadow={false}
                floated={false}
                className="m-0 w-2/5 rounded-r-none"
            >
                <img
                    src={image}
                    alt="card-image"
                    className="h-56 w-full object-cover m-auto block"
                />
            </CardHeader>
            <CardBody>
                <Typography variant="h4" color="blue-gray" className="mb-1">
                    {bookName}
                </Typography>
                <Typography color="gray" className="mb-2 font-normal">
                    <span className="text-black">By:</span> {author}
                </Typography>
                <div className="flex flex-col lg:flex-row gap-2 lg:items-center">
                    <p className="text-lg font-bold text-black">Tag</p>
                    {
                        tags.map((tag, i) => <p className="text-light-blue-500" key={i}>#{tag}</p>)
                    }
                    <p className="flex items-center gap-2"><MdPublic></MdPublic>Year of Publishing <span className="text-black">{yearOfPublishing}</span></p>
                </div>
                <div className="flex flex-col lg:flex-row gap-4 lg:items-center border-b py-5">
                    <span className="flex gap-2 items-center"><IoPeopleSharp></IoPeopleSharp> Publisher: {publisher}</span>
                    <span className="flex gap-2 items-center"><LuBookCopy></LuBookCopy>Pages: {totalPages}</span>

                </div>
                <div className="flex flex-col lg:flex-row lg:items-center gap-2 lg:gap-5 mt-6">
                    <Button variant="filled" color="blue" className="flex items-center gap-2">
                        Category: {category}
                    </Button>
                    <Button variant="filled" color="amber" className="flex items-center gap-2">
                        Rating {rating}
                    </Button>
                    <Button variant="filled" color="green" className="flex items-center gap-2">
                        View Details
                    </Button>
                </div>
            </CardBody>
        </Card>
    );

}
ReadingData.propTypes = {
    reads: PropTypes.object.isRequired
}
