const caseItems = [
  { name: "Common Skin", rarity: "common", image: "images/common.png" },
  { name: "Uncommon Skin", rarity: "uncommon", image: "images/uncommon.png" },
  { name: "Rare Skin", rarity: "rare", image: "images/rare.png" },
  { name: "Epic Skin", rarity: "epic", image: "images/epic.png" },
  { name: "Legendary Skin", rarity: "legendary", image: "images/legendary.png" }
];

const spinner = document.getElementById("spinner");
const openCaseButton = document.getElementById("open-case-button");
const rewardDiv = document.getElementById("reward");

function populateSpinner() {
  spinner.innerHTML = ""; // Clear current items
  for (let i = 0; i < 30; i++) {
    const randomItem = caseItems[Math.floor(Math.random() * caseItems.length)];
    const img = document.createElement("img");
    img.src = randomItem.image;
    img.alt = randomItem.name;
    spinner.appendChild(img);
  }
}

openCaseButton.addEventListener("click", () => {
  populateSpinner();

  // Random stop position
  const stopPosition = -(Math.random() * 2000 + 100); // Negative to scroll left

  // Start the animation
  spinner.style.transform = `translateX(${stopPosition}px)`;

  // Wait for animation to end and display reward
  setTimeout(() => {
    spinner.style.transform = "none"; // Reset spinner for next use

    // Reward logic
    const reward = caseItems[Math.floor(Math.random() * caseItems.length)];
    rewardDiv.innerHTML = `
      🎉 You got: ${reward.name} (${reward.rarity.toUpperCase()})!
      <img src="${reward.image}" alt="${reward.name}" style="width:100px; margin-top:10px;">
    `;
    rewardDiv.style.color = getRarityColor(reward.rarity);
  }, 4000); // Match CSS transition duration
});

function getRarityColor(rarity) {
  const colors = {
    common: "#b0c4de",
    uncommon: "#8fbc8f",
    rare: "#4682b4",
    epic: "#9370db",
    legendary: "#ffd700"
  };
  return colors[rarity] || "#fff";
}
