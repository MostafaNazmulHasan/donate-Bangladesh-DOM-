// Helper function to handle donation
function handleDonation(
  buttonId,
  inputId,
  campaignName,
  existingDonationAmountId,
  existingMoneyId
) {
  document.getElementById(buttonId).addEventListener("click", function (e) {
    e.preventDefault(); // Prevent form submission page reload

    const amount = Number(getInputValueById(inputId));
    const existingMoney = Number(getInputTextById(existingMoneyId));
    // Stop if user has no money
    if (existingMoney <= 0) {
      alert("You don't have enough money to donate.");
      document.getElementById(inputId).value = "";
      return;
    }

    // Stop if donation amount is invalid
    if (isNaN(amount) || amount <= 0) {
      alert("Please enter a valid donation amount!");
      document.getElementById(inputId).value = "";
      return;
    }

    // Stop if donation amount exceeds existing money
    if (amount > existingMoney) {
      alert("You cannot donate more than your available money!");
      document.getElementById(inputId).value = "";
      return;
    }

    // Save transaction to localStorage
    const transaction = {
      amount: Number(amount),
      campaign: campaignName,
      date: new Date().toLocaleString(),
    };

    let history = JSON.parse(localStorage.getItem("donationHistory")) || [];
    history.push(transaction);
    localStorage.setItem("donationHistory", JSON.stringify(history));

    // Update the existing donation amount and money
    const existingAmount = getInputTextById(existingDonationAmountId);
    const newTotal = Number(existingAmount) + Number(amount);
    document.getElementById(existingDonationAmountId).innerText = newTotal; // Update the displayed amount

    const newMoneyTotal = Number(existingMoney) - Number(amount);
    document.getElementById(existingMoneyId).innerText = newMoneyTotal; // Update the displayed amount
    document.getElementById("my_modal").showModal(); // Show the modal
    document.getElementById(inputId).value = ""; // Clear the input
  });
}

handleDonation(
  "donateButton1",
  "donationAmount1",
  "Flood at Noakhali, Bangladesh",
  "existingDonationAmountId1",
  "existingMoney"
);
handleDonation(
  "donateButton2",
  "donationAmount2",
  "Flood Relief at Feni, Bangladesh",
  "existingDonationAmountId2",
  "existingMoney"
);
handleDonation(
  "donateButton3",
  "donationAmount3",
  "for Injured in the Quota Movement",
  "existingDonationAmountId3",
  "existingMoney"
);
