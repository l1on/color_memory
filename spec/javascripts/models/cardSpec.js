describe("Card", function() {
    var card;

    beforeEach(function() {
        card = new Card();
    });

    it("is faced down by default", function() {
        expect(card.get('faceDown')).toBe(true);
    });

	describe("#flip", function() {
		it("makes the card face up", function() {
		 	card.flip();
		 	expect(card.get('faceDown')).toBe(false);
		});
	});

	describe("#turnDown", function() {
		it("makes the card face down", function() {
		 	card.turnDown();
		 	expect(card.get('faceDown')).toBe(true);
		});
	});

});
