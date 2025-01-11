import Header from "./components/Header/Header";
import Main from "./pages/Main/Main";
import styles from "./styles.module.css";

function App() {
  return (
    <>
      <Header />
      <div className={styles.mainContainer}>
        <Main />
      </div>
    </>
  );
}

export default App;
