// Define case items with images
const caseItems = [
  { name: "Common Skin", rarity: "common", image: "images/common.png" },
  { name: "Uncommon Skin", rarity: "uncommon", image: "images/uncommon.png" },
  { name: "Rare Skin", rarity: "rare", image: "images/rare.png" },
  { name: "Epic Skin", rarity: "epic", image: "images/epic.png" },
  { name: "Legendary Skin", rarity: "legendary", image: "images/legendary.png" }
];

// Get DOM elements
const spinner = document.getElementById("spinner");
const openCaseButton = document.getElementById("open-case-button");
const rewardDiv = document.getElementById("reward");

// Populate spinner with items
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

// Open case with animation
openCaseButton.addEventListener("click", () => {
  populateSpinner();

  // Start the animation by resetting and applying it
  spinner.style.animation = "none"; // Reset animation
  setTimeout(() => {
    spinner.style.animation = "spin-animation 4s cubic-bezier(0.17, 0.67, 0.83, 0.67)";
  }, 10);

  // Show reward after animation ends
  setTimeout(() => {
    const reward = caseItems[Math.floor(Math.random() * caseItems.length)];
    rewardDiv.innerHTML = `
      🎉 You got: ${reward.name} (${reward.rarity.toUpperCase()})!
      <img src="${reward.image}" alt="${reward.name}" style="width:100px; margin-top:10px;">
    `;
    rewardDiv.style.color = getRarityColor(reward.rarity);
  }, 4000); // Match animation duration
});

// Get rarity color
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
