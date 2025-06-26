const pharmacistBtn = document.getElementById("pharmacistBtn");
      const medicalStoreBtn = document.getElementById("medicalStoreBtn");

      pharmacistBtn.addEventListener("click", () => {
        alert("Welcome to the Pharmacist section! Functionality coming soon.");
      });

      medicalStoreBtn.addEventListener("click", () => {
        alert(
          "Welcome to the Medical Store section! Functionality coming soon."
        );
      });

      // Keyboard accessibility: add focus and outline
      [pharmacistBtn, medicalStoreBtn].forEach((btn) => {
        btn.tabIndex = 0;
        btn.addEventListener("keydown", (e) => {
          if (e.key === "Enter" || e.key === " ") {
            e.preventDefault();
            btn.click();
          }
        });
      });