/**
 * Created by nathanael on 16/02/16.
 */
import React from 'react';
import { Cell } from './cell'
import { GameBoard } from './gameboard'

export class Game extends React.Component {
    constructor(){
        super();
        let vals = [];
        for (let i=0;i<2250;i++){
            vals.push(false);
        }
        this.state = {states: vals};
    }
    next = () => {
        let me = this;
        let vals = this.state.states.map((val, index)=>{
            let j = 0;
            for(let i=-1;i<2;i++){
                if (me.state.states[index-50-i]){
                    j++;
                }
                if(i!==0){
                    if(me.state.states[index+i]){
                        j++;
                    }
                }
                if (me.state.states[index+50+i]){
                    j++;
                }
            }
            if ((j<2 || j>3) && me.state.states[index]) {
                return false;
            } else if (j!==3 && !me.state.states[index]) {
                return false;
            }
            return true;
        });
        this.setState({states: vals});
    }
    changeState = (index) => {
        let vals = this.state.states;
        vals[index] = !vals[index];
        this.setState({states: vals});
    }
    render(){
        let fn = this.changeState;
        var cells = this.state.states.map(function(val, index){
            return <Cell key={index} value={index} alive={val} callback={fn} />;
        });
        return(
            <div>
                <GameBoard>
                    {cells}
                </GameBoard>
                <button onClick={this.next}>Next</button>
            </div>
        );
    }
}