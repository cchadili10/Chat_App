import React from 'react'
import { useReducer,createContext } from 'react'

export const ChatContext = createContext()

const ChatReducer = (state,action)=>{
    switch(action.type){
        case'SET_CHAT':
            return{
                userM:action.payload
            }
        default:
            return state
    }
}

export const ChatContextProvider = ({children})=>{
    const [state,dispatch] = useReducer(ChatReducer,{
        userM:null
    })
    return(
        <ChatContext.Provider value={{...state,dispatch}}>
            {children}
        </ChatContext.Provider>
    )
}