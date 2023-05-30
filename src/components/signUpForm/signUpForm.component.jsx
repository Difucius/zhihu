import {Button, Form, Input} from 'antd';


const onFinish = (values) => {
    console.log('Success:', values);
};
const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
};

const LoginFrom = () => (
    <Form
        name="basic"
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
        autoComplete="off"
    >
        <Form.Item
            label="Username"
            name="username"
            rules={[
                {
                    required: true,
                    message: '用户名为必填项',
                },
            ]}
        >
            <Input/>
        </Form.Item>
        <Form.Item
            label="Password"
            name="password"
            rules={[
                {
                    required: true,
                    message: '密码为必填项',
                },
            ]}
        >
            <Input.Password/>
        </Form.Item>
        <Form.Item
            label="Password"
            name="passwordConfirm"
            rules={[{
                required: true,
                message: '密码确认为必填项',
            },
                ({getFieldValue}) => ({
                    validator(rule, value) {
                        if (!value || getFieldValue('password') === value) {
                            return Promise.resolve()
                        }
                        return Promise.reject("两次密码输入不一致")
                    }
                })
            ]}

        >
            <Input.Password/>
        </Form.Item>
        <Form.Item
            wrapperCol={{
                offset: 8,
                span: 16,
            }}
        >
            <Button type="primary" htmlType="submit">
                Submit
            </Button>
        </Form.Item>
    </Form>
);
export default LoginFrom;
