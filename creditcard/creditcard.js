document.addEventListener("DOMContentLoaded", () => {
    const submitBtn = document.getElementById("submit");

    function showError(message) {
        const error = document.createElement("p");
        error.textContent = message;
        error.classList.add("error-message");
        error.style.color = "red";
        error.style.fontWeight = "bold";
        error.style.textAlign = "center";
        error.style.marginTop = "1rem";
        submitBtn.insertAdjacentElement("afterend", error);
    }

    submitBtn.addEventListener("click", (event) => {
        const cardNumber = document.getElementById("cardNumber").value.trim();
        const cardHolder = document.getElementById("cardHolder").value.trim();
        const expMonth = document.getElementById("month").value.trim();
        const expYear = document.getElementById("year").value.trim();
        const cvv = document.getElementById("pin").value.trim();

        if (cardNumber !== "1234123412341234") {
            showError("Invalid card number, try again");
            return;
        }

        const cardData = {
            cardNumber,
            cardHolder,
            expMonth,
            expYear,
            cvv
        };

        console.log("Card Data:", cardData);
        
        const successMessage = document.createElement("p");
        successMessage.textContent = "Information entered successfully!";
        successMessage.style.color = "green";
        successMessage.style.fontWeight = "bold";
        successMessage.style.textAlign = "center";
        successMessage.style.marginTop = "1rem";

        submitBtn.replaceWith(successMessage);
    });
});