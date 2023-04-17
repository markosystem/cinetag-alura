import Banner from "components/Banner";
import Card from "components/Card";
import Titulo from "components/Titulo";
import styles from "./Inicio.module.css";
import { useEffect, useState } from "react";

function Inicio(){
    const [videos, setVideos] = useState([]);
    useEffect( () => {
        fetch('https://my-json-server.typicode.com/markosystem/cinetag-api/videos')
        .then(resposta => resposta.json())
        .then(dados => {
            setVideos(dados);
        })
    },[]);
    
    return (
        <>
            
            <Banner image="home" />
            <Titulo>
                <h1>Titulo de Exemplo</h1>
            </Titulo>
            <section className={styles.container}>
                {videos.map((video => {
                    return <Card {...video} key={video.id} />
                }))}
            </section>

            
        </>
    )
}

export default Inicio;