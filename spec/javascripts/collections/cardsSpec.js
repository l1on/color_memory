describe("Cards", function() {
    var cards;

    beforeEach(function() {
        cards = new Cards();
    });

    it("should consist of cards", function() {
    	expect(cards.model).toEqual(Card);
    });

    it("should have a length of 16", function() {
        expect(cards.length).toEqual(16);
    });

    it("should have 8 pairs of colors", function() {
 		var cardPairsByColor = cards.groupBy(function(card) { return card.get('color'); });
        expect(_.size(cardPairsByColor)).toEqual(8);
    });
});
