const filter = document.querySelector("#filter");
const certificationList = document.querySelector(".certification-list");

// Add an event listener to the filter select element
filter.addEventListener("change", function () {
  // Get the selected category
  const category = this.value;

  // Show all certifications if the "All" option is selected
  if (category === "all") {
    certificationList
      .querySelectorAll(".certification")
      .forEach((certification) => {
        certification.style.display = "flex";
      });
  }
  // Otherwise, only show certifications that match the selected category
  else {
    certificationList
      .querySelectorAll(".certification")
      .forEach((certification) => {
        if (certification.dataset.category === category) {
          certification.style.display = "flex";
        } else {
          certification.style.display = "none";
        }
      });
  }
});
