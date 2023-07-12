import { createContext, useContext, useEffect, useState } from "react";
import { arrayUnion, collection, doc, getDoc, onSnapshot, updateDoc } from "firebase/firestore";

import { FirebaseContext } from "./FirebaseConfig.js"
import { getAuth, onAuthStateChanged } from "firebase/auth";
const FavoritoContext = createContext()

const FavoritoProvider = ({ children }) => {


  //!_____ INICIO MODAL______

  const [aberto, setAberto] = useState(false)
  const [cardModal, setCardModal] = useState({})
  const [quantidadeFavoritos, setQuantidadeFavoritos] = useState(0)
  const { usuarioUid, database, usuario } = useContext(FirebaseContext)
  const [isFavorito, setIsFavorito] =useState(false)



  //!_____FIM MODAL______


  const auth = getAuth()
  const [favoritoRef, setFavoritoRef] = useState([])
  const [favoritosProdutos,setFavoritosProdutos] = useState([])

  function handleAdicionaItemNoFavoritoFirebase(objeto) {
    if (usuario) {
      // console.log("UPDATE ID: ", usuario[0]);
      const docToUpdate = doc(database, `userDb/user/${usuarioUid}`, usuario[0]);
      updateDoc(docToUpdate, {
        favorito: arrayUnion(objeto)
      })
        .then(() => {
          console.log("Favorito Inserido: ", objeto);
        })
        .catch((err) => {
          alert(err.message);
        })
        .then(() => {
          const getArrayLength = async () => {
            const docSnap = await getDoc(docToUpdate);
            if (docSnap.exists()) {
              const data = docSnap.data();
              setFavoritosProdutos(data.favorito)
              localStorage.setItem('favoritoProdutos', data.favorito)
              const arrayLength = data.favorito.length;
              console.log("Quantidade de itens no array:", arrayLength);
              
              setQuantidadeFavoritos(arrayLength)
              localStorage.setItem('quantidadeFavoritos', arrayLength);
            }
          };
          getArrayLength();
        })
        .catch((err) => {
          alert(err.message);
        });
    }
  }
  console.log("Favoritos:", favoritosProdutos);


function handleRemoveItemDoFavoritoFirebase(card) {
  if (usuario) {
    console.log("UPDATE ID: ", usuario[0]);
    console.log("UPDATE ID: ", card.id);
    console.log("UPDATE Valor: ", card.valor);
    const docToUpdate = doc(database, `userDb/user/${usuarioUid}/${usuario[0]}`);

    // Obtém o documento atual do Firestore
    getDoc(docToUpdate)
      .then((docSnap) => {
        if (docSnap.exists()) {
          const favoritoAtual = docSnap.data().favorito;

          // Filtra o carrinho atual para remover apenas o item correspondente
          const newFavorito = favoritoAtual.filter(item => !(item.valor === card.valor && item.id === card.id));

          // Atualiza o documento no Firestore com o novo carrinho
          updateDoc(docToUpdate, {
            favorito: newFavorito
          })
            .then(() => {
              console.log("Item removido do carrinho:", card.nome, card.id);
              setFavoritosProdutos(newFavorito);
              setQuantidadeFavoritos(newFavorito.length);
              localStorage.setItem('quantidadeFavoritos', newFavorito.length);
            })
            .catch((err) => {
              alert(err.message);
            });
        } else {
          console.log("O documento não existe");
        }
      })
      .catch((err) => {
        alert(err.message);
      });
  }
}






  //!___FIM___pegar os Favoritos do banco de dados do usuario_____



  const [favorito, setFavorito] = useState([])


  const value = {
    favorito,
    setFavorito,
    aberto, setAberto, cardModal, setCardModal, handleAdicionaItemNoFavoritoFirebase,
    quantidadeFavoritos,favoritoRef, setFavoritoRef,favoritosProdutos,handleRemoveItemDoFavoritoFirebase

  }

  return (
    <FavoritoContext.Provider value={value}>
      {children}
    </FavoritoContext.Provider>
  )
}

export { FavoritoContext, FavoritoProvider }