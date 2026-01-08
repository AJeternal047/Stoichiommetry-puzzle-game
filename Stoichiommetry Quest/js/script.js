// Main Menu Button references
const startBtn = document.getElementById("startBtn");
const instructionsBtn = document.getElementById("instructionsBtn");
const settingsBtn = document.getElementById("settingsBtn");
const exitBtn = document.getElementById("exitBtn");

// Event listeners
startBtn.addEventListener("click", () => {
  window.location.href = "game.html"; // go to the game screen
});


instructionsBtn.addEventListener("click", () => {
   window.location.href = "../pages/instructions.html"; // go to the instructions screen
});

settingsBtn.addEventListener("click", () => {
  alert("Settings menu coming soon!");
});


// Extra: Animate title color
const title = document.querySelector("h1");
let colors = ["#ff9800", "#00e5ff", "#76ff03"];
let i = 0;

setInterval(() => {
  title.style.color = colors[i % colors.length];
  i++;
}, 1000);

// Instructions Page Button references
const balanceBtn = document.getElementById("balanceBtn");
const molesBtn = document.getElementById("molesBtn");
const solveBtn = document.getElementById("solveBtn");
const backBtn = document.getElementById("backBtn");

// Event listeners for instruction buttons
if (balanceBtn) {
  balanceBtn.addEventListener("click", () => {
    alert("Balancing Chemical Equations:\n1. Count atoms on each side.\n2. Add coefficients to balance.\n3. Repeat until balanced.");
  });
}

if (molesBtn) {
  molesBtn.addEventListener("click", () => {
    alert("Calculate Moles:\nUse formula: moles = mass (g) ÷ molar mass (g/mol).");
  });
}

if (solveBtn) {
  solveBtn.addEventListener("click", () => {
    alert("How to Solve Stoichiometry Problems:\n1. Write balanced equation.\n2. Convert given to moles.\n3. Use mole ratio.\n4. Convert to desired unit.");
  });
}

if (backBtn) {
  backBtn.addEventListener("click", () => {
    window.location.href = "../pages/mainmenu.html"; // go back to main menu
  });
}

// Function to toggle solution visibility
function toggleSolution(id) {
  const sol = document.getElementById(id);
  if (sol.style.display === "none" || sol.style.display === "") {
    sol.style.display = "block";
  } else {
    sol.style.display = "none";
  }
}

