import React, { useState, useEffect } from 'react';
import {Line} from 'react-chartjs-2';

const Studentchart2 = () =>{
    const [chartData, setChartData] = useState({})
        const chart = () => {
            setChartData({
                labels: ['Match 1', 'Match 2', 'Match 3', 'Match 4', 'Match 5'],
                datasets:[
                    {
                        label: 'Scores',
                        data:[10, 18, 20, 17, 21],
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
export default Studentchart2;