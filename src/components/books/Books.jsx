import { useEffect, useState } from "react"
import Book from "../book/Book";
import { CustomSpinner } from "../spinner/customSpinner";

export default function Books() {
    const [books, setBooks] = useState([]);
    const [spinner, setSpinner] = useState(false);

    useEffect(() => {
        fetch("/booksData.json")
            .then(res => res.json())
            .then(data => {
                setBooks(data);
                setSpinner(true);
            });
    }, []);
    return (
        <div className="container m-auto p-2 lg:p-4 rounded-lg">
            <div className="text-center p-6">
                <h1 className="text-6xl font-black">Books</h1>
            </div>
            {!spinner ? <CustomSpinner></CustomSpinner> :
                <div className="flex flex-wrap justify-center gap-4  bg-[#F3F3F3]">
                    {
                        books.map((book, index) => <Book key={index} books={book}></Book>)
                    }
                </div>
            }
        </div>
    )
}

