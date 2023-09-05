// Initialize DOM elements and event listeners
function init() {
  const actionTypeSelect = document.getElementById("actionType");
  const contentContainer = document.getElementById("contentContainer");
  const pageTitle = document.getElementById("pageTitle");

  // Center-align the page title
  pageTitle.style.textAlign = "center";
  pageTitle.style.fontSize = "70px"; 

  pageTitle.style.paddingBottom = "25px";  // Change this value to adjust the padding
  pageTitle.style.marginTop = "-20px";  // Change this value to adjust the padding

  // Underline the title
  pageTitle.style.textDecoration = "underline";

  actionTypeSelect.addEventListener("change", function() {
    handleActionTypeChange(actionTypeSelect, pageTitle, contentContainer);
  });
}


// Handle changes to the actionType select element
function handleActionTypeChange(actionTypeSelect, pageTitle, contentContainer) {
  const selectedAction = actionTypeSelect.value;
  pageTitle.textContent = actionTypeSelect.options[actionTypeSelect.selectedIndex].text;
  contentContainer.innerHTML = "";

  // Hide the actionType select element after an option is selected
  actionTypeSelect.style.display = "none";

  // Hide the associated label for actionType
  const actionTypeLabel = document.getElementById("actionTypeLabel");
  actionTypeLabel.style.display = "none";

  if (selectedAction === "hardwareTurnIn") {
    generateHardwareTurnInForm(contentContainer);
  } else if (selectedAction === "separation") {
    generateSeparationForm(contentContainer);
  }
}



// Attach an event listener to a select element to handle "Other" option
function attachOtherOptionListener(select) { // Added this function
  select.addEventListener('change', function() {
    if (this.value === "Other") {
      const otherInput = createInput("text", "other");
      this.parentNode.appendChild(otherInput);
    } else {
      const existingOtherInput = this.parentNode.querySelector('input[name="other"]');
      if (existingOtherInput) {
        existingOtherInput.remove();
      }
    }
  });
}

// Generate a form with given fields and attach to the container
function generateForm(formId, action, formFields, container) {
  const form = document.createElement("form");
  form.id = formId;
  form.action = action;
  form.method = "post";

  formFields.forEach(field => {
    const label = createLabel(field.label);
    let input;
    if (field.type === "select") {
      input = createSelect(field.name, field.options);
      attachOtherOptionListener(input); // Attach listener for "Other" option
    } else if (field.type === "textarea") {
      input = createTextarea(field.name);
    } else {
      input = createInput(field.type, field.name);
    }
    form.appendChild(label);
    form.appendChild(input);
  });

  container.appendChild(form);
}
// Generate hardware turn-in form
function generateHardwareTurnInForm(container) {
  const formFields = [
    { label: "Select Grade:", name: "grade", type: "select", options: ["(Select Grade)", "Grade A", "Grade B", "Recycle", "Donation", "Other"] },
    { label: "Select Hardware Type:", name: "hardwareType", type: "select", options: ["(Select Hardware Type)", "Desktop", "Laptop", "Monitor", "Dock/Port Rep", "Printer", "Mobile Device", "Server", "Other"] },
    { label: "Asset Tag:", name: "assetTag", type: "text" },
    { label: "Manufacturer (Dell, Apple, etc.):", name: "manufacturer", type: "text" },
    { label: "Model:", name: "model", type: "text" },
    { label: "Technician:", name: "technician", type: "text" },
    { label: "Notes (once done, press Ctrl-P or Cmd-P to generate a print view of the form):", name: "notes", type: "textarea" }
  ];

  generateForm("hardwareTurnInForm", "submit_hardware_turn_in.php", formFields, container);
}

// Generate separation form
function generateSeparationForm(container) {
  const formFields = [
    { label: "Colleague:", name: "colleague", type: "text" },
    { label: "Asset Number:", name: "assetNumber", type: "text" },
    { label: "Technician:", name: "technician", type: "text" },
    { label: "Hardware Type:", name: "hardwareType", type: "text" },
    { label: "RITM Number:", name: "ritmNumber", type: "text" },
    { label: "Notes (once done, press Ctrl-P or Cmd-P to generate a print view of the form):", name: "notes", type: "textarea" }
  ];

  generateForm("separationForm", "submit_separation.php", formFields, container);
}

// Generate a form with given fields and attach to the container
function generateForm(formId, action, formFields, container) {
  const form = document.createElement("form");
  form.id = formId;
  form.action = action;
  form.method = "post";

  formFields.forEach(field => {
    const label = createLabel(field.label);
    let input;
    if (field.type === "select") {
      input = createSelect(field.name, field.options);
    } else if (field.type === "textarea") {
      input = createTextarea(field.name);
    } else {
      input = createInput(field.type, field.name);
    }
    form.appendChild(label);
    form.appendChild(input);
  });

  container.appendChild(form);
}

// Create a label element
function createLabel(text) {
  const label = document.createElement("label");
  label.textContent = text;
  return label;
}

// Create a select element
function createSelect(name, options) {
  const select = document.createElement("select");
  select.name = name;
  options.forEach(optionText => {
    const option = document.createElement("option");
    option.value = optionText;
    option.textContent = optionText;
    select.appendChild(option);
  });
  return select;
}

// Create an input element
function createInput(type, name) {
  const input = document.createElement("input");
  input.type = type;
  input.name = name;
  return input;
}

// Create a textarea element
function createTextarea(name) {
  const textarea = document.createElement("textarea");
  textarea.name = name;
  textarea.rows = 4;
  textarea.cols = 50;
  return textarea;
}

// Run the init function when the document is fully loaded
document.addEventListener("DOMContentLoaded", init);
