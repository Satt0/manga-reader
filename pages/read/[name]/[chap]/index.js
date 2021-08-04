import React from 'react'
import ImagesViewer from '../../../../components/ImagesViewer';
import ChapSelect from '../../../../components/ChapSelect';
export default function Read(props) {
   
    if(props.chaps){
        return (
            <div style={{maxWidth:1100,margin:'0 auto'}}>
                <ImagesViewer images={props?.images || {}}/>
                <ChapSelect current={props.current} chaps={props?.chaps || []}/>
                
            </div>
        )

    }
    return <h1>Loading</h1>
}
export async function getStaticPaths() {
    return {
      paths: [
        
      ],
      fallback: true 
    };
  }
export async function getStaticProps(ctx){
    
       const {name,chap}=ctx.params
        
       const images=await fetch(`https://shielded-shore-59465.herokuapp.com/chap?name=${name}&chap=${chap}`).then(res=>res.json())
       const chaps=await fetch(`https://shielded-shore-59465.herokuapp.com/chap/list?name=${name}`).then(res=>res.json())

        return {
           props:{
                images,chaps,current:chap
           },
           revalidate: 10,
        }
   
    
}