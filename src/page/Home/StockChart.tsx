
import React, {useEffect, useState} from "react";
import ReactApexChart from 'react-apexcharts';
import { Button } from '@/components/ui/button';
import {useDispatch, useSelector} from "react-redux";
import { fetMarketChart } from "@/State/Coin/Action"


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
    label: "1 Year",
    value: 366,
}]

const StockChart = ({coinId}) => {
    const dispatch = useDispatch();
    const {coin} = useSelector(store => store);
    const [activeLabel, setActiveLabel] = useState(timeSeries[0]);

    useEffect(() => {
        dispatch(fetMarketChart({coinId, days:activeLabel.value, jwt:localStorage.getItem("jwt")}))
    }, [dispatch, coinId, activeLabel])

    const series = [{
        data:coin.marketChart.data
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
        console.log(activeLabel.label)
    }

    return (
        <div>
            <div className="space-x-4 p-2 mt-1">
                {timeSeries.map(((item) =>
                    <Button key={item.label}
                            onClick={() => handleActiveLabel(item)}
                            className={activeLabel.label === item.label
                                ? "text-black pointer-events-none bg-slate-200"
                                : "text-white border cursor-pointer hover:bg-white hover:text-black"}>
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