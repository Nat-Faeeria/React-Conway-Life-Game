/**
 * Created by nathanael on 16/02/16.
 */
import React from 'react';

export class GameBoard extends React.Component {
    render(){
        let styles = {height: "900px", width: "1000px",
            border: "1px solid black", display: "flex",
            flexDirection: "row", flexWrap: "wrap",
            alignContent: "flex-start"};
        return(
            <div style={styles}>
                {this.props.children}
            </div>
        );
    }
}