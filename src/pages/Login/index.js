import './index.scss';
import { Card, Form, Input, Button } from 'antd';
import logo from '@/assets/logo.png';

const Login = () => {
    const onFinish = (values)=>{
        console.log(values); 
    }

    return <div className='login'>
        <Card className='login-container'>
            <img className='login-logo' src={logo} alt='' />
            {/* 登录表单 */}
            <Form 
                validateTrigger='onBlur'
                onFinish={onFinish}
            >
                {/* Form.Item是Form的表单项容器，Ant Design要求表单元素必须嵌套在Form.Item中 */}
                <Form.Item
                    name="mobile"//这个username要跟后端的接口的字段名保持一致
                    //多条检验逻辑时，按顺序校验，通过后才校验下一条
                    rules={[
                        {
                            required: true,
                            message: '请输入手机号'
                        },
                        {
                            pattern:/^1[3-9]\d{9}$/,
                            message:"请输入正确的手机号"
                        }
                    ]}
                >
                    <Input size='large' placeholder="请输入手机号" />
                </Form.Item>
                <Form.Item
                    name="code"//这个Username要跟后端的接口的字段名保持一致
                    rules={[
                        {
                            required: true,
                            message: '请输入验证码'
                        }
                    ]}
                >
                    <Input size='middle' placeholder="请输入验证码" />
                </Form.Item>
                <Form.Item>
                    <Button
                        // className='login-checkbox-label'
                        type='primary'
                        htmlType='submit'//对应原生的type="submit"
                        size='large'
                        block//block 是 Ant Design Button 的属性，用于实现 “通栏按钮” 效果
                    >
                        登录
                    </Button>
                </Form.Item>
            </Form>
        </Card>
    </div>
}

export default Login;