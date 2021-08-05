import React from "react";
import styles from "../styles/ChapSelect.module.css";
import Link from "next/link";
export default function ChapSelect({ chaps, current }) {
  const [pivot, setNav] = React.useState(null);
  const { list } = chaps;
  React.useEffect(() => {
    const index = list.findIndex((e) => e.chap === current);
    setNav(index);
  }, [current]);

  if (list[pivot]?.name && pivot) {
    return (
      <div className={styles.container}>
        <Link
          
          href={`/read/${list[pivot]?.name}/${list[pivot + 1]?.chap}` }
        >
         
          <button>Pref</button>
        </Link>
        <button>{list[pivot].title}</button>
        <Link
         
          href={`/read/${list[pivot]?.name}/${list[pivot + 1]?.chap}`}          
        >
         
          <button>Pref</button>
        </Link>
      </div>
    );
  }
  return <></>;
}
