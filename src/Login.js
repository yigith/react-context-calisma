import React, { Component } from 'react';
import AppContext from './AppContext';

class Login extends Component {

  constructor(props) {
    super(props);
    this.state = { ad: "" };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
    this.setState({ ad: "" });
    this.context.setUserName(this.state.ad);
  }

  render() {
    return (
      <div>
        <h3>Kullanıcı Girişi</h3>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="ad">Kullanıcı Adı: </label>
          <input type="text" id="ad" value={this.state.ad} required
            onChange={(e) => this.setState({ ad: e.target.value })} />{" "}
          <button>Giriş Yap</button>
        </form>
      </div>
    )
  }
}

Login.contextType = AppContext;

export default Login;