import React from 'react'
import styles from '../styles/ImagesViewer.module.css'
export default function ImagesViewer({images}) {
    
    const {chaps}=images
   if(chaps){
    return (
        <div className={styles.container}>
            {chaps.map((e,i)=><img alt={'chap'} key={i} loading="lazy" src={e}/>)}
        </div>
    )
   }
   return <h3>no images</h3>
}
