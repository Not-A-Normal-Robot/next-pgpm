import styles from "./page.module.scss";
import { roboto } from "@/ui/fonts";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        {/* TODO: Background */}
        <h1 className={[roboto.className, styles.title].join(" ")}>pgpm</h1>
        <p className={styles.subtitle}>procedurally-generated pixel matrices</p>
        <input className={styles.search} />
      </main>
    </div>
  );
}
