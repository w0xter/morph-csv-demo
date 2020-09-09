import React from 'react'
import {Row, Col, Typography,Table, Divider, Button, Descriptions, Space, Tabs} from 'antd'
import SyntaxHighlighter from 'react-syntax-highlighter';
import { docco } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import {CloudDownloadOutlined} from '@ant-design/icons'
import axios from 'axios'
import Layout from '../components/general/Layout'
import QueryChart from '../components/query/QueryCharts'
import {data} from '../data/data'
import renderEmpty from 'antd/lib/config-provider/renderEmpty';
import { readString } from 'react-papaparse';



const {TabPane} = Tabs;
const {Title, Paragraph, Text} = Typography;



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
    }
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
  },
  {
    title:'ROUTES.csv',
    columns:[
      {
        title: 'route_id',
        dataIndex: 'route_id',
        ellipsis:true,
        key: 'route_id',
      },
      {
        title: 'agency_id',
        dataIndex: 'agency_id',
        ellipsis:true,
        key: 'agency_id',
      },
      {
        title: 'route_short_name',
        dataIndex: 'route_short_name',
        ellipsis:true,
        key: 'route_short_name',
      },
      {
        title: 'route_long_name',
        dataIndex: 'route_long_name',
        ellipsis:true,
        key: 'route_long_name',
      },
      {
        title: 'route_desc',
        dataIndex: 'route_desc',
        ellipsis:true,
        key: 'route_desc',
      }
    ],
    data:[
      {
        "route_id": "4__10___",
        "agency_id": "CRTM",
        "route_short_name": 10,
        "route_long_name": "Hospital del Norte-Puerta del Sur",
        "route_desc": ""
      },
      {
        "route_id": "4__11___",
        "agency_id": "CRTM",
        "route_short_name": 11,
        "route_long_name": "Plaza Elíptica-La Fortuna",
        "route_desc": ""
      },
      {
        "route_id": "4__12___",
        "agency_id": "CRTM",
        "route_short_name": 12,
        "route_long_name": "MetroSur",
        "route_desc": ""
      },
      {
        "route_id": "4__1___",
        "agency_id": "CRTM",
        "route_short_name": 1,
        "route_long_name": "Pinar de Chamartín-Valdecarros",
        "route_desc": ""
      },
      {
        "route_id": "4__2___",
        "agency_id": "CRTM",
        "route_short_name": 2,
        "route_long_name": "Las Rosas-Cuatro Caminos",
        "route_desc": ""
      },
      {
        "route_id": "4__3___",
        "agency_id": "CRTM",
        "route_short_name": 3,
        "route_long_name": "Villaverde Alto-Moncloa",
        "route_desc": ""
      },
      {
        "route_id": "4__4___",
        "agency_id": "CRTM",
        "route_short_name": 4,
        "route_long_name": "Pinar de Chamartín-Argüelles",
        "route_desc": ""
      },
      {
        "route_id": "4__5___",
        "agency_id": "CRTM",
        "route_short_name": 5,
        "route_long_name": "Alameda de Osuna-Casa de Campo",
        "route_desc": ""
      },
      {
        "route_id": "4__6___",
        "agency_id": "CRTM",
        "route_short_name": 6,
        "route_long_name": "Circular",
        "route_desc": ""
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
function fetchData(url){
  return new Promise((resolve, reject) => {
    console.log(url)
    axios.get(url).then((response) => {
      resolve(response.data);
    }).catch((err) => reject(err))

  })
}

export default class Query extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      dataset:'',
      queryIdx:'',
      query:'',
      dir:'',
      csvs:[],
      csvw:null,
      strCsvw:'',
      yarrrml:null,
      schema:null
    }
  }

  render(){
    return(
      <>
      {this.state.csvw !== null && this.state.yarrrml !== null && this.state.schema !== null ?(this.page()):null}
      </>
    )
  }
  page(){
    return(
      <Layout>
        <Row style={{marginBottom:32}}>
          <Col  xs={24}>
          <Title level={2}>{"Query" + this.state.queryIdx + ' :' +  this.state.query.title }</Title>
          </Col>
        </Row>
          <Row gutter={32} justify="" align="top">
              <Col xs={24} md={12}>
                <Title level={3}>SPARQL Query</Title>
                <div style={{marginTop:32}}>
                <SyntaxHighlighter language="ttl" style={docco}>
                  {this.state.query}
                  </SyntaxHighlighter>
                </div>
              </Col>
              <Col xs={24} md={12}>
                <QueryChart csvw={this.state.csvw} dataset={this.state.dataset}></QueryChart>
              </Col>
          </Row>
          <Divider/>
          <Title level={3}>SPARQL Result</Title>
          <Table bordered dataSource={dataSource} columns={columns} />
          <Row gutter={16}>
            <Col>
            <Title level={3}>Morph-CSV Output</Title>              
            </Col>
            <Col>
                <Button type="primary">Download <CloudDownloadOutlined size={100} /> </Button>
            </Col>
          </Row>
          <Tabs>
            <TabPane tab="SQL Schema" key="1">
                <SyntaxHighlighter language="sql" style={docco}>
                {this.state.schema.replace(/;/gi, ';\n')}
                </SyntaxHighlighter>
            </TabPane>             
            <TabPane tab="Simplified YARRRML Mapping" key="3">
                <Row>
                  <Col span={12}>
                  <Text>
                    <Text strong>YARRRML</Text> is a human readable text-based representation for declarative Linked Data generation rules.
                    It is a subset of YAML, a widely used data serialization language designed to be human-friendly.
                    It can already be used to represent R2RML and RML rules. You can learn more <a href="https://rml.io/yarrrml/">here</a>.
                  </Text>
                  </Col>
                </Row>
                <Row style={{marginTop:8, marginBottom:32}}>
                  <Col>
                  </Col>
                </Row>
                <SyntaxHighlighter language="yaml" style={docco}>
                {this.state.yarrrml}
                </SyntaxHighlighter>
            </TabPane>
            <TabPane tab="Simplified CSVW" key="4">
            <Row style={{marginTop:8, marginBottom:32}}>
                  <Col span={12}>
                  </Col>
            </Row>
                <SyntaxHighlighter language="json" style={docco}>
                {this.state.strCsvw.toString()}
                </SyntaxHighlighter>
            </TabPane>
          </Tabs>
          <Divider></Divider>
          {
            this.state.csvs.length !== 0 ? (
              <>
              <Title level={4}>
              Processed CSVs
            </Title>
            <Tabs>
              {this.state.csvs.map((csv) => {
                return(
                  <TabPane key={csv.title} tab={csv.title}>
                    <Table bordered dataSource={csv.data} columns={csv.columns}></Table>
                  </TabPane>
                )
              })}
  
            </Tabs>              
            </>
            ):null
          }
      </Layout>
   )    
  }

  async getData(){
    const dataset = this.props.match.params.dataset;
    const queryIdx = this.props.match.params.query;
    this.setState({queryIdx:queryIdx, dataset:dataset})
    const queryDir = data[dataset]['url'] + 'query' + queryIdx;
    const dir =  queryDir + '/query' + queryIdx + '.';
   try{
      const csvw = await fetchData(dir + 'csvw.min.json') 
      const strCsvw = JSON.stringify(csvw,null,"  ");
      const yarrrml = await fetchData(dir + 'mapping.yaml')
      const schema = await fetchData(dir + 'schema.sql')
      const query = await fetchData(dir + 'rq')
      const csvUrls = csvw['tables'].map(table =>  queryDir + '/results/' + table.url.split("/").pop().replace('.csv', '.json'))
      console.log("CSV URLS: ")
      console.log(csvUrls)
      await this.getCsvs(csvUrls)
      console.log("CSV:")
      console.log(this.state.csvs)
      this.setState({dataset:dataset, csvw:csvw,strCsvw:strCsvw, yarrrml:yarrrml,schema:schema, query:query})
   }catch(err){
     console.log(err)
   }
  } 
  async getCsvs(csvUrls){
    let CSVs = [];
    for(let i in csvUrls){
      let url = csvUrls[i]
      const title = url.split("/").pop().replace('.json', '.csv')
      console.log(url)
      let {data} = await fetchData(url);
      console.log(data[0])
      let columnNames = Object.keys(data[0]);
      let columns = []
      columnNames.map((name) => {
        let aux =       {
          title: name,
          dataIndex: name,
          ellipsis:true,
          key: name,
        }
        columns.push(aux)
    });
      CSVs.push({title:title,data:data, columns:columns});
    }
    console.log("SEGUNDO")
    this.setState({csvs:CSVs})
    console.log(this.state.csvs)
  }
  async componentDidMount(){
    await this.getData();  
  }
  // async componentDidUpdate(){
  //   if(this.state.idx != this.props.match.params.query || this.state.idx != this.props.match.params.dataset){
  //     await this.getData()
  //   }
  // }
} 