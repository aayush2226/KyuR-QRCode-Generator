function generateQR() {
  const qrContainer = document.getElementById("qr-code");
  const inputText = document.getElementById("text-input").value.trim();

  if (!inputText) {
    alert("Please enter some text or URL to generate a QR code.");
    return;
  }

  // Clear any previous QR code
  qrContainer.innerHTML = "";

  const qr = new QRious({
    element: document.createElement("canvas"),
    value: inputText,
    size: 250,
  });

  qrContainer.appendChild(qr.element);
}
