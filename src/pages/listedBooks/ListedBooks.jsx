import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom"
import { getDataFromLS, getDataFromLSByWishlist } from "../../utility/Utility";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import ReadingData from "../../components/readingData/ReadingData";
import WishlistData from "../../components/wishData/WishlistData";

export default function ListedBooks() {
    const [readData, setReadData] = useState([]);
    const [wishData, setWishData] = useState([]);
    const originalData = useLoaderData();


    useEffect(() => {
        const dataFromLs = getDataFromLS();
        const dataFromLsByWishlist = getDataFromLSByWishlist();
        const readingData = originalData.filter(item => dataFromLs.includes(item.bookId))
        const wishlistData = originalData.filter(item => dataFromLsByWishlist.includes(item.bookId))
        setReadData(readingData);
        setWishData(wishlistData);

    }, [originalData]);
    return (
        <div>
            <div className="p-5 lg:p-10 text-center bg-blue-gray-300">
                <h1 className="text-4xl font-black">BOOK</h1>
            </div>
            <div className="container m-auto p-4 lg:p-10">
                <Tabs>
                    <TabList>
                        <Tab>Read Books</Tab>
                        <Tab>Wishlist Books</Tab>
                    </TabList>

                    <TabPanel>
                        {readData.map(item => <ReadingData key={item.bookId} reads={item}></ReadingData>)}
                    </TabPanel>
                    <TabPanel>
                        {wishData.map((item, idx) => <ReadingData key={idx} reads={item}></ReadingData>)}
                    </TabPanel>
                </Tabs>
            </div>
        </div>
    );

}
