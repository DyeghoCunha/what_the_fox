import { createContext, useContext, useEffect, useState } from "react";
import { FirebaseContext } from "./FirebaseConfig";
import { arrayRemove, arrayUnion, collection, collectionGroup, deleteField, doc, getDoc, getDocs, query, updateDoc, where } from "firebase/firestore";
import { ModalCardContext } from "./ModalCard";

const CarrinhoContext = createContext()


const CarrinhoProvider = ({ children }) => {

  const { usuario, database, usuarioUid, saldoDaConta, setSaldoDaConta} = useContext(FirebaseContext)
  const { valorFinalDoCard } = useContext(ModalCardContext)
  const [quantidadeCarrinho, setQuantidadeCarrinho] = useState(0)
  const [carrinhoProdutos, setCarrinhoProdutos] = useState([])
  const [valorTotalDoCarrinho, setValorTotalDoCarrinho] = useState(0)
  const [saldo, setSaldo] = useState(saldoDaConta)


useEffect(()=>{

   const getArrayLength = async () => {
      if (usuario) {
      const docToUpdate = doc(database, `userDb/user/${usuarioUid}`, usuario[0]);
            const docSnap = await getDoc(docToUpdate);
            if (docSnap.exists()) {
              const data = docSnap.data();
              setSaldoDaConta(data.saldo)
              const saldo = docSnap.data().saldo;
              setSaldo(saldo);
            }
          };
          getArrayLength();

        }
},[])




  function handleAdicionaItemNoCarrinhoFirebase(objeto) {
    const objetoAtualizado = { ...objeto, valor: valorFinalDoCard }
    if (usuario) {
      //console.log("UPDATE ID: ", usuario[0]);
      const docToUpdate = doc(database, `userDb/user/${usuarioUid}`, usuario[0]);
      updateDoc(docToUpdate, {
        carrinho: arrayUnion(objetoAtualizado)
      })
        .then(() => {
          console.log("Carrinho Inserido: ", objetoAtualizado);
          const getArrayLength = async () => {
            const docSnap = await getDoc(docToUpdate);
            if (docSnap.exists()) {
              const data = docSnap.data();
              setCarrinhoProdutos(data.carrinho)
              const arrayLength = data.carrinho.length;
              //console.log("Quantidade de itens no array:", arrayLength);
              //console.log("Itens do Carrinho:", data.carrinho);
              //localStorage.setItem("carrinhoProdutos", data.carrinho)
              setQuantidadeCarrinho(arrayLength)
              localStorage.setItem('quantidadeCarrinho', arrayLength);
              const valorTotal = data.carrinho.reduce((total, item) => total + item.valor, 0);
              setValorTotalDoCarrinho(valorTotal);
              const saldo = docSnap.data().saldo;
              setSaldo(saldo);

            }
          };
          getArrayLength();
        })
        .catch((err) => {
          alert(err.message);
        });
    }
  }

  async function diminuirSaldo() {
    if (usuario) {
      const docToUpdate = doc(database, `userDb/user/${usuarioUid}/${usuario[0]}`);

      try {
        // Obtém o documento atual do Firestore
        const docSnap = await getDoc(docToUpdate);

        if (docSnap.exists()) {
          const saldoAtual = docSnap.data().saldo;
          const novoSaldo = saldoAtual - valorTotalDoCarrinho;

          // Atualiza o documento no Firestore com o novo saldo
          await updateDoc(docToUpdate, {
            saldo: novoSaldo
          });

          updateDoc(docToUpdate, {
            carrinho: deleteField()
          })
            .then(() => {
              console.log("Todos os itens removidos do carrinho");
              setCarrinhoProdutos([]);
              setQuantidadeCarrinho(0);
              setValorTotalDoCarrinho(0)
              localStorage.removeItem('quantidadeCarrinho');
            })
            .catch((err) => {
              alert(err.message);
            });
          setSaldo(novoSaldo)
          console.log("Saldo atualizado:", novoSaldo);
        } else {
          console.log("O documento não existe");
        }
      } catch (err) {
        alert(err.message);
      }
    }
  }

  function handleLimpaCarrinhoFirebase() {
    if (usuario) {
      console.log("UPDATE ID: ", usuario[0]);
      const docToUpdate = doc(database, `userDb/user/${usuarioUid}`, usuario[0]);
      updateDoc(docToUpdate, {
        carrinho: deleteField()
      })
        .then(() => {
          console.log("Todos os itens removidos do carrinho");
          setCarrinhoProdutos([]);
          setQuantidadeCarrinho(0);
          localStorage.removeItem('quantidadeCarrinho');
        })
        .catch((err) => {
          alert(err.message);
        });
    }
  }




  function handleRemoveItemDoCarrinhoFirebase(card) {
    if (usuario) {
      console.log("UPDATE ID: ", usuario[0]);
      console.log("UPDATE ID: ", card.id);
      console.log("UPDATE Valor: ", card.valor);
      const docToUpdate = doc(database, `userDb/user/${usuarioUid}/${usuario[0]}`);

      // Obtém o documento atual do Firestore
      getDoc(docToUpdate)
        .then((docSnap) => {
          if (docSnap.exists()) {
            const carrinhoAtual = docSnap.data().carrinho;

            // Filtra o carrinho atual para remover apenas o item correspondente
            const newCarrinho = carrinhoAtual.filter(item => !(item.valor === card.valor && item.id === card.id));

            // Atualiza o documento no Firestore com o novo carrinho
            updateDoc(docToUpdate, {
              carrinho: newCarrinho
            })
              .then(() => {
                console.log("Item removido do carrinho:", card.nome, card.id);
                setCarrinhoProdutos(newCarrinho);
                setQuantidadeCarrinho(newCarrinho.length);
                localStorage.setItem('quantidadeCarrinho', newCarrinho.length);
                const valorTotal = newCarrinho.reduce((total, item) => total + item.valor, 0);
                setValorTotalDoCarrinho(valorTotal);
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
  //______________________________




  const valor = localStorage.getItem('Logado');
  const valor1 = localStorage.getItem('Usuario');



  const value = {
    handleAdicionaItemNoCarrinhoFirebase, quantidadeCarrinho, handleLimpaCarrinhoFirebase,
    carrinhoProdutos, setCarrinhoProdutos, handleRemoveItemDoCarrinhoFirebase, valorTotalDoCarrinho,
    saldo, setSaldo, diminuirSaldo
  }



  return (
    <CarrinhoContext.Provider value={value}>
      {children}
    </CarrinhoContext.Provider>
  )

}
export { CarrinhoContext, CarrinhoProvider }