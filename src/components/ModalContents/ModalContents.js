import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  div {
    border: 1px solid lightgrey;
    margin-bottom: 10px;
    padding: 10px;
    border-radius: 8px;
  }
`

const Button = styled.button`
  border: none;
  background: blue;
  color: white;
  font-size: 16px;
  padding: 10px;
  border-radius: 8px;
`

const ModalContents = ({ children, callback }) => {
  return (
    <Container>
      <div className="wpm">Words Per Minute:</div>
      <div className="mistakes">Mistakes: {children}</div>
      <div className="time">Total Time:</div>
      <Button onClick={() => callback({ action: 'play_again', value: true })}>
        Play Again!
      </Button>
    </Container>
  )
}

export { ModalContents }
