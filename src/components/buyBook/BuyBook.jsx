import PropTypes from "prop-types";
import { Link } from "react-router-dom";
export default function BuyBook({ data }) {
    const { image, bookName, bookId } = data;
    return (
        <Link to={`/all-books/${bookId}`} className="h-64 p-3 shadow-md lg:w-44">
            <div className="h-40">
                <img src={image} alt="" className="h-40 w-full object-cover" />
            </div>
            <h1>{bookName.length > 20 ? bookName.slice(0, 10).concat("...") : bookName}</h1>
            <p>$200</p>
            <p><small><del className="text-red-400">$400</del></small> -20%</p>
        </Link>
    )
}
BuyBook.propTypes = {
    data: PropTypes.object.isRequired
}