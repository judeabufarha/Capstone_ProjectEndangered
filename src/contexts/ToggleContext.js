import React, {useState, createContext} from 'react'

export const ToggleContext = createContext()
const ToggleContextProvider = (props) => {
    const [showSidebar, setShowSidebar] = useState(false)
    
    const closeBar = ()=>{
        setShowSidebar(!showSidebar)
    }

    const  bodyClick = () =>{
        setShowSidebar(false)
    }

    console.log(showSidebar)
    return (
        <ToggleContext.Provider value={{showSidebar, closeBar, bodyClick}}>
            {props.children}
        </ToggleContext.Provider>
    )
}

export default ToggleContextProvider
