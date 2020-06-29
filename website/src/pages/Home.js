import React from 'react'
import Layout from '../components/general/Layout'
import {Row,Col,Button,Card,Divider, Typography} from 'antd'
import EvaluationCharts from '../components/home/EvaluationCharts'
const {Title, Text, Paragraph} = Typography

export default function Home(props){
    return(
        <Layout>
           <Row gutter={16} align="top">
                <Col xs={24} lg={12}>
                    <Title>Morph-CSV</Title>
                    <Paragraph style={{textAlign:'justify'}}>
                        Morph-CSV is an open source tool for querying tabular data sources using SPARQL. 
                        It exploits the information from the query, RML+FnO mappings and CSVW metadata to enhance the performance and completeness of traditional OBDA systems (SPARQL-to-SQL translators). 
                        At this moment can be embedded in the top of any R2RML-compliant system at it has been tested over different benchmarks such as BSBM, Madrid-GTFS-Bench but also over real-use
                        cases such as querying the original data sources of the Bio2RDF project using different SPARQL-to-SQL engines such as Morph-RDB or Ontop.                        
                    </Paragraph>
                </Col>
                <Col xs={24} lg={12}>
                    <img className="responsiveImg" src="https://morph.oeg.fi.upm.es/img/morph-csv.png" alt=""/>
                </Col>
            </Row>
            <Divider />                 

            <Row>
                <Col xs={24} lg={12}>
                    <Title level={2}>
                        Evaluation
                    </Title>
                    <Paragraph style={{textAlign:'justify'}}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas a justo vel lacus tristique euismod a vitae risus. Nulla at erat cursus, rhoncus odio nec, fermentum ante. Etiam ut mollis magna. Vivamus scelerisque ut felis quis feugiat. Vivamus ultricies quis orci non auctor. Praesent ornare ex et orci commodo, imperdiet dapibus sem ultricies. Morbi vel hendrerit ligula.
                    Cras id nunc ultrices, ultricies mauris sit amet, molestie enim. Quisque semper vel sapien non ornare. Nullam nulla nisl, ultrices eu massa ut, pretium condimentum nibh. Aenean eu purus vel ipsum suscipit molestie. Etiam in tempor ligula. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Aenean at sapien ut mauris egestas mattis eget non leo. Pellentesque ut feugiat turpis. Etiam accumsan nisl ipsum, at accumsan libero condimentum et. 
                    </Paragraph>
                </Col>
            </Row>
            <Row style={{marginTop:16}}>
                <Col>
                    <Title level={3}>GTFS</Title>
                </Col>
            </Row>
            <Row >
                <Col>
                    <Title level={4}><a href="#">Load Time</a></Title>
                </Col>
            </Row>
            <EvaluationCharts charts={[1,2,3,4]}></EvaluationCharts>
        </Layout>
    )
}