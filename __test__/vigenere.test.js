import { describe, it, expect } from "vitest";
import { Handle } from "../lib/index";

describe("vigenere encryption", () => {
	it("bola maria", () => {
		expect(Handle("Cipher", "bola", "maria")).toBe("nocib");
	});
	it("bola mariajose", () => {
		expect(Handle("Cipher", "bola", "mariajose")).toBe("nocibxzsf");
	});
	it("maria<space>jose", () => {
		expect(Handle("Cipher", "bola", "maria jose")).toBe("nocib xzsf");
	});
	it("maria<space>jose1", () => {
		expect(Handle("Cipher", "bola", "maria jose1")).toBe("nocib xzsf1");
	});
	it("maria<space>j1ose", () => {
		expect(Handle("Cipher", "bola", "maria j1ose")).toBe("nocib x1zsf");
	});
	it("<space>maria>", () => {
		expect(Handle("Cipher", "bola", " maria")).toBe(" nocib");
	});
	it("maria<space><space>nocib", () => {
		expect(Handle("Cipher", "bola", "maria  jose")).toBe("nocib  xzsf");
	});
	it("maria<space>1<space>jose", () => {
		expect(Handle("Cipher", "bola", "maria 1 jose")).toBe("nocib 1 xzsf");
	});
	it("maria<space>1<space>j1ose", () => {
		expect(Handle("Cipher", "bola", "maria 1 j1ose")).toBe("nocib 1 x1zsf");
	});
	it("mjmfib maria", () => {
		expect(Handle("Cipher", "mjmfib", "maria")).toBe("yjdni");
	});
	it("bola maria.", () => {
		expect(Handle("Cipher", "bola", "maria.")).toBe("nocib.");
	});
});

describe("vigenere decryption", () => {
	it("bola maria", () => {
		expect(Handle("Decipher", "bola", "nocib")).toBe("maria");
	});
	it("bola mariajose", () => {
		expect(Handle("Decipher", "bola", "nocibxzsf")).toBe("mariajose");
	});
	it("maria<space>jose", () => {
		expect(Handle("Decipher", "bola", "nocib xzsf")).toBe("maria jose");
	});
	it("maria<space>jose1", () => {
		expect(Handle("Decipher", "bola", "nocib xzsf1")).toBe("maria jose1");
	});
	it("maria<space>j1ose", () => {
		expect(Handle("Decipher", "bola", "nocib x1zsf")).toBe("maria j1ose");
	});
	it("<space>maria>", () => {
		expect(Handle("Decipher", "bola", " nocib")).toBe(" maria");
	});
	it("maria<space><space>nocib", () => {
		expect(Handle("Decipher", "bola", "nocib  xzsf")).toBe("maria  jose");
	});
	it("maria<space>1<space>jose", () => {
		expect(Handle("Decipher", "bola", "nocib 1 xzsf")).toBe("maria 1 jose");
	});
	it("maria<space>1<space>j1ose", () => {
		expect(Handle("Decipher", "bola", "nocib 1 x1zsf")).toBe(
			"maria 1 j1ose"
		);
	});
	it("mjmfib maria", () => {
		expect(Handle("Decipher", "mjmfib", "yjdni")).toBe("maria");
	});
	it("bola nocib.", () => {
		expect(Handle("Decipher", "bola", "nocib.")).toBe("maria.");
	});
});
