const categories = {
  Dorfbewohner: document.querySelector("#dorfbewohner .role-container"),
  Außenseiter: document.querySelector("#aussenseiter .role-container"),
  Lakai: document.querySelector("#lakai .role-container"),
  Dämon: document.querySelector("#daemon .role-container")
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
    document.getElementById("selection-counter").querySelector("span").textContent = selectedCount;
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

// Initialisiere den Standardzustand der Container (alle eingeklappt)
function initializeDefaultView() {
  document.querySelectorAll(".role-container").forEach(container => {
    container.classList.remove("visible"); // Alle Container einklappen
  });
}

// Füge Ein-/Ausklappbare Logik hinzu
function addCategoryToggle() {
  document.querySelectorAll(".category-header").forEach(header => {
    console.log("Header gefunden:", header.textContent); // Debug-Ausgabe
    header.addEventListener("click", () => {
      const roleContainer = header.nextElementSibling; // Nächster Container nach dem Header
      roleContainer.classList.toggle("visible"); // Sichtbarkeit umschalten
    });
  });
}

// Initialisiere Rollen und Ein-/Ausklappen
populateRoles();
initializeDefaultView(); // Setze den Standardzustand
addCategoryToggle();

document.getElementById("finish-selection").addEventListener("click", () => {
  if (selectedCount === 0) {
    alert("Bitte wähle mindestens eine Rolle aus, bevor du fortfährst.");
    return;
  }

  // Debugging: Ausgewählte Rollen prüfen
  const selectedRoles = [];
  document.querySelectorAll(".role-card.selected").forEach(card => {
    const roleName = card.querySelector("h3").textContent;
    const roleData = ALL_ROLES.find(role => role.name === roleName);
    selectedRoles.push(roleData);
  });
  console.log("Ausgewählte Rollen:", selectedRoles);

  // Rollen zufällig mischen
  const shuffledRoles = shuffle(selectedRoles);
  console.log("Zufällig gemischte Rollen:", shuffledRoles);

  // Spieleransicht generieren
  const roleSelectionSection = document.getElementById("role-selection");
  console.log("roleSelectionSection:", roleSelectionSection);

  if (!roleSelectionSection) {
    console.error("Fehler: Der Container 'role-selection' wurde nicht gefunden!");
    return;
  }

  // Spieleransicht anzeigen
  roleSelectionSection.style.display = "block"; // Sichtbar machen
roleSelectionSection.innerHTML = `
    <div style="text-align: center;">
      <img src="https://raw.githubusercontent.com/pkamp-de/botc-rollenwahl/refs/heads/main/rollenwahl.png" 
           alt="Rollenwahl Logo" 
           style="max-width: 100%; height: auto;">
    </div>
    <div id="cards-container" class="role-grid"></div>
  `;

  const cardsContainer = document.getElementById("cards-container");
  if (!cardsContainer) {
    console.error("Fehler: Der Container 'cards-container' wurde nicht gefunden!");
    return;
  }

  // Verdeckte Kacheln für Spieler hinzufügen
  shuffledRoles.forEach(role => {
    const card = document.createElement("div");
    card.className = "role-card covered";
    card.innerHTML = `
      <img src="${role.icon}" alt="${role.name}">
      <h3>${role.name}</h3>
      <p>${role.ability}</p>
    `;
    card.addEventListener("click", () => {
      if (card.classList.contains("covered")) {
        card.classList.remove("covered");
      } else {
        card.style.display = "none"; // Kachel entfernen, nachdem sie angesehen wurde
      }
    });
    cardsContainer.appendChild(card);
  });

  console.log("Spieleransicht erfolgreich generiert!");
});
