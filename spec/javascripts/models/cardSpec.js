describe("Card", function() {
    var card;

    beforeEach(function() {
        card = new Card();
    });

    it("should be faced down by default", function() {
        expect(card.get('faceDown')).toBe(true);
    });

	describe("#flipUp", function() {
		it("should make the card face up", function() {
		 	card.flipUp();
		 	expect(card.get('faceDown')).toBe(false);
		});
	});

	describe("#flipDown", function() {
		it("should make the card face down", function() {
		 	card.flipDown();
		 	expect(card.get('faceDown')).toBe(true);
		});
	});

	describe("#putOnColor", function() {
		it("should color the card according to the passed color", function() {
		 	card.putOnColor('color2');
		 	expect(card.get('color')).toEqual('color2');
		});
	});
});
