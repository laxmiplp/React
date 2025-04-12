import { Component, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

class App extends Component {
  constructor() {
    super()
    this.state = {
      data: [],
      getProductByCountValue: null,
      count: 1
    }
  }

  getProducts = async () => {
    const response = await fetch(`https://fakestoreapi.com/products/ ${this.state.count}`)
    const data = await response.json()
    this.setState({ getProductByCountValue: data })
  }
  handleNext = () => {
    this.setState({ count: this.state.count + 1 })
  }
  handleReset = () => {
    this.setState({ count: 1 })
  }
  handlePrevious = () => {
    this.setState({ count: this.state.count - 1 })
  }
  componentDidMount() {
    this.getProducts()
    this.setState({ count: this.state.count + 1 })
  }

  componentDidUpdate(prevProps, prevState) {
    console.log("update phase", prevState)
    if (prevState !== this.state.count) {
      this.getProducts()
    }
  }


  render() {
    const { data, getProductByCountValue, count } = this.state
    console.log(getProductByCountValue)
    return (
      <>
        <h1>Count:{count}</h1>

        {getProductByCountValue &&
          <div key={getProductByCountValue.id} style={{
            border: '1px solid #ddd',
            borderRadius: '8px',
            padding: '15px',
            boxShadow: '0 2px 5px rgba(0,0,0,0.1)',
            transition: 'transform 0.3s ease',
            hover: {
              transform: 'translateY(-5px)'
            }
          }}>
            <h2 style={{
              fontSize: '18px',
              marginBottom: '10px',
              color: '#444',
              height: '40px',
              overflow: 'hidden'
            }}>{getProductByCountValue.title}</h2>

            <img
              src={getProductByCountValue.image}
              style={{
                width: '100%',
                height: '200px',
                objectFit: 'contain',
                marginBottom: '15px'
              }}
              alt={getProductByCountValue.title}
            />

            <p style={{
              color: '#666',
              fontSize: '14px',
              height: '60px',
              overflow: 'hidden',
              marginBottom: '10px'
            }}>{getProductByCountValue.description}</p>

            <p style={{
              backgroundColor: '#f8f8f8',
              padding: '5px 10px',
              borderRadius: '4px',
              display: 'inline-block',
              fontSize: '14px',
              color: '#555'
            }}>{getProductByCountValue.category}</p>

            <p style={{
              fontWeight: 'bold',
              fontSize: '18px',
              color: '#e63946',
              marginTop: '10px'
            }}>${getProductByCountValue.price}</p>
          </div>

        }
        <div style={{
          display: 'flex',
          justifyContent: 'center',
          gap: '15px',
          margin: '25px 0'
        }}>
          <button style={{
            padding: '10px 20px',
            backgroundColor: '#3498db',
            color: 'white',
            border: 'none',
            borderRadius: '5px',
            fontSize: '16px',
            cursor: 'pointer',
            transition: 'background-color 0.3s ease'
          }} onClick={this.handleNext} disabled={count >= 20}>Next</button>

          <button style={{
            padding: '10px 20px',
            backgroundColor: '#e74c3c',
            color: 'white',
            border: 'none',
            borderRadius: '5px',
            fontSize: '16px',
            cursor: 'pointer',
            transition: 'background-color 0.3s ease'
          }} onClick={this.handleReset} disabled={count == 1}>Reset</button>

          <button style={{
            padding: '10px 20px',
            backgroundColor: '#2ecc71',
            color: 'white',
            border: 'none',
            borderRadius: '5px',
            fontSize: '16px',
            cursor: 'pointer',
            transition: 'background-color 0.3s ease'
          }} onClick={this.handlePrevious} disabled={count <= 1}>Previous</button>
        </div>
      </>
    )
  }
}

export default App