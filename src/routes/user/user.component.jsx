import { useParams } from "react-router";
import{useEffect,useState}from 'react';
import { getUser } from "../../api/user";
import { Avatar ,Collapse,Divider,Button} from 'antd';
// import{CollapseStyle}from'./user.styles'
import { useSelector } from 'react-redux';
import { selectCurrentUser } from '../../store/user/user.selector';
import { Link } from 'react-router-dom';
const { Panel } = Collapse;



export const User=()=>{
  const {id}=useParams();
  const [user,setUser]=useState({});
  const [showType,setShowType]=useState("")
  const currentUser = useSelector(selectCurrentUser);
  useEffect(()=>{
    const getUserInfo=async()=>{
      const userInfo=await getUser(id)
      setUser(userInfo)
    };
    getUserInfo();
  },[])
  const str=currentUser?"visible":"hidden"
  const strTwo=currentUser?'/changeInfo/'+currentUser._id:'/';

  return (
    <div >
      <Avatar size={128} src="https://img2.baidu.com/it/u=40585927,466714706&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500" />
      {/* <CollapseStyle> */}
      <Divider></Divider>
        <Collapse size="middle"  style={{width:"500px",margin:"0 auto"}}>
          <Panel header="基本信息" key="1">
            <div>昵称：{user.name}</div>
            <div>性别：{user.gender}</div>
            <div>生日：2002.06.15</div>
          </Panel>
          <Panel header="账号信息" key="2">
            <div>注册时间：{user.createdAt?user.createdAt.slice(0,10):"2000.01.01"}</div>
            <div>资料最近更新时间：{user.updatedAt?user.updatedAt.slice(0,10):"2000.01.01"}</div>
          </Panel>
        </Collapse>

        <Link to={strTwo}>
          <Button danger style={{margin:"10px 0 0 0",visibility:str}}>修改信息</Button>
        </Link>
        <Divider></Divider>
        <Link to='/'>
          <Button type="primary">返回</Button>
        </Link>
      {/* </CollapseStyle> */}
      
    </div>
    
  );
};
export default User;