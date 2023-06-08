import { Layout, Avatar } from 'antd';
import { Outlet } from 'react-router';
import { AppstoreOutlined, MailOutlined } from '@ant-design/icons';
import { Menu } from 'antd';
import { useState } from 'react';
import { HeaderContainer } from './navigation.styles';
import { useSelector } from 'react-redux';
import { setCurrentUser } from '../../store/user/user.action';
import { selectCurrentUser } from '../../store/user/user.selector';
import { Link } from 'react-router-dom';

const { Header, Footer, Content } = Layout;


const items = [
    // {
    //     label: 'Navigation One',
    //     key: 'mail',
    //     icon: <MailOutlined />,
    // },
    // {
    //     label: 'Navigation Two',
    //     key: 'app',
    //     icon: <AppstoreOutlined />,
    // },
];

const url = 'https://bpic.51yuansu.com/pic3/cover/01/69/80/595f67c2239cb_610.jpg';
const Navigation = () => {
        const [current, setCurrent] = useState('mail');
        const currentUser = useSelector(selectCurrentUser);
        const onClick = (e) => {
            console.log('click ', e);
            setCurrent(e.key);
        };
        const str=currentUser?'/users/'+currentUser._id:'/authentication';
        return (
            <Layout>
                <Header>
                    <HeaderContainer>
                        <Menu onClick={onClick} selectedKeys={[current]} mode='horizontal' items={items} theme='dark' />
                        <Link to={str}>
                            <Avatar src={currentUser ? currentUser.avatar_url : url}></Avatar>
                        </Link>
                    </HeaderContainer>
                </Header>
                <Content>
                    <Outlet></Outlet>
                </Content>
                <Footer>

                </Footer>
            </Layout>
        );

    }
;

export default Navigation;
