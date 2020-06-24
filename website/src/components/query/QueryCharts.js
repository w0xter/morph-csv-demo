import React from 'react';
import {Pie, Doughnut} from 'react-chartjs-2';
import {Row, Col, Typography, Statistic, Divider, Space} from 'antd';

const {Title} = Typography;
const data = [
    {
        labels: [
            'Total Columns',
            'Selected Columns',
      ],
        datasets: [{
            data: [74, 5],
            backgroundColor: [
            '#d00000',
            '#1C7C54',
            ],
            hoverBackgroundColor: [
            '#d00000',
            '#1C7C54',
            ]
        }]
    },
    {
        labels: [
            'Dataset',
            'Selected Files',
      ],
        datasets: [{
            data: [10, 1],
            backgroundColor: [
            '#d00000',
            '#1C7C54',
            ],
            hoverBackgroundColor: [
            '#d00000',
            '#1C7C54',
            ]
        }]        
    }
]

export default function QueryChart(props){
    return(
        <>
        <Title level={3}></Title>
        <div style={{marginTop:32}}>
        <Row justify="center" gutter={32} style={{textAlign:'center'}}>
                <Col>
                <Statistic title={<Title level={4} type="">Primary Keys</Title>} value={2} />
                </Col>
                <Col>
                <Statistic title={<Title level={4} type="">Foreign Keys</Title>} value={1} />
                </Col>
                <Col>
                <Statistic title={<Title level={4} type="">Substitutions</Title>} value={7} />
                </Col>
                <Col>
                <Statistic title={<Title level={4} type="">Datatypes</Title>} value="-" />
                </Col>            
            </Row>
            <Row justify="center" style={{textAlign:'center', marginTop:48}}>
                <Col>
                <Doughnut data={data[1]}/>
                <Title level={4} type="">Selected Files</Title>
                </Col>                  
                <Col>
                <Pie data={data[0]}/>
                <Title level={4} type="">Selected Columns</Title>
                </Col>              
            </Row>
        </div>
    </>
    )
}