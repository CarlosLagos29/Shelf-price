import styles from "./page.module.scss";

export default function Home() {
  return (
    <main className={styles.main}>
      <h1 className={styles.title}>Shelf-price</h1>
      <p className={styles.subtitle}>Setup inicial listo. Próximo paso: fase 1 del plan.</p>
    </main>
  );
}
