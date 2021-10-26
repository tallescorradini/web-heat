import styles from "./Header.module.scss";
import logoImg from "../../assets/logo.svg";
import { useContext } from "react";
import { AuthContext } from "../../context/auth";
import { UserImage } from "../UserImage/UserImage";

export function Header() {
  const { user, signOut } = useContext(AuthContext);

  return (
    <div className={styles.boxWrapper}>
      <img src={logoImg} alt="DoWhile 2021" />
      <div className={styles.logoutBox}>
        {user ? <button onClick={signOut}>Sair</button> : null}

        <UserImage
          imageUri={user?.avatar_url}
          imageAlt={`Foto de ${user?.name}`}
        />
      </div>
    </div>
  );
}
