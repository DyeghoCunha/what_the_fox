import { createContext, useEffect, useState } from "react";

const FavoritoContext = createContext()

const FavoritoProvider = ({children})=>{


  //!_____ INICIO MODAL______

const [aberto , setAberto] = useState(false)
const [cardModal, setCardModal]=useState({})

useEffect(()=>{
  console.log("Aberto Context:",aberto)
},[aberto])
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