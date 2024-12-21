const categories = {
  Dorfbewohner: document.querySelector("#dorfbewohner .role-grid"),
  Außenseiter: document.querySelector("#aussenseiter .role-grid"),
  Lakei: document.querySelector("#lakei .role-grid"),
  Dämon: document.querySelector("#daemon .role-grid")
};

let selectedCount = 0;

// Funktion zum Mischen eines Arrays
function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

function createRoleCard(role) {
  const card = document.createElement("div");
  card.className = "role-card";
  card.innerHTML = `
    <img src="${role.icon}" alt="${role.name}">
    <h3>${role.name}</h3>
  `;

  card.addEventListener("click", () => {
    if (card.classList.contains("selected")) {
      card.classList.remove("selected");
      selectedCount--;
    } else {
      card.classList.add("selected");
      selectedCount++;
    }
    document.getElementById("counter").textContent = selectedCount;
  });

  return card;
}

function populateRoles() {
  ALL_ROLES.forEach(role => {
    const category = role.category;
    if (categories[category]) {
      categories[category].appendChild(createRoleCard(role));
    }
  });
}

populateRoles();

document.getElementById("finish-selection").addEventListener("click", () => {
  if (selectedCount === 0) {
    alert("Bitte wähle mindestens eine Rolle aus, bevor du fortfährst.");
    return;
  }

  // Ausgewählte Rollen sammeln
  const selectedRoles = [];
  document.querySelectorAll(".role-card.selected").forEach(card => {
    const roleName = card.querySelector("h3").textContent;
    const roleData = ALL_ROLES.find(role => role.name === roleName);
    selectedRoles.push(roleData);
  });

  // Rollen zufällig mischen
  const shuffledRoles = shuffle(selectedRoles);

  // Spieleransicht generieren
  const roleSelectionSection = document.getElementById("role-selection");
  roleSelectionSection.innerHTML = `
    <h1>Rollen-Auswahl für Spieler</h1>
    <div id="cards-container" class="role-grid"></div>
  `;

  const cardsContainer = document.getElementById("cards-container");

  // Verdeckte Kacheln für Spieler hinzufügen
  shuffledRoles.forEach(role => {
    const card = document.createElement("div");
    card.className = "role-card covered";
    card.innerHTML = `
      <img src="${role.icon}" alt="${role.name}">
      <h3>${role.name}</h3>
      <p>${role.ability}</p>
    `;

    // Klick zum Aufdecken der Kacheln
    card.addEventListener("click", () => {
      if (card.classList.contains("covered")) {
        card.classList.remove("covered");
      } else {
        card.style.display = "none"; // Kachel entfernen, nachdem sie angesehen wurde
      }
    });

    cardsContainer.appendChild(card);
  });
});
