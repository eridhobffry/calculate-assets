import React, { Fragment } from 'react'
import { Bar } from 'react-chartjs-2'

const ChartComponent = ({ chartData = null }) => {
    return chartData !== null ? <Fragment>
        <Bar
            data={chartData}
            options={{
                title: {
                    display: true,
                    text: 'Values',
                    fontSize: 25
                },
                legend: {
                    display: true,
                    position: 'bottom',
                }
            }}
        />
    </Fragment> : <Fragment />
}

export default ChartComponent
