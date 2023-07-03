// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { createContext, useState } from "react";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup, GithubAuthProvider } from "firebase/auth";
import { getFirestore, collection, addDoc, getDocs, doc, updateDoc, deleteDoc } from "firebase/firestore"
import { getStorage, ref, uploadBytesResumable, getDownloadURL } from "firebase/storage"




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
  const [error, setError] = useState(null);
  const [usuario, setUsuario] = useState(null);
  const [armazenaInput, setArmazenaInput] = useState({})

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

  //*___________________Registro com conta do Google________________________________________
  const handleSubmitGoogle = (event) => {

    event.preventDefault()
    signInWithPopup(auth, googleProvider)

      .then((userCredential) => {
        const user = userCredential.user;
        setUsuario(user)
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
  const handleAddDadosUsuario = (event) => {
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
  const getData = (event) => {

    event.preventDefault()
    getDocs(collectionRef)
      .then((response) => {

        console.log(response.docs.map((item) => {
          return item.data()
        }))

        console.log(response.docs.map((item) => {
          return { ...item.data(), id: item.id }
        }))


      })
  }
  //?__FIM_____Pegar dados__________________________________________
  //*____________________________________________________________________________________________________________
  //?__Alterar dados do Banco de dados__________
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
  //?__FIM___Alterar dados do Banco de dados__________
  //*____________________________________________________________________________________________________________
  //?__Deletar dado do Banco de Dados____
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
  //?__FIM___Deletar dado do Banco de Dados___
  //!_____________Fim de configuração do Banco de Dados (FIRESTORE)_________________________________
  //!___________________________________________________________________________________________
  //!___________________________________________________________________________________________
  //!___________________________________________________________________________________________
  //!___________________________________________________________________________________________
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





  //!__________________Valores para o Provider__________________________________

  const value = {
    email, setEmail, password, setPassword, error, setError, handleSignUp, handleSignIn,
    handleSubmitGoogle, handleSubmitGithub, usuario, handleAddDadosUsuario, getData, updateData, deleteData,
    armazenaInput, setArmazenaInput, handleInputFileFireStorage
  }

  //!___________________________________________________________________________


  return (
    <FirebaseContext.Provider value={value}>
      {children}
    </FirebaseContext.Provider>
  )
})


export { FirebaseContext, FirebaseProvider }

