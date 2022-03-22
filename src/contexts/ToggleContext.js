import React, {useState, createContext} from 'react'

export const ToggleContext = createContext()
const ToggleContextProvider = (props) => {
    const [pageState, setPageState] = useState({
        currentPage : '',
        currentParallaxPage: 0,
        currentScroll : 0,
        currentStep: 0,
        maxSteps: 9
    });

    
    const setMaxPages = (maxPages) => {
        const tmpState = {...pageState};
        tmpState.maxSteps = maxPages;
        setPageState(tmpState)
    }

    const [showSidebar, setShowSidebar] = useState(false)
    
    const closeBar = ()=>{
        setShowSidebar(!showSidebar)
    }

    const  bodyClick = () =>{
        setShowSidebar(false)
    }

    const [mobilePage, setMobilePage] = useState(0);

    const initializePage = (index) => {
        //set plants to the plants from the api
        setMobilePage(index);
    }

    return (
        <ToggleContext.Provider value={{showSidebar, closeBar, bodyClick, pageState, setPageState, setMaxPages, mobilePage, setMobilePage, initializePage}}>
            {props.children}
        </ToggleContext.Provider>
    )
}

export default ToggleContextProvider