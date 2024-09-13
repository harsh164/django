

import Plot from 'react-plotly.js';

interface CandlestickChartProps {
    data: {
        x: string[];
        open: number[];
        high: number[];
        low: number[];
        close: number[];
    };
}

const CandlestickChart = ({ data }: CandlestickChartProps) => {
    const plotData = [{
        type: 'candlestick',
        x: data.x,
        open: data.open,
        high: data.high,
        low: data.low,
        close: data.close,
        name: 'Candlestick Chart'
    }];

    const layout = {
        title: 'Candlestick Chart',
        xaxis: {
            title: 'Date'
        },
        yaxis: {
            title: 'Price'
        }
    };

    return <Plot data={plotData} layout={layout} />;
};

export default CandlestickChart;
