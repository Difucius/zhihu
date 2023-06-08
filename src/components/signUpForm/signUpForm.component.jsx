import { Button, Form, Input } from 'antd';
import { signUp, login } from '../../api/authentication';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { setCurrentUser, setDislikeARR, setLikesArr } from '../../store/user/user.action';
import { getDislikesArr, getLikesArr } from '../../api/user';


const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
};

const LoginFrom = () => {
        const dispatch = useDispatch();
        const navigate = useNavigate();
        const onFinish = async (values) => {
            const { password, username } = values;
            try {
                await signUp({
                    name: username,
                    password: password,
                    avatar_url: 'https://img2.baidu.com/it/u=1250551608,2180019998&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500',
                });
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
                dispatch(setLikesArr(likesArr));
                dispatch(setDislikeARR(dislikesArr));
                navigate('/');
            } catch (e) {

            }
        };
        return (
            <Form
                name='basic'
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
                            message: '用户名为必填项',
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
                            message: '密码为必填项',
                        },
                    ]}
                >
                    <Input.Password />
                </Form.Item>
                <Form.Item
                    label='Password'
                    name='passwordConfirm'
                    rules={[{
                        required: true,
                        message: '密码确认为必填项',
                    },
                        ({ getFieldValue }) => ({
                            validator(rule, value) {
                                if (!value || getFieldValue('password') === value) {
                                    return Promise.resolve();
                                }
                                return Promise.reject('两次密码输入不一致');
                            },
                        }),
                    ]}

                >
                    <Input.Password />
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
            </Form>
        );
    }
;
export default LoginFrom;
