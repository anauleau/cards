(function(){
	var suits = ['spades', 'clubs', 'hearts', 'diamonds'];
	var values = [2, 3, 4, 5, 6, 7, 8, 9, 10, 'J', 'Q', 'K', 'A'];
	var deck = [];
	var valueIndex = {2: 2, 3: 3, 4: 4, 5: 5, 6: 6, 7: 7, 8: 8, 9: 9, 10: 10, 'J': 10, 'Q': 10, 'K': 10, 'A': {high: 11, low: 1}};

	// Store details about each suit
	var suitDictionary = {
		spades: {color: 'black'},
		clubs: {color: 'black'},
		hearts: {color: 'red'},          
		diamonds: {color: 'red'}
	};

	
	// Card Class
	function Card(value, suit) {
		this.value = value;
		this.suit = suit;
		this.count;
	}

	// Game class
	function Game(dealer, player) {
		this.dealer = dealer;
		this.player = player;
		this.winner;
	}

	function Hand() {
		this.cards = [];
		this.total = 0;
		this.total2 = 0; // need a second total if the hand has an ace
		this.dealer;
	}
	
	Hand.prototype.getAceCount = function() {
		var count = 0;
		this.cards.reduce(function(a, b){
			if (b.value === 'A') return a += 1;
		}, count);
		return count;
	}
	
	Hand.prototype.getTotals = function () {
		var totals = [];
	}

	// Build Deck
	suits.forEach(function(suit) {
		values.forEach(function(value) {
			deck.push(new Card(value, suit));
		});
	});
	
	function shuffleDeck(deck) {
		var shuffledDeck = [],
			copy = deck.slice(); // make copy
		while (copy.length > 0) {
			shuffledDeck.push(copy.splice(Math.floor(Math.random() * copy.length), 1)[0]);
		}
		return shuffledDeck;
	}
	function clearTable() {
		$('.row').empty();
	}

	function deal(deck) {
		deck.map(function(card){
			$('.row').append('<div class="card ' + suitDictionary[card.suit].color + '"><div class="labelTopLeft">' + card.value + '</div><div class="labelSuit">' + card.suit + '</div><div class="labelBottomRight">' + card.value + '</div></div>');
		});
	}

	$(document).ready(function(){
		deal(deck);
		$('#shuffleBtn').click(function(e){
			e.preventDefault();
			clearTable();
			var shuffledDeck = shuffleDeck(deck);
			deal(shuffledDeck);
		});
	});	
})();
