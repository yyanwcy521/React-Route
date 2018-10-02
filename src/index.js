import React,{ Component } from 'react';
import ReactDOM from 'react-dom';
import { HashRouter as Router,Route,Link,Redirect,Switch} from './react-router-dom';
import Home from './Home';
import Profile from './Profile';
import User from './User';
import 'bootstrap/dist/css/bootstrap.css'; 

export default class App extends Component{
    constructor(){
        super();
    }
        render(){
        return(
            <Router>
                <div>
                    <div>
                        <Link to='/home'>首页</Link>
                        <Link to='/profile'>个人中心</Link>
                        <Link to='/user'>用户</Link>
                    </div>
                    <div>
                        {/*exact 是严格匹配*/}
                        <Switch>
                        <Route path="/home" exact={true} component={Home}></Route>
                        <Route path="/profile" component={Profile}></Route>
                        <Route path="/user" component={User}></Route>
                        <Redirect to="/home"></Redirect>
                        </Switch>
                    </div>
                </div>
            </Router>
        )
    }
}


ReactDOM.render(<App />, document.getElementById('root'));

