const storedData = JSON.parse(localStorage.getItem("meditrackProfile"));
if (storedData) {
  document.querySelector(".profile-info h2").textContent = storedData.fullname || "User";
  document.querySelector(".profile-info p:nth-child(2)").textContent = storedData.email || "N/A";
  document.querySelector(".profile-photo").src = storedData.photoURL || "images/angel02.png";

  const details = document.querySelector(".profile-details");
  details.innerHTML = `
    <h3>OTHER DETAILS</h3>
    <p><strong>GENDER:</strong><br>${storedData.gender || 'N/A'}</p>
    <p><strong>AGE:</strong><br>${storedData.age || 'N/A'}</p>
    <p><strong>CONTACT NUMBER:</strong><br>${storedData.contact || 'N/A'}</p>
    <p><strong>HOME ADDRESS:</strong><br>${storedData.address?.replace(/\n/g, "<br>") || 'N/A'}</p>
  `;
}
