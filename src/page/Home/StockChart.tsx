
import React, {useState} from "react";
import ReactApexChart from 'react-apexcharts';
import { Button } from '@/components/ui/button';

const timeSeries = [{
    keyword: "DIGITAL_CURRENCY_DAILY",
    key: "Time Series (Daily)",
    label: "1 Day",
    value: 1,
},{
    keyword: "DIGITAL_CURRENCY_WEEKLY",
    key: "Weekly Time Series",
    label: "1 Week",
    value: 7,
},{
    keyword: "DIGITAL_CURRENCY_MONTHLY",
    key: "Month Time Series",
    label: "1 Month",
    value: 30,
},{
    keyword: "DIGITAL_CURRENCY_YEARLY",
    key: "Year Time Series",
    label: "365 Day",
    value: 365,
}]

const StockChart = () => {

    const [activeLabel, setActiveLabel] = useState("1 Day");

    const series = [{
        data:[ [1737446549875, 101885.476079607],
            [1737450224058, 102336.848626247],
        [1737453724125, 102574.846291047],
        [1737457405375, 103051.920199296],
        [1737460870436, 103680.996945755],
        [1737464631018, 104383.967043879],
        [1737468504633, 104476.607037582],
        [1737471824899, 103459.591110279],
        [1737475589188, 104071.020141236],
        [1737479016864, 104858.631808125],
        [1737482626637, 106132.122146877],
        [1737486219258, 106789.70708043],
        [1737489830545, 106969.681008106],
        [1737493418206, 106189.882951434],
        [1737497033206, 106817.77660527],
        [1737500628136, 106011.735519903],
        [1737504236285, 106193.341794117],
        [1737508071434, 106194.217801489],
        [1737511426442, 105769.314576742],
        [1737515022084, 105588.500790401],
        [1737518512618, 105676.939311479],
        [1737522358507, 105715.690679462]]
    }];

    const options = {
        chart: {
            id: "area-datetime",
            type: "area",
            zoom: {
                autoScaleYaxis: true
            }
        },
        dataLabels: {
            enabled: false
        },
        xaxis: {
            type: 'datetime',
            tickAmount: 6
        },
        colors: ["#758AA2"],
        markers: {
            color: ["#ffffff"],
            strokeColor: '#fff',
            size: 0,
            strokeWidth: 1,
            style: 'hollow'
        },
        tooltip: {
            theme: 'dark'
        },
        fill: {
            type: 'gradient',
            gradient: {
                shadeIntensity: 1,
                opacityForm: 0.8,
                opacity: 0.9,
                stops: [0,100]
            }
        },
        grid: {
            borderColor: "#47535E",
            strokeDasharray: 4,
            show: true
        }
    }

    const handleActiveLabel = (value) => {
        setActiveLabel(value);
    }

    return (
        <div>
            <div className="space-x-4 p-2 mt-1 ">
                {timeSeries.map(((item) =>
                    <Button key={item.label}
                            onClick={() => handleActiveLabel(item.label)}
                            className={`text-white border cursor-pointer hover:bg-white hover:text-black ${activeLabel == item.label ? "text-red" : "text-white"}`}>
                        {item.label}
                    </Button>))}

            </div>
            <div id="chart-timelines">
                <ReactApexChart options={options} series={series} type='area' height={550}/>
            </div>
        </div>

    )
}

export default StockChart