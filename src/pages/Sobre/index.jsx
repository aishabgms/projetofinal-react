import fluxoImg from '../../assets/fluxo.png'
import fotoPerfil from '../../assets/foto-perfil.png'
import styles from './Sobre.module.css'

const Sobre = () => {
  return (
    <>
      <div className={styles.header}>
        <h1>
          Escreva sobre você!!!
        </h1>
        <div>
            <img src={fotoPerfil} alt="Foto de Perfil" />
        </div>
      </div>

      <div className={styles.containerSobre} >
          <h1 className={styles.nomeCompleto}>Aisha Brito</h1>
          <h2 className={styles.profissao}>Estudante</h2>
          <p className={styles.sobreMim}>
              Me chamo Aisha, tenho 18 anos e estou em busca de novos conhecimentos para agregar na minha carreira profissional.
              Por meio deste curso pude ter acesso a aprendizagem sobre github, html e css, javascript e react. Estou muito grata 
              pela oportunidade que me foi concebida através desse curso.
          </p>
      </div>

      <div className={styles.subtitulo}>
        <img src={fluxoImg} />
        <p>
        Este guia estruturado direciona as devas desde os conceitos básicos até as nuances avançadas 
        do React, proporcionando uma compreensão abrangente da biblioteca. 
        </p>
      </div>

      <div className={styles.containerVideo}>
        <iframe width="560" height="315" src="https://www.youtube.com/embed/ss3Njo-FUDE?si=DfSY306Gj48sXBIg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe> 
        <div className={styles.tituloSobre}>
          Aprenda com as duas Amandas a deixar seu Linkedin potente como você!!!
        </div>
      </div>
    </>
  )
}

export default Sobre;