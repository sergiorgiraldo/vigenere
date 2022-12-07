const letters = [...Array(26)].map((_, i) =>
	String.fromCharCode(i + 97).toUpperCase()
);

export function Cipher(key, txt) {
	var res = "";
	var key_ = key.toUpperCase();
	var txt_ = txt.toUpperCase();
	var indexToKey = -1;

	for (let index = 0; index < txt_.length; index++) {
		indexToKey += 1;
		if (txt_[index].match(/[A-Z]/i)) {
			const indexLetter = letters.indexOf(txt_[index]);
			const indexKey = letters.indexOf(key_[indexToKey % key_.length]);
			var offSet = indexLetter + indexKey;
			if (offSet > 25) offSet -= 26;
			const cipher = letters[offSet];
			if (txt_[index] == txt[index]) {
				res += cipher;
			} else {
				res += cipher.toLowerCase();
			}
		} else {
			res += txt_[index];
			indexToKey -= 1;
		}
	}
	return res;
}

export function Decipher(key, txt) {
	var res = "";
	var key_ = key.toUpperCase();
	var txt_ = txt.toUpperCase();
	var indexToKey = -1;

	for (let index = 0; index < txt_.length; index++) {
		indexToKey += 1;
		if (txt_[index].match(/[A-Z]/i)) {
			const indexLetter = letters.indexOf(txt_[index]);
			const indexKey = letters.indexOf(key_[indexToKey % key_.length]);
			var offSet = indexLetter - indexKey;
			if (offSet < 0) offSet += 26;
			const cipher = letters[offSet];
			if (txt_[index] == txt[index]) {
				res += cipher;
			} else {
				res += cipher.toLowerCase();
			}
		} else {
			res += txt_[index];
			indexToKey -= 1;
		}
	}
	return res;
}
