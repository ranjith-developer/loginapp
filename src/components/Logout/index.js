// Write your code here
import {Component} from 'react'
import './index.css'

class Logout extends Component {
  state = {login: true}

  change = () => {
    this.setState(prevState => ({login: !prevState.login}))
  }

  render() {
    const {login} = this.state

    return <div>{login ? <p className="heading">Logout</p> : null}</div>
  }
}

export default Logout
