import { Form, Button } from 'antd';
import { Link } from 'react-router-dom';
import Chart from './chart';


import React, { Component } from 'react';

class ImportField1 extends Component {

  constructor() {
    super();
    this.state = {
      chartDataPie2: {labels: ['Positif', 'Négatif', 'Neutre'],
      datasets: [
        {
          label: 'points',
          data: [10, 3, 17],
          backgroundColor: ['#7eabd5', '#e67e22', '#8a8685']
        }
      ]},chartDataLine2: {labels: [ '2019-05-09 00:50:58', '2019-05-06 23:34:32', '2019-04-10 02:30:00', '2019-04-10 01:40:31', '2019-04-10 01:12:53', '2019-03-30 02:18:56', '2019-03-26 21:59:00', '2019-03-07 00:22:24', '2019-03-03 23:30:12', '2019-02-26 23:30:12', '2019-02-25 02:41:13', '2019-02-20 04:57:25', '2019-02-18 22:30:01', '2019-02-18 04:53:02', '2019-01-18 03:20:29', '2019-01-16 23:00:01', '2019-01-15 00:52:30', '2018-12-09 22:21:49', '2018-11-30 04:36:58', '2018-11-28 23:06:01', '2018-11-13 22:04:41', '2018-11-08 02:16:30', '2018-11-05 23:56:58', '2018-10-17 01:03:13', '2018-10-07 22:42:00', '2018-10-05 00:19:08', '2018-09-13 23:27:55', '2018-08-29 23:00:00', '2018-08-17 01:38:29' ],
      datasets: [
        {
          label: 'Likes',
          data: [ 2, 3, 10, 5, 0, 16, 11, 5, 3, 12, 16, 0, 4, 3, 7, 8, 3, 0, 8, 0, 9, 12, 6, 12, 0, 7, 0, 12, 7 ],
          backgroundColor: '#7eabd5'
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

                    <Link to="/contactqbe">Contact</Link>
                </Button>
            </Form.Item>
        </Form>

        </Form>
        <div>
        <p>Compagnie d'assurance QBE</p>
        <Chart chartDataPie={this.state.chartDataPie2} chartDataLine={this.state.chartDataLine2} />
        </div>
        {/* <p>Compagnie d'assurance QBE</p>
        <Chart chartData={this.state.chartData2} /> */}
        {/* <Chart chartDataLine={this.state.chartDataLine1} /> */}
      </div>

    );
  }
}

export default ImportField1; 