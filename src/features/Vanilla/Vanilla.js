import React, { useEffect } from 'react'
import { Container } from './Vanilla.styled'

const executeVanilla = () => {
  const RANDOM_QUOTE_API_URL = 'https://api.quotable.io/random'

  const quoteElement = document.getElementById('quote')
  const quoteInputElement = document.getElementById('quoteInput')
  const timerElement = document.getElementById('timer')

  quoteInputElement.addEventListener('input', () => {
    // get all the spans in the quoteElement
    const spanElements = quoteElement.querySelectorAll('span')
    const inputValue = quoteInputElement.value.split('')
    console.log({ inputValue })

    let correct = true

    spanElements.forEach((characterSpan, index) => {
      const inputCharacter = inputValue[index]
      if (inputCharacter === '' || inputCharacter === undefined) {
        characterSpan.classList.remove('correct')
        characterSpan.classList.remove('incorrect')
        correct = false
      } else if (inputCharacter === characterSpan.innerText) {
        characterSpan.classList.add('correct')
        characterSpan.classList.remove('incorrect')
      } else {
        characterSpan.classList.add('incorrect')
        characterSpan.classList.remove('correct')
        correct = false
      }
    })
    if (correct) renderNextQuote()
  })

  function getRandomQuote() {
    return fetch(RANDOM_QUOTE_API_URL)
      .then((response) => response.json())
      .then((data) => {
        return data.content
      })
      .catch((error) => console.log(error))
  }

  const renderNextQuote = async () => {
    const quote = await getRandomQuote()
    quoteElement.innerText = ''
    const splitQuote = quote.split('') // ["H", "e", "l", "l", "o"]

    splitQuote.forEach((char) => {
      const charSpan = document.createElement('span')
      charSpan.innerText = char
      quoteElement.appendChild(charSpan)
    })

    quoteInputElement.value = null
    startTimer()
  }

  let startTime // okdeclared as a variable that can be reassigned

  const startTimer = () => {
    timerElement.innerText = 0
    startTime = new Date()

    setInterval(() => {
      timerElement.innerText = getTimerTime(startTime)
    }, 1000)
  }

  const getTimerTime = (startTime) => {
    return Math.floor((new Date() - startTime) / 1000)
  }

  renderNextQuote()
}

const Vanilla = () => {
  useEffect(() => {
    executeVanilla()
  }, [])

  return (
    <Container>
      {' '}
      <div className="timer" id="timer">
        0
      </div>
      <div className="container">
        <div className="quote-display" id="quote"></div>
        <textarea id="quoteInput" className="quote-input" autoFocus></textarea>
      </div>
    </Container>
  )
}

export { Vanilla }
