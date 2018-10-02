import React,{ Component } from 'react';
import ReactDOM from 'react-dom';
import {Consumer} from "./context";
import pathToRegExp from 'path-to-regexp';
export default class Switch extends Component{
    constructor(){
        super();
    }
        render(){
        return <Consumer>
            {state=>{
                let pathname = state.location.pathname;
                let children = this.props.children;
                for(var i = 0;i<children.length;i++){
                    let child_path = children[i].props.path || '';
                        let reg = pathToRegExp(child_path,[],{end:false});
                        if(reg.test(pathname)){
                            return children[i];
                        }
                }
                return null;
            }
            }
            
            </Consumer>
           
        
    }
}