describe("Game", function() {
    var game;

    beforeEach(function() {
        game = new ColorMemory.Models.Game();
    });

    describe(':cards', function() {
        var cards;
        
        beforeEach(function() {
            cards = game.get('cards');
        });

        it("is a collection of cards", function() {
            expect(cards).toEqual(jasmine.any(ColorMemory.Models.Cards));
        });

        it("has a length of 16", function() {
            expect(cards.length).toEqual(16);
        });

        it("has 8 pairs of colors", function() {
            var cardPairsByColor = cards.groupBy(function(card) { return card.get('color'); });
            expect(_.size(cardPairsByColor)).toEqual(8);
        });

        it("has its first card selected", function() {
            expect(cards.first().get('selected')).toBe(true);
        });
    });

    describe('#selectNextCard', function() {
        beforeEach(function() {
            game.selectNextCard();    
        });

        it('makes the next card selected', function() {          
            expect(game.get('cards').at(1).get('selected')).toBe(true);
        });

        it('deselects the currently selected card', function() {          
            expect(game.get('cards').at(0).get('selected')).toBe(false);
        });        
    });    

    
});
