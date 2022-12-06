import { describe, it, expect } from "vitest";
import { Cipher, Decipher } from "../lib/index";

describe("vigenere encryption", () => {
	it("bola maria", () => {
		expect(Cipher("bola", "maria")).toBe("nocib");
	});
	it("bola mariajose", () => {
		expect(Cipher("bola", "mariajose")).toBe("nocibxzsf");
	});
	it("maria<space>jose", () => {
		expect(Cipher("bola", "maria jose")).toBe("nocib xzsf");
	});
	it("maria<space>jose1", () => {
		expect(Cipher("bola", "maria jose1")).toBe("nocib xzsf1");
	});
	it("maria<space>j1ose", () => {
		expect(Cipher("bola", "maria j1ose")).toBe("nocib x1zsf");
	});
	it("<space>maria>", () => {
		expect(Cipher("bola", " maria")).toBe(" nocib");
	});
	it("maria<space><space>nocib", () => {
		expect(Cipher("bola", "maria  jose")).toBe("nocib  xzsf");
	});
	it("maria<space>1<space>jose", () => {
		expect(Cipher("bola", "maria 1 jose")).toBe("nocib 1 xzsf");
	});
	it("maria<space>1<space>j1ose", () => {
		expect(Cipher("bola", "maria 1 j1ose")).toBe("nocib 1 x1zsf");
	});
	it("mjmfib maria", () => {
		expect(Cipher("mjmfib", "maria")).toBe("yjdni");
	});
});

describe("vigenere decryption", () => {
	it("bola maria", () => {
		expect(Decipher("bola", "nocib")).toBe("maria");
	});
	it("bola mariajose", () => {
		expect(Decipher("bola", "nocibxzsf")).toBe("mariajose");
	});
	it("maria<space>jose", () => {
		expect(Decipher("bola", "nocib xzsf")).toBe("maria jose");
	});
	it("maria<space>jose1", () => {
		expect(Decipher("bola", "nocib xzsf1")).toBe("maria jose1");
	});
	it("maria<space>j1ose", () => {
		expect(Decipher("bola", "nocib x1zsf")).toBe("maria j1ose");
	});
	it("<space>maria>", () => {
		expect(Decipher("bola", " nocib")).toBe(" maria");
	});
	it("maria<space><space>nocib", () => {
		expect(Decipher("bola", "nocib  xzsf")).toBe("maria  jose");
	});
	it("maria<space>1<space>jose", () => {
		expect(Decipher("bola", "nocib 1 xzsf")).toBe("maria 1 jose");
	});
	it("maria<space>1<space>j1ose", () => {
		expect(Decipher("bola", "nocib 1 x1zsf")).toBe("maria 1 j1ose");
	});
	it("mjmfib maria", () => {
		expect(Decipher("mjmfib", "yjdni")).toBe("maria");
	});
});
