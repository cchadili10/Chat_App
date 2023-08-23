import { useContext } from "react";
import { ChatContext } from "../context/ChatContext";

export const useChat = ()=>{
    const context = useContext(ChatContext)
    if(!context){
        throw Error('useChat must be used inside ChatContextProvider')
    }
    return context
}