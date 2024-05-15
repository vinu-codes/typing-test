import styled from 'styled-components'

const Container = styled.div`
  background-color: transparent;
  box-sizing: border-box;
  font-family: 'Roboto', sans-serif;
  background: green;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  margin: 0;
  .quote-input {
    font-family: 'Roboto', sans-serif;
    background: transparent;
    border: 2px solid #a1922e;
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
    color: palegoldenrod;
    position: absolute;
    top: 3rem;
    font-size: 3rem;
    font-weight: bold;
  }

  .container {
    background: palegoldenrod;
    border-radius: 1rem;
    display: flex;
    flex-direction: column;
    padding: 1rem;
    width: 700px;
    max-width: 90%;
  }

  .quote-display {
    margin-bottom: 1rem;
    margin-left: 1rem;
    margin-right: 1rem;
    font-size: 1rem;
  }

  .correct {
    color: green;
  }
  .incorrect {
    color: red;
    text-decoration: underline;
  }
`

export { Container }
