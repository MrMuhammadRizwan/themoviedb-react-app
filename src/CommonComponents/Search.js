import { Form, Input, Button } from 'antd';

function Search(props) {
    // console.log('searchMoviesClick', props)
    console.log(`props.filterMoviesClick`, props.searchMoviesClick);

    const onFinish = (values) => {
        props.searchFunc.searchMoviesClick(values.search)
        console.log('onFinish', props)
    };

    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };
    return (
        <>
            <div className="search">
                <Form
                    name="basic"
                    initialValues={{ remember: true }}
                    onFinish={onFinish}
                    onFinishFailed={onFinishFailed}
                    autoComplete="off"
                    >
                    <Form.Item
                        name="search"
                        rules={[{ required: true, message: '' }]}
                    >
                        <Input placeholder="Please Enter Value In Search..." />
                    </Form.Item>

                    <Form.Item wrapperCol={{ offset: 4, span: 16 }}>
                        <Button type="primary" size="large" htmlType="submit" className='search-btn'>
                            Search
                        </Button>
                    </Form.Item>
                    </Form>
            </div>
        </>
    );
}

export default Search;