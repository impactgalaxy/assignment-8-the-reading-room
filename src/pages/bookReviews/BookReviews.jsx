import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import { BookReview } from "../../components/bookReview/BookReview";

export default function BookReviews() {
    const [data, setData] = useState([]);
    const loaderData = useLoaderData();
    const { id } = useParams();

    useEffect(() => {
        const filterData = loaderData.filter(element => element.bookId === parseInt(id));
        setData(filterData);

    }, [loaderData]);

    return (
        <div>
            {
                data.map(element => <BookReview key={element.bookId} books={element}></BookReview>)
            }
        </div>
    );

}
