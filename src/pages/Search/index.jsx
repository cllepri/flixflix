import styles from './Search.module.css'
import Header from '../../Components/Header'
import Footer from '../../Components/Footer'
import Container from '../../Components/Container'


export default function search(){
    return(
        <>
        <Header/>
        <Container> 
        <section className={styles.search}>
            <h2>Search</h2>
        </section>
        </Container>
        <Footer/>
        </>
    )
}