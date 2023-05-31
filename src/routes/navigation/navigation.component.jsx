import { Layout, Avatar } from 'antd';
import { Outlet } from 'react-router';
import { AppstoreOutlined, MailOutlined } from '@ant-design/icons';
import { Menu } from 'antd';
import { useState } from 'react';
import { HeaderContainer } from './navigation.styles';
import { useSelector } from 'react-redux';
import { setCurrentUser } from '../../store/user/user.action';
import { selectCurrentUser } from '../../store/user/user.selector';

const { Header, Footer, Content } = Layout;


const items = [
    {
        label: 'Navigation One',
        key: 'mail',
        icon: <MailOutlined />,
    },
    {
        label: 'Navigation Two',
        key: 'app',
        icon: <AppstoreOutlined />,
    },
];

const url = 'https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg';

const Navigation = () => {
        const [current, setCurrent] = useState('mail');
        const currentUser = useSelector(selectCurrentUser);
        const onClick = (e) => {
            console.log('click ', e);
            setCurrent(e.key);
        };
        return (
            <Layout>
                <Header>
                    <HeaderContainer>
                        <Menu onClick={onClick} selectedKeys={[current]} mode='horizontal' items={items} theme='dark' />
                        {currentUser ? <Avatar>{currentUser.username}</Avatar> : <Avatar>未登录</Avatar>}
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
