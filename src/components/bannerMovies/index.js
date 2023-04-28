import React,{Fragment} from "react"
import {Image,Text} from 'react-native'
import styles from "./style";

const Imagem = Math.floor(Math.random()* 4 +1); 

export default function BannerMovies(){
    return(
        <>
        <Text style = {styles.textBanner}>Em Cartaz</Text>
        <Image style = {styles.imagemBanner} source = {require(`../../Img/${Imagem}.jpg`)}/>
        </>
    );
}