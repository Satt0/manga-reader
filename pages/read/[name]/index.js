import React from 'react'
import ChapViewer from '../../../components/ChapViewer';
export default function AllChap(props) {
    const {chaps}=props
   if(chaps){
    return (
        <div>
            <h1 style={{textAlign:'center'}}>{chaps.list[0].name}</h1>
            <ChapViewer chaps={chaps} />
        </div>
    )
   }
   return <h3>Loading!!!</h3>
}
export async function getStaticPaths() {
    return {
      paths: [
        
      ],
      fallback: true 
    };
  }
export async function getStaticProps(ctx){
    
       const {name}=ctx.params
       
       const chaps=await fetch(`https://shielded-shore-59465.herokuapp.com/chap/list?name=${name}`).then(res=>res.json())

        return {
           props:{
                chaps
           },
           revalidate: 10, // In seconds
        }
    
    
}