import React, {Component} from 'react';
import './index.css';
import 'rc-collapse/assets/index.css';
export default class RowOfOptions extends Component {
    render() {
        return (
            <div>
            <div className = 'grid1'>NAME</div>
            <div className = 'grid2'>
                <label>
                    Value
                    <span className='red-text'>*</span>
                    <input type="text"/>
                </label>
            </div>
            <div className = 'grid3'>
                <input type="checkbox"/>
            </div>ss
            <div className = 'grid4'>
                <label>
                    Massage
                    <span className='red-text'>*</span>
                    <input type="text"/></label>
            </div>
            </div>
        );
    }
}