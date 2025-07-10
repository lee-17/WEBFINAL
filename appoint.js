document.getElementById('apf').addEventListener('submit', function(event) {
  event.preventDefault();

  const name = document.getElementById('name').value;
  const reason = document.getElementById('reason').value;
  const datetime = document.getElementById('datetime').value;

  if (name && reason && datetime) {
    const appointment = {
      name: name.toUpperCase(),
      reason: reason.toUpperCase(),
      datetime: datetime
    };

    // Save to localStorage
    const stored = JSON.parse(localStorage.getItem("confirmedAppointments")) || [];
    stored.push(appointment);
    localStorage.setItem("confirmedAppointments", JSON.stringify(stored));

    alert(
      "Appointment Confirmed!\n\n" +
      "Name: " + appointment.name + "\n" +
      "Reason: " + appointment.reason + "\n" +
      "Date & Time: " + appointment.datetime
    );

    // Optional: reset form
    event.target.reset();
  } else {
    alert("Please fill out all fields.");
  }
});
