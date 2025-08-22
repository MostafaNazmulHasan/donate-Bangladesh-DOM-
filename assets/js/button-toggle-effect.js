const btn1 = document.getElementById("button1");
const btn2 = document.getElementById("button2");

// Function to set active button
function setActiveButton(
  activeBtn,
  inactiveBtn,
  activeColor = "bg-primary",
  inactiveColor = "bg-gray-300"
) {
  activeBtn.classList.add(activeColor);
  activeBtn.classList.remove(inactiveColor);

  inactiveBtn.classList.add(inactiveColor);
  inactiveBtn.classList.remove(activeColor);
  
  // Save active button to localStorage
  localStorage.setItem("activeButton", activeBtn.id);
}

// Check localStorage to restore state
const savedActive = localStorage.getItem("activeButton");
if (savedActive === "button2") {
  setActiveButton(btn2, btn1);
} else {
  setActiveButton(btn1, btn2); // Default
}

// Click events
btn1.addEventListener("click", () => {
  setActiveButton(btn1, btn2);
  window.location.href = "/index.html"; // Navigate
});

btn2.addEventListener("click", () => {
  setActiveButton(btn2, btn1);
  window.location.href = "/history.html"; // Navigate
});
