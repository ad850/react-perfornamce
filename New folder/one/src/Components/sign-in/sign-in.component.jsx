import React, { Component } from 'react'

import './sign-in.styles.scss';

import FormInput from '../form-input/form-input.component';

class Signin extends Component {

    constructor(props) {
        super(props);

        this.state = {

            email: "",
            password: "",
        }
    }

    handleSubmit = event => {

        event.preventDefault();

        this.setState({ email: "", password: "" })
    }



    handleChnage = event => {

        const { value, name } = event.target;

        this.setState({ [name]: value })

    };



    render() {
        return (
            <div className="sign-in">

                <h2>I already have an account</h2>
                <span> Sign in with your email and password</span>

                <form onSubmit={this.handelSubmit}>

                    <FormInput
                        name="email"
                        type="email"
                        value={this.state.email}
                        handleChange={this.handleChange}
                        label="email"
                        required
                    />

                

                    <FormInput
                        name="Password"
                        type="Password"
                        value={this.state.email}
                        handleChange={this.handleChange}
                        label="password"
                        required
                    />

                  

                    <input type="submit" value="submit form" />

                </form>

            </div >
        );
    }
}


export default Signin;