// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { createContext, useEffect, useState } from "react";
import {
  getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup,
  GithubAuthProvider, onAuthStateChanged, signOut
} from "firebase/auth";

import { getStorage, ref, uploadBytesResumable, getDownloadURL, } from "firebase/storage"
import { getFirestore, collection, addDoc, getDocs, doc, updateDoc, deleteDoc, onSnapshot, query, where, arrayUnion, getDoc } from "firebase/firestore"

import dados from "../../assets/json/dados.json"

//TODO____ A parte de Hosting não vão ser usadas agora, então vou ver elas depois.

//*____Informações adquiridas diretamente do Projeto cadastrado no Google Firebase
const firebaseConfig = {
  apiKey: "AIzaSyD6xiD1dV8mdX5uInJX-oRVXYwKOv7P418",
  authDomain: "what-the-fox-c9546.firebaseapp.com",
  projectId: "what-the-fox-c9546",
  storageBucket: "what-the-fox-c9546.appspot.com",
  messagingSenderId: "464750594448",
  appId: "1:464750594448:web:082671ba44dcf027510b15",
  measurementId: "G-PS76C8LRSS"
};

export const app = initializeApp(firebaseConfig);
export const database = getFirestore(app)
export const storage = getStorage(app)
//*_______________________________________________________________________________

const FirebaseContext = createContext()
const FirebaseProvider = (({ children }) => {

  let googleProvider = new GoogleAuthProvider();
  let githubProvider = new GithubAuthProvider()

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [nome, setNome] = useState("")
  const [idade, setIdade] = useState("")
  const [error, setError] = useState(null);
  const [usuario, setUsuario] = useState(null);
  const [usuarioNome, setUsuarioNome] = useState("")
  const [usuarioFoto, setUsuarioFoto] = useState("")
  const [armazenaInput, setArmazenaInput] = useState({})
  const [logado, setLogado] = useState(false)
  const [usuarioUid, setUsuarioUid] = useState(null)
  const [atualizaSaldo, setAtualizaSaldo] = useState(0)
  const [saldoDaConta, setSaldoDaConta] = useState(0)
  const [saldoComprado, setSaldoComprado] = useState(0);



  const auth = getAuth();

  //!____________Inicio do Cadastro e Login_______________________________________________

  const handleSignUp = (event) => {

    event.preventDefault()
    createUserWithEmailAndPassword(auth, email, password)

      .then((userCredential) => {
        const user = userCredential.user;
        console.log("Usuário registrado:", user);
      })

      .catch((error) => {

        const errorCode = error.code;
        const errorMessage = error.message;
        console.log("Código de erro:", errorCode);
        console.log("Mensagem de erro:", errorMessage);

        if (errorCode === "auth/invalid-email") {
          setError("O email fornecido é inválido ou possui um formato incorreto.");
        } else if (errorCode === "auth/email-already-in-use") {
          setError("O email fornecido já está em uso");
        } else if (errorCode === "auth/weak-password") {
          setError("A senha fornecida é fraca. Por favor, escolha uma senha mais forte.");
        } else if (errorCode === "auth/operation-not-allowed") {
          setError("A criação de contas não está habilitada no momento.");
        } else {
          setError("Ocorreu um erro durante o processo de registro. Por favor, tente novamente mais tarde.");
        }
      });

  };

  const handleSignIn = (event) => {

    event.preventDefault()
    signInWithEmailAndPassword(auth, email, password)

      .then((userCredential) => {
        const user = userCredential.user;
        setUsuario(user)
        console.log("Usuário logado:", user);
      })

      .catch((error) => {

        const errorCode = error.code;
        const errorMessage = error.message;
        console.log("Código de erro:", errorCode);
        console.log("Mensagem de erro:", errorMessage);

        if (errorCode === "auth/invalid-email") {
          setError("O email fornecido é inválido");
        } else if (errorCode === "auth/user-disabled") {
          setError("A conta do usuário está desativada");
        } else if (errorCode === "auth/user-not-found") {
          setError("Não há nenhum usuário registrado com o email fornecido");
        } else if (errorCode === "auth/wrong-password") {
          setError("A senha fornecida está incorreta");
        } else if (errorCode === "auth/too-many-requests") {
          setError("Houve várias tentativas de login com falha. A conta foi temporariamente bloqueada por motivos de segurança");
        } else {
          setError("Ocorreu um erro durante o processo de autenticação. Por favor, tente novamente");
        }
      });

  };

  //TODO ----- Adicionando o Usuario Criado ao Banco de Dados
  const handleSignUpComBandoDeDados = (event) => {
    event.preventDefault()
    createUserWithEmailAndPassword(auth, email, password)

      .then((userCredential) => {
        const user = userCredential.user;
        console.log("Usuário registrado:", user);

        //TODO------ Pegar o onAutentication, salvar o uId em um useState, e acessar as pastas Favorito e Carrinho
        addDoc(collection(database, `userDb/user/${user.uid}`), {
          uId: user.uid,
          email: user.email,
          nome: user.displayName,
          foto: user.photoURL,
          carrinho: [],
          favorito: [],
          saldo: 30,
          saldoComprado: 0,
        })
          .then(() => {
            console.log("Salvo no DB")
          })
          .catch((err) => {
            alert(err.message)
          })

      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log("Código de erro:", errorCode);
        console.log("Mensagem de erro:", errorMessage);

        if (errorCode === "auth/invalid-email") {
          setError("O email fornecido é inválido ou possui um formato incorreto.");
        } else if (errorCode === "auth/email-already-in-use") {
          setError("O email fornecido já está em uso");
        } else if (errorCode === "auth/weak-password") {
          setError("A senha fornecida é fraca. Por favor, escolha uma senha mais forte.");
        } else if (errorCode === "auth/operation-not-allowed") {
          setError("A criação de contas não está habilitada no momento.");
        } else {
          setError("Ocorreu um erro durante o processo de registro. Por favor, tente novamente mais tarde.");
        }
      });

  };





  //*___________________Registro com conta do Google________________________________________
  const handleSubmitGoogle = (event) => {

    event.preventDefault()
    signInWithPopup(auth, googleProvider)

      .then((userCredential) => {
        const user = userCredential.user;
        setUsuario(user)
        //!____________________________________________________
        addDoc(collection(database, `userDb/user/${user.uid}`), {
          uId: user.uid,
          email: user.email,
          nome: user.displayName,
          foto: user.photoURL,
          carrinho: [],
          favorito: [],
          saldo: 30,
          saldoComprado: 0,
        })
          .then(() => {
            console.log("Salvo no DB")
          })
          .catch((err) => {
            alert(err.message)
          })

        //!_____________________________________________
        console.log("Usuário registrado:", user);
      })
      .catch((error) => {

        const errorCode = error.code;
        const errorMessage = error.message;
        console.log("Código de erro:", errorCode);
        console.log("Mensagem de erro:", errorMessage);

        if (errorCode === "auth/popup-closed-by-user") {
          setError("O popup de autenticação foi fechado pelo usuário antes de concluir o processo de autenticação.");
        } else if (errorCode === "auth/cancelled-popup-request") {
          setError("A solicitação de popup de autenticação foi cancelada antes de ser concluída.");
        } else if (errorCode === "auth/popup-blocked") {
          setError("O navegador bloqueou a exibição do popup de autenticação. Verifique as configurações do navegador e tente novamente.");
        } else if (errorCode === "auth/popup-window-closed") {
          setError("A janela do popup de autenticação foi fechada antes que o processo de autenticação pudesse ser concluído.");
        } else {
          setError("Ocorreu um erro durante o processo de autenticação. Por favor, tente novamente mais tarde.");
        }
      });

  };
  //*___________________FIM Registro com conta do Google________________________________________


  //*___________________Registro com conta do GitHub____________________________________________

  const handleSubmitGithub = (event) => {

    event.preventDefault()
    signInWithPopup(auth, githubProvider)

      .then((userCredential) => {
        const user = userCredential.user;
        setUsuario(user)

        addDoc(collection(database, `userDb/user/${user.uid}`), {
          uId: user.uid,
          email: user.email,
          nome: user.displayName,
          foto: user.photoURL,
          carrinho: [],
          favorito: [],
          saldo: 30,
          saldoComprado: 0,
        })
          .then(() => {
            console.log("Salvo no DB")
          })
          .catch((err) => {
            alert(err.message)
          })
        console.log("Usuário registrado:", user);
      })

      .catch((error) => {

        const errorCode = error.code;
        const errorMessage = error.message;
        console.log("Código de erro:", errorCode);
        console.log("Mensagem de erro:", errorMessage);

        if (errorCode === "auth/popup-closed-by-user") {
          setError("O popup de autenticação foi fechado pelo usuário antes de concluir o processo de autenticação.");
        } else if (errorCode === "auth/cancelled-popup-request") {
          setError("A solicitação de popup de autenticação foi cancelada antes de ser concluída.");
        } else if (errorCode === "auth/popup-blocked") {
          setError("O navegador bloqueou a exibição do popup de autenticação. Verifique as configurações do navegador e tente novamente.");
        } else if (errorCode === "auth/popup-window-closed") {
          setError("A janela do popup de autenticação foi fechada antes que o processo de autenticação pudesse ser concluído.");
        } else {
          setError("Ocorreu um erro durante o processo de autenticação. Por favor, tente novamente mais tarde.");
        }
      });

  };

  //*___________________FIM Registro com conta do GitHub____________________________________________
  //!_____________Fim do Cadastro e Login_________________________________________________
  //!___________________________________________________________________________________________
  //!___________________________________________________________________________________________
  //!___________________________________________________________________________________________
  //!___________________________________________________________________________________________
  //!___________________________________________________________________________________________
  //!___________________________________________________________________________________________
  //!___________________________________________________________________________________________
  //!___________________________________________________________________________________________
  //!___________________________________________________________________________________________
  //!___________________________________________________________________________________________
  //!_____________Inicio de configuração do Banco de Dados (FIRESTORE)_________________________________

  const collectionRef = collection(database, "users")
  //?____Add Dados no Banco___
  const handleAddDadosComPasta = (event) => {
    event.preventDefault()
    addDoc(collectionRef, {
      email: email,
      senha: password
    })
      .then(() => {
        alert("Data Added")
      })
      .catch((err) => {
        alert(err.message)
      })
  }
  //?___Fim Add Dados no Banco___
  //*____________________________________________________________________________________________________________
  //?__Pegar dados__________________________________________
  //__Pega as informações do CollectionRef
  //TODO --- Armazena no FireStore os dados em pastas referenciadas na const collectionRef... Usar como Banco de Dados
  const getData = (event) => {
    event.preventDefault()
    getDocs(collectionRef)
      .then((response) => {
        console.log(response.docs.map((item) => {
          return item.data()
        }))
        //Também mostra o ID (usar este)
        console.log(response.docs.map((item) => {
          return { ...item.data(), id: item.id }
        }))
      })
    /*  
    //Pega os dados em Tempo real, funciona semelhante ao getDocs, mas pelo que eu vi no React ele funciona igual //!Ficar Atento
    onSnapshot(collectionRef, (response)=>{
       console.log(response.docs.map((item) => {
          return item.data()
        }))
      })  
      */

  }
  //?__FIM_____Pegar dados__________________________________________
  //*____________________________________________________________________________________________________________
  //?__Alterar dados do Banco de dados______________________________
  const updateData = (event) => {
    event.preventDefault()

    //__ Esta mudando estaticamente pelo ID jMtIcORBpSupZeokEjY6___
    const docToUpdate = doc(database, "users", "jMtIcORBpSupZeokEjY6")
    updateDoc(docToUpdate, {
      email: "ABC",
      senha: 123456
    })
      .then(() => {
        alert("Atualizado")
      })
      .catch((err) => {
        alert(err.message)
      })
  }
  //?__FIM___Alterar dados do Banco de dados_______________________
  //*____________________________________________________________________________________________________________
  //?__Deletar dado do Banco de Dados______________________________
  const deleteData = (event) => {
    event.preventDefault()
    //__ Esta mudando estaticamente pelo ID jMtIcORBpSupZeokEjY6___
    const docToDelete = doc(database, "users", "K8B7ixSE1yxeHKn50q8X")
    //Ele apaga exatamento os dados que estão escritos no Email e Senha
    deleteDoc(docToDelete, {
      email: "testeBanco@teste.com",
      senha: 123456
    })
      .then(() => {
        alert("Deletado")
      })
      .catch((err) => {
        alert(err.message)
      })
  }
  //?__FIM___Deletar dado do Banco de Dados________________________
  //*____________________________________________________________________________________________________________
  //?_____FireStore Queries________________________________________
  //Todo ----- Pega os itens que possuem aquelas caracteristicas definidas, creio que seja bom para usar em Favoritos e em Filtros
  //TODO Usar para os Cards de Categorias
  const ageQuery = query(collectionRef, where("idade", "<", 41))
  const getDataQuery = (event) => {
    event.preventDefault()
    /*       getDocs(ageQuery)
          .then((response) => {
            console.log(response.docs.map((item) => {
              return item.data()}))}) */

    onSnapshot(ageQuery, (response) => {
      console.log("Querry: ", response.docs.map((item) => {
        return item.data()
      }))
    })
  }
  //apenas função para gravar os dados para testar com o Query
  const handleAddDados = (event) => {
    event.preventDefault()
    addDoc(collectionRef, {
      nome: nome,
      email: email,
      idade: Number(idade)
    })
      .then(() => {
        alert("Data Added")
      })
      .catch((err) => {
        alert(err.message)
      })
  }
  //?_____FIM__FireStore Queries________________________________________
  //*____________________________________________________________________________________________________________

  //?_____Security Log In Log Off_______________________________________
  const [usuarioDbPastaRef, setUsuarioDbPastaRef] = useState("")
  /* useEffect(() => {
    /*  onSnapshot(collectionRef, (data) => {
       console.log("UsuariosDB:", data.docs.map((item) => {
         return { ...item.data(), id: item.id }
       }))
     })  

    //No Firebase Rules colocar allow write: if request.auth != null;
    //                           allow read: if request.auth !=null;
    //Condicionais relacionadas ao Se está logado ou não
    //TODO---- Colocar para poder acessar o Carrinho e os Favoritos e para Favoritar




    onAuthStateChanged(auth, (data) => {
      if (data) {
        setLogado(true)
        //console.log("onAuthStateChanged: ", data.uid)
        //console.log("Logged in ")
        //!___APAGAR_________________________
        // setUsuario(data)
        setUsuarioUid(data.uid)
        setUsuarioNome(data.displayName)
        setUsuarioFoto(data.photoURL)

        getDocs(collection(database, `userDb/user/${data.uid}`))
          .then((response) => {
            setUsuario(response.docs.map((item) => {
              return item.id
            }))
          })



        //!___APAGAR_________________________
      }
      else {
        //console.log("Not Logged in")
      }

    })
  }, []) */



  useEffect(() => {
    onAuthStateChanged(auth, (data) => {
      if (data) {
        setLogado(true);
        setUsuarioUid(data.uid);
        setUsuarioNome(data.displayName);
        setUsuarioFoto(data.photoURL);
        localStorage.setItem('Logado', true);
        localStorage.setItem('usuarioUid', data.uid);

        getDocs(collection(database, `userDb/user/${data.uid}`))
          .then((response) => {
            setUsuario(response.docs.map((item) => {
              localStorage.setItem('usuario', item.id);

              // Acessar valor da propriedade saldo
              const userDocRef = doc(database, `userDb/user/${data.uid}/${item.id}`);
              onSnapshot(userDocRef, (docSnapshot) => {
                if (docSnapshot.exists()) {
                  const saldo = docSnapshot.data().saldo;
                  setSaldoDaConta(saldo);
                }
              });

              return item.id;
            }));
          });
      } else {
        console.log("Algum problema na autenticação");
      }
    });
  }, []);



  //TODO_________MUUIITO IMPORTANTE ____Alterar dados do Favoritos_____

  /*    useEffect(()=>{
    
        console.log("UID: ", usuarioUid)
    
        getDocs(collection(database, `userDb/user/${usuarioUid}`))
          .then((response) => {
            
            setUsuario(response.docs.map((item) => {
              return item.id 
            }))})
        
    },[usuarioUid]) */

  useEffect(() => {
    //console.log("Usuario: ", usuario)
  }, [usuario])


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



  //TODO_________MUUIITO IMPORTANTE ____Alterar dados do Favoritos_____



  const handleLogOut = () => {
    localStorage.removeItem('Logado');
    setLogado(false)
    signOut(auth)
  }
  //?_____Security Log In Log Off_______________________________________
  //*____________________________________________________________________________________________________________

  //!_____________Fim de configuração do Banco de Dados (FIRESTORE)_________________________________
  //!___________________________________________________________________________________________
  //!___________________________________________________________________________________________
  //!___________________________________________________________________________________________
  //!_________________Ainda Falta muica coisa, eu não sei como deletar arquivos, só incluir_____
  //!___________________________________________________________________________________________
  //!___________________________________________________________________________________________
  //!___________________________________________________________________________________________
  //!___________________________________________________________________________________________
  //!_____Configuração do Firebase Storage (Arquivos)_______________________________________________
  const handleInputFileFireStorage = (event) => {
    event.preventDefault();

    const imagemRef = ref(storage, `pastaExemplo/${armazenaInput.name}`)
    const uploadTask = uploadBytesResumable(imagemRef, armazenaInput)

    uploadTask.on("state_changed", (snapshot) => {
      //verifica o carregamento
      const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;

      console.log('Upload is ' + progress + '% done');

    }, (error) => {
      console.log(error.message)
    }, () => {

      getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
        console.log('File available at', downloadURL);
      });
    }
    )


    /*//TODO-- Verifica o Tamanho da imagem, para adicionar depois na inclusão
    
     const reader = new FileReader();
    reader.onload = (e) => {
      const image = new Image();
      image.src = e.target.result;
   
      image.onload = () => {
        const width = image.width;
        const height = image.height;
   
        console.log('Largura:', width);
        console.log('Altura:', height);
      };
    };
  reader.readAsDataURL(armazenaInput); 
  */

  };
  //!_____FIM____Configuração do Firebase Storage___________________________________________________

  //! ____ Atualizando o SALDO____________________


  const handleArmazenaValorDoSaldoComprado = async () => {
    if (usuario) {
      const docRef = doc(database, `userDb/user/${usuarioUid}/${usuario[0]}`);
      const docSnapshot = await getDoc(docRef);
      if (docSnapshot.exists()) {
        const saldo = docSnapshot.data().saldoComprado;
        setSaldoComprado(saldo)
      } else {
        console.log("Documento não encontrado");
      }
    }
  }
  const [saldoContext, setSaldoContext] = useState(0)

  const handlePegaValorDoSaldo = async () => {
    if (usuario) {
      const docRef = doc(database, `userDb/user/${usuarioUid}/${usuario[0]}`);
      const docSnapshot = await getDoc(docRef);
      if (docSnapshot.exists()) {
        const saldo = docSnapshot.data().saldo;
        setSaldoContext(saldo)
      } else {
        console.log("Documento não encontrado");
      }
    }
  }


  const handleAtualizaSaldoComprado = async () => {
    if (usuario) {
      const docRef = doc(database, `userDb/user/${usuarioUid}/${usuario[0]}`);
      const valor = atualizaSaldo
      const docData = { saldoComprado: valor };
      await updateDoc(docRef, docData);
    }

  }

  const handleAtualizaSaldo = async (valor) => {
    if (usuario) {
      const docRef = doc(database, `userDb/user/${usuarioUid}/${usuario[0]}`);
      const docData = { saldo: valor };
      await updateDoc(docRef, docData);
    }

  }



  //!_____BANCO DE DADOS DO WHAT THE FOX______________________________________________________________

  const [foxDb, setFoxDb] = useState([])
  const [goblinDb, setGoblinDb] = useState([])
  const [apesDb, setApesDb] = useState([])
  const [bladeMasterDb, setBladeMasterDb] = useState([])
  const [hempDb, setHempDb] = useState([])
  const [emoteDb, setEmoteDb] = useState([])




  const collectionFox = collection(database, "Fox")
  const collectionGoblin = collection(database, "Goblins")
  const collectionApes = collection(database, "Apes")
  const collectionBladeMasters = collection(database, "BladeMasters")
  const collectionHemps = collection(database, "Hemps")
  const collectionEmotes = collection(database, "Emotes")

  const raposa = dados.Emotes

  //?____Add Dados no Banco___
  const handleAddDadosNoBandoDeDados = (event) => {
    event.preventDefault()

    for (let i = 0; i <= raposa.length; i++) {
      addDoc(collectionEmotes, {
        id: raposa[i].id,
        raca: raposa[i].raca,
        classe: raposa[i].classe,
        valor: raposa[i].valor,
        nome: raposa[i].nome,
        //frase: raposa[i].frase,
        imagem: raposa[i].imagem,
        quantidade: raposa[i].quantidade,
        favorito: raposa[i].favorito
      })
        .then(() => {
          console.log(raposa[i].nome)
          // alert("Data Added")
        })
        .catch((err) => {
          alert(err.message)
        })
    }
  }
  //Chamar os dados
  useEffect(() => {
    onSnapshot(collectionFox, (data) => {
      setFoxDb(data.docs.map((item) => {
        return { ...item.data(), id: item.id }
      }))
    })
    onSnapshot(collectionGoblin, (data) => {
      setGoblinDb(data.docs.map((item) => {
        return { ...item.data(), id: item.id }
      }))
    })
    onSnapshot(collectionApes, (data) => {
      setApesDb(data.docs.map((item) => {
        return { ...item.data(), id: item.id }
      }))
    })
    onSnapshot(collectionBladeMasters, (data) => {
      setBladeMasterDb(data.docs.map((item) => {
        return { ...item.data(), id: item.id }
      }))
    })
    onSnapshot(collectionHemps, (data) => {
      setHempDb(data.docs.map((item) => {
        return { ...item.data(), id: item.id }
      }))
    })
    onSnapshot(collectionEmotes, (data) => {
      setEmoteDb(data.docs.map((item) => {
        return { ...item.data(), id: item.id }
      }))
    })

  }, [])

  /* 
   
  console.log("FoxDB:", foxDb)
  console.log("GoblinDb:", goblinDb)
  console.log("ApeDb:", apesDb)
  console.log("BladeMansterDb:", bladeMasterDb)
  console.log("HempDb:", hempDb)
  console.log("EmoteDb:", emoteDb)
   */
  //!_____FIM DO BANCO DE DADOS DO WHAT THE FOX______________________________________________________________

  //!__________________Valores para o Provider__________________________________

  const value = {
    logado, email, setEmail, password, setPassword, nome, setNome, idade, setIdade, usuarioNome, usuarioFoto, error, setError, handleSignUp, handleSignIn, handleLogOut,
    handleSubmitGoogle, handleSubmitGithub, handleSignUpComBandoDeDados, usuario, handleAddDadosComPasta, handleAddDados, getDataQuery, getData, updateData, deleteData,
    armazenaInput, setArmazenaInput, handleInputFileFireStorage, handleAddDadosNoBandoDeDados,
    //Baco de Dados
    foxDb, goblinDb, apesDb, bladeMasterDb, hempDb, emoteDb,
    //Para o Favoritos
    usuarioUid, database, usuario, handleAdicionaItemNoFavoritoFirebase,
    //Atualizar Saldo
    atualizaSaldo, setAtualizaSaldo, handleAtualizaSaldo, saldoDaConta, setSaldoDaConta,
    handleArmazenaValorDoSaldoComprado, saldoComprado, setSaldoComprado, handleAtualizaSaldoComprado
, handlePegaValorDoSaldo, saldoContext
  }

  //!___________________________________________________________________________


  return (
    <FirebaseContext.Provider value={value}>
      {children}
    </FirebaseContext.Provider>
  )
})


export { FirebaseContext, FirebaseProvider }








