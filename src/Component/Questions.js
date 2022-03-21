import React from 'react'
import { Link } from 'react-router-dom'
import { ContextConsumer } from '../FormContextProvider'
import FormInfo from '../FormInfo/formInfo.json'
import {Questions,Question, QuestionContainer, TextInput, RadioInput, Answers, AnswerContainer, CheckBoxInput, Forms, Button} from './Style/Question'

export default function FormQuestions(){

    return(

        <Questions>
            <ContextConsumer>
                {context =>(
                    <Forms onSubmit={()=> context.onSubmit}>
                        {FormInfo.map((formquestions)=>{

                            if(formquestions.type === "text"){
                               return (
                                   <QuestionContainer>
                                        <Question>{formquestions.question}</Question>
                                        <TextInput name='questions' type={formquestions.type}  value={context.questions} onChange={context.handleChange}/>
                                    </QuestionContainer>
                               )
                            }

                            if(formquestions.type === 'radio'){
                                return(
                                    <QuestionContainer>
                                        <Question>{formquestions.question}</Question>
                                        <AnswerContainer>
                                            <RadioInput name='questions' id='1' type={formquestions.type} value={context.questions} onClick ={context.handleClick}/>
                                            <Answers for='1'>{formquestions.answer1}</Answers>
                                        </AnswerContainer>
                                        <AnswerContainer>
                                            <RadioInput name='questions' id='2' type={formquestions.type} value={context.questions} onClick ={context.handleClick}/>
                                            <Answers for='2'>{formquestions.answer2}</Answers>
                                        </AnswerContainer>
                                        <AnswerContainer>
                                            <RadioInput name='questions' id='3' type={formquestions.type} value={context.questions} onClick ={context.handleClick}/>
                                            <Answers for='3'>{formquestions.answer3}</Answers>
                                        </AnswerContainer>
                                    </QuestionContainer>
                                )
                            }

                            if(formquestions.type === 'checkbox'){
                                
                                return(
                                    <QuestionContainer>
                                        <Question>{formquestions.question}</Question>
                                        <AnswerContainer>
                                            <CheckBoxInput name='questions' id='4' type={formquestions.type} value={context.questions} onClick ={context.handleClick}/>
                                            <Answers for='4'>{formquestions.answer1}</Answers>
                                        </AnswerContainer>
                                        <AnswerContainer>
                                            <CheckBoxInput name='questions' id='5' type={formquestions.type} value={context.questions} onClick={context.handleClick}/>
                                            <Answers for='5'>{formquestions.answer2}</Answers>
                                        </AnswerContainer>
                                        <AnswerContainer>
                                            <CheckBoxInput name='questions' id='6' type={formquestions.type} value={context.questions} onClick={context.handleClick}/>
                                            <Answers for='6'>{formquestions.answer3}</Answers>
                                        </AnswerContainer>
                                    </QuestionContainer>
                                )
                            }
                        })}

                        <Link to='/results'><Button type='submit'>Submit</Button></Link>
                    </Forms>
                )}
            </ContextConsumer>
        </Questions>
        
            

    )
} 