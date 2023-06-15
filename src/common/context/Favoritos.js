import { createContext, useState } from "react";

const FavoritoContext = createContext()

const FavoritoProvider = ({children})=>{

  const [favorito, setFavorito]=useState([])

  const value = {
    favorito,
    setFavorito
  }

  return(
    <FavoritoContext.Provider value={value}>
      {children}
    </FavoritoContext.Provider>
  )
}

export { FavoritoContext,FavoritoProvider}