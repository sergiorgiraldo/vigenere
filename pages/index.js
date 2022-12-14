import Head from "next/head";
import styles from "../styles/Home.module.css";
import { useRef, useState, useEffect } from "react";
import { Cipher, Decipher } from "../lib/index";

export default function Home() {
	const keyInputRef = useRef();
	const textInputRef = useRef();
	const [result, setResult] = useState("");
	const [key, setKey] = useState("");

	useEffect(() => {
		if (keyInputRef.current) {
			keyInputRef.current.focus();
		}
	}, []);

	const handleChange = (event) => {
		let text = event.target.value.replace(/[^a-z]/gi, "");
		text = text.toUpperCase();
		setKey(text);
	};

	const handleSubmit = (event, param) => {
		event.preventDefault();

		const key = keyInputRef.current.value;
		const txt = textInputRef.current.value;

		if (param == "e") {
			setResult(Cipher(key, txt));
		} else {
			setResult(Decipher(key, txt));
		}
	};

	return (
		<form>
			<div className={styles.container}>
				<Head>
					<title>Vigenere Cipher</title>
					<meta name="description" content="VIGENERE CIPHER" />
					<link rel="icon" href="/favicon.ico" />
				</Head>

				<main className={styles.main}>
					<h1 className={styles.title}>Vigenere Cipher</h1>

					<p className={styles.description}>
						Lets keep you messages safer with &nbsp;
						<code className={styles.code}>
							<a href="https://www.geeksforgeeks.org/vigenere-cipher/">
								encryption
							</a>
						</code>
					</p>
					<p>
						<span className={styles.normalText}>key</span>
						&nbsp;
						<input
							type="text"
							name="secret-key"
							id="secret-key"
							autoFocus
							maxLength={100}
							size="40"
							ref={keyInputRef}
							className={styles.inputs}
							onChange={handleChange}
							value={key}
						/>
					</p>
					<div className={styles.grid}>
						<textarea
							name="original"
							id="original"
							cols="70"
							rows="7"
							ref={textInputRef}
							className={styles.inputs}></textarea>
						<br />
						<p className={styles.card}>
							<button
								className={styles.button}
								onClick={(event) => handleSubmit(event, "e")}>
								Encrypt
							</button>
							<button
								className={styles.button}
								onClick={(event) => handleSubmit(event, "d")}>
								Decrypt
							</button>
						</p>
						<textarea
							name="result"
							id="result"
							cols="70"
							rows="7"
							className={[styles.inputs, styles.textarea].join(' ')}
							value={result}
							readOnly></textarea>
					</div>
				</main>

				<footer className={styles.footer}>
					<a
						href="https://github.com/sergiorgiraldo"
						target="_blank"
						rel="noopener noreferrer">
						Powered by sergiorgiraldo :-)
					</a>
					&copy; 2022
				</footer>
			</div>
		</form>
	);
}
