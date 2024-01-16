import styles from './Card.module.css';
function Card({id, url, cover}){
    return(
        <section className={styles.card }>
          <a href={url}
            rel='noreferrer noopener'
            target='blank'
           >
                <img src={cover} alt="capa video" />
          </a>
        </section>
        

    )
}

export default Card