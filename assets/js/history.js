const container = document.getElementById("historyContainer");
const clearBtn = document.getElementById("clearHistoryBtn");

// Render donation history
function renderHistory() {
  const history = JSON.parse(localStorage.getItem("donationHistory")) || [];
  container.innerHTML = "";

  if (history.length === 0) {
    container.innerHTML = "<p class='text-gray-500'>No donations yet.</p>";
  } else {
    history.forEach((t) => {
      const div = document.createElement("div");
      div.className =
        "mt-8 container mx-auto border p-4 md:p-8";

      div.innerHTML = `
        <h3 class="text-xl font-semibold text-textColor">
          ${t.amount} Taka is Donated for ${t.campaign}
        </h3>
        <p class="mt-4 text-base text-textColorLight font-extralight">
          Date : ${t.date}
        </p>
      `;

      container.appendChild(div);
    });
  }
}

// Load history on page load
renderHistory();

// Clear history button
clearBtn.addEventListener("click", () => {
  localStorage.removeItem("donationHistory");
  renderHistory();
  alert("Donation history cleared!");
});
