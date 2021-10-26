import React from "react";
import styles from "./UserImage.module.scss";

import AVATAR_DEFAULT from "../../assets/avatar-default.png";

type Props = {
  imageUri: string | undefined;
  imageAlt: string | undefined;
};

export function UserImage({
  imageUri = AVATAR_DEFAULT,
  imageAlt = "Foto de perfil vazia",
}: Props) {
  return (
    <div className={styles.userImage}>
      <img src={imageUri} alt={imageAlt} />
    </div>
  );
}
