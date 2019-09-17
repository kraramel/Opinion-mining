import { Layout, Menu } from 'antd';
import React from 'react';
import { Link } from 'react-router-dom';

const { Header, Content } = Layout;

const CustomLayout = (props) => {
    return (
        <Layout>
            <Header style={{ position: 'fixed', zIndex: 2, width: '100%' }}>
                <div className="logo" />
                <Menu
                    theme="dark"
                    mode="horizontal"
                    defaultSelectedKeys={['1']}
                    style={{ lineHeight: '64px' }}
                >
                    <Menu.Item key="1"><Link to="/">Accueil</Link></Menu.Item>
                    {/* <Menu.Item key="2"><Link to="/indicateurs">Indicateurs</Link></Menu.Item> */}
                    <Menu.Item key="3"><Link to="/contactclient">Contacter Client</Link></Menu.Item>
                    <Menu.Item key="4"><Link to="/us">Qui sommes-nous ?</Link></Menu.Item>
                </Menu>
            </Header>
            <Content style={{ padding: '0 50px', marginTop: 64 }}>
                
                <div style={{ background: '#fff', padding: 24, minHeight: 380 }}>
            
                    {props.children}

                </div>
            </Content>
            
        </Layout>
    );
}
  
  
export default CustomLayout;