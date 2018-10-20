import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import ModalTable from './ModalTable';

export default class ModalWindow extends Component {
    constructor (props) {
        super(props);
        this.state = {isToggleOn: true};
        this.makeArray = this.makeArray.bind(this);
        this.close = this.close.bind(this);
        this.handleClick = this.handleClick.bind(this);
    }

    close() {
        ReactDOM.unmountComponentAtNode(document.getElementById('mwindow'))
    }

    handleClick() {
        let inputs = document.getElementsByClassName('modal-window')[0].querySelectorAll('input[type=text]');
        let button = document.getElementById('edit');
        if (this.state.isToggleOn) {
            inputs.forEach((item) => {
                item.removeAttribute('disabled')
            });
            button.classList.add('disabled-button');
        } else {
            inputs.forEach((item) => {
                item.setAttribute('disabled', 'true')
            });
            button.classList.remove('disabled-button');
        }
        this.setState(state => ({
            isToggleOn: !state.isToggleOn
        }));
    }

    makeArray(count) {
        let result = [];
        result = this.props.configData[count];
        return result;
    }

    firstArray = this.makeArray(0);
    secondArray = this.makeArray(1);
    thirdArray = this.makeArray(2);

    render() {
        return (
            <div className='modal-background'>
                <div className='rc-collapse modal-window'>
                    <header>
                        Metric Configuration
                        <button type="button" onClick={this.close} className='rc-collapse button-close'><span>&times;</span></button>
                    </header>
                    <section>
                        <button type="button" id="edit" onClick={this.handleClick} className='rc-collapse button-edit'>Edit</button>
                    </section>
                    <section>
                        <h3>Memory Utilization</h3>
                        
                        <table>
                            <tr>
                                <th>Description:</th>
                                <td></td>
                            </tr>
                            <tr>
                                <th>Unit</th>
                                <td>{this.props.unit}</td>
                            </tr>
                        </table>
                    </section>
                    <section>
                        <h3>Tresholds</h3>
                        <div className = 'row'>
                            <div className = 'item'>Severity</div>
                            <div className = 'item'>Value</div>
                            <div className = 'item'>Raise Alarm</div>
                            <div className = 'item last'>Message</div>
                        </div>
                        
                        <ModalTable tableData = {this.firstArray}/>
                        <ModalTable tableData = {this.secondArray}/>
                        <ModalTable tableData = {this.thirdArray}/>
            
                    </section>
                    <footer>
                        <button className='rc-collapse' onClick={this.close}>Cancel</button>
                        <button className='rc-collapse button-apply' type="submit" value="Submit" onClick={this.close}>Apply</button>
                    </footer>
                  </div> 
            </div>
        );        
    }
}