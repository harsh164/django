'use client';

import { useEffect, useState } from 'react';
import { Bar, Line, Pie } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend, LineElement, PointElement, ArcElement, Filler } from 'chart.js';
import axios from 'axios';
import dynamic from 'next/dynamic';

ChartJS.register(CategoryScale, LinearScale, BarElement, LineElement, PointElement, Title, Tooltip, Legend, ArcElement, Filler);


const CandlestickChart = dynamic(() => import('../CandlestickChart'), { ssr: false });

const Dashboard = () => {
    const [data, setData] = useState({
        lineData: null,
        barData: null,
        pieData: null,
        candlestickData: null,
    });

    useEffect(() => {
        const fetchData = async () => {
            try {
                const [lineResponse, barResponse, pieResponse, candlestickResponse] = await Promise.all([
                    axios.get('http://localhost:8000/api/line-chart-data'),
                    axios.get('http://localhost:8000/api/bar-chart-data'),
                    axios.get('http://localhost:8000/api/pie-chart-data'),
                    axios.get('http://localhost:8000/api/candlestick-data'),
                ]);

                console.log('Line Data:', lineResponse.data);
                console.log('Bar Data:', barResponse.data);
                console.log('Pie Data:', pieResponse.data);
                console.log('Candlestick Data:', candlestickResponse.data);
                
                setData({
                    lineData: lineResponse.data,
                    barData: barResponse.data,
                    pieData: pieResponse.data,
                    candlestickData: candlestickResponse.data,
                });
            } catch (error) {
                console.error("Error fetching chart data:", error);
            }
        };

        fetchData();
    }, []);

    const isDataLoaded = data.lineData && data.barData && data.pieData && data.candlestickData;

    return (
        <div>
            <h1>Dashboard</h1>
            {!isDataLoaded ? (
                <div>Loading data...</div>
            ) : (
                <>
                    <div>
                        <h2>Line Chart</h2>
                        {data.lineData.datasets ? <Line data={data.lineData} /> : <div>No data available for Line Chart</div>}
                    </div>
                    <div>
                        <h2>Bar Chart</h2>
                        {data.barData.datasets ? <Bar data={data.barData} /> : <div>No data available for Bar Chart</div>}
                    </div>
                    <div>
                        <h2>Pie Chart</h2>
                        {data.pieData.datasets ? <Pie data={data.pieData} /> : <div>No data available for Pie Chart</div>}
                    </div>
                    <div>
                        <h2>Candlestick Chart</h2>
                        {data.candlestickData ? 
                            <CandlestickChart data={data.candlestickData} /> : <div>No data available for Candlestick Chart</div>
                        }
                    </div>
                </>
            )}
        </div>
    );
};

export default Dashboard;