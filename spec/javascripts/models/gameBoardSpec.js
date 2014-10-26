describe("GameBoard", function() {
    var gameBoard;

    beforeEach(function() {
        gameBoard = new GameBoard();
    });

    describe(':cards', function() {
        var cards;
        
        beforeEach(function() {
            cards = gameBoard.get('cards');
        });

        it("is a collection of cards", function() {
            expect(cards).toEqual(jasmine.any(Cards));
        });

        it("has a length of 16", function() {
            expect(cards.length).toEqual(16);
        });

        it("has 8 pairs of colors", function() {
            var cardPairsByColor = cards.groupBy(function(card) { return card.get('color'); });
            expect(_.size(cardPairsByColor)).toEqual(8);
        });
    });

    
});
