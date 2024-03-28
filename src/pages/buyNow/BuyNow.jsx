import { useEffect, useState } from "react"
import BuyBook from "../../components/buyBook/BuyBook";

export default function BuyNow() {
    const [buyData, setBuyData] = useState([]);
    useEffect(() => {
        fetch("/booksData.json").then(res => res.json()).then(data => setBuyData(data))
    }, [])
    return (
        <div className="bg-blue-gray-50 pb-10">
            <div className="h-screen container m-auto flex items-center justify-center border flex-col">
                <h1 className="text-3xl text-red-900 font-black playfair p-4">Hot Deals</h1>

                <img src="https://i.ibb.co/c2bQ3vK/jaredd-craig-HH4-WBGNyltc-unsplash.jpg" alt="hero img" className="w-full object-cover block m-auto h-2/3 rounded-2xl" />
            </div>
            <div className="container m-auto pt-4 ">
                <h1 className="text-4xl text-blue-gray-500">FlashSell</h1>
                <div>
                    <div className="bg-white p-5">
                        <div className="flex items-center gap-4 border-b-2">
                            <h1 className="lg:text-2xl text-orange-600">On sell now</h1>
                            <h1>Ending In</h1>
                            <div className="btn">00</div>
                            <div className="btn">00</div>
                            <div className="btn">00</div>
                        </div>
                    </div>
                    <div className="bg-white flex items-center justify-center flex-wrap gap-3 p-4">
                        {
                            buyData.map(item => <BuyBook key={item.bookId} data={item}></BuyBook>)
                        }
                    </div>
                </div>
            </div>

        </div>
    )
}
