import { Form, Input, Button } from 'antd';

import React from 'react';

const Contact = (props) => {

    return (
        <Form className="login-form">

            <p> Sélectionner les clients ayant des feedback négatifs</p>
            <Form.Item>
                {(
                    <Input
                        placeholder=""
                    />
                )}
            </Form.Item>

            <p> Envoyer une notification</p>
            <Form.Item>
                {(
                    <Input
                        placeholder=""
                    />
                )}
            </Form.Item>

            <Form.Item>

                <Button type="primary" htmlType="submit" className="login-form-button">
                    Submit
          </Button>

            </Form.Item>
        </Form>
    );
}

export default Contact;