/* Hauptskript */
const rolesContainer = document.getElementById("roles-container");
const confirmRolesBtn = document.getElementById("confirmRoles");
const cardsArea = document.getElementById("cards-area");
const cardsContainer = document.getElementById("cards-container");
const playerCountInput = document.getElementById("playerCount");
const roleSelectionSection = document.getElementById("role-selection"); // Add this for hiding

function generateRoleCheckboxes() {
  ALL_ROLES.forEach((role, index) => {
    const wrapper = document.createElement("div");
    wrapper.classList.add("role-checkbox");

    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.id = `role-${index}`;
    checkbox.value = role.name;

    const label = document.createElement("label");
    label.htmlFor = `role-${index}`;
    label.textContent = role.name;

    wrapper.appendChild(checkbox);
    wrapper.appendChild(label);
    rolesContainer.appendChild(wrapper);
  });
}

confirmRolesBtn.addEventListener("click", () => {
  const checkboxes = rolesContainer.querySelectorAll("input[type='checkbox']:checked");
  if (checkboxes.length === 0) {
    alert("Bitte wähle mindestens eine Rolle aus!");
    return;
  }

  const selectedRoles = [];
  checkboxes.forEach(cb => {
    const roleObj = ALL_ROLES.find(r => r.name === cb.value);
    if (roleObj) {
      selectedRoles.push(roleObj);
    }
  });

  let playerCount = parseInt(playerCountInput.value, 10);
  if (isNaN(playerCount) || playerCount < 1) {
    playerCount = 1;
  }

  roleSelectionSection.classList.add("hidden"); // Hide the Game Master section
  cardsArea.classList.remove("hidden");
  cardsContainer.innerHTML = "";
  createCards(selectedRoles, playerCount);
});

function createCards(selectedRoles, playerCount) {
  const rolesPool = [...selectedRoles];

  if (rolesPool.length < playerCount) {
    alert("Es sind weniger Rollen ausgewählt als Spieler existieren. Rollen werden ggf. mehrfach zugewiesen.");
  }

  for (let i = 0; i < playerCount; i++) {
    let chosenRole;
    if (rolesPool.length > 0) {
      const randomIndex = Math.floor(Math.random() * rolesPool.length);
      chosenRole = rolesPool.splice(randomIndex, 1)[0];
    } else {
      chosenRole = {
        name: "Keine Rolle (zu wenige Rollen gewählt)",
        ability: "",
        icon: ""
      };
    }

    const cardEl = document.createElement("div");
    cardEl.classList.add("card", "covered");

    cardEl.dataset.name = chosenRole.name;
    cardEl.dataset.ability = chosenRole.ability;
    cardEl.dataset.icon = chosenRole.icon;
    cardEl.dataset.revealed = "false";

    cardEl.addEventListener("click", handleCardClick);
    cardsContainer.appendChild(cardEl);
  }
}

function handleCardClick(e) {
  const cardEl = e.currentTarget;
  const revealed = cardEl.dataset.revealed === "true";

  if (!revealed) {
    cardEl.classList.remove("covered");
    cardEl.dataset.revealed = "true";
    showRoleContent(cardEl);
  } else {
    cardEl.remove();
  }
}

function showRoleContent(cardEl) {
  const name = cardEl.dataset.name;
  const ability = cardEl.dataset.ability;
  const iconUrl = cardEl.dataset.icon;

  cardEl.innerHTML = "";

  if (iconUrl) {
    const img = document.createElement("img");
    img.src = iconUrl;
    cardEl.appendChild(img);
  }

  const roleName = document.createElement("div");
  roleName.classList.add("role-name");
  roleName.textContent = name;
  cardEl.appendChild(roleName);

  if (ability) {
    const roleAbility = document.createElement("div");
    roleAbility.classList.add("role-ability");
    roleAbility.textContent = ability;
    cardEl.appendChild(roleAbility);
  }
}

generateRoleCheckboxes();
