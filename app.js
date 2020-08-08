document.addEventListener('DOMContentLoaded', () => {
    const steepsEl = document.querySelector('p');
    const grid = document.querySelector('.grid');
    let cards = [
        {
            name: 'blueDiamond',
            img: 'images/blue_diamond.jpg'
        },
        {
            name: 'blueDiamond',
            img: 'images/blue_diamond.jpg'
        },
        {
            name: 'greenCircle',
            img: 'images/green_circle.jpg'
        },
        {
            name: 'greenCircle',
            img: 'images/green_circle.jpg'
        },
        {
            name: 'greenRing',
            img: 'images/green_ring.jpg'
        },
        {
            name: 'greenRing',
            img: 'images/green_ring.jpg'
        },
        {
            name: 'greenSquare',
            img: 'images/green_square.jpg'
        },
        {
            name: 'greenSquare',
            img: 'images/green_square.jpg'
        },
        {
            name: 'redCircle',
            img: 'images/red_circle.jpg'
        },
        {
            name: 'redCircle',
            img: 'images/red_circle.jpg'
        },
        {
            name: 'redStar',
            img: 'images/red_star.jpg'
        },
        {
            name: 'redStar',
            img: 'images/red_star.jpg'
        }
    ];
    let peeked = [];
    let peekedNames = [];
    let steeps = 0;

    function buildGrid() {
        steeps = 0;
        cards = cards.sort(() => 0.5 - Math.random());
        for (let i = 0; i < cards.length; i++) {
            let el = document.createElement('img');
            el.setAttribute('src', 'images/mask.jpg');
            el.setAttribute('data-id', i);
            el.addEventListener('click', peekCard);
            grid.append(el);
        }
    }

    function peekCard() {
        let cardID = this.getAttribute('data-id');
        let cardName = cards[cardID].name;
        peeked.push(cardID);
        peekedNames.push(cardName);
        this.setAttribute('src', cards[cardID].img);

        if (peeked.length === 2) {
            setTimeout(matchCard, 500);
            steeps++;
            steepsEl.innerHTML = `Steeps: ${steeps}`;
        }

    }

    function matchCard() {
        const elements = document.querySelectorAll('img');
        if (peekedNames[0] !== peekedNames[1]) {

            elements[peeked[0]].setAttribute('src', 'images/mask.jpg');
            elements[peeked[1]].setAttribute('src', 'images/mask.jpg');
        }
        peeked = [];
        peekedNames = [];
    }


    buildGrid();

});