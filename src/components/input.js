import { Form, Button } from 'antd';
import { Link } from 'react-router-dom';
import Chart from './chart';


import React, { Component } from 'react';

class ImportField extends Component {

  constructor() {
    super();
    this.state = {
      chartDataPie1: {labels: ['Positif', 'Négatif', 'Neutre'],
      datasets: [
        {
          label: 'points',
          data: [4, 4, 22],
          backgroundColor: ['#7eabd5', '#e67e22', '#8a8685']
        }
      ]},
      chartDataLine1: {labels: [ '2019-05-26 11:44:13', '2019-05-24 07:01:53', '2019-05-24 07:01:24', '2019-05-22 16:39:37', '2019-05-22 07:54:23', '2019-05-22 07:43:31', '2019-05-22 07:25:12', '2019-05-21 16:35:50', '2019-05-21 09:20:20', '2019-05-20 11:41:58', '2019-05-20 09:05:16', '2019-05-20 08:46:20', '2019-05-17 17:43:16', '2019-05-17 17:42:59', '2019-05-17 13:58:15', '2019-05-17 13:53:28', '2019-05-17 13:46:49', '2019-05-17 13:41:09', '2019-05-17 13:26:55', '2019-05-17 13:22:51', '2019-05-17 12:23:02', '2019-05-17 12:19:26', '2019-05-17 12:06:14', '2019-05-17 12:05:14', '2019-05-17 11:30:06', '2019-05-17 11:26:18', '2019-05-17 09:47:31', '2019-05-17 09:44:48', '2019-05-17 09:23:52' ],
      datasets: [
        {
          label: 'Likes',
          data: [ 0, 13, 24, 0, 123, 0, 0, 0, 0, 0, 0, 0, 0, 0, 39, 22, 21, 20, 0, 14, 0, 15, 9, 8, 29, 13, 15, 11, 15 ],
          backgroundColor: '#7eabd5'
        }
      ]},
      chartDataPie2: {labels: ['Positif', 'Négatif', 'Neutre'],
      datasets: [
        {
          label: 'points',
          data: [10, 3, 17],
          backgroundColor: ['#7eabd5', '#e67e22', '#8a8685']
        }
      ]}
    }
  }

  render() {
    return (
      <div>
        <Form className="login-form">
          <p>Voici les résultats des compagnies d'assurance.</p>
          <Form className="login-form ">
            <p>Cliquez sur le bouton pour Afficher les contacts négatifs</p>
            <Form.Item>
                <Button type="primary" htmlType="submit">

                    <Link to="/contactaxa">Contact</Link>
                </Button>
            </Form.Item>
        </Form>
        </Form>
        <div>
        <p>Compagnie d'assurance Axa</p>
        <Chart chartDataPie={this.state.chartDataPie1} chartDataLine={this.state.chartDataLine1} />
        
        </div>
        {/* <p>Compagnie d'assurance QBE</p>
        <Chart chartData={this.state.chartData2} /> */}
        {/* <Chart chartDataLine={this.state.chartDataLine1} /> */}
      </div>

    );
  }
}

export default ImportField;