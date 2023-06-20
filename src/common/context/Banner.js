import { createContext, useState } from "react";

const BannerContext = createContext()

const BannerProvider = ({ children }) => {
  const [videoFim, setVideoFim] = useState(0)
  const [proximo, setProximo] = useState(0)


  const value = {
    videoFim,
    setVideoFim,
    proximo, 
    setProximo
  }

  return (
    <BannerContext.Provider value={value}>
      {children}
    </BannerContext.Provider>
  )
}


export { BannerContext, BannerProvider }