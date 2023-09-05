const actionTypeSelect = document.getElementById("actionType");
const contentContainer = document.getElementById("contentContainer");
const pageTitle = document.getElementById("pageTitle");

actionTypeSelect.addEventListener("change", function () {
    pageTitle.textContent = actionTypeSelect.options[actionTypeSelect.selectedIndex].text;

    const selectedAction = actionTypeSelect.value;
    contentContainer.innerHTML = "";

    if (selectedAction === "hardwareTurnIn") {
        generateHardwareTurnInForm();
    } else if (selectedAction === "separation") {
        generateSeparationForm();
    }
});

function generateHardwareTurnInForm() {
    const form = document.createElement("form");
    form.id = "hardwareTurnInForm";
    form.action = "submit_hardware_turn_in.php";
    form.method = "post";

    const gradeLabel = createLabel("Select Grade:");
    const gradeSelect = createSelect("grade", [
        "Grade A", "Grade B", "Recycle", "Donation", "Other"
    ]);

    const hardwareTypeLabel = createLabel("Select Hardware Type:");
    const hardwareTypeSelect = createSelect("hardwareType", [
        "Desktop", "Laptop", "Monitor", "Dock/Port Rep",
        "Printer", "Mobile Device", "Server", "Other"
    ]);

    const assetTagLabel = createLabel("Asset Tag:");
    const assetTagInput = createInput("text", "assetTag");

    const manufacturerLabel = createLabel("Manufacturer:");
    const manufacturerInput = createInput("text", "manufacturer");

    const modelLabel = createLabel("Model:");
    const modelInput = createInput("text", "model");

    const technicianLabel = createLabel("Technician:");
    const technicianInput = createInput("text", "technician");

    const notesLabel = createLabel("Notes:");
    const notesTextarea = document.createElement("textarea");
    notesTextarea.id = "notes";
    notesTextarea.name = "notes";
    notesTextarea.rows = 5;
    notesTextarea.cols = 50;

    const submitButton = document.createElement("input");
    submitButton.type = "submit";
    submitButton.value = "Submit";

    form.appendChild(gradeLabel);
    form.appendChild(gradeSelect);
    form.appendChild(hardwareTypeLabel);
    form.appendChild(hardwareTypeSelect);
    form.appendChild(assetTagLabel);
    form.appendChild(assetTagInput);
    form.appendChild(manufacturerLabel);
    form.appendChild(manufacturerInput);
    form.appendChild(modelLabel);
    form.appendChild(modelInput);
    form.appendChild(technicianLabel);
    form.appendChild(technicianInput);
    form.appendChild(notesLabel);
    form.appendChild(notesTextarea);
    form.appendChild(submitButton);

    contentContainer.appendChild(form);
}

function generateSeparationForm() {
    const form = document.createElement("form");
    form.id = "separationForm";
    form.action = "submit_separation.php";
    form.method = "post";

    const colleagueLabel = createLabel("Colleague:");
    const colleagueInput = createInput("text", "colleague");

    const assetNumberLabel = createLabel("Asset Number:");
    const assetNumberInput = createInput("text", "assetNumber");

    const technicianLabel = createLabel("Technician:");
    const technicianInput = createInput("text", "technician");

    const hardwareTypeLabel = createLabel("Hardware Type:");
    const hardwareTypeInput = createInput("text", "hardwareType");

    const ritmNumberLabel = createLabel("RITM Number:");
    const ritmNumberInput = createInput("text", "ritmNumber");

    const submitButton = document.createElement("input");
    submitButton.type = "submit";
    submitButton.value = "Submit";

    form.appendChild(colleagueLabel);
    form.appendChild(colleagueInput);
    form.appendChild(assetNumberLabel);
    form.appendChild(assetNumberInput);
    form.appendChild(technicianLabel);
    form.appendChild(technicianInput);
    form.appendChild(hardwareTypeLabel);
    form.appendChild(hardwareTypeInput);
    form.appendChild(ritmNumberLabel);
    form.appendChild(ritmNumberInput);
    form.appendChild(submitButton);

    contentContainer.appendChild(form);
}

function createLabel(text) {
    const label = document.createElement("label");
    label.textContent = text;
    return label;
}

function createSelect(name, options) {
    const select = document.createElement("select");
    select.name = name;
    select.classList.add("input-field"); // Add a class for styling

    options.forEach(optionText => {
        const option = document.createElement("option");
        option.value = optionText;
        option.textContent = optionText;
        select.appendChild(option);
    });

    return select;
}

function createInput(type, name) {
    const input = document.createElement("input");
    input.type = type;
    input.name = name;
    input.classList.add("input-field"); // Add a class for styling
    return input;
}

