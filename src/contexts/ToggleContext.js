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

    const [animal, setAnimal] = useState(0);

    
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
        setMobilePage(index);
    }

    const templateMenu = [
        { name: "Landing", isEnabled: false },
        { name: "About", isEnabled: false },
        { name: "Importance", isEnabled: false },
        { name: "Status", isEnabled: false },
        { name: "Population", isEnabled: false },
        { name: "Past", isEnabled: false },
        { name: "Future", isEnabled: false },
        { name: "Conservation", isEnabled: false },
        { name: "Immersive Experience", isEnabled: false },
      ]
    
      const menuStructure = {
        animals: {
          polarbear: [...templateMenu],
          elephant: [...templateMenu],
          crane: [...templateMenu],
          turtle: [...templateMenu]
        }
      }
    
      const AnimalDictionary = {
        1: 'polarbear',
        2: 'elephant',
        3: 'crane',
        4: 'turtle'
      }
    
      const [subMenuItems, setsubMenuItems] = useState(menuStructure)

    return (
        <ToggleContext.Provider value={{
            showSidebar,
            closeBar,
            bodyClick,
            pageState,
            setPageState,
            setMaxPages,
            mobilePage,
            setMobilePage,
            initializePage,
            animal,
            setAnimal,
            subMenuItems,
            setsubMenuItems,
            menuStructure,
            AnimalDictionary,
            templateMenu
        }}>
            {props.children}
        </ToggleContext.Provider>
    )
}

export default ToggleContextProvider