import React from "react";
import styles from "../styles/ChapSelect.module.css";
export default function ChapSelect({ chaps ,current}) {
    const [nav,setNav]=React.useState(null)
   const {list}=chaps
    React.useEffect(()=>{
console.log(current);
    })
  
    return (
      <div className={styles.container}>
        <button>Pref</button>
        <button>Now</button>
        <button>Next</button>
      </div>
    );
  
  
}
