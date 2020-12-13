import React, { useState } from "react"
import ReactDOM from "react-dom"

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
  <>
    <Clock />
    <Counter />
  </>
)

ReactDOM.render(
  <App />,
  document.getElementById("root")
)
