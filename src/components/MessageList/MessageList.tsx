import styles from "./MessageList.module.scss";

import logoImg from "../../assets/logo.svg";

export function MessageList() {
  return (
    <div className={styles.messageListWrapper}>
      <img src={logoImg} alt="DoWhile 2021" />
      <ul className={styles.messageList}>
        {[1, 2, 3].map((key) => (
          <li className={styles.message}>
            <p className={styles.MessageContent}>
              Não vejo a hora de começar esse evento, com certeza vai ser o
              melhor de todos os tempos, vamooo pra cima! 🔥🔥
            </p>
            <div className={styles.messageUser}>
              <div className={styles.userImage}>
                <img
                  src="https://github.com/tallescorradini.png"
                  alt="Talles Corradini"
                />
              </div>
              <span>Talles Corradini</span>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
