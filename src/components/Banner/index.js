import styles from './Banner.module.css';

function Banner({image}){
    return (
        <div className={styles.capa}
        style={{backgroundImage: `url('/imagens/banner-${image}.png')`}} />
    )
}

export default Banner;