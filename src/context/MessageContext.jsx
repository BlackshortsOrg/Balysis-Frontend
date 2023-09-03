import React,{createContext, useContext, useState} from 'react'
const MessageContext = createContext()

export function useMessage(){
    return useContext(MessageContext)
}
export function MessageProvider({children}) {
    const [message, setMessage] = useState("")
    const setMessageText=(newMessage)=>{
        setMessage(newMessage)
    }
    return (
        <MessageContext.Provider value={{message,setMessageText}}>
            {children}
        </MessageContext.Provider>
    )
}