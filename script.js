function confirmDownload() {
    const confirm = window.confirm("Have you paid ₹20 via UPI? Click OK to download.");
    if (confirm) {
      window.location.href = "downloads/temple-guide.pdf";
    } else {
      alert("Please complete the payment first.");
    }
  }
  