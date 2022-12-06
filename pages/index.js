import Head from "next/head";
import styles from "../styles/Home.module.css";

export default function Home() {
	return (
		<div className={styles.container}>
			<Head>
				<title>Create Next App</title>
				<meta
					name="description"
					content="VIGENERE CIPHER"
				/>
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<main className={styles.main}>
				<h1 className={styles.title}>
					Vigenere Cipher
				</h1>

				<p className={styles.description}>
					Lets keep you messages safer with &nbsp;
					<code className={styles.code}><a href="https://www.geeksforgeeks.org/vigenere-cipher/">encryption</a></code>
				</p>
				<p>
					<span className={styles.normalText}>key</span>
					&nbsp; 
					<input type="text" name="secret-key" id="secret-key" maxLength={100} size="50" />
				</p>
				<div className={styles.grid}>
					<textarea name="original" id="original" cols="70" rows="10"></textarea>
					<br/>
					<p className={styles.card}>
						<button className={styles.button}>Encrypt</button>
						<button className={styles.button}>Decrypt</button>
					</p>
					<textarea name="original" id="original" cols="70" rows="10"></textarea>
				</div>
			</main>

			<footer className={styles.footer}>
				<a
					href="https://https://github.com/sergiorgiraldo"
					target="_blank"
					rel="noopener noreferrer">
					Powered by sergiorgiraldo :-)
				</a>
				&copy; 2022
			</footer>
		</div>
	);
}
