const fullName = document.getElementById("full-name");
const emailField = document.getElementById("email");
const orderNo = document.getElementById("order-no");
const productCode = document.getElementById("product-code");
const quantity = document.getElementById("quantity");
const complaintsGroup = document.getElementById("complaints-group");
const otherComplaint = document.getElementById("other-complaint");
const complaintDescription = document.getElementById("complaint-description");
const solutionsGroup = document.getElementById("solutions-group");
const otherSolution = document.getElementById("other-solution");
const solutionDescription = document.getElementById("solution-description");
const form = document.getElementById("form");

function validateForm() {
  const checkedComplaints = complaintsGroup.querySelectorAll("input[name='complaint']:checked");
  const selectedSolution = document.querySelector("input[name='solutions']:checked");

  return {
    "full-name": fullName.value.trim() !== "",
    "email": /^[\w\.-]+@([\w-]+\.)+[\w]{2,4}$/.test(emailField.value),
    "order-no": /^2024\d{6}$/.test(orderNo.value),
    "product-code": /^[a-zA-Z]{2}\d{2}-[a-zA-Z]\d{3}-[a-zA-Z]{2}\d$/.test(productCode.value),
    "quantity": /^\d+$/.test(quantity.value) && parseInt(quantity.value) > 0,
    "complaints-group": checkedComplaints.length > 0,
    "complaint-description": otherComplaint.checked ? complaintDescription.value.length >= 20 : true,
    "solutions-group": selectedSolution !== null,
    "solution-description": otherSolution.checked ? solutionDescription.value.length >= 20 : true
  };
}

function isValid(formValidation) {
  return (
    formValidation['full-name'] 
    && formValidation['email']
    && formValidation['order-no']
    && formValidation['product-code']
    && formValidation['quantity']
    && formValidation['complaints-group']
    && formValidation['complaint-description']
    && formValidation['solutions-group']
    && formValidation['solution-description']
  );
}

function updateFieldBorder(element, isValid) {
  element.style.borderColor = isValid ? 'green' : 'red';
}

// Event listeners pour la validation en temps réel (change events)
fullName.addEventListener("change", () => {
  const validation = validateForm();
  updateFieldBorder(fullName, validation['full-name']);
});

emailField.addEventListener("change", () => {
  const validation = validateForm();
  updateFieldBorder(emailField, validation['email']);
});

orderNo.addEventListener("change", () => {
  const validation = validateForm();
  updateFieldBorder(orderNo, validation['order-no']);
});

productCode.addEventListener("change", () => {
  const validation = validateForm();
  updateFieldBorder(productCode, validation['product-code']);
});

quantity.addEventListener("change", () => {
  const validation = validateForm();
  updateFieldBorder(quantity, validation['quantity']);
});

// Event listeners pour les checkboxes
const complaintCheckboxes = complaintsGroup.querySelectorAll("input[name='complaint']");
complaintCheckboxes.forEach(checkbox => {
  checkbox.addEventListener("change", () => {
    const validation = validateForm();
    updateFieldBorder(complaintsGroup, validation['complaints-group']);
  });
});

complaintDescription.addEventListener("change", () => {
  const validation = validateForm();
  updateFieldBorder(complaintDescription, validation['complaint-description']);
});

// Event listeners pour les radio buttons
const solutionRadios = solutionsGroup.querySelectorAll("input[name='solutions']");
solutionRadios.forEach(radio => {
  radio.addEventListener("change", () => {
    const validation = validateForm();
    updateFieldBorder(solutionsGroup, validation['solutions-group']);
  });
});

solutionDescription.addEventListener("change", () => {
  const validation = validateForm();
  updateFieldBorder(solutionDescription, validation['solution-description']);
});

// Soumission du formulaire
form.addEventListener("submit", (e) => {
  e.preventDefault();
  
  const formValidation = validateForm();
  
  // Mettre à jour les bordures de tous les champs
  updateFieldBorder(fullName, formValidation['full-name']);
  updateFieldBorder(emailField, formValidation['email']);
  updateFieldBorder(orderNo, formValidation['order-no']);
  updateFieldBorder(productCode, formValidation['product-code']);
  updateFieldBorder(quantity, formValidation['quantity']);
  updateFieldBorder(complaintsGroup, formValidation['complaints-group']);
  updateFieldBorder(complaintDescription, formValidation['complaint-description']);
  updateFieldBorder(solutionsGroup, formValidation['solutions-group']);
  updateFieldBorder(solutionDescription, formValidation['solution-description']);
  
  if (isValid(formValidation)) {
    console.log("The form has been submitted. Thank you.");
  } else {
    console.log("Please complete the form properly.");
  }
});
