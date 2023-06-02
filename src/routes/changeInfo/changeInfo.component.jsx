import { useParams } from "react-router";
import{useEffect,useState}from 'react';
import { getUser } from "../../api/user";
// import { Avatar ,Collapse,Divider,Button} from 'antd';
// import{CollapseStyle}from'./user.styles'
import { useSelector } from 'react-redux';
import { selectCurrentUser } from '../../store/user/user.selector';
// import { Link } from 'react-router-dom';
// const { Panel } = Collapse;

export const ChangeInfo=()=>{
  const {id}=useParams();
  const [user,setUser]=useState({});
  // const [showType,setShowType]=useState("")
  const currentUser = useSelector(selectCurrentUser);
  useEffect(()=>{
    const getUserInfo=async()=>{
      const userInfo=await getUser(id)
      setUser(userInfo)
    };
    getUserInfo();
  },[])

  return(
    <div>
      {user.name}
      这是资料修改页面
    </div>
  )
}
export default ChangeInfo;