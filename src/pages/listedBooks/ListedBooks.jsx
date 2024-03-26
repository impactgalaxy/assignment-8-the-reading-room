import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom"
import { getDataFromLS, getDataFromLSByWishlist } from "../../utility/Utility";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import ReadingData from "../../components/readingData/ReadingData";
// import WishlistData from "../../components/wishData/WishlistData";

export default function ListedBooks() {
    const [readData, setReadData] = useState([]);
    const [wishData, setWishData] = useState([]);

    const [filterReading, setFilterReading] = useState([]);
    const [filterWishlist, setFilterWishlist] = useState([]);
    const originalData = useLoaderData();


    useEffect(() => {
        const dataFromLs = getDataFromLS();
        const dataFromLsByWishlist = getDataFromLSByWishlist();
        const readingData = originalData.filter(item => dataFromLs.includes(item.bookId))
        const wishlistData = originalData.filter(item => dataFromLsByWishlist.includes(item.bookId))
        setReadData(readingData);
        setFilterReading(readingData);
        setWishData(wishlistData);
        setFilterWishlist(wishlistData);

    }, [originalData]);
    const copyData = [...readData];
    const copyWishlistData = [...wishData];

    const handleFilter = (e) => {
        const target = e.target.value;

        switch (target) {
            case "rating":
                {
                    const filterRating = copyData.sort((a, b) => b.rating - a.rating)
                    const filterWishlistRating = copyWishlistData.sort((a, b) => b.rating - a.rating)
                    setFilterReading(filterRating);
                    setFilterWishlist(filterWishlistRating);
                    break;
                }
            case "page":
                {
                    const filterPage = copyData.sort((a, b) => b.totalPages - a.totalPages)
                    const filterWishlistPage = copyWishlistData.sort((a, b) => b.totalPages - a.totalPages)
                    setFilterReading(filterPage);
                    setFilterWishlist(filterWishlistPage);
                    break;
                }
            default:
                setFilterReading(copyData);
                setFilterWishlist(copyWishlistData);
                break;

        }

    }
    return (
        <div className="bg-gray-200">
            <div className="p-5 lg:p-10 text-center bg-blue-gray-300">
                <h1 className="text-4xl font-black">BOOK</h1>
            </div>
            <div className="lg:w-1/2 m-auto p-4 lg:p-8 border flex items-center justify-center  rounded-2xl">
                <select className="lg:w-1/3 p-3" onChange={handleFilter}>
                    <option value="null" aria-checked>Filter By</option>
                    <option value="all">All</option>
                    <option value="rating">Rating</option>
                    <option value="page">Pages</option>
                </select>
            </div>
            <div className="container m-auto lg:p-10 border-2">
                <Tabs>
                    <TabList>
                        <Tab>Read Books</Tab>
                        <Tab>Wishlist Books</Tab>
                    </TabList>
                    <TabPanel>
                        {filterReading.map(item => <ReadingData key={item.bookId} reads={item}></ReadingData>)}
                    </TabPanel>
                    <TabPanel>
                        {filterWishlist.map((item, idx) => <ReadingData key={idx} reads={item}></ReadingData>)}
                    </TabPanel>
                </Tabs>
            </div>
        </div>
    );

}
