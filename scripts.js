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
