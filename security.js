const fields = document.querySelectorAll("#securityForm input, #address");
const saveBtn = document.getElementById("saveBtn");
const cancelBtn = document.getElementById("cancelBtn");
const original = {};

const storedData = JSON.parse(localStorage.getItem("meditrackProfile"));
if (storedData) {
  document.getElementById("fullname").value = storedData.fullname || "User";
  document.getElementById("email").value = storedData.email || "@gmail.com";
  document.getElementById("gender").value = storedData.gender || "N/A";
  document.getElementById("age").value = storedData.age || "N/A";
  document.getElementById("address").value = storedData.address || "N/A";
  document.getElementById("contact").value = storedData.contact || "N/A";
  document.getElementById("photoURL").value = storedData.photoURL || "IMAGES/sample-photo.jpg";
}

function enableEdit() {
  fields.forEach(field => {
    original[field.id] = field.value;
    field.disabled = false;
  });
  saveBtn.hidden = false;
  cancelBtn.hidden = false;
}

function saveChanges() {
  const updatedInfo = {
    fullname: document.getElementById('fullname').value,
    email: document.getElementById('email').value,
    gender: document.getElementById('gender').value,
    age: document.getElementById('age').value,
    address: document.getElementById('address').value,
    contact: document.getElementById('contact').value,
    photoURL: document.getElementById('photoURL').value
  };

  localStorage.setItem("meditrackProfile", JSON.stringify(updatedInfo));

  fields.forEach(field => field.disabled = true);
  saveBtn.hidden = true;
  cancelBtn.hidden = true;
  alert("Changes saved.");
}

function cancelEdit() {
  fields.forEach(field => {
    field.value = original[field.id];
    field.disabled = true;
  });
  saveBtn.hidden = true;
  cancelBtn.hidden = true;
}
