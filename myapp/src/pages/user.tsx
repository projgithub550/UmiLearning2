import styles from './user.less';
import { Menu,Button,Avatar,Typography } from 'antd';
import { PlusCircleOutlined } from '@ant-design/icons';
import React,{useState} from 'react';

const {Title,Text} = Typography;

interface PageProps{
  iconSrc: string;
  title: string;
  thread: Thread[];
}

interface Thread{
  name: string;
  userTag: string[];
  tag: string[];
  time: Date;
  content: string[];
  images: string[];
  comments: string[];
  voteNumber: number;
  commentNumber: number;
}

const data: PageProps = {
  iconSrc: 'https://sm.ms/image/cbunD9pHikoWTLA',
  title: '前端学习计划',
  thread: [{
    name: '王某某',
    userTag: ['已认证'],
    tag: ['活动','精选'],
    time: new Date(),
    content: ['组件拖出来特别多'],
    images: ['https://sm.ms/image/6dZD2rKpYPkzaqc'],
    comments: ['这个好'],
    voteNumber: 100,
    commentNumber: 100,
  }]
}
export default function UserPage() {
  const {iconSrc,title,thread} = data;
  return ( 
    <div>
      {/*标题和头像 */}
      <div style = {{display : 'flex',alignItems: 'center',padding:'5px'}}>
          <Title level = {4}>
            <Avatar shape = "circle" 
            src={iconSrc} style = {{marginRight : '10px'}}>User</Avatar>
            {title}
          </Title>
      </div>
      {/*菜单栏 */}
      <div>
      <Menu  mode="horizontal">
        <Menu.Item key="mail" >
          话题
        </Menu.Item>
        <Menu.Item key="app" disabled >
          与我有关
        </Menu.Item>
        <Button type = "text" icon = {<PlusCircleOutlined />}
        style = {{
          float:'right',
          padding:'10px',
          marginRight:'20px'}}></Button>
      </Menu>
      </div>

       <div>
          <ThreadView {...thread[0]}
          ></ThreadView>
      </div>
    </div>
  );
}

function ThreadView(props:Thread){
  const {iconSrc} = data;
    return (
      <div>
          <div className = {styles.head}>
              <div className = {styles.userImage}>
                <Avatar shape = 'circle' src = {iconSrc}>User</Avatar>
              </div>
              <div className = {styles.userInfo}>
                  <div className = {styles.userName}>
                    <Title level = {5}>{props.name}</Title>
                    <Text code className = {styles.userState}>{props.userTag[0]}</Text>
                  </div>
                  <div>{props.time.toLocaleTimeString()}</div>
              </div>
              <div className = {styles.infoTag}>
                  {props.tag.map((item)=>{
                    return <Text code key = {item}>
                        {item}
                    </Text>
                  })}
              </div>
          </div>
          {/*<div className = 'contentBody'>
              <div>
                {props.content}
              </div>
              <div>
                {props.images}
                {props.images}
              </div>
              <div>
                {props.comments}
              </div>
          </div>
          <div className = 'foot'>
              <div>
                  {props.voteNumber}
                  {props.commentNumber}
              </div>
          </div>*/}
          
      </div>
    );
}