import { useParams } from 'react-router';
import { useEffect, useState } from 'react';
import { getUser } from '../../api/user';
import { Avatar, Divider, Button, Descriptions, Modal, Form, Input, Upload, Select } from 'antd';
import { Container, InfoContainer, ButtonContainer } from './user.styles';
import { useSelector } from 'react-redux';
import { selectCurrentUser } from '../../store/user/user.selector';
import { Link } from 'react-router-dom';
import { PlusOutlined, LoadingOutlined } from '@ant-design/icons';
import { changeUserInfo } from '../../api/user';
import { useDispatch } from 'react-redux';
import { setCurrentUser } from '../../store/user/user.action';
import { useNavigate } from 'react-router';


export const User = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch();
    const { id } = useParams();
    const [user, setUser] = useState({});
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [loading, setLoading] = useState(false);
    const [imageUrl, setImageUrl] = useState('');

    const showModal = () => {
        setIsModalOpen(true);
    };

    const handleOk = async () => {
        const { gender, sign } = form.getFieldsValue();
        const query = {};
        if (gender) {
            query.gender = gender;
        }
        if (sign) {
            query.headline = sign;
        }
        if (imageUrl) {
            query.avatar_url = imageUrl;
        }
        try {
            const newUser = await changeUserInfo(id, query);
            setUser(newUser);
            newUser.token = user.token;
            dispatch(setCurrentUser(newUser));
        } catch (e) {

        }

        setIsModalOpen(false);
    };

    const logout = () => {
        dispatch(setCurrentUser(null));
        navigate('/')
    };

    const handleCancel = () => {
        setIsModalOpen(false);
    };
    const onFinish = (values) => {
        console.log('Success:', values);
    };
    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };

    const currentUser = useSelector(selectCurrentUser);
    useEffect(() => {
        const getUserInfo = async () => {
            const userInfo = await getUser(id);
            setUser(userInfo);
        };
        getUserInfo();
    }, []);
    const str = currentUser ? 'visible' : 'hidden';
    const strTwo = currentUser ? '/changeInfo/' + currentUser._id : '/';


    const [form] = Form.useForm();
    const handleChange = (info) => {
        if (info.file.status === 'uploading') {
            setLoading(true);
            return;
        }
        if (info.file.status === 'done') {
            // Get this url from response in real world.
            // getBase64(info.file.originFileObj, (url) => {
            //     setLoading(false);
            //     setImageUrl(url);
            // });
            const url = info.file.response.url;
            setImageUrl(url);
        }
    };
    const uploadButton = (
        <div>
            {loading ? <LoadingOutlined /> : <PlusOutlined />}
            <div
                style={{
                    marginTop: 8,
                }}
            >
                Upload
            </div>
        </div>
    );

    return (
        <Container>
            <Avatar size={128}
                    src={user.avatar_url} />
            {/* <CollapseStyle> */}
            <Divider></Divider>
            <InfoContainer>
                <Descriptions title='User Info'>
                    <Descriptions.Item label='账号'>{user.name}</Descriptions.Item>
                    <Descriptions.Item label='性别'>{user.gender}</Descriptions.Item>
                    <Descriptions.Item label='签名'>{user.headline}</Descriptions.Item>
                </Descriptions>
            </InfoContainer>
            <ButtonContainer>
                {currentUser._id === user._id &&
                    <Button danger onClick={showModal}>修改信息</Button>

                }
                <Button danger onClick={logout}>退出登录</Button>
            </ButtonContainer>

            <Divider></Divider>
            <Link to='/'>
                <Button type='primary'>返回</Button>
            </Link>
            {/* </CollapseStyle> */}
            <Modal title='Basic Modal' open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
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
                    form={form}
                    onFinish={onFinish}
                    onFinishFailed={onFinishFailed}
                    autoComplete='off'
                >
                    <Form.Item label='Upload' valuePropName='fileList'>
                        <Upload
                            name='file'
                            listType='picture-circle'
                            className='avatar-uploader'
                            showUploadList={false}
                            action='http://localhost:3000/upload'
                            onChange={handleChange}
                        >
                            {imageUrl ? <img src={imageUrl} alt='avatar' style={{ width: '100%' }} /> : uploadButton}
                        </Upload>
                    </Form.Item>

                    <Form.Item
                        label='性别'
                        name='gender'
                    >
                        <Select>
                            <Select.Option value='male'>男</Select.Option>
                            <Select.Option value='female'>女</Select.Option>
                            <Select.Option value='unknown'>保密</Select.Option>
                        </Select>
                    </Form.Item>
                    <Form.Item
                        label='签名'
                        name='sign'
                    >
                        <Input />
                    </Form.Item>
                </Form>
            </Modal>
        </Container>

    );
};
export default User;
