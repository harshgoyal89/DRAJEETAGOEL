const form = document.getElementById("appointmentForm");
form.addEventListener("submit", async (e) => {
  e.preventDefault();

  const emailData = {
    to: document.getElementById("email").value,
    subject: document.getElementById("subject").value,
    text: `<h4>New Contact Request</h4>
            <p><strong>Name:</strong> ${
              document.getElementById("name").value
            }</p>
            <p><strong>Email:</strong> ${
              document.getElementById("email").value
            }</p>
            <p><strong>Phone:</strong> ${
              document.getElementById("phone").value
            }</p>
            <p><strong>Address:</strong> ${
              document.getElementById("project").value
            }</p>
            <p><strong>Subject:</strong> ${
              document.getElementById("subject").value
            }</p>
            <p><strong>Message:</strong> ${
              document.getElementById("messages").value
            }</p>`,
  };

  const response = await fetch("http://localhost:3000/send-email", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(emailData),
  });

  const result = await response.text();
  alert("Your email has been sent");
});
