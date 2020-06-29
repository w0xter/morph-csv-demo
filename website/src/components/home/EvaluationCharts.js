import React from 'react';
import {Bar} from 'react-chartjs-2';
import {Row, Col} from 'antd';

const evaluation = {
    gtfs:{
        load:{
            naive:[1.21,1.21,1.21,1.21,1.21,1.21,1.21,1.21,1.21,1.21,1.21,1.21,1.21,1.21,1.21,1.21,1.21,1.21],
            mcsv:[2.004, 1.709, 1.68, 1.765, 1.805, 1.739, 1.972, 1.965, 2.306, 1.733, 1.799, 1.906, 1.711, 1.878, 1.744, 1.845, 1.747, 1.829]
        }
    }
} 
export default function EvaluationCharts(props){
    return(
        <div>
            <Row>
                {
                props.charts.map((chart) => {
                    const data = {
                        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
                        datasets: [
                          {
                            label: 'My First dataset',
                            backgroundColor: 'rgba(255,99,132,0.2)',
                            borderColor: 'rgba(255,99,132,1)',
                            borderWidth: 1,
                            hoverBackgroundColor: 'rgba(255,99,132,0.4)',
                            hoverBorderColor: 'rgba(255,99,132,1)',
                            data: [65, 59, 80, 81, 56, 55, 40]
                          }
                        ]
                      }; 
                return(
                    <Col xs={24} md={12} lg={6}>
                        <Bar
                            data={data} 
                        />
                    </Col>
                )
            })
                }
                
            </Row>
        </div>
    )

}