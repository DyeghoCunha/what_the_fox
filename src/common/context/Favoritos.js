import { createContext, useState } from "react";

const FavoritoContext = createContext()

const FavoritoProvider = ({children})=>{


  //!_____ INICIO MODAL______

const [aberto , setAberto] = useState(false)
const [cardModal, setCardModal]=useState({})


   //!_____FIM MODAL______

  const [favorito, setFavorito]=useState([])
  

  const value = {
    favorito,
    setFavorito,
    aberto,setAberto, cardModal, setCardModal

  }

  return(
    <FavoritoContext.Provider value={value}>
      {children}
    </FavoritoContext.Provider>
  )
}

export { FavoritoContext,FavoritoProvider}