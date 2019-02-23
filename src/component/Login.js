import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import FormControl from '@material-ui/core/FormControl';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import LockIcon from '@material-ui/icons/LockOutlined';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import './Login.css'

import logof from './../logof.jpg';
import {RegisterType} from "./../register/RegisterType";
import {BrowserRouter as Router, Link, Route} from 'react-router-dom'

export class Login extends React.Component{
        constructor(props) {
            super(props);
            this.state={email:"", password: ""};
            this.handleSubmit = this.handleSubmit.bind(this);

        }

        handleSubmit(e) {
            if(localStorage.getItem('email') === this.state.email && localStorage.getItem('password') === this.state.password)
                localStorage.setItem('isLoggedIn', "true");
            this.setState({email:"", password: ""});
        }
        
    register(event){
            window.location.reload();
            localStorage.setItem('isLoggedIn',false);
    }

    render(){
        return (
            <React.Fragment>
                <CssBaseline />
                <main className="layout">
                    <Paper elevation={3} className="paper">
                        <Avatar className="avatar">
                            <LockIcon />
                        </Avatar>
                        <Typography variant="h5">
                            Task Planner App
                        </Typography>
                         <img src={logof} alt="logo" className="img"/>       
                        <form className="form" onSubmit={this.handleSubmit}>
                            <FormControl margin="normal" required fullWidth>
                                <InputLabel htmlFor="email">Email Address</InputLabel>
                                <Input
                                   id="email"
                                   name="email"
                                   autoComplete="email"
                                   autoFocus
                                   value = {this.state.email}
                                   onChange={event => this.setState({email:event.target.value})}
                                />

                            </FormControl>
                            <FormControl margin="normal" required fullWidth>
                                <InputLabel htmlFor="password">Password</InputLabel>
                                <Input
                                   id="password"
                                   name="password"
                                   id="password"
                                   autoComplete="current-password"
                                   value = {this.state.password}
                                   onChange={event => this.setState({password:event.target.value})}
                                />


                            </FormControl>
                            <Button
                                type="submit"
                                fullWidth
                                variant="raised"
                                color="primary"
                                className="submit"
                            >
                                Sign in
                            </Button>
                            
                             <br/> 
                              <br/>
                               <br/>
                            <Router>
                            
                            
                    <div className="bottom">
                          <Button onClick={this.register}>Register</Button>


                    </div>
                </Router>
                        </form>
                    </Paper>
                </main>
            </React.Fragment>
        );
    }

}