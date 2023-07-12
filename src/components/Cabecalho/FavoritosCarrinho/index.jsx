import { Link } from "react-router-dom"
import styles from "./FavoritosCarrinho.module.scss"

import React, { useContext } from 'react'
import BotaoNeomorph from "../../BotaoNeomorph"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCartShopping, faHeart } from "@fortawesome/free-solid-svg-icons"
import { FavoritoContext } from "../../../common/context/Favoritos"
import { CarrinhoContext } from "../../../common/context/Carrinho"

export default function FavoritosCarrinho() {

  const { quantidadeFavoritos } = useContext(FavoritoContext)
  const { quantidadeCarrinho } = useContext(CarrinhoContext)
  const quantidadeCarrinhoLocalSt = localStorage.getItem('quantidadeCarrinho');
  const quantidadeFavoritosLocalSt = localStorage.getItem('quantidadeFavoritos');

  //console.log(quantidadeCarrinhoLocalSt)
  let qtdCarrinho = 0
  let qtdFavoritos = 0

  if (quantidadeCarrinho > 0) {
    qtdCarrinho = quantidadeCarrinho
  } else {
    qtdCarrinho = quantidadeCarrinhoLocalSt
  }

  if (quantidadeFavoritos > 0) {
    qtdFavoritos = quantidadeFavoritos
  } else {
    qtdFavoritos = quantidadeFavoritosLocalSt
  }

  return (
    <>
      <section className={` ${styles.logar} ${styles.esconde} ${styles.container}`}>

        <Link to={"/favorito"}>
          {qtdFavoritos > 0 && (
            <div className={styles.container_icone}>
              <BotaoNeomorph link={"/favorito"} ><FontAwesomeIcon icon={faHeart} /></BotaoNeomorph>

              <span className={` ${styles.circulo} ${styles.apaga}`}>
                <i className={styles.container_icone_numero}>{qtdFavoritos}</i>
              </span>

            </div>
          )}
        </Link>
        <Link to={"/carrinho"}>
          {qtdCarrinho > 0 && (
            <div className={styles.container_icone}>
              <BotaoNeomorph link={"/carrinho"} ><FontAwesomeIcon icon={faCartShopping} /></BotaoNeomorph>

              <span className={` ${styles.circulo} ${styles.apaga}`}>
                <i className={styles.container_icone_numero}>{qtdCarrinho}</i>
              </span>

            </div>
          )}
        </Link>
      </section >

    </>
  )
}
