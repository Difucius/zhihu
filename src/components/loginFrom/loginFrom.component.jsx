import { Button, Checkbox, Form, Input } from 'antd';
import { login } from '../../api/authentication';
import { useDispatch } from 'react-redux';
import { setCurrentUser,setDislikeARR,setLikesArr } from '../../store/user/user.action';
import { useNavigate } from 'react-router-dom';
import { getDislikesArr, getLikesArr } from '../../api/user';

const LoginFrom = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const onFinish = async (values) => {
        const { password, username } = values;
        try {
            const res = await login({ password: password, name: username });
            const { token, _id, avatar_url } = res;
            localStorage.setItem('token', JSON.stringify(token));
            const user = {
                token,
                username,
                _id,
                avatar_url,
            };
            dispatch(setCurrentUser(user));
            const likesArr = await getLikesArr(_id);
            const dislikesArr = await getDislikesArr(_id);
            dispatch(setLikesArr(likesArr))
            dispatch(setDislikeARR(dislikesArr))
            navigate('/');



        } catch (error) {
            console.log('111');
            console.log(error);
        }

    };
    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };


    return (
        <Form
            name='login'
            labelCol={{
                span: 8,
            }}
            wrapperCol={{
                span: 16,
            }}
            style={{
                maxWidth: 600,
            }}
            initialValues={{
                remember: true,
            }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            autoComplete='off'
        >
            <Form.Item
                label='Username'
                name='username'
                rules={[
                    {
                        required: true,
                        message: 'Please input your username!',
                    },
                ]}
            >
                <Input />
            </Form.Item>

            <Form.Item
                label='Password'
                name='password'
                rules={[
                    {
                        required: true,
                        message: 'Please input your password!',
                    },
                ]}
            >
                <Input.Password />
            </Form.Item>

            <Form.Item
                name='remember'
                valuePropName='checked'
                wrapperCol={{
                    offset: 8,
                    span: 16,
                }}
            >
                <Checkbox>Remember me</Checkbox>
            </Form.Item>

            <Form.Item
                wrapperCol={{
                    offset: 8,
                    span: 16,
                }}
            >
                <Button type='primary' htmlType='submit'>
                    Submit
                </Button>
            </Form.Item>
        </Form>);
};
export default LoginFrom;
