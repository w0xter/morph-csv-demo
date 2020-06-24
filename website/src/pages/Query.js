import React from 'react'
import Layout from '../components/general/Layout'
import {Row, Col, Typography,Table, Divider, Button, Descriptions, Space, Tabs} from 'antd'
import QueryChart from '../components/query/QueryCharts'
import SyntaxHighlighter from 'react-syntax-highlighter';
import { docco } from 'react-syntax-highlighter/dist/esm/styles/hljs';

const {TabPane} = Tabs;
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
const csvw = `
{
  "@context": [
    "http://www.w3.org/ns/csvw"
  ],
  "tables": [
    {
      "url": "/data/SHAPES.csv",
      "dialect": {
        "header": false
      },
      "tableSchema": {
        "primaryKey": "shape_pt_sequence,shape_id",
        "columns": [
          {
            "datatype": "string",
            "titles": "shape_id"
          },
          {
            "datatype": "decimal",
            "titles": "shape_pt_lat"
          },
          {
            "datatype": "decimal",
            "titles": "shape_pt_lon"
          },
          {
            "datatype": "integer",
            "titles": "shape_pt_sequence"
          }
        ],
        "rowTitles": [
          "shape_id",
          "shape_pt_lat",
          "shape_pt_lon",
          "shape_pt_sequence",
          "shape_dist"
        ],
        "foreignKeys": []
      },
      "filteredRowTitles": [
        "shape_id",
        "shape_pt_lat",
        "shape_pt_lon",
        "shape_pt_sequence"
      ]
    }
  ]
}
`
const rml = `
@prefix rr: <http://www.w3.org/ns/r2rml#>.
@prefix rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#>.
@prefix rdfs: <http://www.w3.org/2000/01/rdf-schema#>.
@prefix fnml: <http://semweb.mmlab.be/ns/fnml#>.
@prefix fno: <https://w3id.org/function/ontology#>.
@prefix d2rq: <http://www.wiwiss.fu-berlin.de/suhl/bizer/D2RQ/0.1#>.
@prefix : <http://mapping.example.com/>.
@prefix dc: <http://purl.org/dc/elements/1.1/>.
@prefix dct: <http://purl.org/dc/terms/>.
@prefix foaf: <http://xmlns.com/foaf/0.1/>.
@prefix geo: <http://www.w3.org/2003/01/geo/wgs84_pos#>.
@prefix gtfs: <http://vocab.gtfs.org/terms#>.
@prefix ql: <http://semweb.mmlab.be/ns/ql#>.
@prefix rev: <http://purl.org/stuff/rev#>.
@prefix rml: <http://semweb.mmlab.be/ns/rml#>.
@prefix schema: <http://schema.org/>.
@prefix xsd: <http://www.w3.org/2001/XMLSchema#>.

:map_agency_0 rr:logicalTable :source_0.
:source_0 a rr:LogicalTable;
    rr:tableName "AGENCY".
:map_agency_0 a rr:TriplesMap;
    rdfs:label "agency".
:s_0 a rr:SubjectMap.
:map_agency_0 rr:subjectMap :s_0.
:s_0 rr:template "http://transport.linkeddata.es/madrid/agency/{agency_id}";
    rr:class gtfs:Agency.
:pom_0 a rr:PredicateObjectMap.
:map_agency_0 rr:predicateObjectMap :pom_0.
:pm_0 a rr:PredicateMap.
:pom_0 rr:predicateMap :pm_0.
:pm_0 rr:constant foaf:page.
:pom_0 rr:objectMap :om_0.
:om_0 a rr:ObjectMap;
    rr:column "agency_url";
    rr:termType rr:IRI.
:pom_1 a rr:PredicateObjectMap.
:map_agency_0 rr:predicateObjectMap :pom_1.
:pm_1 a rr:PredicateMap.
:pom_1 rr:predicateMap :pm_1.
:pm_1 rr:constant foaf:name.
:pom_1 rr:objectMap :om_1.
:om_1 a rr:ObjectMap;
    rr:column "agency_name";
    rr:termType rr:Literal.
:pom_2 a rr:PredicateObjectMap.
:map_agency_0 rr:predicateObjectMap :pom_2.
:pm_2 a rr:PredicateMap.
:pom_2 rr:predicateMap :pm_2.
:pm_2 rr:constant foaf:phone.
:pom_2 rr:objectMap :om_2.
:om_2 a rr:ObjectMap;
    rr:column "agency_phone";
    rr:termType rr:Literal.
:map_routes_0 rr:logicalTable :source_1.
:source_1 a rr:LogicalTable;
    rr:tableName "ROUTES".
:map_routes_0 a rr:TriplesMap;
    rdfs:label "routes".
:s_1 a rr:SubjectMap.
:map_routes_0 rr:subjectMap :s_1.
:s_1 rr:template "http://transport.linkeddata.es/madrid/metro/routes/{route_id}";
    rr:class gtfs:Route.
:pom_3 a rr:PredicateObjectMap.
:map_routes_0 rr:predicateObjectMap :pom_3.
:pm_3 a rr:PredicateMap.
:pom_3 rr:predicateMap :pm_3.
:pm_3 rr:constant gtfs:shortName.
:pom_3 rr:objectMap :om_3.
:om_3 a rr:ObjectMap;
    rr:column "route_short_name";
    rr:termType rr:Literal.
:pom_4 a rr:PredicateObjectMap.
:map_routes_0 rr:predicateObjectMap :pom_4.
:pm_4 a rr:PredicateMap.
:pom_4 rr:predicateMap :pm_4.
:pm_4 rr:constant gtfs:longName.
:pom_4 rr:objectMap :om_4.
:om_4 a rr:ObjectMap;
    rr:column "route_long_name";
    rr:termType rr:Literal.
:pom_5 a rr:PredicateObjectMap.
:map_routes_0 rr:predicateObjectMap :pom_5.
:pm_5 a rr:PredicateMap.
:pom_5 rr:predicateMap :pm_5.
:pm_5 rr:constant dct:description.
:pom_5 rr:objectMap :om_5.
:om_5 a rr:ObjectMap;
    rr:column "route_desc";
    rr:termType rr:Literal.
:pom_6 a rr:PredicateObjectMap.
:map_routes_0 rr:predicateObjectMap :pom_6.
:pm_6 a rr:PredicateMap.
:pom_6 rr:predicateMap :pm_6.
:pm_6 rr:constant gtfs:agency.
:pom_6 rr:objectMap :om_6.
:om_6 a rr:ObjectMap;
    rr:parentTriplesMap :map_agency_0;
    rr:joinCondition :jc_0.
:jc_0 rr:child "agency_id";
    rr:parent "agency_id".
`
const yarrrml = `
mappings:
  agency:
    po:
    - [http://www.w3.org/1999/02/22-rdf-syntax-ns#type, "http://vocab.gtfs.org/terms#Agency"]
    - [http://xmlns.com/foaf/0.1/page, $(agency_url)~iri]
    - [http://xmlns.com/foaf/0.1/name, $(agency_name)]
    - [http://xmlns.com/foaf/0.1/phone, $(agency_phone)]
    s: http://transport.linkeddata.es/madrid/agency/$(agency_id)
    sources:
    - {table: AGENCY}
  routes:
    po:
    - [http://www.w3.org/1999/02/22-rdf-syntax-ns#type, "http://vocab.gtfs.org/terms#Route"]
    - [http://vocab.gtfs.org/terms#shortName, $(route_short_name)]
    - [http://vocab.gtfs.org/terms#longName, $(route_long_name)]
    - [http://purl.org/dc/terms/description, $(route_desc)]
    - o:
      - condition:
          function: equal
          parameters:
          - [str1, $(agency_id)]
          - [str2, $(agency_id)]
        mapping: agency
      p: http://vocab.gtfs.org/terms#agency
    s: http://transport.linkeddata.es/madrid/metro/routes/$(route_id)
    sources:
    - {table: ROUTES}
prefixes: {dc: http://purl.org/dc/elements/1.1/, dct: http://purl.org/dc/terms/,
  foaf: http://xmlns.com/foaf/0.1/, geo: http://www.w3.org/2003/01/geo/wgs84_pos#,
  gtfs: http://vocab.gtfs.org/terms#, ql: http://semweb.mmlab.be/ns/ql#, rdf: http://www.w3.org/1999/02/22-rdf-syntax-ns#,
  rdfs: http://www.w3.org/2000/01/rdf-schema#, rev: http://purl.org/stuff/rev#,
  rml: http://semweb.mmlab.be/ns/rml#, rr: http://www.w3.org/ns/r2rml#, schema: http://schema.org/,
  xsd: http://www.w3.org/2001/XMLSchema#}

`



const schema = `
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
    route_id VARCHAR,SPARQL Result
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
    title: 'route',
    dataIndex: 'route',
    key: 'route',
  },
  {
    title: 'routeShortName',
    dataIndex: 'routeShortName',
    key: 'routeShortName',
  },
  {
    title: 'routeLongName',
    dataIndex: 'routeLongName',
    key: 'routeLongName',
  },
  {
    title: 'routeDescription',
    dataIndex: 'routeDescription',
    key: 'routeDescription',
  },
  {
    title: 'agency',
    dataIndex: 'agency',
    key: 'agency',
  },
  {
    title: 'agencyPage',
    dataIndex: 'agencyPage',
    key: 'agencyPage',
  },
  {
    title: 'agencyName',
    dataIndex: 'agencyName',
    key: 'agencyName',
  },
  {
    title: 'agencyPhone',
    dataIndex: 'agencyPhone',
    key: 'agencyPhone',
  },
];

const {Title, Paragraph} = Typography;
export default function Query(props){
    return(
        <Layout>
          <Row>
            <Col span={12}>
            <Title level={3}>Query Title</Title>
                  <Paragraph style={{textAlign:'justify'}}>
                 Directamente metemos aquí la descripción de la query , massa et pulvinar ultricies, tellus lorem sagittis ante, vitae congue orci purus quis enim. Maecenas venenatis elit lobortis eleifend blandit. Donec
                  </Paragraph>
            </Col>
          </Row>
            <Row gutter={16} justify="center">
                <Col xs={24} md={12}>
                    <SyntaxHighlighter language="ttl" style={docco}>
                    {query}
                    </SyntaxHighlighter>
                </Col>
                <Col xs={24} md={12}>
                  <QueryChart></QueryChart>
                </Col>
            </Row>
            <Divider/>
            <Title level={4}>SPARQL Result</Title>
              <Table  dataSource={dataSource} columns={columns} />

              <Title level={4}>Morph-CSV Output</Title>
            <Tabs>
              <TabPane tab="SQL Schema" key="1">
                  <SyntaxHighlighter language="sql" style={docco}>
                  {schema}
                  </SyntaxHighlighter>
              </TabPane>
              <TabPane tab="Simplified RML Mapping" key="2">
                  <SyntaxHighlighter language="ttl" style={docco}>
                  {rml}
                  </SyntaxHighlighter>
              </TabPane>              
              <TabPane tab="Simplified YARRRML Mapping" key="3">
                  <SyntaxHighlighter language="yaml" style={docco}>
                  {yarrrml}
                  </SyntaxHighlighter>
              </TabPane>
              <TabPane tab="Simplified CSVW" key="4">
                  <SyntaxHighlighter language="json" style={docco}>
                  {csvw}
                  </SyntaxHighlighter>
              </TabPane>
            </Tabs>
            <Divider></Divider>
            <Tabs>
              <TabPane key="csv-1" tab="FileName.csv">

              </TabPane>
            </Tabs>

        </Layout>
    )
} 