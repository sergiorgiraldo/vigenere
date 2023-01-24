describe("template spec", () => {
	beforeEach(() => {
		cy.visit("http://localhost:3000");
	});

	it("must have fields for key and texts", () => {
		cy.get("#secret-key");
		cy.get("#original");
		cy.get("#result");
	});

	it("must have buttons for encrypt and decrypt", () => {
		cy.get("#btnEncrypt");
		cy.get("#btnDecrypt");
	});

	it("btn encrypt", () => {
		cy.get("#secret-key").type("TEST");
		cy.get("#original").type("foo");

		cy.get("#btnEncrypt").then(($btn) => {
			$btn.click();
			cy.get("#result").should("have.value", "ysg");
		});
	});

	it("btn decrypt", () => {
		cy.get("#secret-key").type("TEST");
		cy.get("#original").type("ysg");

		cy.get("#btnDecrypt").then(($btn) => {
			$btn.click();
			cy.get("#result").should("have.value", "foo");
		});
	});

	it("btn swap", () => {
		cy.get("#secret-key").type("TEST");
		cy.get("#original").type("ysg");
		cy.get("#btnDecrypt").click();

		cy.get("#btnSwap").then(($btn) => {
			$btn.click();
			cy.get("#original").should("have.value", "foo");
			cy.get("#result").should("have.value", "");
		});
	});
});
