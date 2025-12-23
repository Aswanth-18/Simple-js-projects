document.getElementById("text").addEventListener("keypress", function (e) {
  if (e.key === "Enter") generateQRCode();
});

function generateQRCode() {
  const textt = document.getElementById("text").value;
  const qrcodeContainer = document.getElementById("qrcode");
  const loading = document.getElementById("loading");
  const downloadBtn = document.getElementById("downloadBtn");

  qrcodeContainer.innerHTML = "";
  downloadBtn.classList.add("hidden");

  if (textt.trim() === "") return;

  loading.classList.remove("hidden");

  setTimeout(() => {
    loading.classList.add("hidden");

    new QRCode(qrcodeContainer, {
      text: textt,
      width: 180,
      height: 180,
    });

    downloadBtn.classList.remove("hidden");

    setTimeout(() => {
      const img = qrcodeContainer.querySelector("img");
      if (img) {
        downloadBtn.onclick = () => {
          const link = document.createElement("a");
          link.href = img.src;
          link.download = "qr_code.png";
          link.click();
        };
      }
    }, 300);
  }, 500);
}
