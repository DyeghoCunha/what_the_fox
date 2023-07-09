import styles from "./Hamburger.module.scss"
import React, { useContext} from 'react'
import { FaFortAwesome } from "react-icons/fa";
import BotaoMenu from "../../BotaoMenu";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping, faHeart, faPercent, faPersonCircleQuestion, faRightFromBracket, faSackDollar } from "@fortawesome/free-solid-svg-icons";
import { faNewspaper } from "@fortawesome/free-regular-svg-icons";
import { Link } from "react-router-dom";
import ContainerRGBFlex from "../../ContainerRGBFlex"
import { FirebaseContext } from "../../../common/context/FirebaseConfig";
import fotoAnonimo from "../../../assets/images/cardAnonimo.png"
import BotoesDeLogin from "../../BotoesDeLogin";


export default function Hamburger({ modalLogin, aberto }) {
  const { logado, usuario, handleLogOut, usuarioNome, usuarioFoto, handleSubmitGoogle, handleSubmitGithub } = useContext(FirebaseContext)

  return (
    <>
      {aberto && (
        <nav className={styles.hamburger_container}>
          <ContainerRGBFlex aprovado={logado}>
            <div className={styles.hamburger_container_icones}>

              <div className={styles.separador_linksHome}>
                <Link to={"/"}>
                  <div className={`${styles.hamburger_container_icones_botao} ${styles.primeiroLink}`}>
                    <h1 className={`${styles.titulo}`}>Home</h1>
                    <BotaoMenu link={"/"}><FaFortAwesome /></BotaoMenu>
                  </div>
                </Link>
                <Link to={"/novidades"}>
                  <div className={styles.hamburger_container_icones_botao}>
                    <h1 className={styles.titulo}>Os Artistas</h1>
                    <BotaoMenu link={"/novidades"} ><FontAwesomeIcon icon={faNewspaper} /></BotaoMenu>
                  </div>
                </Link>
                <Link to={"/promocoes"}>
                  <div className={styles.hamburger_container_icones_botao}>
                    <h1 className={styles.titulo}>Novidades</h1>
                    <BotaoMenu link={"/promocoes"} ><FontAwesomeIcon icon={faPercent} /></BotaoMenu>
                  </div>
                </Link>
                <Link to={"/osartistas"}>
                  <div className={`${styles.hamburger_container_icones_botao} ${styles.ultimoLink}`}>
                    <h1 className={styles.titulo}>Promoções</h1>
                    <BotaoMenu link={"/osartistas"}><FontAwesomeIcon icon={faPersonCircleQuestion} /></BotaoMenu>
                  </div>
                </Link>
              </div>

              <section className={styles.informacoesUsuario}>
                <div className={styles.container_userCard}>

                  {!logado && (
                    <div className={styles.container_userCard_logIn}>
                      {/* <BotaoGeral texto={"Login"} onClick={modalLogin} /> */}
                      <BotoesDeLogin normalLogin={modalLogin} githubLogin={handleSubmitGithub} googleLogin={handleSubmitGoogle} />
                    </div>
                  )}
                  {logado && (
                    <>
                      <div className={styles.container_userCard_user}>

                        <img className={styles.container_userCard_user_foto} src={usuarioFoto ? usuarioFoto : fotoAnonimo} alt="Foto do usuario" />
                        <h2 className={styles.container_userCard_user_titulo}>{usuarioNome}</h2>

                      </div>

                      <div onClick={handleLogOut} className={styles.container_userCard_logOut}>

                        <BotaoMenu  ><FontAwesomeIcon icon={faRightFromBracket} /></BotaoMenu>

                      </div>

                      <div className={styles.container_userCard_user_favoritoCarrinho}>
                        <Link to={"/favorito"}>
                          <BotaoMenu link={"/favorito"} ><FontAwesomeIcon icon={faHeart} /></BotaoMenu>
                        </Link>

                        <Link to={"/carrinho"}>
                          <BotaoMenu link={"/carrinho"} ><FontAwesomeIcon icon={faCartShopping} /></BotaoMenu>
                        </Link>

                      </div>

                      <div className={styles.container_saldo}>

                        <div className={styles.container_saldo_icone}>
                          <FontAwesomeIcon icon={faSackDollar} />
                        </div>

                        <h2 className={styles.container_saldo_valor}>500</h2>
                      </div>
                    </>
                  )}
                </div>
              </section>
            </div>
          </ContainerRGBFlex>
        </nav >
      )}
    </>
  )
}
