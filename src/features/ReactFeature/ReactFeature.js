import React, { useState, useEffect } from 'react'
import { Container, SpanQuote } from './ReactFeature.styled'
import { Modal } from '@common/Modal'
import { ModalContents } from '@components/ModalContents'
import { set } from 'ramda'

const applyDataStructure = (arg) => {
  if (!arg || !arg.length) return []

  const result = arg.map((item, index) => {
    return {
      label: item,
      index: index,
      className: '',
    }
  })
  return result
}

const updateDataStructure = (inputValue, result) => {
  if (!result.length || !result) return []

  if (!inputValue || !inputValue.length || inputValue === '') {
    return result.map((item) => ({
      ...item,
      className: 'item',
    }))
  }

  const output = result.map((item, index) => {
    if (!inputValue[index]) {
      return {
        ...item,
        className: 'item',
      }
    }
    if (inputValue[index] === item.label) {
      return {
        ...item,
        className: 'correct',
      }
    } else {
      return {
        ...item,
        className: 'incorrect',
      }
    }
  })
  return output
}

const checkIfCorrect = (result) => {
  console.log({ result })
  if (!result.length || !result) return false

  const output = result.every((item) => {
    return item.className === 'correct'
  })

  return output
}

const calculateErrors = (result) => {
  if (!result || !result.length) return 'Errors: 0'
  const errors = result.filter((item) => {
    return item.className === 'incorrect'
  })
  const total = errors.length
  return `Errors: ${total}`
}

const RANDOM_QUOTE_API_URL = 'https://api.quotable.io/random'

const ReactFeature = () => {
  const [inputValue, setInputValue] = useState('')
  const [result, setResult] = useState([])
  const [caps, setCaps] = useState(false)
  const [modal, setModal] = useState(false)
  const [timeRemaining, setTimeRemaining] = useState(3)

  const getRandomQuote = async () => {
    try {
      const response = await fetch(RANDOM_QUOTE_API_URL)
      const data = await response.json()
      const splitData = data.content.split('')
      const newDataStructure = applyDataStructure(splitData)
      setResult(newDataStructure)
      setTimeRemaining(3)
    } catch (error) {
      console.error(error)
      setResult([])
    }
  }
  useEffect(() => {
    // whenever we use a window function, we need to assign it to a variable, so we can do something with it
    // reference to the interval
    const intervalId = setInterval(() => {
      setTimeRemaining((timeRemaining) => Math.max(timeRemaining - 1, 0))
    }, 1000)

    // setting the interval to be cleared when the timeRemaining is 0
    if (timeRemaining === 0) {
      clearInterval(intervalId)
    }
    // clearing the setInterval
    return () => clearInterval(intervalId)
  }, [])

  useEffect(() => {
    if (timeRemaining === 0) {
      setModal(true)
    }
  }, [timeRemaining])

  useEffect(() => {
    setResult(updateDataStructure(inputValue, result))
  }, [inputValue])

  useEffect(() => {
    getRandomQuote()
  }, [])

  const onChange = (e) => {
    const value = e.target.value
    setInputValue(value)
  }

  const handleKeyPress = (e) => {
    if (e.getModifierState('CapsLock')) {
      setCaps(!caps)
    }
  }

  const handleModal = ({ value }) => {
    setModal(value)
  }

  const handleCallback = ({ action, value }) => {
    if (action === 'play_again') {
      setModal(false)
      getRandomQuote()
      setInputValue('')
    }
  }

  const renderApiQuote = () => {
    return result.map((item, index) => {
      return (
        <SpanQuote key={index} className={item.className}>
          {item.label}
        </SpanQuote>
      )
    })
  }

  const errors = calculateErrors(result)

  return (
    <Container>
      {' '}
      {!!modal && (
        <Modal title="Report" callback={handleModal}>
          <ModalContents callback={handleCallback}>{errors}</ModalContents>
        </Modal>
      )}
      <div className="timer" id="timer">
        {timeRemaining}
      </div>
      <div className="controls" id="controls">
        <div className="error" id="error">
          {errors ? errors : 'Errors: 0'}
        </div>
        <div className="caps" id="caps">
          {!!caps ? 'Caps Lock: on' : 'Caps Lock: off'}
        </div>
      </div>
      <div className="container">
        <div className="quote-display" id="quote">
          {renderApiQuote()}
        </div>
        <textarea
          id="quoteInput"
          className="quote-input"
          autoFocus
          onChange={onChange}
          value={inputValue}
          onKeyDown={handleKeyPress}
          onKeyPress={handleKeyPress}
          onKeyUp={handleKeyPress}
        ></textarea>
      </div>
    </Container>
  )
}

export { ReactFeature }
