const letters = [...Array(26)].map((_, i) =>
	String.fromCharCode(i + 97).toUpperCase()
);

function makeArray(a, b) {
	var arr = new Array(a);
	for (let i = 0; i < a; i++) {
		arr[i] = new Array(b);
	}
	return arr;
}

function buildMatrix() {
	var matrix = makeArray(26, 26);
	for (let i = 0; i < 26; i++) {
		var idx = i;
		for (let j = 0; j < 26; j++) {
			if (idx > 25) idx = 0;
			matrix[i][j] = letters[idx];
			idx += 1;
		}
	}
	return matrix;
}

export function Cipher(key, txt) {
	const matrix = buildMatrix();

	var res = "";
	var key_ = key.toUpperCase();
	var txt_ = txt.toUpperCase();
	var indexToKey = -1;

	for (let index = 0; index < txt_.length; index++) {
		indexToKey += 1;
		if (txt_[index] == " ") {
			res += " ";
			indexToKey -= 1;
		} else if (!isNaN(txt_[index])) {
			res += txt_[index];
			indexToKey -= 1;
		} else {
			const indexLetter = letters.indexOf(txt_[index]);
			const indexKey = letters.indexOf(key_[indexToKey % key_.length]);
			const cipher = matrix[indexLetter][indexKey];
			if (txt_[index] == txt[index]) {
				res += cipher;
			} else {
				res += cipher.toLowerCase();
			}
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
		if (txt_[index] == " ") {
			res += " ";
			indexToKey -= 1;
		} else if (!isNaN(txt_[index])) {
			res += txt_[index];
			indexToKey -= 1;
		} else {
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
		}
	}
	return res;
}
