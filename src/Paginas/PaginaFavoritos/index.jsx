import React, { useContext, useEffect, useState } from 'react'
import styles from "./PaginaFavoritos.module.scss"


import { FavoritoContext } from '../../common/context/Favoritos'
import Produtos from '../../components/Produtos'




export default function PaginaFavoritos() {


  const { favoritosProdutos } = useContext(FavoritoContext)
useEffect(()=>{
  console.log("Pagina Favoritos: ", favoritosProdutos)
},[favoritosProdutos])


  return (
    <>
      <section className={styles.container}>

          {favoritosProdutos.map((card) => (
            <Produtos id="FAvoritos#1" estiloCard={"CardEt"} miniCard={"miniCardBusca"} titulo={"Favoritos"} tribo={card} />
          ))}
     


      </section>


    </>
  )
}
