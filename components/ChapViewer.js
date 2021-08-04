import React from 'react'
import styles from '../styles/ChapViewer.module.css'
import Link from 'next/link'
export default function ChapViewer({chaps}) {
    const {list}=chaps
    if(list){
        return (
            <div className={styles.container}>
                
                {[...list].reverse().map((e,i)=><Link passHref={true} key={i} href={`/read/${e.name}/${e.chap}`}><button>{e?.title}</button></Link>)}
            </div>
        )
    }
    return <h3>Error!!!</h3>
}
