import React, { Component } from 'react';
import { Pie, Line } from 'react-chartjs-2';

class Chart extends Component {

    constructor(props) {
        super(props);
        this.state = {
            chartDataPie: props.chartDataPie,
            chartDataLine: props.chartDataLine
        }
    }

    render() {
        return (
            <div className="chart" style={{ marginLeft: 400, width: 400, height: 400 }}>

                <Pie
                    data={this.state.chartDataPie}
                    width={350}
                    height={350}
                    options={{ maintainAspectRatio: false }}
                />


                <Line
                    data={this.state.chartDataLine}
                    width={350}
                    height={350}
                    options={{}}
                />

            </div>
        )
    }
}

export default Chart;
