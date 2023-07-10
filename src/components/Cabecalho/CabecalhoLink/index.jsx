
import styles from './CabecalhoLink.module.scss'
import { Link, useLocation } from 'react-router-dom'



import React from 'react'

export default function CabecalhoLink({ children, to, navegar = false }) {
  const localizacao = useLocation();
  return (
    <>

      {!navegar && (
        <Link className={`${styles.link} 
    ${localizacao.pathname === to ? styles.linkDestacado : ''}`} to={to}>
          {children}
        </Link>
      )}
      
    </>
  )
}
