import { createContext, useContext, useEffect, useState } from "react";
import { arrayUnion, doc, getDoc, updateDoc } from "firebase/firestore";

import { FirebaseContext } from "./FirebaseConfig.js"
import { getAuth, onAuthStateChanged } from "firebase/auth";
const FavoritoContext = createContext()

const FavoritoProvider = ({ children }) => {


  //!_____ INICIO MODAL______

  const [aberto, setAberto] = useState(false)
  const [cardModal, setCardModal] = useState({})
  const [quantidadeFavoritos, setQuantidadeFavoritos] = useState(0)
  const { usuarioUid, database, usuario } = useContext(FirebaseContext)



  //!_____FIM MODAL______



  //!___INICIO___pegar os Favoritos do banco de dados do usuario_____
  const userId = "9BcZXt0EoleNGYVBZSnpJDC5F6E3";

  const auth = getAuth()
  const [favoritoRef, setFavoritoRef] = useState()


  function handleAdicionaItemNoFavoritoFirebase(objeto) {

    if (usuario) {
      console.log("UPDATE ID: ", usuario[0]);
      const docToUpdate = doc(database, `userDb/user/${usuarioUid}`, usuario[0]);
      updateDoc(docToUpdate, {
        favorito: arrayUnion(objeto)
      })
        .then(() => {
          console.log("Favorito Inserido: ", objeto);
        })
        .catch((err) => {
          alert(err.message);
        });
    }
  }


  //!___FIM___pegar os Favoritos do banco de dados do usuario_____


  //!____Inicio___Conta a quantidade de Favoritos do banco de Dados do Usuario_____

  /* const handleQuantidadeDeFavoritos = async () => {
    try {
      const userDocSnapshot = await getDoc(userDocRef);

      if (userDocSnapshot.exists()) {
        const userData = userDocSnapshot.data();
        const favorites = userData.favoritos;

        if (favorites) {
          const count = Object.keys(favorites).length;
          console.log("Número de favoritos:", count);
        } else {
          console.log("Nenhum favorito encontrado");
        }
      } else {
        console.log("Usuário não encontrado");
      }
    } catch (error) {
      console.error("Erro ao contar os favoritos do usuário:", error);
    }
  }; */

  //!____Inicio___Conta a quantidade de Favoritos do banco de Dados do Usuario_____



  const [favorito, setFavorito] = useState([])


  const value = {
    favorito,
    setFavorito,
    aberto, setAberto, cardModal, setCardModal,handleAdicionaItemNoFavoritoFirebase,
    quantidadeFavoritos

  }

  return (
    <FavoritoContext.Provider value={value}>
      {children}
    </FavoritoContext.Provider>
  )
}

export { FavoritoContext, FavoritoProvider }