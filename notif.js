const notifList = document.getElementById("notifList");
const storedAppointments = JSON.parse(localStorage.getItem("confirmedAppointments")) || [];

if (storedAppointments.length === 0) {
  notifList.innerHTML = "<p>No confirmed appointments yet.</p>";
} else {
  storedAppointments.forEach(app => {
    const card = document.createElement("div");
    card.className = "notif-card";
    card.innerHTML = `
      <h3>${app.name}</h3>
      <p><strong>Time:</strong> ${app.datetime}</p>
      <p><strong>Reason:</strong> ${app.reason}</p>
    `;
    notifList.appendChild(card);
  });
}
