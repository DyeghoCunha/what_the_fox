import React, { useContext, useEffect, useState } from 'react'
import styles from "./PaginaFavoritos.module.scss"
import { FavoritoContext } from '../../common/context/Favoritos'
import Produtos from '../../components/Produtos'
import { FirebaseContext } from '../../common/context/FirebaseConfig'


export default function PaginaFavoritos() {

  const { foxDb, goblinDb, apesDb, bladeMasterDb, hempDb, emoteDb, } = useContext(FirebaseContext)
  const { favoritosProdutos } = useContext(FavoritoContext)


  useEffect(()=>{

 window.scrollTo(0, 0);
  },[])

  return (
    <>
      <section className={styles.container}>

      <Produtos id="Favoritos#1" estiloCard={"CardPremiunVerde"} miniCard={"miniCardBusca"} titulo={"Favoritos"} tribo={favoritosProdutos} />
          
     
      </section>


    </>
  )
}
