const categories = {
  Dorfbewohner: document.querySelector("#dorfbewohner .role-grid"),
  Außenseiter: document.querySelector("#aussenseiter .role-grid"),
  Lakei: document.querySelector("#lakei .role-grid"),
  Dämon: document.querySelector("#daemon .role-grid")
};

let selectedCount = 0;

function createRoleCard(role) {
  const card = document.createElement("div");
  card.className = "role-card";
  card.innerHTML = `
    <img src="${role.icon}" alt="${role.name}">
    <h3>${role.name}</h3>
    <p>${role.ability}</p>
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
