import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: pink;
  color: white;

  display: flex;
  justify-content: center;
  align-items: center;
`

const Register = () => {
  return (
    <Container>
      <h1>Register</h1>
    </Container>
  )
}

export default Register
