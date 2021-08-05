import React from "react";
import styles from "../styles/ChapSelect.module.css";
import Link from "next/link";
export default function ChapSelect({ chaps, current }) {
  const [pivot, setNav] = React.useState(() => {
    return {};
  });
  React.useEffect(() => {
    if (chaps?.list) {
      setNav(() => {
        const index = chaps?.list.findIndex((e) => e.chap === current);

        const newPref= {
          prev:
            index > 0
              ? `/read/${chaps?.list[index]?.name}/${chaps?.list[index - 1]?.chap}`
              : null,
          next:
            index < chaps.list.length - 1
              ? `/read/${chaps?.list[index]?.name}/${chaps?.list[index + 1]?.chap}`
              : null,
        };
        return newPref
      });
    }
  }, [chaps, current]);

  if (pivot.next || pivot.prev) {
    return (
      <div className={styles.container}>
        {pivot.prev && (
          <Link href={pivot.next}>
            <button>Pref</button>
          </Link>
        )}
        <button>{current}</button>
        {pivot.next && (
          <Link href={pivot.prev}>
            <button>Next</button>
          </Link>
        )}
      </div>
    );
  }
  return <></>;
}
