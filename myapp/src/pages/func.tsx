import { Tabs,Button,Typography,Layout,Divider,List } from 'antd';
import React,{useState} from 'react';
import imgSrc from '../assets/image/v2_q9fs0e.png';
import iconSrc from '@/assets/image/v2_q9uvy5.png';
import url from '*.svg';

const {Title,Paragraph} = Typography;
const {Header,Content,Footer} = Layout;
const { TabPane } = Tabs;

interface FuncPageProps{
    modIntro: string;
    subFuncMenu: string[];
    subFunc: SubFunction[];
    question: string;
    txt:string;
}
interface SubFunction{
    title: string;
    introduction: string;
    subIntro: string[];
}

const content:FuncPageProps = {
    modIntro: '这是功能模块',
    subFuncMenu:['子功能1','子功能2','子功能3','子功能4','子功能5','子功能6'],
    subFunc: [{
        title: '子功能1',
        introduction: '这是子功能1',
        subIntro: ['这是功能1.1','这是功能1.2'],
    },{
        title: '子功能2',
        introduction: '这是子功能2',
        subIntro: ['这是功能2.1','这是功能2.2'],
    },{
        title: '子功能3',
        introduction: '这是子功能3',
        subIntro: ['这是功能3.1','这是功能3.2'],
    },{
        title: '子功能4',
        introduction: '这是子功能4',
        subIntro: ['这是功能4.1','这是功能4.2'],
    },{
        title: '子功能5',
        introduction: '这是子功能5',
        subIntro: ['这是功能5.1','这是功能5.2'],
    },{
        title: '子功能6',
        introduction: '这是子功能6',
        subIntro: ['这是功能6.1','这是功能6.2'],
    },],
    question: '是否对我们的产品感兴趣?',
    txt:'如果您对我们的产品感兴趣，但还存在一些疑惑'
}

export default function FuncPage(){
    const {modIntro,subFuncMenu,subFunc,question,txt} = content;
    const [funcIdx,setfuncIdx] = useState(0);
    return (
        <div>
            <Layout>
                {/*头部 */}
                <Header style = {{height:'300px',backgroundImage:`url(${ imgSrc })`,backgroundSize:'100% 100%'}}>
                    <div style = {{width:'100%',height:'300px'}}>
                        {/* <img width = '100%' height = '300px' src = {imgSrc} style = {{float:'right'}}/> */}
                        <div style = {{marginTop: '20px',textAlign: 'center'}}>
                            <Title style = {{fontSize: '70px'}}>功能模块</Title>
                            <p style = {{fontSize:'20px'}}>{modIntro}</p>
                            <Button ghost>立即体验</Button>
                        </div> 
                    </div>
                </Header>
                {/*功能11~66 */}
                <Content>
                    <div>
                        {/*导航栏 */}
                        <div>
                            <Tabs style = {{textAlign: 'center'}} animated centered size = 'large' tabBarGutter = {60}>
                                {subFuncMenu.map((item,index)=>{
                                    return (
                                        <TabPane key = {index} tab = {item}>
                                            <div style = {{backgroundColor:'lightblue'}}>
                                                <SubFunc {...subFunc[index]}></SubFunc>
                                            </div>
                                        </TabPane>
                                    )
                                })}
                            </Tabs>
                        </div>
                        {/*类型1*/}
                    </div>
                    {/*底部 */}
                    <div>
                        {/*联系我们 */}
                        <div style = {{textAlign: 'center',height:'200px',marginTop:'40px'}}>
                            <p style = {{fontSize:'30px'}}>{question}</p>
                            <Title>{txt}</Title>
                            <Button type = "primary" shape = "round">联系我们</Button>
                        </div>
                        <Divider/>
                    </div>  
                </Content>
            </Layout>
            
        </div>
    )
}

function SubFunc(props:SubFunction)
{
    return(
        <div>
            <div style = {{textAlign:'center',padding:'30px'}}>
                <Title>{props.title}</Title>
                <p>{props.introduction}</p>
            </div>
            <div>
                <div style = {{display: 'flex',flexDirection: 'row',textAlign:'center',justifyContent:'center'}}>
                   {props.subIntro.map((item)=>{
                       return (
                           <div style = {{margin:'70px'} }>
                               <img src = {iconSrc} width = {100}/>
                               <p>{item}</p>
                           </div>
                       )
                   })}
                </div>
            </div>
        </div>
    )
}