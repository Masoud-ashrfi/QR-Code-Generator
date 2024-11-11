const imgBox = document.querySelector(".imgBox");
const qrImage = document.querySelector(".qrImage");
const qrText = document.querySelector(".qrText");

async function generateQR() {
  try {
    if (qrText.value.length > 0) {
      qrImage.src =
        "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" +
        qrText.value;
      imgBox.classList.add("show-img");
    } else {
      qrText.classList.add("error");
      setTimeout(() => {
        qrText.classList.remove("error");
      }, 1000);
    }
  } catch (error) {
    console.log(error);
  }
}
