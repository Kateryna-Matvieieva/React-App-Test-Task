import React, {Component} from 'react';

export default class ModalTable extends Component {
   
    render() {
        return (
            <div className = "row">
                <div className = 'item'>{this.props.tableData.severity}</div>
                <div className = 'item'>
                    <label>
                        Value
                        <span className='red-text'>*</span>
                        <input type="text" value={this.props.tableData.value} disabled/>
                    </label>
                </div>
                <div className = 'item'>
                    <input type="checkbox" checked = {this.props.tableData.raiseAlarm + ''} />
                </div>
                <div className = 'item last'>
                    <label>
                        Massage
                        <span className='red-text'>*</span>
                        <input type="text" value={this.props.tableData.message}  disabled/></label>
                </div>
            </div>
        );
    }
}