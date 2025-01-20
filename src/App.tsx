import Header from "./components/Header/Header";
import Main from "./pages/Main/Main";
import styles from "./styles.module.css";
import { useTheme } from "./contexts/ThemeContext/ThemeContext";
import { darkStates } from "./contexts/ThemeContext/constants";

function App() {
  const { isDark } = useTheme();
  return (
    <div className={isDark === darkStates.Dark ? styles.dark : styles.light}>
      <Header />
      <div className={styles.mainContainer}>
        <Main />
      </div>
    </div>
  );
}

export default App;
