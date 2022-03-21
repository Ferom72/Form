import styled from 'styled-components'

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 60vh;
    padding:2em;
`

export const Card = styled.div`
    background: rgba(225,225,225);
    padding: 3em 5em;
    border-radius: 10px;
`

export const Title = styled.h1`
    display:flex;
    flex-direction:column;
    text-align: center;
    margin: 0.5em;
    padding: 0;
`

export const Forms = styled.form`
    display:flex;
    flex-direction:column;
`

export const Input = styled.input`
    margin: 1em 0;
    padding: 0.7em 1em;
    border: none;
    border-radius: 10px;
`

export const Button = styled.button`
    margin: 0.25em 0;
    padding: .2em 5em;
    border-radius: 10px;

    :hover{
      cursor:pointer;
    }
`