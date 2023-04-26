import Banner from 'components/Banner'
import Cabecalho from 'components/Cabecalho'
import Rodape from 'components/Rodape'
import React from 'react'

const Inicio = () => {
  return (
    <>
      <Cabecalho />
        <Banner imagem="home" />
      <Rodape />
    </>

  )
}

export default Inicio