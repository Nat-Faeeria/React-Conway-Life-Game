/**
 * Created by nathanael on 16/02/16.
 */
import React from 'react';
import { Cell } from './cell'
import { GameBoard } from './gameboard'

export class Game extends React.Component {
    constructor(){
        super();
        let vals = this.getEmptyArray();
        this.state = {cells: vals, tick: ""};
    }
    getEmptyArray = () => {
        let array = [];
        for (let i=0;i<1600;i++){
            array.push(false);
        }
        return array;
    }
    next = () => {
        let updatedCells = this.state.cells.map((val, index, cells)=>{
            let nbNearbyCells = 0;
            for(let i=-1;i<2;i++){
                if (cells[index-50-i]){
                    nbNearbyCells++;
                }
                if(i!==0){
                    if(cells[index+i]){
                        nbNearbyCells++;
                    }
                }
                if (cells[index+50+i]){
                    nbNearbyCells++;
                }
            }
            return !((nbNearbyCells < 2 || nbNearbyCells > 3) && cells[index] || nbNearbyCells !== 3 && !cells[index]);

        });
        this.setState({cells: updatedCells});
    }
    loop = () => {
        let tick = setInterval(this.next, 1);
        this.setState({interval: tick});
    }
    stopLoop = () => {
        clearInterval(this.state.interval);
    }
    clear = () => {
        this.setState({cells: this.getEmptyArray()});
    }
    changeState = (index) => {
        let cells = this.state.cells;
        cells[index] = !cells[index];
        this.setState({cells: cells});
    }
    gosperGliderInit = () => {
        let cells = this.getEmptyArray();
        //left square
        cells[401]=true;
        cells[402]=true;
        cells[451]=true;
        cells[452]=true;

        //left glider
            //back bar
            cells[411]=true;
            cells[461]=true;
            cells[511]=true;

            //upper part
            cells[313]=true;
            cells[314]=true;
            cells[362]=true;


            //down part
            cells[562]=true;
            cells[613]=true;
            cells[614]=true;

            //front
            cells[366]=true;
            cells[417]=true;
            cells[465]=true;
            cells[467]=true;
            cells[468]=true;
            cells[517]=true;
            cells[566]=true;

        //right glider
        cells[225]=true
        cells[273]=true
        cells[275]=true
        cells[321]=true
        cells[322]=true
        cells[371]=true
        cells[372]=true
        cells[421]=true
        cells[422]=true
        cells[473]=true
        cells[475]=true
        cells[525]=true

        //right square
        cells[335]=true
        cells[336]=true
        cells[385]=true
        cells[386]=true

        this.setState({cells: cells});
    }
    floweringInit = () => {
        let cells = this.getEmptyArray();
        cells[722]=true;
        cells[772]=true;
        cells[773]=true;
        cells[822]=true;
        cells[824]=true;
        cells[872]=true;
        cells[873]=true;
        cells[874]=true;
        cells[875]=true;
        this.setState({cells: cells});
    }
    render(){
        let cells = this.state.cells.map((state, index) => {
            return <Cell key={index} value={index} alive={state} callback={this.changeState} />;
        });
        return(
            <div className="flex">
                <div className="border">
                    <h3 className="margin-left">React Conway's Life game</h3>
                    <p className="margin-left">A quick implementation of Conway's Life game with Facebook's React</p>
                    <p className="margin-left margin-right">Click anywhere on the board, then click on Next if you want to see your cells evolve step by step, or on Loop if you want them to evolve on their own. Clear will destroy every cells on the board, and the other buttons are preset patterns.</p>
                    <button className={btnClass} onClick={this.next}>Next</button>
                    <button className={btnClass} onClick={this.loop}>Loop</button>
                    <button className={btnClass} onClick={this.stopLoop}>Stop loop</button>
                    <button className={btnClass} onClick={this.clear}>Clear</button>
                    <h5 className="margin-left">Preset patterns : </h5>
                    <button className={btnClass} onClick={this.gosperGliderInit}>Gosper Glider</button>
                    <button className={btnClass} onClick={this.floweringInit}>Simple flowering</button>
                    <p className="margin-left margin-top">Sources are available <a target="_blank" href="https://github.com/Nat-Faeeria/React-Conway-Life-Game">here</a></p>
                    <footer className="margin-left"><p>Made by Nathanaël Gimenez - <a target="_blank" href="http://nathanael-gimenez.com">nathanael-gimenez.com</a></p></footer>
                </div>
                <div>
                    <GameBoard>
                        {cells}
                    </GameBoard>
                </div>
            </div>
        );
    }
}
const btnClass = "mdl-button mdl-js-button mdl-button--raised mdl-button--colored margin-bottom margin-left";