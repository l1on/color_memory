describe("Cards", function() {
    var cards;

    beforeEach(function() {
        cards = new Cards();
    });

	describe("#containsCardWithColor", function() {
		var color;

		beforeEach(function() {
			color = 'color1';
		});

		it("returns false", function() {
		 	expect(cards.containsCardWithColor(color)).toBe(false);
		});

		describe("when the cards collection already has a card whose color is the same as the color param", function() {
			beforeEach(function() {
				cards.add({color: color});
			});

			it("returns true", function() {
			 	expect(cards.containsCardWithColor(color)).toBe(true);
			});			
		});
	});

	describe('#areFilppedCardsSameColor', function() {
        var card = new Card({color: 'color1'}); 

        describe('when one card is flipped up', function() {
            beforeEach(function() {
            	card.flip();
                cards.add(card);
            });

            describe('when another card of the same color is flipped up', function() {
                beforeEach(function() {
                    cards.add({color: card.get('color')}).flip();
                });

                it("returns true", function() {
                    expect(cards.areFilppedCardsSameColor()).toBe(true);
                });
            });

            describe('when another card of a different color is flipped up', function() {
                beforeEach(function() {
                    cards.add({color: card.get('color') + 'xyz'}).flip();
                });

                it("returns false", function() {
                    expect(cards.areFilppedCardsSameColor()).toBe(false);
                });
            });
        });

	});
});
