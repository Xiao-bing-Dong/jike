//实现创建文章
import {
    Card,
    Breadcrumb,
    Form,
    Button,
    Radio,
    Input,
    Upload,
    Space,
    Select,
    message
} from 'antd';
import { PlusOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';
import ReactQuill from 'react-quill-new';
import 'react-quill-new/dist/quill.snow.css';
import './index.scss';
import { useEffect, useState } from 'react';
import { getChannelAPI, createArticleAPI } from '@/apis/artical';
import { useChannel } from '@/hooks/useChannel';

const { Option } = Select;

const Publish = () => {
    //获取频道列表
    const {channelList} = useChannel();
    //提交表单
    const onFinish = (formValue) => {
        //校验封面类型imageType是否和十几的图片列表imageList数量是相等的
        if(imageList.length!==imageType)return message.warning('封面类型与实际图片数量不符')
        //1.按照接口文档的格式处理收集到的表单数据
        const { title, content, channel_id } = formValue;
        const reqData = {
            //简写形式
            title,
            content,
            cover: {
                type: imageType,
                images: imageList.map(item => item.response.data.url)
            },
            channel_id
        }
        //2.调用接口提交
        createArticleAPI(reqData);
    }

    //封面上传回调
    const [imageList, setImageList] = useState([]);
    const onChange = (value) => {
        console.log(value);
        setImageList(value.fileList);
    }

    //切换图片封面类型
    const [imageType, setImageType] = useState(0);
    const onTypeChange = (e) => {
        setImageType(e.target.value);
    }

    return (
        <div className='publish'>
            <Card
                title={
                    <Breadcrumb
                        items={[
                            { title: <Link to='/'>首页</Link> },
                            { title: '发布文章' },
                        ]}
                    />
                }
            >
                <Form
                    labelCol={{ span: 4 }}
                    wrapperCol={{ span: 16 }}
                    initialValues={{ type: 0 }}
                    //当表单所有数据通过验证之后，点击提交按钮，会自动触发onFinish
                    onFinish={onFinish}
                >
                    <Form.Item
                        label='标题'
                        name='title'
                        rules={[{ required: true, message: '请输入文章标题' }]}
                    >
                        <Input placeholder='请输入文章标题' style={{ width: 400 }} />
                    </Form.Item>
                    <Form.Item
                        label='频道'
                        name='channel_id'
                        rules={[{ required: true, message: '请选择文章频道' }]}
                    >
                        <Select placeholder='请选择文章频道' style={{ width: 400 }}>
                            {/* value属性的值在用户选中之后会自动收集起来作为接口的提交字段 */}
                            {channelList.map(item => <Option key={item.id} value={item.id}>{item.name}</Option>)}
                        </Select>
                    </Form.Item>
                    <Form.Item label='封面'>
                        <Form.Item name='type'>
                            <Radio.Group onChange={onTypeChange}>
                                <Radio value={1}>单图</Radio>
                                <Radio value={3}>三图</Radio>
                                <Radio value={0}>无图</Radio>
                            </Radio.Group>
                        </Form.Item>
                        {/* 目前为止，这里还有一个bug，就是在三图模式下上传三张图片之后，切换到单图模式之后，依然显示三张图片 */}
                        {
                            imageType > 0 && <Upload
                                /* 
                                    listType:决定选择文件框的外观样式
                                    showUploadList:控制显示上传列表
                                    action:配置上传接口地址
                                    name:接口需要接收的字段，在接口文档中定义
                                */
                                listType="picture-card"
                                showUploadList
                                action={"http://geek.itheima.net/v1_0/upload"}
                                name='image'
                                onChange={onChange}
                                maxCount={imageType}
                            >
                                <div style={{ marginTop: 8 }}>
                                    <PlusOutlined />
                                </div>
                            </Upload>
                        }
                    </Form.Item>
                    <Form.Item
                        label='内容'
                        name='content'
                        rules={[{ required: true, message: '请输入文章内容' }]}
                    >
                        {/* 富文本编辑器 */}
                        <ReactQuill
                            className='publish-quill'
                            theme='snow'
                            placeholder='请输入文章内容'
                        />
                    </Form.Item>
                    <Form.Item wrapperCol={{ offset: 4 }}>
                        <Space>
                            <Button size="large" type='primary' htmlType='submit'>
                                发布文章
                            </Button>
                        </Space>
                    </Form.Item>
                </Form>
            </Card>
        </div>
    )
}

export default Publish;