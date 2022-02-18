import Link from "next/link";
import React from "react";
import styles from "./style.module.scss";

type PropsButton = {
	caminho: string;
	localName: string;
};
function ButtonLocation({ caminho, localName }: PropsButton) {
	return (
		<Link href={caminho}>
			<a className={styles.link}>{localName}</a>
		</Link>
	);
}

export default ButtonLocation;
