import React, { Component } from 'react';
import ReactDOM from 'react-dom';

// create-react-app default styles
import './App.css';


import CampaignSummary from './CampaignSummary.js';
import {Tabs} from 'antd';
const TabPane = Tabs.TabPane;

class App extends React.Component {
  render() {
    return (
      <div className="card-container">
        <Tabs type="card">
          <TabPane tab="Summary" key="1">
            <CampaignSummary />
          </TabPane>
          <TabPane tab="Content" key="2">
            <p>Content</p>
          </TabPane>
          <TabPane tab="Voters" key="3">
            <p>Voters</p>
          </TabPane>
          <TabPane tab="Volunteers" key="4">
            <p>Volunteers</p>
          </TabPane>
          <TabPane tab="Insights" key="5">
            <p>Insights</p>
          </TabPane>
        </Tabs>
      </div>
    )
  }
}


export default App
