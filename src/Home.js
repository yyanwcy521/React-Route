import React,{ Component } from 'react';
import ReactDOM from 'react-dom';
import { HashRouter as Router,Route} from 'react-router-dom';

export default class Home extends Component{
    constructor(){
        super();
    }
        render(){
        console.log(this.props);
        return(
            <div>home</div>
        )
    }
}