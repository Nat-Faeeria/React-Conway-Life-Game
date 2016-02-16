/**
 * Created by nathanael on 16/02/16.
 */
import React from 'react';

export class Cell extends React.Component {
    handleClick = () => {
        this.props.callback(this.props.value);
    }
    render(){
        let styles = {height: "18px",width: "18px",
            backgroundColor: "grey", border: "solid black 1px",
            margin: "0px"};
        if (this.props.alive) {
            styles.backgroundColor = "blue";
        }
        return(
            <div style={styles} onClick={this.handleClick}>
            </div>
        );
    }
}