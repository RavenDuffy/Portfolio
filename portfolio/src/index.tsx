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

const BoilingVerdict = (props: any) => {
  return (props.celsius >= 100) ? <p>Boiling</p> : <p>Not Boiling</p>
}

type TempState = {
  temperature: string
}

class Calculator extends React.Component<{}, TempState> {
  constructor(props: any) {
    super(props)
    this.handleChange = this.handleChange.bind(this)
    this.state = { temperature: '' }
  }

  handleChange(e: any) {
    this.setState({ temperature: e.target.value })
  }

  render() {
    const temperature = this.state.temperature
    return (
      <>
        <TemperatureInput scale='c' />
        <TemperatureInput scale='f' />
      </>
    )
  }
}

type TempInState = {
  temperature: string;
}

type scaleNames = {
  [i: string]: string
  c: string;
  f: string;
}

const scaleNames: scaleNames = {
  c: 'Celsius',
  f: 'Fahrenheit'
}

class TemperatureInput extends React.Component<{scale: string}, TempInState> {
  constructor(props: any) {
    super(props)
    this.handleChange = this.handleChange.bind(this)
    this.state = { temperature: '' }
  }

  handleChange(e: any) {
    this.setState({ temperature: e.target.value })
  }

  render() {
    const temperature = this.state.temperature
    const scale = this.props.scale
    return (
      <fieldset>
        <legend>Enter Temp in {scaleNames[scale]}:</legend>
        <input 
          value={temperature}
          onChange={this.handleChange} />
      </fieldset>
    )
  }
}

const App = () => (
  <>
    <Clock />
    <Counter />
    <img src={placeholder} alt="pic"/>
    <Calculator />
  </>
)

ReactDOM.render(
  <App />,
  document.getElementById("root")
)
