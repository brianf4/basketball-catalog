const players = document.querySelector(".card-container");
const AllButton = document.querySelector("#All");
const GButton = document.querySelector("#G");
const FButton = document.querySelector("#F");
const CButton = document.querySelector("#C");
// let cardContainerElement = document.querySelector(".card-container");
let cardsInContainer = players.querySelectorAll(".player-card");
let player1 = null;
let player2 = null;
let p1Points = 0;
let p2Points = 0;
let filtered = [];

function renderCards(filter) {
  players.innerHTML = "";

  // playersData variable is accessed globally via playersData.js <script src="playersData.js"></script>
  if (filter === "All") {
    filtered = playersData;
  } else {
    filtered = playersData.filter((player) => player.position === filter);
  }

  for (let i = 0; i < filtered.length; i++) {
    let card = `<div class="player-card" data-id="${filtered[i].id}">
        <div class="avatar-info">
            <span class="avatar">${filtered[i].initials}</span>
            <div>
                <span>${filtered[i].name}</span>
                <span>${filtered[i].team} • ${filtered[i].position}</span>
            </div>
        </div>
        <div class="player-stats">
            <div>
                <span class="stat">
                    <span>${filtered[i].stats.pts}</span>
                    <span>PTS</span>
                </span>
                <span class="stat">
                    <span>${filtered[i].stats.reb}</span>
                    <span>REB</span>
                </span>
                <span class="stat">
                    <span>${filtered[i].stats.ast}</span>
                    <span>AST</span>
                </span>
            </div>
            <div>
                <span class="stat">
                    <span>${filtered[i].stats.stl}</span>
                    <span>STL</span>
                </span>
                <span class="stat">
                    <span>${filtered[i].stats.blk}</span>
                    <span>BLK</span>
                </span>
                <span class="stat">
                    <span>${filtered[i].stats.to}</span>
                    <span>TO</span>
                </span>
            </div>
        </div>
    </div>`;
    players.innerHTML += card;
  }

  document.querySelector(".numOfPlayers").textContent = filtered.length;

  cardsInContainer = players.querySelectorAll(".player-card");
  for (let i = 0; i < cardsInContainer.length; i++) {
    cardsInContainer[i].addEventListener("click", () => {
      console.log(cardsInContainer[i].dataset.id);
      assignPlayer(filtered[i]);
      console.log(`Player1: ${player1.name}`);
      console.log(`Player2: ${player2}`);
    });
  }
}

renderCards("All");

AllButton.addEventListener("click", activeAllButton);
GButton.addEventListener("click", activeGButton);
FButton.addEventListener("click", activeFButton);
CButton.addEventListener("click", activeCButton);

function activeAllButton() {
  GButton.classList.remove("active");
  FButton.classList.remove("active");
  CButton.classList.remove("active");
  AllButton.classList.add("active");
  renderCards(AllButton.innerHTML);
}

function activeGButton() {
  FButton.classList.remove("active");
  CButton.classList.remove("active");
  AllButton.classList.remove("active");
  GButton.classList.add("active");
  renderCards(GButton.innerHTML);
}

function activeFButton() {
  CButton.classList.remove("active");
  AllButton.classList.remove("active");
  GButton.classList.remove("active");
  FButton.classList.add("active");
  renderCards(FButton.innerHTML);
}

function activeCButton() {
  AllButton.classList.remove("active");
  GButton.classList.remove("active");
  FButton.classList.remove("active");
  CButton.classList.add("active");
  renderCards(CButton.innerHTML);
}

function assignPlayer(player) {
  if (player1 === null) {
    player1 = player;
  } else if (player2 === null) {
    player2 = player;
  } else {
    return;
  }
  updateComparison();
}

function updateComparison() {
  if (player1) {
    document.querySelector(".p1-avatar").textContent = player1.initials;
    document.querySelector(".p1-name").textContent = player1.name;
    document.querySelector(".p1-team-pos").textContent =
      `${player1.team} • ${player1.position}`;
    document.querySelector(".p1-pts").textContent = player1.stats.pts;
    document.querySelector(".p1-reb").textContent = player1.stats.reb;
    document.querySelector(".p1-ast").textContent = player1.stats.ast;
    document.querySelector(".p1-stl").textContent = player1.stats.stl;
    document.querySelector(".p1-blk").textContent = player1.stats.blk;
    document.querySelector(".p1-to").textContent = player1.stats.to;
  } else {
    document.querySelector(".p1-avatar").textContent = "";
    document.querySelector(".p1-name").textContent = "";
    document.querySelector(".p1-team-pos").textContent = "";
    document.querySelector(".p1-pts").textContent = "x";
    document.querySelector(".p1-reb").textContent = "x";
    document.querySelector(".p1-ast").textContent = "x";
    document.querySelector(".p1-stl").textContent = "x";
    document.querySelector(".p1-blk").textContent = "x";
    document.querySelector(".p1-to").textContent = "x";
  }

  if (player2) {
    document.querySelector(".p2-avatar").textContent = player2.initials;
    document.querySelector(".p2-name").textContent = player2.name;
    document.querySelector(".p2-team-pos").textContent =
      `${player2.team} • ${player2.position}`;
    document.querySelector(".p2-pts").textContent = player2.stats.pts;
    document.querySelector(".p2-reb").textContent = player2.stats.reb;
    document.querySelector(".p2-ast").textContent = player2.stats.ast;
    document.querySelector(".p2-stl").textContent = player2.stats.stl;
    document.querySelector(".p2-blk").textContent = player2.stats.blk;
    document.querySelector(".p2-to").textContent = player2.stats.to;
  } else {
    document.querySelector(".p2-avatar").textContent = "";
    document.querySelector(".p2-name").textContent = "";
    document.querySelector(".p2-team-pos").textContent = "";
    document.querySelector(".p2-pts").textContent = "x";
    document.querySelector(".p2-reb").textContent = "x";
    document.querySelector(".p2-ast").textContent = "x";
    document.querySelector(".p2-stl").textContent = "x";
    document.querySelector(".p2-blk").textContent = "x";
    document.querySelector(".p2-to").textContent = "x";
  }

  document.getElementById("remove-p1").addEventListener("click", () => {
    player1 = null;
    updateComparison();
  });

  document.getElementById("remove-p2").addEventListener("click", () => {
    player2 = null;
    updateComparison();
  });

  const winnerElementContainer = document.querySelector(".winner");
  // If both players exist and are not null
  if (player1 !== null && player2 !== null) {
    const stat = ["pts", "reb", "ast", "stl", "blk", "to"];
    p1Points = 0;
    p2Points = 0;

    for (let i = 0; i < stat.length; i++) {
      let p1Category = player1.stats[stat[i]];
      let p2Category = player2.stats[stat[i]];

      if (stat[i] === "to") {
        if (p1Category < p2Category) {
          p1Points++;
        } else if (p2Category < p1Category) {
          p2Points++;
        }
      } else {
        if (p1Category > p2Category) {
          p1Points++;
        } else if (p2Category > p1Category) {
          p2Points++;
        }
      }
    }

    if (p1Points > p2Points) {
      winnerElementContainer.querySelector(".ptsOfWinner").textContent =
        `Winner (${p1Points} of 6 categories)`;
      winnerElementContainer.querySelector(".nameOfWinner").textContent =
        `${player1.name}`;
    } else {
      winnerElementContainer.querySelector(".ptsOfWinner").textContent =
        `Winner (${p2Points} of 6 categories)`;
      winnerElementContainer.querySelector(".nameOfWinner").textContent =
        `${player2.name}`;
    }
  }
}
