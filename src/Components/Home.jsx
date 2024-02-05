import { useState } from "react"
import Child from "./child"
import Child1 from "./Child1"
import styles from './Home.module.css'

 export const Home = () =>{
    const [data, setData]= useState('I am a User')


    const handleClick = () =>{
        setData("I am a Admin")
    }
  console.log(data)
    return(
        <>
        <div className={styles.homeContainer}>
            I am a Home Page
            <h1>{data}</h1>
             <button onClick={handleClick}>Change the String</button>
        </div>
        <Child />
        <Child1 />
        </>
    )
}


