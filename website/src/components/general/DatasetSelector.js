import React from 'react'
import {Row, Col, Menu} from 'antd'
import {MailOutlined,AppstoreOutlined,SettingOutlined} from '@ant-design/icons'
import datasets from '../../data/data'
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
            style={{ height: '100%', borderRight: 0 }}
          >
              {Object.keys(datasets).map((dataset, idx) => {
                  return(
                      <SubMenu
                        key={"sub" + idx}
                        title={dataset}
                      >
                          {datasets[dataset].map((query) => {
                              return(
                                <Menu.Item key={dataset + query}>
                                        {query}     
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