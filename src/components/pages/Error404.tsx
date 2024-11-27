import styles from "./Error404.module.css";

export const Error404 = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Error 404</h1>
      <p className={styles.subtitle}>Page Not Found</p>
      <button
        className={styles.button}
        onClick={() => (window.location.href = "/")}
      >
        Go Back to Home
      </button>
    </div>
  );
};
