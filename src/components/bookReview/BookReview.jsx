import {
    Card,
    Typography,
    Button,
} from "@material-tailwind/react";
import PropTypes from "prop-types";
import { saveDataToLS, saveDataToLSByWishlist } from "../../utility/Utility";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
export function BookReview({ books }) {
    const { image, bookName, author, review, category, tags, totalPages, publisher, yearOfPublishing, rating, bookId } = books || {};

    const handleRead = () => {
        saveDataToLS(parseInt(bookId), toast);
    }
    const handleWishlist = () => {
        saveDataToLSByWishlist(parseInt(bookId), toast)
    }
    return (
        <Card className="flex flex-col lg:flex-row container m-auto p-4 lg:p-10 lg:*:w-1/2">
            <div

                className="m-0 rounded-xl w-full"
            >
                <img
                    src={image}
                    alt={bookName}
                    className="h-60 lg:h-full w-full object-cover"
                />
                <ToastContainer></ToastContainer>

            </div>
            <div className="p-4 lg:px-10 flex flex-col gap-3">
                <Typography variant="h4" color="blue-gray" >
                    {bookName}
                </Typography>
                <Typography color="blue-gray">
                    By: {author}
                </Typography>
                <Typography className="my-2 border-y py-4">
                    {category}
                </Typography>
                <Typography color="gray" className="font-normal flex-grow">
                    <span className="text-black font-bold">Review:</span> {review}
                </Typography>
                <div className="flex gap-3 border-b py-4">
                    <p className="text-black font-bold">Tag</p>
                    {tags.map((text, idx) => <span className="text-green-800" key={idx}>#{text}</span>)}
                </div>
                <div className="flex lg:w-3/4 items-center gap-5 justify-between border">
                    <div>
                        <p>Number of Pages</p>
                        <p >Publisher</p>
                        <p >Year of Publishing</p>
                        <p >Rating</p>

                    </div>
                    <div>
                        <p className="text-black font-black">{totalPages}</p>
                        <p className="text-black font-black">{publisher}</p>
                        <p className="text-black font-black">{yearOfPublishing}</p>
                        <p className="text-black font-black">{rating}</p>
                    </div>

                </div>
                <div className="flex gap-4 ">
                    <Button onClick={handleRead} variant="outlined" color="green" className="flex items-center gap-2">
                        Read
                    </Button>
                    <Button onClick={handleWishlist} variant="filled" color="blue" className="flex items-center gap-2">
                        Wishlist
                    </Button>
                </div>
            </div>

        </Card>
    );
}
BookReview.propTypes = {
    books: PropTypes.object.isRequired
}