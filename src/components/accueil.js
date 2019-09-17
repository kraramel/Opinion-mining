
import '../App.css';

import React from 'react';
import { Form, Button } from 'antd';
import { Link } from 'react-router-dom';



const Accueil = (props) => {

    return (
        <div>
        <Form className="login-form">
            <p>Cliquez sur le bouton pour simuler  AXA</p>
            <Form.Item>
                <Button type="primary" htmlType="submit">

                    <Link to="/indicateursaxa">Import and Generate</Link>
                </Button>
            </Form.Item>
        </Form>

        <Form className="login-form">
            <p>Cliquez sur le bouton pour simuler QBE</p>
            <Form.Item>
                <Button type="primary" htmlType="submit">

                    <Link to="/indicateursqbe">Import and Generate</Link>
                </Button>
            </Form.Item>
        </Form>
        </div>
    );
}

export default Accueil;