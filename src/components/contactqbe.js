import { List, Avatar } from 'antd';


import React, { Component } from 'react';

const data = [
    {
        title: 'Peter Ellis',
    },
    {
        title: 'Insurance Advisernet - South East',
    },
    {
        title: 'Tim Allan',
    }
];

class ContactQbe extends Component {


    render() {
        return (
            <List
                itemLayout="horizontal"
                dataSource={data}
                renderItem={item => (
                    <List.Item>
                        <List.Item.Meta
                            avatar={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}
                            title={item.title}
                        />
                    </List.Item>
                )}
            />
        );

    }
}

export default ContactQbe;