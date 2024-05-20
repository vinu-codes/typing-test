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
  cursor: pointer;
`

const ModalContents = ({ children, callback, data }) => {
  return (
    <Container>
      <div className="time">Total Time: 30 min</div>
      <div className="mistakes">Mistakes: {children}</div>
      <Button onClick={() => callback({ action: 'play_again', value: true })}>
        Play Again!
      </Button>
    </Container>
  )
}

export { ModalContents }
