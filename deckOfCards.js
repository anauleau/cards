(function(){
	var suits = ['spades', 'clubs', 'hearts', 'diamonds'];
	var values = [2, 3, 4, 5, 6, 7, 8, 9, 10, 'J', 'Q', 'K', 'A'];
	var deck = [];

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