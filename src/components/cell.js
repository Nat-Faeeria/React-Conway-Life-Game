/**
 * Created by nathanael on 16/02/16.
 */
import React from 'react';

export class Cell extends React.Component {
    handleClick = () => {
        this.props.callback(this.props.value);
    }
    render(){
        if (this.props.alive) {
            return (
                <div className={classFull} onClick={this.handleClick}>
                </div>
            );
        } else {
            return (
                <div className={classEmpty} onClick={this.handleClick}>
                </div>
            );
        }
    }
}

const classEmpty = "empty-cell";
const classFull = "full-cell";