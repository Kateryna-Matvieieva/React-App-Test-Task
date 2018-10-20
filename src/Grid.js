import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import {AgGridReact} from 'ag-grid-react';
import ModalWindow from "./ModalWindow";

export default class Grid extends Component {
	constructor(props) {
		super(props);
		this.createObjOfData = this.createObjOfData.bind(this);
		this.onGridReady = this.onGridReady.bind(this);
	}
	
	createObjOfData() {
		let result = {};
		result.enableFilter = true;

		result.columnDefs = [{
				headerName: "Metric",
				field: "metricDisplayName",
				cellRenderer: params => {
					return `<span class = 'underlined-text'>${params.value}</span>`;
				}
			},

			{
				headerName: "Unit",
				field: "unit"
			},

			{
				headerName: "Monitored",
				field: "isMonitored",
				cellRenderer: params => {
					return `<input type='checkbox' ${params.value ? 'checked' : ''} />`;
				}
			},

			{
				headerName: "Polling Interval",
				field: "pollingInterval"
			}
		];
		result.rowData = [];
		result.thresholdConfig = [];
		this.props.dataForGrid.forEach((item) => {
			let obj = {};
			obj.metricDisplayName = item.metricDisplayName;
			obj.unit = item.unit;
			obj.isMonitored = item.isMonitored;
			obj.pollingInterval = item.pollingInterval;
			result.rowData.push(obj);
		})
		return result;
	}

	target = document.body.getElementsByClassName('ag-body-container');

	onGridReady() {
			let self = this;
			if (this.target.length) {
				this.target[0].addEventListener('click', function (event) {
						let target = event.target;
						let isMetric = target.getAttribute('col-id');
						if (isMetric === 'metricDisplayName') {
							let rowId = target.parentNode.getAttribute('row-id');
							let thresholdConfig = self.props.dataForGrid[rowId].thresholdConfig;
							let unit = self.props.dataForGrid[rowId].unit;
							if (thresholdConfig)
								ReactDOM.render( < ModalWindow configData = {
										thresholdConfig
									}
									unit = {
										unit
									}
									/>, document.getElementById('mwindow'));
							}
					})
			}
		}
		
	grid = this.createObjOfData();

	render() {
		return ( 
			< div className = "ag-theme-balham"
				style = {
					{
						height: '300px',
						width: '805px'
					}
				} >
				<AgGridReact 
					columnDefs = {
						this.grid.columnDefs
					}
					rowData = {
						this.grid.rowData
					}
					enableFilter = {
						true
					}
					onGridReady = {
						this.onGridReady
					}
				>
				</AgGridReact>
			</div>
		);
	}
}
