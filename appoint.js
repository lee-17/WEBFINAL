document.getElementById('apf').addEventListener('submit', function(event) {
  event.preventDefault();

  const name = document.getElementById('name').value;
  const reason = document.getElementById('reason').value;
  const datetime = document.getElementById('datetime').value;

  if (name && reason && datetime) {
    alert(
      "Appointment Confirmed!\n\n" +
      "Name: " + name.toUpperCase() + "\n" +
      "Reason: " + reason.toUpperCase() + "\n" +
      "Date & Time: " + datetime
    );
  } else {
    alert("Please fill out all fields.");
  }
});