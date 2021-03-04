import React from 'react';
import {Menu,Button,Layout,Divider,Input,Typography,Avatar} from 'antd';
import {FileOutlined} from '@ant-design/icons'
import {IRouteComponentProps, Link} from 'umi';
import logoSrc from '@/assets/image/lantu_blue.png';

const {Title,Text} = Typography
const {Header,Sider,Footer} = Layout
const { Search } = Input

export default function LayoutPage(props:any) {
    return (
        <Layout>
            {/*侧面 */}
            <Sider width = {300} theme = 'light'>
                <Title style = {{margin: 20,color:'blue'}}>Lantu</Title>
                <Divider/>
                <Search  style = {{width: 200,margin: 20}} placeholder = "搜索关键字"/>
                <Menu mode = "inline">
                    <Menu.Item icon = {<FileOutlined/>}><Link to = '/'>首页</Link></Menu.Item>
                    <Menu.Item icon = {<FileOutlined/>}>登录/注册</Menu.Item>
                    <Menu.Item icon = {<FileOutlined/>}><Link to = '/func'>功能模块</Link></Menu.Item>
                    <Menu.Item icon = {<FileOutlined/>}>关于我们</Menu.Item>
                    <Menu.Item icon = {<FileOutlined/>}>社区</Menu.Item>
                </Menu>

            </Sider>
            <Layout>
                {/*头部 */}            
                <div style = {{display:'flex',flexDirection:'row',justifyContent:'space-between'}}>
                    <img width = {150} src = {logoSrc} style = {{margin : '25px'}}/>
                    <div style = {{display: 'flex',flexDirection:'row'}}>
                        <Menu mode = 'horizontal' style = {{fontSize:'20px',margin:'30px',paddingLeft:'20px',paddingRight:'20px'}}>
                            <Menu.Item><Link to = '/'>首页</Link></Menu.Item>
                            <Menu.Item><Link to = '/func'>功能模块</Link></Menu.Item>
                            <Menu.Item>关于我们</Menu.Item>
                            <Menu.Item>社区</Menu.Item>
                        </Menu>
                        <Button type = "primary" shape = "round" style = {{margin:'40px'}}>注册/登录</Button>
                    </div>
                </div>
                {/*内容*/}
                {props.children}
                <div style = {{display:'flex',flexDirection:'row',justifyContent:'space-around',height: 300}}>
                    <div style = {{display:'flex',justifyContent:'space-around',width: 250}}>
                        <div>
                            <Text strong>产品</Text>
                        </div>
                        <div>
                            <Text strong>企业介绍</Text>
                         </div>
                     </div>    
                    <div>
                        蓝图开放平台<br/>
                        <Avatar size = 'large' />
                        
                    </div>
                </div>
                {/*底部 */}
                <Footer style={{ textAlign: 'center' }}>蓝图创新工作室 ©2021</Footer>
            </Layout>
            
        </Layout>
    )
        
}
