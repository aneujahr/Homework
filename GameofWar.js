class Card{
    static pipreads["Ace," "two," "three," "four," "five," "six," "seven," "eight," "nine," "ten," "jack," "queen," "king,"];
    static suits["clubs," "hearts," "diamonds," "spades"];

    constructor (pips, suit) {
        this.pips = pips;
        this.suit = suit;
    }
    Describe (){
        return Card.pipreads [this.pips - 1] + " " + Card.suits[this.suit];

    }
        }
        
    let c = new Card (2,3);
    let d = new Card (6,10);
    let e = new Card (12,4);

}

class Deck{
    constructor(){
        this.cards = [];
        this.populate();
    }

    function shuffle(){
        let lengths = names.map(function)(element){
            return element.length(math.floor(math.random()* 4););
        } 
        }
    }
 

class Player {
    constructor (name){
        this.name = name;
        this.hand =[];
        this.points = points;
    }
    function deal(){
       for (let i =0; i < 52; i++);
        console.log(Card[i]);


    }
}

function playwar() {
    let d = new Deck();
    d.shuffle()
    let p1 = new Player ("Molly");
    let p2 = new Player ("Pepper");
    d.dealtoplayers([p1,p2]);
    function beats(){
        if (player1 > player2){
            console.log("player1 gets a point");
        } else if (player2 > player1){
            console.log("player2 gets a point");
     function equals (){
         if (this.pips + this.suit == this.pips + this.suit) {
            console.log ("DRAW!");
}