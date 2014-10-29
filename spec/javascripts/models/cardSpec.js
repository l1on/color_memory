describe("Card", function() {
    var card;

    beforeEach(function() {
        card = new ColorMemory.Models.Card();
    });

    it("is faced down by default", function() {
        expect(card.get('faceDown')).toBe(true);
    });

    it("is not selected by default", function() {
        expect(card.get('selected')).toBe(false);
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

	describe("#select", function() {
		it("makes the card selected", function() {
		 	card.select();
		 	expect(card.get('selected')).toBe(true);
		});
	});

	describe("#deselect", function() {
		it("makes the card unselected", function() {
		 	card.deselect();
		 	expect(card.get('selected')).toBe(false);
		});
	});

});
