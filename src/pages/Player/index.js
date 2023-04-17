import Banner from 'components/Banner';
import styles from './Player.module.css';
import Titulo from 'components/Titulo';
import { useParams } from 'react-router-dom';
import NaoEncontrada from 'pages/NaoEncontrada';
import { useState } from 'react';
import { useEffect } from 'react';

function Player(){
    const [video, setVideo] = useState();
    const parametros = useParams();
    
    useEffect( () => {
        fetch(`https://my-json-server.typicode.com/markosystem/cinetag-api/videos?id=${parametros.id}`)
        .then(resposta => resposta.json())
        .then(dados => {
            setVideo(...dados);
        })
    },[]);

    if(!video){
        return <NaoEncontrada />
    }

    return (
        <>
            <Banner image="player"/>
            <Titulo>
                <h1>Player</h1>
            </Titulo>
            <section className={styles.container}>
                <iframe 
                    width="100%" 
                    height="100%" 
                    src={video.link} 
                    title={video.title} 
                >
                </iframe>
            </section>
        </>
    )
}

export default Player;