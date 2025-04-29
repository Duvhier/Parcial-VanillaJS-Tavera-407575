document.addEventListener("DOMContentLoaded", function () {
  const downloadBtn = document.getElementById("downloadBtn");

  if (downloadBtn) {
    downloadBtn.addEventListener("click", function () {
      const element = document.getElementById("cv");
      const extraInfo = document.getElementById("extra-info");

      extraInfo.style.display = "block";
      
      setTimeout(() => {
        const opt = {
          margin: [10, 10, 10, 10],
          filename: "cv.pdf",
          image: { type: "jpeg", quality: 0.98 },
          html2canvas: {
            scale: 2,
            useCORS: true,
          },
          jsPDF: {
            unit: "mm",
            format: "a4",
            orientation: "portrait",
          },
        };

        html2pdf().set(opt).from(element).save().then(() => {
          extraInfo.style.display = "none";
        });
      }, 500);
    });
  }
});

document.getElementById("contactForm").addEventListener("submit", function (e) {
  e.preventDefault();
  const message = document.getElementById("message").value;

  fetch("https://formsubmit.co/ajax/duvier.tavera01@unicatolica.edu.co", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ message }),
  })
    .then(response => response.json())
    .then(data => {
      document.getElementById("responseMessage").innerText = "";
      document.getElementById("contactForm").reset();
      const modal = document.getElementById("messageModal");
      modal.style.display = "flex";
    })
    .catch(error => {
      document.getElementById("responseMessage").innerText = "Hubo un error al enviar el mensaje.";
    });
});

document.getElementById("closeModal").addEventListener("click", function () {
  const modal = document.getElementById("messageModal");
  modal.style.display = "none";
});

window.addEventListener("click", function (event) {
  const modal = document.getElementById("messageModal");
  if (event.target === modal) {
    modal.style.display = "none";
  }
});


