import React from 'react';


class Login extends React.Component {
    state = {
        email: '',
        password: "Sign In"
    }

    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        });
    }

    handleSubmit = (e) => {
        e.preventDefault();
        //console.log(this.state);
        
        if (this.state.email.length > 0 && this.state.password.length > 0) {
            
        } else {
            alert("Your Cant Log In");
        }
    }

    render() {
        return (
            <div id="centerDiv">
                <div id="div1">

                </div>

                <div id="div2">
                    <h2>Welcome Back</h2>
                    <p>
                        Texto aleatório somente para exemplo aleatório somente para exemplo aleatório somente para exemplo
                        aleatório somente para exemplo aleatório somente para exemplo aleatório somente para exemplo.
                </p>
                    <span>Already a Member</span> <a href="#">Sign In</a>
                    <button className="largeButton">Sign In With Google</button>
                    <button className="largeButton">Sign In With Facebook</button>
                    <div id="divOr">
                        <hr id="hr1" /> <span id="spanOr">or</span> <hr id="hr2" />
                    </div>
                    <br />
                    <form id="someForm" action="#" method="POST" onSubmit={this.handleSubmit}>
                        <label>Email Address </label>
                        <input type="text" placeholder="Type Your Email" name="email" id="email" onChange={this.handleChange}/>

                        <label>Password <a href="" className="rAchor">Forgot Password</a> </label>
                        <input type="password" placeholder="Type Your Password" name="password" id="password" onChange={this.handleChange}/>

                        <button type="submit">Sign In</button>
                    </form>
                </div>
            </div>
        );
    }
}

export default Login;