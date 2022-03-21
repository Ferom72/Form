import React, { Component } from 'react'
const {Provider,Consumer } = React.createContext()

class FormContextProvider extends Component{

    state = {
        firstName:'',
        lastName: '',
        email: '',
        questions:[]
    }
    
    handleUserInfo = (e)=>{
        const {name,value} = e.target

        this.setState((prevState)=>({
            ...prevState,
            [name]: value
        }))
    }

    handleChange = (e) =>{
        const {name,value,id} = e.target

        this.setState(prevState =>({
            [name] : [{
                ...prevState, value
            }]
        }))
    }

    handleClick = (e) =>{
        const {name,value,id} = e.target.innerhtml

        this.setState(prevState =>({
            [name] : [{
                ...prevState, value
            }]
        }))
    }

    // onSubmit = (e) =>{
    //     e.preventDefault()

    //     this.setState(prevState => ({
    //         firstName: '',
    //         lastName: '',
    //         email: ''
    //     }))
    // }
    

    render(){
        return(
            <Provider value={{
                firstName: this.state.firstName,
                lastName: this.state.lastName,
                email: this.state.email,
                handleUserInfo : this.handleUserInfo,
                handleChange: this.handleChange,
                handleClick: this.handleClick,
                onSubmit: this.onSubmit
            }}
            >
                {this.props.children}
             </Provider>
        )
    }
}

export {FormContextProvider, Consumer as ContextConsumer}