import React from 'react'
import { Link } from 'react-router-dom'
import { ContextConsumer } from '../FormContextProvider'
import { Container,Card,Title,Forms,Input,Button } from './Style/formStyle'

export default function Form(){

    return(
        <ContextConsumer>
                {context=>(
                    <Container>
                        <Card>
                            <Title>Welcome</Title>

                            <Forms onSubmit={()=> context.onSubmit}>
                                <Input type='text' name = 'firstName' placeholder='First name' value={context.firstName} onChange={context.handleUserInfo}/>
                                <Input type='text' name = 'lastName' placeholder='Last name' value={context.lastName} onChange={context.handleUserInfo}/>
                                <Input type='text' name = 'email' placeholder='Email address' value={context.email} onChange={context.handleUserInfo}/>

                                <Link to='/questions'><Button type='submit'>Submit</Button></Link>
                            </Forms>
                        </Card>
                    </Container>
                )}
        </ContextConsumer>
    )
}

