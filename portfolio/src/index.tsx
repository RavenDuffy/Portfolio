import React, { useState } from "react"
import ReactDOM from "react-dom"
import "./sass/style.scss"
import placeholder from './images/placeholder.png'

class Clock extends React.Component<{}, {date: Date}> {
  timerID: any

  constructor(props: any) {
    super(props)
    this.state = { date: new Date() }
  }

  componentDidMount() {
    this.timerID = setInterval(
      () => this.tick(), 1000
    )
  }

  componentWillUnmount() {
    clearInterval(this.timerID)
  }

  tick() {
    this.setState({ date: new Date() })
  }

  render() {
    return (
      <div>
        <h2>It is {this.state.date.toLocaleTimeString()}</h2>
      </div>
    )
  }
}

const Counter: React.FC<{}> = () => {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click pls
      </button>
    </div>
  )
}

const App = () => (
  <div>
    <Clock />
    <Counter />
    <img src={placeholder} alt="pic"/>
  </div>
)

ReactDOM.render(
  <App />,
  document.getElementById("root")
)
