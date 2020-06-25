import React from 'react'
import Layout from '../components/general/Layout'
import {Row, Col, Typography,Table, Divider, Button, Descriptions, Space, Tabs} from 'antd'
import QueryChart from '../components/query/QueryCharts'
import SyntaxHighlighter from 'react-syntax-highlighter';
import { docco } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import {CloudDownloadOutlined} from '@ant-design/icons'

const {TabPane} = Tabs;
const query = 
`PREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#>
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
const outputCsv = [
  { title:'SHAPE.csv',
  columns:[
    {
      title: 'shape_id',
      dataIndex: 'shape_id',
      ellipsis:true,
      key: 'shape_id',
    },
    {
      title: 'shape_pt_lat',
      dataIndex: 'shape_pt_lat',
      ellipsis:true,
      key: 'shape_pt_lat',
    },
    {
      title: 'shape_pt_lon',
      dataIndex: 'shape_pt_lon',
      ellipsis:true,
      key: 'shape_pt_lon',
    },
    {
      title: 'shape_pt_sequence',
      dataIndex: 'shape_pt_sequence',
      ellipsis:true,
      key: 'shape_pt_sequence',
    },
    {
      title: 'shape_dist',
      dataIndex: 'shape_dist',
      ellipsis:true,
      key: 'shape_dist',
    },
  ],
    data:[
      {
        "shape_id": "4__R____1__IT_1",
        "shape_pt_lat": 40.4178246350574,
        "shape_pt_lon": -3.70957559133661,
        "shape_pt_sequence": 1000001,
        "shape_dist": 0
      },
      {
        "shape_id": "4__R____1__IT_1",
        "shape_pt_lat": 40.4178289192889,
        "shape_pt_lon": -3.70965889246896,
        "shape_pt_sequence": 1000002,
        "shape_dist": 0.007083329033
      },
      {
        "shape_id": "4__R____1__IT_1",
        "shape_pt_lat": 40.4178410879274,
        "shape_pt_lon": -3.7098932285287,
        "shape_pt_sequence": 1000003,
        "shape_dist": 0.034093781797
      },
      {
        "shape_id": "4__R____1__IT_1",
        "shape_pt_lat": 40.4178540101997,
        "shape_pt_lon": -3.71013664987641,
        "shape_pt_sequence": 1000004,
        "shape_dist": 0.081806080665
      },
      {
        "shape_id": "4__R____1__IT_1",
        "shape_pt_lat": 40.4178599957182,
        "shape_pt_lon": -3.710247394125,
        "shape_pt_sequence": 1000005,
        "shape_dist": 0.138937485223
      },
      {
        "shape_id": "4__R____1__IT_1",
        "shape_pt_lat": 40.4178606045176,
        "shape_pt_lon": -3.71026590634875,
        "shape_pt_sequence": 1000006,
        "shape_dist": 0.197640936867
      },
      {
        "shape_id": "4__R____1__IT_1",
        "shape_pt_lat": 40.4178612992407,
        "shape_pt_lon": -3.71028465639811,
        "shape_pt_sequence": 1000007,
        "shape_dist": 0.257937027836
      },
      {
        "shape_id": "4__R____1__IT_1",
        "shape_pt_lat": 40.4178620865783,
        "shape_pt_lon": -3.71030328837167,
        "shape_pt_sequence": 1000008,
        "shape_dist": 0.319816286519
      },
      {
        "shape_id": "4__R____1__IT_1",
        "shape_pt_lat": 40.4178630526338,
        "shape_pt_lon": -3.71032215796822,
        "shape_pt_sequence": 1000009,
        "shape_dist": 0.383300046373
      },
      {
        "shape_id": "4__R____1__IT_1",
        "shape_pt_lat": 40.4178641100569,
        "shape_pt_lon": -3.7103406725544,
        "shape_pt_sequence": 1000010,
        "shape_dist": 0.448358979882
      },
      {
        "shape_id": "4__R____1__IT_1",
        "shape_pt_lat": 40.4178651642124,
        "shape_pt_lon": -3.71035942520716,
        "shape_pt_sequence": 1000011,
        "shape_dist": 0.515013202719
      },
      {
        "shape_id": "4__R____1__IT_1",
        "shape_pt_lat": 40.4178664019608,
        "shape_pt_lon": -3.71037806192005,
        "shape_pt_sequence": 1000012,
        "shape_dist": 0.583254539292
      },
      {
        "shape_id": "4__R____1__IT_1",
        "shape_pt_lat": 40.4178677288899,
        "shape_pt_lon": -3.71039669957163,
        "shape_pt_sequence": 1000013,
        "shape_dist": 0.653083956467
      },
      {
        "shape_id": "4__R____1__IT_1",
        "shape_pt_lat": 40.4178691459006,
        "shape_pt_lon": -3.71041533817147,
        "shape_pt_sequence": 1000014,
        "shape_dist": 0.724502492895
      },
      {
        "shape_id": "4__R____1__IT_1",
        "shape_pt_lat": 40.4178723420455,
        "shape_pt_lon": -3.71045262036139,
        "shape_pt_sequence": 1000015,
        "shape_dist": 0.799103918584
      },
      {
        "shape_id": "4__R____1__IT_1",
        "shape_pt_lat": 40.4178740293008,
        "shape_pt_lon": -3.71047126180644,
        "shape_pt_sequence": 1000016,
        "shape_dist": 0.875297952197
      },
      {
        "shape_id": "4__R____1__IT_1",
        "shape_pt_lat": 40.4178758064756,
        "shape_pt_lon": -3.71048978396942,
        "shape_pt_sequence": 1000017,
        "shape_dist": 0.953075756643
      },
      {
        "shape_id": "4__R____1__IT_1",
        "shape_pt_lat": 40.4178776756957,
        "shape_pt_lon": -3.71050842733061,
        "shape_pt_sequence": 1000018,
        "shape_dist": 1.032448831611
      },
      {
        "shape_id": "4__R____1__IT_1",
        "shape_pt_lat": 40.4178817723033,
        "shape_pt_lon": -3.71054548325983,
        "shape_pt_sequence": 1000019,
        "shape_dist": 1.114998481466
      },
      {
        "shape_id": "4__R____1__IT_1",
        "shape_pt_lat": 40.4178839991501,
        "shape_pt_lon": -3.71056413038668,
        "shape_pt_sequence": 1000020,
        "shape_dist": 1.199149364598
      }
    ]
  }
]
const dataSource = [
  {
    "route": "<http://transport.linkeddata.es/madrid/metro/routes/4__10___>",
    "routeShortName": 10,
    key:"1",
    "routeLongName": "Hospital del Norte-Puerta del Sur",
    "routeDescription": "",
    "agency": "<http://transport.linkeddata.es/madrid/agency/CRTM>",
    "agencyPage": "<http://www.crtm.es>",
    "agencyName": "Consorcio Regional de Transportes de Madrid",
    "agencyPhone": ""
  },
  {
    "route": "<http://transport.linkeddata.es/madrid/metro/routes/4__11___>",
    "routeShortName": 11,
    key:"2",
    "routeLongName": "Plaza Elíptica-La Fortuna",
    "routeDescription": "",
    "agency": "<http://transport.linkeddata.es/madrid/agency/CRTM>",
    "agencyPage": "<http://www.crtm.es>",
    "agencyName": "Consorcio Regional de Transportes de Madrid",
    "agencyPhone": ""
  },
  {
    "route": "<http://transport.linkeddata.es/madrid/metro/routes/4__12___>",
    "routeShortName": 12,
    key:"3",
    "routeLongName": "MetroSur",
    "routeDescription": "",
    "agency": "<http://transport.linkeddata.es/madrid/agency/CRTM>",
    "agencyPage": "<http://www.crtm.es>",
    "agencyName": "Consorcio Regional de Transportes de Madrid",
    "agencyPhone": ""
  },
  {
    "route": "<http://transport.linkeddata.es/madrid/metro/routes/4__1___>",
    "routeShortName": 1,
    key:"4",
    "routeLongName": "Pinar de Chamartín-Valdecarros",
    "routeDescription": "",
    "agency": "<http://transport.linkeddata.es/madrid/agency/CRTM>",
    "agencyPage": "<http://www.crtm.es>",
    "agencyName": "Consorcio Regional de Transportes de Madrid",
    "agencyPhone": ""
  },
  {
    "route": "<http://transport.linkeddata.es/madrid/metro/routes/4__2___>",
    "routeShortName": 2,
    key:"5",
    "routeLongName": "Las Rosas-Cuatro Caminos",
    "routeDescription": "",
    "agency": "<http://transport.linkeddata.es/madrid/agency/CRTM>",
    "agencyPage": "<http://www.crtm.es>",
    "agencyName": "Consorcio Regional de Transportes de Madrid",
    "agencyPhone": ""
  },
  {
    "route": "<http://transport.linkeddata.es/madrid/metro/routes/4__3___>",
    "routeShortName": 3,
    key:"6",
    "routeLongName": "Villaverde Alto-Moncloa",
    "routeDescription": "",
    "agency": "<http://transport.linkeddata.es/madrid/agency/CRTM>",
    "agencyPage": "<http://www.crtm.es>",
    "agencyName": "Consorcio Regional de Transportes de Madrid",
    "agencyPhone": ""
  },
  {
    "route": "<http://transport.linkeddata.es/madrid/metro/routes/4__4___>",
    "routeShortName": 4,
    key:"7",
    "routeLongName": "Pinar de Chamartín-Argüelles",
    "routeDescription": "",
    "agency": "<http://transport.linkeddata.es/madrid/agency/CRTM>",
    "agencyPage": "<http://www.crtm.es>",
    "agencyName": "Consorcio Regional de Transportes de Madrid",
    "agencyPhone": ""
  },
  {
    "route": "<http://transport.linkeddata.es/madrid/metro/routes/4__5___>",
    "routeShortName": 5,
    key:"8",
    "routeLongName": "Alameda de Osuna-Casa de Campo",
    "routeDescription": "",
    "agency": "<http://transport.linkeddata.es/madrid/agency/CRTM>",
    "agencyPage": "<http://www.crtm.es>",
    "agencyName": "Consorcio Regional de Transportes de Madrid",
    "agencyPhone": ""
  },
  {
    "route": "<http://transport.linkeddata.es/madrid/metro/routes/4__6___>",
    "routeShortName": 6,
    key:"9",
    "routeLongName": "Circular",
    "routeDescription": "",
    "agency": "<http://transport.linkeddata.es/madrid/agency/CRTM>",
    "agencyPage": "<http://www.crtm.es>",
    "agencyName": "Consorcio Regional de Transportes de Madrid",
    "agencyPhone": ""
  },
  {
    "route": "<http://transport.linkeddata.es/madrid/metro/routes/4__7___>",
    "routeShortName": 7,
    key:"10",
    "routeLongName": "Hospital del Henares-Pitis",
    "routeDescription": "",
    "agency": "<http://transport.linkeddata.es/madrid/agency/CRTM>",
    "agencyPage": "<http://www.crtm.es>",
    "agencyName": "Consorcio Regional de Transportes de Madrid",
    "agencyPhone": ""
  },
  {
    "route": "<http://transport.linkeddata.es/madrid/metro/routes/4__8___>",
    "routeShortName": 8,
    key:"11",
    "routeLongName": "Nuevos Ministerios - Aeropuerto T4",
    "routeDescription": "",
    "agency": "<http://transport.linkeddata.es/madrid/agency/CRTM>",
    "agencyPage": "<http://www.crtm.es>",
    "agencyName": "Consorcio Regional de Transportes de Madrid",
    "agencyPhone": ""
  },
  {
    "route": "<http://transport.linkeddata.es/madrid/metro/routes/4__9___>",
    "routeShortName": 9,
    key:"12",
    "routeLongName": "Paco de Lucía-Arganda del Rey",
    "routeDescription": "",
    "agency": "<http://transport.linkeddata.es/madrid/agency/CRTM>",
    "agencyPage": "<http://www.crtm.es>",
    "agencyName": "Consorcio Regional de Transportes de Madrid",
    "agencyPhone": ""
  },
  {
    "route": "<http://transport.linkeddata.es/madrid/metro/routes/4__R___>",
    "routeShortName": "R",
    key:"13",
    "routeLongName": "Opera-Príncipe Pío",
    "routeDescription": "",
    "agency": "<http://transport.linkeddata.es/madrid/agency/CRTM>",
    "agencyPage": "<http://www.crtm.es>",
    "agencyName": "Consorcio Regional de Transportes de Madrid",
    "agencyPhone": ""
  }
];

const columns = [
  {
    title: 'route',
    dataIndex: 'route',
    ellipsis:true,
    key: 'route',
  },
  {
    title: 'routeShortName',
    dataIndex: 'routeShortName',
    ellipsis:true,
    key: 'routeShortName',
  },
  {
    title: 'routeLongName',
    dataIndex: 'routeLongName',
    ellipsis:true,
    key: 'routeLongName',
  },
  {
    title: 'routeDescription',
    dataIndex: 'routeDescription',
    ellipsis:true,
    key: 'routeDescription',
  },
  {
    title: 'agency',
    dataIndex: 'agency',
    ellipsis:true,
    key: 'agency',
  },
  {
    title: 'agencyPage',
    dataIndex: 'agencyPage',
    ellipsis:true,
    key: 'agencyPage',
  },
  {
    title: 'agencyName',
    dataIndex: 'agencyName',
    ellipsis:true,
    key: 'agencyName',
  },
  {
    title: 'agencyPhone',
    dataIndex: 'agencyPhone',
    ellipsis:true,
    key: 'agencyPhone',
  },
];

const {Title, Paragraph} = Typography;
export default function Query(props){
    return(
        <Layout>
          <Row style={{marginBottom:32}}>
            <Col  xs={24}>
            <Title level={2}>Query 4: Select all routes and the agency of each route.</Title>
            <div style={{marginTop:16}}>
                  <Button type="primary">Download the MORPH-CSV output <CloudDownloadOutlined size={100} /> </Button>
            </div>
            </Col>
          </Row>
            <Row gutter={32} justify="" align="top">
                <Col xs={24} md={12}>
                  <Title level={3}>SPARQL Query</Title>
                  <div style={{marginTop:32}}>
                  <SyntaxHighlighter language="ttl" style={docco}>
                    {query}
                    </SyntaxHighlighter>
                  </div>
                </Col>
                <Col xs={24} md={12}>
                  <QueryChart></QueryChart>
                </Col>
            </Row>
            <Divider/>
            <Title level={3}>SPARQL Result</Title>
              <Table bordered dataSource={dataSource} columns={columns} />
              <Title level={3}>Morph-CSV Output</Title>
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
            <Title level={3}>
              Processed CSVs
            </Title>
            <Tabs>
              {outputCsv.map((csv) => {
                return(
                  <TabPane key={csv.title} tab={csv.title}>
                    <Table dataSource={csv.data} columns={csv.columns}></Table>
                  </TabPane>
                )
              })}

            </Tabs>

        </Layout>
    )
} 