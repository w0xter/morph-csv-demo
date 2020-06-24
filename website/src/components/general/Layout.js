import React from 'react'
import {Row, Col, Layout, BackTop} from 'antd'
import DatasetSelector from './DatasetSelector'
import NavHeader from './NavHeader'
const { Header, Content, Sider} = Layout;
export default function cLayout(props){
    return(
        <Layout>
                <NavHeader></NavHeader>
            <Layout>
                <Sider width={200}>
                    <DatasetSelector></DatasetSelector>
                </Sider>
                <Layout>
                    <Content
                    style={{
                    padding: 24,
                    margin: 0,
                    minHeight: 280,
                    background:'#ffffff'
                    }}
                    >
                        <BackTop />
                        {props.children}
                    </Content>
                </Layout>
            </Layout>
        </Layout>
    )
}
/**
 *         <Row>
            <Col>
                <DatasetSelector></DatasetSelector>
            </Col>
            <Col
            >
                <Row justify="center">
                    <Col
                    xs={22}
                    sm={20}
                    md={18} >
                    {props.children}
                    </Col>
                </Row>
            </Col>
        </Row>
 */