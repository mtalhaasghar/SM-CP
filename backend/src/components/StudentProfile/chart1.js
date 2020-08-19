import React, { useState, useEffect } from 'react';
import {Line} from 'react-chartjs-2';

const Studentchart1 = () =>{
    const [chartData, setChartData] = useState({})
        const chart = () => {
            setChartData({
                labels: ['Match 1', 'Match 2', 'Match 3', 'Match 4', 'Match 5'],
                datasets:[
                    {
                        label: 'Scores',
                        data:[32, 45, 12, 76, 69],
                        backgroundColor: [
                            'rgba(75, 192, 192, 0.6)'
                        ],
                        borderWidth: 4
                    }
                ]
            })
        }
        useEffect(() => {
            chart()
        }, [])
        return (
            <div>
                <Line data={chartData}/>
            </div>
        )
    }
export default Studentchart1;