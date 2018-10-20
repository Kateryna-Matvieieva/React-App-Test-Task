import React, {Component} from 'react';
import Collapse, { Panel } from 'rc-collapse';
import Grid from './Grid';
import Data from './MonitoringConfig.json';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.firstHeader = 'Device Metrics';
    this.secondHeader = 'Interface Metrics';
    this.title = 'SNMP Monitoring Configuration'
    this.firstTable = Data.snmpMonitoringConfig.deviceSnmpMetrics;
    this.secondTable = Data.snmpMonitoringConfig.interfaceSnmpMetrics;
    this.isChecked = Data.snmpMonitoringConfig.enabled + '';
  }

  render() {
      return (
        <div>
            <Collapse>
                <h2>{this.title}</h2>
                <input id='snmp' className='snmp' type="checkbox" checked = {this.isChecked}/>
                <label className='snmp' for='snmp'>Enable</label>
                <Panel header = {this.firstHeader}>
                    <Grid dataForGrid = {this.firstTable} ></Grid>
                </Panel>
                <Panel header={this.secondHeader} >
                  <Grid dataForGrid = {this.secondTable} ></Grid>
                </Panel>
            </Collapse>
        </div>
      );
    }
  }

