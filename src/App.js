import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import {TodoList} from "./TodoList";
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import moment from "moment";
import {Login} from "./component/Login";
import {TodoApp} from "./TodoApp";
import {BrowserRouter as Router, Link, Route} from 'react-router-dom'




const LoginView = () => (
    <Login/>
);

const TodoView = () => (
    <TodoApp/>
);

class App extends Component {

    constructor(props) {
       super(props);
       localStorage.setItem('email',"cosw");
       localStorage.setItem('password',"123");

    }

    render() {

            return (
            <Router>
                <div className="App">
                    <header className="App-header">
                        <img src={logo} className="App-logo" alt="logo"/>
                        <h1 className="App-title">TODO React App</h1>
                    </header>

                    <br/>
                    <br/>

                    <ul>
                        {localStorage.getItem('isLoggedIn') === "true"?
                            <li><Link to="/todo">Todo</Link></li> : <li><Link to="/">Login</Link></li>}
                    </ul>

                    <div>
                        {localStorage.getItem('isLoggedIn') === "true"?
                            < Route path = "/todo" component={TodoView}/> : <Route exact path="/" component={LoginView}/>
                        }
                    </div>
                </div>
            </Router>
        );
    }

}

export default App;