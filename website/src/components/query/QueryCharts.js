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
            data: [74, 9],
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
            'Sources',
            'Selected Sources',
      ],
        datasets: [{
            data: [10, 2],
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
    let foreignKeys = 0;
    let primaryKeys = 0;
    let subtitutions = 0;
    let dataTypes = [];
    let selectedCols = 0;
    let selectedSources = 0;

    // props.csvw.tables.map((table) => {

    // });
    return(
        <>
        <Row  gutter={32} style={{}}>
            <Col>
            <Title level={3}>Applied Constraints</Title>
            </Col>
        </Row>

        <div style={{textAlign:'center', marginTop:32}}>
        <Row  gutter={32} justify="center" style={{}}>
                <Col>
                <Statistic title={<Title level={4} type="">Primary Keys</Title>} value={2} />
                </Col>
                <Col>
                <Statistic title={<Title level={4} type="">Foreign Keys</Title>} value={foreignKeys} />
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
            <Row  justify="center" style={{marginTop:16}}>
                <Col>
                <Doughnut data={data[1]}/>
                <Title level={4} type="">Selected Sources</Title>
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