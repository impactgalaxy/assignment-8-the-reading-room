import { useEffect, useState } from 'react';
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip } from 'recharts';
import { getDataFromLS } from '../../utility/Utility';
import { Link, useLoaderData } from 'react-router-dom';
import PropTypes from "prop-types";

const colors = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', 'red', 'pink'];

const getPath = (x, y, width, height) => {
    return `M${x},${y + height}C${x + width / 3},${y + height} ${x + width / 2},${y + height / 3}
  ${x + width / 2}, ${y}
  C${x + width / 2},${y + height / 3} ${x + (2 * width) / 3},${y + height} ${x + width}, ${y + height}
  Z`;
};

const TriangleBar = (props) => {
    const { fill, x, y, width, height } = props;

    return <path d={getPath(x, y, width, height)} stroke="none" fill={fill} />;
};


export default function PagesToRead() {
    const [readingPage, setReadingPage] = useState([]);
    const loader = useLoaderData();

    useEffect(() => {
        const d = getDataFromLS();
        const myData1 = loader.filter(item => d.includes(item.bookId));
        setReadingPage(myData1);
    }, [loader]);
    console.log(loader.length);
    return (
        <div className='h-[calc(100%-100px)] flex items-center justify-center'>
            {
                readingPage.length ?
                    <BarChart
                        width={1200}
                        height={550}
                        data={readingPage}
                        margin={{
                            top: 20,
                            right: 30,
                            left: 20,
                            bottom: 5,
                        }}
                    >
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="bookName" />
                        <YAxis />
                        <Tooltip></Tooltip>
                        <Bar dataKey="totalPages" fill="#8884d8" shape={<TriangleBar />} label={{ position: 'top' }}>
                            {readingPage.map((entry, index) => (
                                <Cell key={`cell-${index}`} fill={colors[index % 20]} />
                            ))}
                        </Bar>
                    </BarChart> :
                    <div className='h-[500px] flex items-center justify-center flex-col'>
                        <h1 className='text-2xl lg:text-7xl'>You have not yet Read</h1>
                        <Link to="/all-books" className='btn btn-accent'>Show Books</Link>
                    </div>
            }
        </div>
    );
}
TriangleBar.propTypes = {
    fill: PropTypes.string,
    x: PropTypes.number,
    y: PropTypes.number,
    width: PropTypes.number,
    height: PropTypes.number
}
