import React from 'react';
import {Pie, Doughnut} from 'react-chartjs-2';
import {Row, Col, Typography, Statistic, Divider, Space, Button} from 'antd';
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
            '#ca2302',
            '#0163c0',
            ],
            hoverBackgroundColor: [
            '#ca2302',
            '#0163c0',
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
            '#ca2302',
            '#0163c0',
            ],
            hoverBackgroundColor: [
            '#ca2302',
            '#0163c0',
            ]
        }]        
    }
]

export default function QueryChart(props){
    return(
        <>
        <Row  gutter={32} style={{}}>
            <Col>
            <Title level={3}>Applied Constraints</Title>
            </Col>
        </Row>

        <div style={{textAlign:'center', marginTop:32}}>
        <Row  gutter={32} style={{}}>
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
            <Row style={{marginTop:16}}>
                <Col span={24}>
                <Divider/>
                </Col>
            </Row>
            <Row  style={{marginTop:16}}>
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