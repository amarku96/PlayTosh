

const casinoData = {
    title: "Top 5 Real Money Online Casino Bonus List",
    header: {
        brand: "PlayTosh",
        claimedBonuses: 10302
    },
    casinos: [
        {
            name: "playzee",
            logo: "./playzee.png", 
            label: "Player Favourite",
            additional: ["100% Up to", "€1500","150 Zee Spins", "500 Zee Points"],
            userRating: 5,
            overallRating: 10.0,
            actionText: "Play"
        },
        {
            name: "Machance",
            logo: "./Machance.png", 
            label: "Trending",
            welcomeBonus: "200% Up to €500",
            additional: ["200% Up to","€500","20 FREE SPINS"],
            userRating: 5,
            overallRating: 9.9,
            actionText: "Play"
        },
        {
            name: "Intense",
            logo: "./Intense.png", 
            label: "Number 1 in Europe",
            additional: [ "200% Up to", "€3,000","30 FREE SPINS"],
            userRating: 5,
            overallRating: 9.8,
            actionText: "Play"
        },
        {
            name: "Leovegas",
            logo: "./Leovegas.png", 
            label: "Exclusive",
            welcomeBonus: "100% Up to €200",
            additional: ["100% Up to", "€200","25 Free Spins on Book of Dead"],
            userRating: 5,
            overallRating: 9.4,
            actionText: "Play"
        },
        {
            name: "Casumo",
            logo: "./Casumo.png", 
            welcomeBonus: "€250",
            additional: ["€250","20 Free Spins"],
            userRating: 5,
            overallRating: 9.3,
            actionText: "Play"
        }
    ]
};




document.getElementById('title').textContent = casinoData.title;

const casinoList = document.getElementById('casino-list');

const casinoElements = casinoData.casinos.map((casino, index) => {
    const casinoDiv = document.createElement('div');
    casinoDiv.className = 'casino';  
    casinoDiv.setAttribute('data-id', index); 

    casinoDiv.innerHTML = `
    <div class="casino-logo-wrapper">
        <img src="${casino.logo}" alt="${casino.name} Logo" class="casino-logo">
        <div class="label">${casino.label || ''}</div>
    </div>
    <ul>${casino.additional.map(info => `<li>${info}</li>`).join('')}</ul>
    <p> ${'⭐'.repeat(casino.userRating)}</p>
    <p> ${casino.overallRating}</p>
    <button class="play-button">${casino.actionText}</button>
`;


    casinoDiv.querySelector('.play-button').addEventListener('click', (e) => {
        const casinoElement = e.target.closest('.casino');
        const casinoId = casinoElement.getAttribute('data-id');
        console.log("Casino ID:", casinoId);

        fetch('save_click.php', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
            },
            body: `id=${casinoId}`,
        })
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.text();
        })
        .then(data => {
            console.log("Response Data:", data);
        })
        .catch(error => {
            console.log("Fetch Error:", error);
        });
        
       
    });

    return casinoDiv;
});
const headerRow = document.createElement('div');
headerRow.className = 'casino-header'; 

headerRow.innerHTML = `
    <div>CASINO</div>
    <div>WELCOME BONUS</div>
    <div>USER RATING</div>
    <div>RATING</div>
    <div>PLAY NOW</div>
`;
casinoList.prepend(headerRow);

casinoElements.forEach(element => casinoList.appendChild(element));
