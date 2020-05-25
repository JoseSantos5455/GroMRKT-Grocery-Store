import React from 'react'
import { ResponsiveLine } from '@nivo/line'
import data from './data.json'
function MyResponsiveLine() {
    return (
        <ResponsiveLine
            data={data}
            margin={{ top: 50, right: 110, bottom: 50, left: 60 }}
            curve="catmullRom"
            xScale={{ type: 'point' }}
            yScale={{ type: 'linear', min: 'auto', max: 'auto', stacked: true, reverse: false }}
            axisTop={null}
            axisRight={null}
            axisBottom={{
                orient: 'bottom',
                tickSize: 0,
                tickPadding: 30,
                tickRotation: 0,
                legend: '',
                legendOffset: 36,
                legendPosition: 'middle'
            }}
            axisLeft={{
                orient: 'left',
                tickSize: 0,
                tickPadding: 30,
                tickRotation: 0,
                legend: '',
                legendOffset: -40,
                legendPosition: 'middle'
            }}
            colors="#FF4581"
            lineWidth={3}
            pointSize={10}
            pointColor="#fff"
            pointBorderWidth={3}
            pointBorderColor="#000"
            pointLabel="y"
            pointLabelYOffset={-12}
            useMesh={true}
            enableGridY={false}
            enableGridX={false}
        />
    )
}

export default MyResponsiveLine