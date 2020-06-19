import React from 'react'
import Layout from '../components/general/Layout'
import {Row, Col, Typography,Table, Divider, Button} from 'antd'
import SyntaxHighlighter from 'react-syntax-highlighter';
import { docco } from 'react-syntax-highlighter/dist/esm/styles/hljs';
const query = `
PREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#>
PREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>
PREFIX foaf: <http://xmlns.com/foaf/0.1/>
PREFIX gtfs: <http://vocab.gtfs.org/terms#>
PREFIX geo: <http://www.w3.org/2003/01/geo/wgs84_pos#>
PREFIX dct: <http://purl.org/dc/terms/>

SELECT * WHERE {
	?route a gtfs:Route .
	OPTIONAL { ?route gtfs:shortName ?routeShortName . }
	OPTIONAL { ?route gtfs:longName ?routeLongName . } 
	OPTIONAL { ?route dct:description ?routeDescription . } 
	?route gtfs:agency ?agency .

	?agency a gtfs:Agency .
	?agency foaf:page ?agencyPage .
	?agency foaf:name ?agencyName .
	OPTIONAL { ?agency foaf:phone ?agencyPhone . }
}
`
const schema = `                    background:

DROP TABLE IF EXISTS "agency" CASCADE;
CREATE TABLE agency(
    agency_id VARCHAR,
    agency_name VARCHAR,
    agency_url VARCHAR,
    agency_phone VARCHAR,
    PRIMARY KEY (agency_id)
);
DROP TABLE IF EXISTS "routes" CASCADE;
CREATE TABLE routes(
    route_id VARCHAR,
    agency_id VARCHAR,
    route_short_name VARCHAR,
    route_long_name VARCHAR,
    route_desc VARCHAR,
    PRIMARY KEY (route_id)
);
`
const dataSource = [
  {
    key: '1',
    name: 'Mike',
    age: 32,
    address: '10 Downing Street',
  },
  {
    key: '2',
    name: 'John',
    age: 42,
    address: '10 Downing Street',
  },
];

const columns = [
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
  },
  {
    title: 'Age',
    dataIndex: 'age',
    key: 'age',
  },
  {
    title: 'Address',
    dataIndex: 'address',
    key: 'address',
  },
];

const {Title, Paragraph} = Typography;
export default function Query(props){
    return(
        <Layout>
          <Row>
            <Col>
            <Title level={3}>Query Title</Title>
                  <Paragraph style={{textAlign:'justify'}}>
                 Directamente metemos aquí la descripción de la query , massa et pulvinar ultricies, tellus lorem sagittis ante, vitae congue orci purus quis enim. Maecenas venenatis elit lobortis eleifend blandit. Donec
                  </Paragraph>
            </Col>
          </Row>
            <Row gutter={16}>
                <Col xs={24} md={12}>
                    <Title level={3}>Sparql Query</Title>
                    <SyntaxHighlighter language="sparql" style={docco}>
                    {query}
                    </SyntaxHighlighter>
                </Col>
                <Col xs={24} md={12}>
                    <Title level={3}>SQL Schema</Title>
                    <SyntaxHighlighter language="sql" style={docco}>
                    {schema}
                    </SyntaxHighlighter>
                </Col>
            </Row>
            <Row>
              <Col>
                <Button type="primary">Download the Morph-CSV output</Button>
              </Col>
            </Row>
            <Divider/>
            <Title level={3}>Sparql Result</Title>
              <Table  dataSource={dataSource} columns={columns} />;
        </Layout>
    )
} 

