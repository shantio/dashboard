import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import {VictoryPie} from 'victory';
import {VictoryBar, VictoryChart, VictoryArea,
        VictoryStack, VictoryAxis} from 'victory';

import {volunteerOverviewLeaderboard, napData, summaryTotals,
   postEngagement, totalInteracts} from './Data.js';

import {Row, Col, Card} from 'antd';
import 'antd/dist/antd.css';


export default class CampaignSummary extends React.Component {
  render(){
    return (
  <div className="summaryGrid">
    <Row gutter={32}>
      <Col span={15}>
      <Card title="Leaderboard">
        <VictoryChart>

        <VictoryStack domainPadding={30}>

            <VictoryArea data= {totalInteracts()}
            x="date"
            y="responses" />
            <VictoryArea data= {totalInteracts()}
            x="date"
            y="interactions" />
        </VictoryStack>
        </VictoryChart>
     </Card>

     <br/>
     <br/>

     <Row gutter={32} >
     <Col span={8}><Card >

     <h3>Volunteers</h3>
     <h1>320</h1>

     </Card></Col>
    <Col span={8}> <Card>

     <h3>Possible Reach</h3>
     <h1> 320k </h1>

     </Card></Col>
     <Col span={8}><Card >

     <h3>Current Reach</h3>
     <h1> 22k </h1>

     </Card>
     </Col>
     </Row>


      </Col>
      <Col span={9}>

          <Card title="Highest Performing Volunteers">


          </Card>

          <br/>
          <br/>

        <Card title="Latest Post Engagement">
        <VictoryChart>
        <VictoryAxis
          tickValues={[1, 2, 3]}
          tickFormat={["Comments", "Likes", "Shares"]}
        />
        <VictoryStack
          domainPadding={30}>

          <VictoryBar
          labels="lastweek"
            data={postEngagement()}
            x="label"
            y="lastweek"
          />
          <VictoryBar
          labels="thisweek"
              data={postEngagement()}
              x="label"
              y="thisweek"
          />
        </VictoryStack>
          </VictoryChart>
          </Card>
      </Col>
     </Row>
     </div>
   );
}
}
