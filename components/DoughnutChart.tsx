"use client";
import React from 'react';
import { Chart as Chartjs } from 'chart.js/auto';
import { Doughnut } from 'react-chartjs-2';
Chartjs.register()

const DoughnutChart = ({ accounts }: DoughnutChartProps) => {
    const data={
        datasets: [{
            label: 'Banks',
            data: [1300, 2550, 2100],
            backgroundColor: [
                '#0747b6',
                '#2265d8',
                '#2f91fa',
            ],
        }],
        labels:["Bank1","Bank2","Bank3"]
    }

    return (
        <Doughnut
        options={
            {
                cutout:"60%",
                plugins:{
                    legend:{
                        display:false
                    }
                }
            }
        }
         data={data}/>
    );
};

export default DoughnutChart;
