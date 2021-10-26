import { useContext } from "react";

import styles from "./App.module.scss";
import { LoginBox } from "./components/LoginBox/LoginBox";
import { MessageList } from "./components/MessageList/MessageList";
import { SendMesageForm } from "./components/SendMessageForm/SendMesageForm";
import { Header } from "./components/Header/Header";
import { AuthContext } from "./context/auth";

export function App() {
  const { user } = useContext(AuthContext);

  return (
    <div className={styles.pageWrapper}>
      <Header />
      <main
        className={`${styles.contentWrapper} ${
          !!user ? styles.contentSigned : ""
        }`}
      >
        <MessageList />
        {!!user ? <SendMesageForm /> : <LoginBox />}
      </main>
    </div>
  );
}
