import React, { useEffect, useState } from 'react';
import TesteCadastroFirebase from '../../components/Modais/CadastroUsuario/TesteCadastroFirebase';
import BotaoGeral from '../../components/BotãoGeral';
import { DiGithubBadge } from "react-icons/di";




export default function PaginaTeste() {

  const icone = <DiGithubBadge/>

  return (

    <>

   <BotaoGeral icone={icone}/> 


    </>

  )

}





