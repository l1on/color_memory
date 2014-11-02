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

    describe('give two cards', function() {
        beforeEach(function() {
            cards.add([new ColorMemory.Models.Card, new ColorMemory.Models.Card]);
        });

        describe('#selectNextCard', function() {
            describe('when the current selected card is not the last one', function() {
                beforeEach(function() {
                    cards.at(0).select();
                });

                it('makes the next card the only one selected', function() {
                    cards.selectNextCard(); 

                    var selectedCards = cards.filter(function(card) { return card.get('selected') === true; });          
                    expect(selectedCards.length).toEqual(1);
                    expect(_(selectedCards).first()).toEqual(cards.at(1));         
                });
            });

            describe('when the current selected card is the last one', function() {
                beforeEach(function() {
                    cards.at(1).select();
                });

                it('makes the current card the only one selected', function() {
                    cards.selectNextCard(); 

                    var selectedCards = cards.filter(function(card) { return card.get('selected') === true; });          
                    expect(selectedCards.length).toEqual(1);
                    expect(_(selectedCards).first()).toEqual(cards.at(1));          
                });
            });  
        }); 

        describe('#selectPreviousCard', function() {
            describe('when the current selected card is not the first one', function() {
                beforeEach(function() {
                    cards.at(1).select();
                });

                it('makes the previous card the only one selected', function() {
                    cards.selectPreviousCard(); 

                    var selectedCards = cards.filter(function(card) { return card.get('selected') === true; });          
                    expect(selectedCards.length).toEqual(1);
                    expect(_(selectedCards).first()).toEqual(cards.at(0));         
                });
            });

            describe('when the current selected card is the first one', function() {
                beforeEach(function() {
                    cards.at(0).select();
                });

                it('makes the current card the only one selected', function() {
                    cards.selectPreviousCard(); 

                    var selectedCards = cards.filter(function(card) { return card.get('selected') === true; });          
                    expect(selectedCards.length).toEqual(1);
                    expect(_(selectedCards).first()).toEqual(cards.at(0));          
                });
            });
           
        });         
    });

});
