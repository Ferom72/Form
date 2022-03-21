import React from 'react'
import { ContextConsumer } from '../FormContextProvider'

export default function Results(){
    return(
        <>
            <ContextConsumer>
                {context =>
                    <>  
                        {console.log(context)}
                        <div>{context.firstName}</div>
                        <div>{context.lastName}</div>
                        <div>{context.email}</div>
                        {context.questions.map(answers =>(
                            <div>{answers.questions}</div>
                        ))}
                    </>
                }
            </ContextConsumer>
        </>
    )
}