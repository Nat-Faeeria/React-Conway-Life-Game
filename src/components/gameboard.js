/**
 * Created by nathanael on 16/02/16.
 */
import React from 'react';

export class GameBoard extends React.Component {
    render(){
        return(
            <div className="flex board">
                {this.props.children}
            </div>
        );
    }
}