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

const toCelsius = (fahrenheit: number): number => {
  return (fahrenheit - 32) * 5 / 9;
}

const toFahrenheit = (celsius: number): number => {
  return (celsius * 9 / 5) + 32;
}

const tryConversion = (temperature: string, convertFunc: Function): string => {
  const input = parseFloat(temperature);
  if (Number.isNaN(input)) return '';
  const output = convertFunc(input);
  const rounded = Math.round(output * 1000) / 1000;
  return rounded.toString();
}

const BoilingVerdict = (props: any) => {
  return (props.celsius >= 100) ? <p>Boiling</p> : <p>Not Boiling</p>
}

type TempState = {
  temperature: string,
  scale: string
}

class Calculator extends React.Component<{}, TempState> {
  constructor(props: any) {
    super(props)
    this.handleCelsiusChange = this.handleCelsiusChange.bind(this)
    this.handleFahrenheitChange = this.handleFahrenheitChange.bind(this)
    this.state = { temperature: '', scale: 'c' }
  }

  handleCelsiusChange(e: string) {
    this.setState({ scale: 'c', temperature: e })
  }

  handleFahrenheitChange(e: string) {
    this.setState({ scale: 'f', temperature: e })
  }

  render() {
    const scale = this.state.scale;
    const temperature = this.state.temperature;
    const celsius = scale === 'f' ? tryConversion(temperature, toCelsius) : temperature;
    const fahrenheit = scale === 'c' ? tryConversion(temperature, toFahrenheit) : temperature;

    return (
      <>
        <TemperatureInput 
          scale='c'
          temperature={celsius}
          onTemperatureChange={this.handleCelsiusChange}
        />
        <TemperatureInput 
          scale='f'
          temperature={fahrenheit}
          onTemperatureChange={this.handleFahrenheitChange}
        />
        <BoilingVerdict
          celsius={parseFloat(celsius)} />
      </>
    )
  }
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

type TemperatureProps = {
  scale: string,
  temperature: string,
  onTemperatureChange: (value: string) => void
}

class TemperatureInput extends React.Component<TemperatureProps, {}> {
  constructor(props: any) {
    super(props)
    this.handleChange = this.handleChange.bind(this)
    this.state = { temperature: '' }
  }

  handleChange(e: any) {
    this.props.onTemperatureChange(e.target.value)
  }

  render() {
    const temperature = this.props.temperature
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
