import React from 'react'
import {Row, Col, Menu} from 'antd'
import {MailOutlined,AppstoreOutlined,SettingOutlined} from '@ant-design/icons'
import datasets from '../../data/data'
import { Link } from 'react-router-dom';
const {SubMenu} = Menu;
export default class DatasetSelector extends React.Component{
    constructor(props) {
        super(props);
        this.state = {}
    }
    
    render(){
        return(
            <Menu
            onClick={this.handleClick}
            style={{ width: 256 }}
            defaultSelectedKeys={['1']}
            defaultOpenKeys={['sub0']}
            mode="inline"
            style={{ height: '100%', borderRight:'10 #000000'}}
          >
              {Object.keys(datasets).map((dataset, idx) => {
                  return(
                      <SubMenu
                        key={"sub" + idx}
                        title={dataset}
                      >
                          {datasets[dataset].map((query,jdx) => {
                              return(
                                <Menu.Item key={dataset + query}>
                                    <Link to={`/run/${dataset}/query${jdx}`}>
                                        {query}     
                                    </Link>
                                </Menu.Item>
                              )
                          })}

                      </SubMenu>
                  )
              })}
              </Menu>
        )
    }
}