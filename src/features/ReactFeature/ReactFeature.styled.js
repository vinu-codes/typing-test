import styled from 'styled-components'

const Container = styled.div`
  background-color: transparent;
  box-sizing: border-box;
  background: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  margin: 0;
  position: relative;
  .quote-input {
    font-family: 'Roboto', sans-serif;
    background: transparent;
    border: 2px solid lightgrey;
    outline: none;
    width: 100%;
    height: 8rem;
    margin: auto;
    resize: none;
    padding: 0.5rem 1rem;
    font-size: 1rem;
    border-radius: 1rem;
  }

  .quote-input:focus {
    border-color: black;
  }

  .timer {
    display: flex;
    justify-content: center;
    align-items: center;
    color: black;
    font-size: 3rem;
    font-weight: bold;
    display: flex;
    flex-direction: column;
    margin-bottom: 16px;
    span {
      font-size: 30px;
    }
  }

  .container {
    background: transparent;
    border-radius: 1rem;
    display: flex;
    flex-direction: column;
    padding: 1rem;
    width: 700px;
    max-width: 90%;
  }

  .controls {
    background: lightgrey;
    border-radius: 1rem;
    display: flex;
    flex-direction: column;
    padding: 1rem;
    width: 100%;
    margin-top: 1rem;
    display: flex;
    flex-direction: row;
    gap: 5rem;
    .score {
      font-size: 1rem;
      font-weight: thin;
    }
    .caps {
      font-size: 1rem;
      font-weight: thin;
    }
    .error {
      font-size: 1rem;
      font-weight: thin;
    }
  }

  .quote-display {
    margin-bottom: 1rem;
    margin-left: 1rem;
    margin-right: 1rem;
    font-size: 1.5rem;
  }

  .correct {
    color: green;
  }
  .incorrect {
    color: red;
    text-decoration: underline;
  }
`

const SpanQuote = styled.span`
  &.correct {
    color: green;
  }
  &.incorrect {
    color: red;
  }
  &.item {
    color: black;
  }
`

export { Container, SpanQuote }
