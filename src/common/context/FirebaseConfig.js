// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { createContext, useState } from "react";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup, GithubAuthProvider } from "firebase/auth";




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
//*_______________________________________________________________________________


const FirebaseContext = createContext()

const FirebaseProvider = (({ children }) => {

  let googleProvider = new GoogleAuthProvider();
  let githubProvider = new GithubAuthProvider()

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const [user, setUser] = useState(null)

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
        setUser(user)
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
        setUser(user)
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
        setUser(user)
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


  //!__________________Valores para o Provider__________________________________

  const value = {
    email, setEmail, password, setPassword, error, setError, handleSignUp, handleSignIn,
     handleSubmitGoogle, handleSubmitGithub, user, setUser
  }

  //!___________________________________________________________________________


  return (
    <FirebaseContext.Provider value={value}>
      {children}
    </FirebaseContext.Provider>
  )
})


export { FirebaseContext, FirebaseProvider }

