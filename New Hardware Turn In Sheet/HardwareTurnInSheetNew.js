document.addEventListener("DOMContentLoaded", function() {
  // Function to toggle sections based on action type
  document.getElementById("actionType").addEventListener("change", function() {
      var selectedValue = this.value;
      var separationSection = document.getElementById("separationSection");
      var hardwareTurnInSection = document.getElementById("hardwareTurnInSection");

      if (selectedValue === "separation") {
          separationSection.style.display = "block";
          hardwareTurnInSection.style.display = "none";
      } else if (selectedValue === "hardwareTurnIn") {
          separationSection.style.display = "none";
          hardwareTurnInSection.style.display = "block";
      }
  });

  // Function to handle form submissions
  document.getElementById("separationForm").addEventListener("submit", function(event) {
      // Validate form fields here
      // Perform submission or show error messages
      
      // For example, you might prevent the default form submission for this example
      event.preventDefault();
  });

  // Function to handle hardware turn-in form submissions
  // ... similar to the above function for separation form

  // Other functions for dynamic behavior or interactions go here
});
