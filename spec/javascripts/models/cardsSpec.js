describe("Cards", function() {
    var cards;

    beforeEach(function() {
        cards = new ColorMemory.Models.Cards();
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
        var card = new ColorMemory.Models.Card({color: 'color1'}); 
        
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

    describe('#removeFlippedCards', function() {
        var card1 = new ColorMemory.Models.Card();
        var card2 = new ColorMemory.Models.Card();
        
        beforeEach(function() {
            cards.add([new ColorMemory.Models.Card({faceDown: false}), card1, card2, new ColorMemory.Models.Card({faceDown: false})]);
        });

        it("makes the cards collection contain only the faced down cards", function() {
            cards.removeFlippedCards();
            expect(cards.length).toEqual(2);
            expect(cards.contains(card1) && cards.contains(card2)).toBe(true);
        });
    });
});
