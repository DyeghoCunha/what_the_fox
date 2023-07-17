import { Link } from "react-router-dom"
import { CarrinhoContext } from "../../common/context/Carrinho"
import { FirebaseContext } from "../../common/context/FirebaseConfig"
import BotaoGeral from "../../components/BotãoGeral"
import CarteiraCarrinho from "../../components/Feature/Carrinho/Carteira"
import styles from "./PaginaCompraSaldo.module.scss"
import React, { useContext, useEffect, useState } from 'react'
import BotoesDoModalCard from "../../components/Feature/ModalCardPersonagem/BotoesDoModalCard"
import FotoCard from "../../components/Feature/ModalCardPersonagem/FotoCard"
import imagem from "../../components/Feature/Carrinho/image/macaco.jpg"
import FormularioDeLogin from "../../components/FormularioDeLogin"
import BotoesDeLogin from "../../components/BotoesDeLogin"

export default function PaginaCompraSaldo() {

  const personagem = {
    nome: "Pronto, aproveite!",
    imagem: imagem
  }

  const { atualizaSaldo, setAtualizaSaldo, handleAtualizaSaldo, saldoComprado, setSaldoComprado, handleArmazenaValorDoSaldoComprado, usuarioNome, logado } = useContext(FirebaseContext)
  const { saldo } = useContext(CarrinhoContext)
  const { email, setEmail, password, setPassword, error, handleSignIn, handleSignUp, handleSubmitGoogle,
    handleSubmitGithub, usuario, handleSignUpComBandoDeDados, handlePegaValorDoSaldo, saldoContext, handleAtualizaSaldoComprado } = useContext(FirebaseContext)


  const [valorCarteira, setValorCarteira] = useState(saldo)
  const [confirma, setConfirma] = useState(false)

  useEffect(() => {

    handleArmazenaValorDoSaldoComprado()
    handlePegaValorDoSaldo()
  }, [logado, usuario])

  const handleSair = () => {
    setAtualizaSaldo(0)
  }

  const handleConfirma = async () => {
    setConfirma(prev => !prev);
    await handlePegaValorDoSaldo()
    const valor = saldoContext + saldoComprado
    await setAtualizaSaldo(valor);
    handleAtualizaSaldo(valor);
    setSaldoComprado(0)
    await setAtualizaSaldo(0)
    await handleAtualizaSaldoComprado()

  };


  useEffect(() => {
    const total = saldoContext + saldoComprado
    setValorCarteira(total)
  }, [saldo, atualizaSaldo, logado, usuarioNome])


  return (
    <div className={styles.pagina}>
      <section className={styles.container}>
        {!logado && (

          <div className={styles.container_logar}>
            <h2 className={styles.container_logar_titulo}>Faça o seu Login Primeiro</h2>


            <FormularioDeLogin emailValue={email} emailOnChange={setEmail} senhaValue={password} senhaOnChange={setPassword} />

            <div className={styles.container_logar_botoes}>
              <BotoesDeLogin githubLogin={handleSubmitGithub} googleLogin={handleSubmitGoogle} normalLogin={handleSignUpComBandoDeDados} />
            </div>
          </div>
        )}


        {logado && (
          <>
            {confirma && (
              <FotoCard sombra={false} card={personagem} />
            )}

            {!confirma && (
              <>
                <CarteiraCarrinho valorCarteira={valorCarteira} valorItens={saldoComprado} />
                <div className={styles.container_frase}>
                  <p >Você ficará com um saldo de <strong className={styles.container_frase_realce}>{valorCarteira}</strong>  Fox Coins</p>
                  <p >Você confirma que esta efetuando a compra de <strong className={styles.container_frase_realce}>{saldoComprado}</strong> Fox Coins??</p>
                </div>
                <div className={styles.container_botoes}>
                  <BotaoGeral texto={"Confirmo"} onClick={handleConfirma} />
                  <Link to={"/teste"} onClick={() => handleSair}>
                    <BotaoGeral texto={"Me tira dessa"} />
                  </Link>
                </div>
              </>
            )}
          </>
        )}
      </section >


    </div >
  )
}
