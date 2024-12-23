// Define case items with images
const caseItems = [
    { name: "Common Skin", rarity: "common", image: "images/common.png" },
    { name: "Uncommon Skin", rarity: "uncommon", image: "images/uncommon.png" },
    { name: "Rare Skin", rarity: "rare", image: "images/rare.png" },
    { name: "Epic Skin", rarity: "epic", image: "images/epic.png" },
    { name: "Legendary Skin", rarity: "legendary", image: "images/legendary.png" }
];

// Get elements
const spinner = document.getElementById("spinner");
const openCaseButton = document.getElementById("open-case-button");
const rewardDiv = document.getElementById("reward");

// Populate spinner with items
function populateSpinner() {
    spinner.innerHTML = ""; // Clear existing items
    for (let i = 0; i < 50; i++) {
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

    // Start animation
    spinner.style.animation = "spin 4s cubic-bezier(0.17, 0.67, 0.83, 0.67)";

    // Stop animation and reveal reward
    setTimeout(() => {
        spinner.style.animation = "none";

        // Pick reward
        const reward = caseItems[Math.floor(Math.random() * caseItems.length)];
        rewardDiv.innerHTML = `
      🎉 You got: ${reward.name} (${reward.rarity.toUpperCase()})! 
      <img src="${reward.image}" alt="${reward.name}" style="width:100px; margin-top:10px;">
    `;
        rewardDiv.style.color = getRarityColor(reward.rarity);
    }, 4000); // Match animation duration
});

// Get color based on rarity
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
