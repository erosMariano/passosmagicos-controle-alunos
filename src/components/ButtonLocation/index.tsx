import Link from "next/link";
import React from "react";
import { PropsButton } from "../../types/myTypes";
import styles from "./style.module.scss";


function ButtonLocation({ caminhoButton, localName }: PropsButton) {
	return (
		<Link href={caminhoButton}>
			<a className={styles.link}>{localName}</a>
		</Link>
	);
}

export default ButtonLocation;
