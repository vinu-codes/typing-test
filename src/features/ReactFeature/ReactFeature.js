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

const calculateErrors = (result) => {
  if (!result.length || !result) return 'Errors:'
  const errors = result.filter((item) => {
    return item.className === 'incorrect'
  })
  const total = errors.length
  return `Errors: ${total}`
}

const checkIfCorrect = (result) => {
  console.log({ result })
  if (!result.length || !result) return false

  const output = result.every((item) => {
    return item.className === 'correct'
  })

  return output
}

const RANDOM_QUOTE_API_URL = 'https://api.quotable.io/random'

const ReactFeature = () => {
  const [inputValue, setInputValue] = useState('')
  const [result, setResult] = useState([])
  const [caps, setCaps] = useState(false)
  const [modal, setModal] = useState(true)
  const [timer, setTimer] = useState(false)

  const getRandomQuote = async () => {
    try {
      const response = await fetch(RANDOM_QUOTE_API_URL)
      const data = await response.json()
      const splitData = data.content.split('')
      const newDataStructure = applyDataStructure(splitData)
      setResult(newDataStructure)
      setTimer(true)
    } catch (error) {
      console.error(error)
      setResult([])
    }
  }

  useEffect(() => {
    setResult(updateDataStructure(inputValue, result))
  }, [inputValue])

  useEffect(() => {
    getRandomQuote()
  }, [])

  useEffect(() => {
    if (checkIfCorrect(result)) {
      setModal(true)
      getRandomQuote()
      setInputValue('')
    }
  }, [result])

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

  const renderApiQuote = () => {
    return result.map((item, index) => {
      return (
        <SpanQuote key={index} className={item.className}>
          {item.label}
        </SpanQuote>
      )
    })
  }

  return (
    <Container>
      {' '}
      {!!modal && (
        <Modal title="Report" callback={handleModal}>
          <ModalContents />
        </Modal>
      )}
      <div className="timer" id="timer">
        0
      </div>
      <div className="controls" id="controls">
        <div className="error" id="error">
          {calculateErrors(result)}
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
