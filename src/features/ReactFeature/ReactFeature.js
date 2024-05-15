import React, { useState, useEffect } from 'react'
import { Container } from './ReactFeature.styled'
import { set } from 'ramda'

const RANDOM_QUOTE_API_URL = 'https://api.quotable.io/random'

const ReactFeature = () => {
  const [inputValue, setInputValue] = useState('')
  const [result, setResult] = useState([])

  const getRandomQuote = async () => {
    try {
      const response = await fetch(RANDOM_QUOTE_API_URL)
      const data = await response.json()
      setResult(data.content)
    } catch (error) {}
  }

  useEffect(() => {
    getRandomQuote()
  }, [])

  const checkInputMatch = (value) => {
    console.log({ value })
  }
  const onChange = (e) => {
    const value = e.target.value
    setInputValue(value)
    checkInputMatch(value)
  }

  return (
    <Container>
      {' '}
      <div className="timer" id="timer">
        0
      </div>
      <div className="container">
        <div className="quote-display" id="quote"></div>
        <textarea
          id="quoteInput"
          className="quote-input"
          autoFocus
          onChange={onChange}
          value={inputValue}
        ></textarea>
      </div>
    </Container>
  )
}

export { ReactFeature }
