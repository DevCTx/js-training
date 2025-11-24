const footballTeam = {
  team: "My Team",
  year: 2025,
  headCoach: "Thomas",
  players: [
    {name: "Cédric", position:"midfielder", isCaptain:true},
    {name: "Aydan", position:"forward", isCaptain:false},
    {name: "Suzie", position:"forward", isCaptain:false},
    {name: "Cécile", position:"defender", isCaptain:false},
    {name: "Gilles", position:"defender", isCaptain:false},
    {name: "Florine", position:"goalkeeper", isCaptain:false}
  ]
};

const teamInfo = document.querySelector("#team");
teamInfo.innerText = footballTeam.team;

const yearInfo = document.querySelector("#year");
yearInfo.innerText = footballTeam.year;

const headCoachInfo = document.querySelector("#head-coach");
headCoachInfo.innerText = footballTeam.headCoach;

const players = document.querySelector("#players");
const playerCards = document.querySelector("#player-cards");

function setCard( player ) {
  return `<div class="player-card">
  <h2>${player.isCaptain?"(Captain)":""} ${player.name}</h2>
  <p>Position: ${player.position}</p>
  </div>`;
}

function setCards(playerPosition) {
  let filteredPlayers = [];
  
  if (playerPosition == "all") {
    filteredPlayers = footballTeam.players;
  }
  else {
    filteredPlayers = footballTeam.players.filter( (elem) => elem.position == playerPosition);
  }

  const htmlCards = filteredPlayers.map( (elem) => setCard(elem) );
  return htmlCards;    
}

players.addEventListener( "change", () => {
  playerCards.innerHTML = setCards(players.value);
});
playerCards.innerHTML = setCards(players.value);


