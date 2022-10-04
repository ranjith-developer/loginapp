// Write your code here
import {Component} from 'react'
import './index.css'

class Login extends Component {
  state = {login: false}

  change = () => {
    this.setState(prevState => ({login: !prevState.login}))
  }

  render() {
    const {login} = this.state

    return <div>{login ? null : <p className="heading">Login</p>}</div>
  }
}

export default Login
