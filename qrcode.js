const qrFormEl = document.getElementById("qrForm");
const qrImageEl = document.getElementById("qrImage");
const qrContainerEl = document.getElementById("qrContainer");
const qrInputTextEl = document.getElementById("qrInputText");
const generateBtnEl = document.getElementById("generateBtn");


const randerQRcode = (Url) => {
    if (!Url) return;
    generateBtnEl.innerText = "Generating QR code....";
    qrImageEl.src = Url;

    const onImageLoad = () => {
        const interval = setInterval(() => {
          clearInterval(interval);  
        }, 500);

        qrContainerEl.classList.add("show");
        generateBtnEl.innerText = "Generate QR code";
    };
    qrImageEl.addEventListener("load",onImageLoad);

};

qrFormEl.addEventListener("submit", (event) =>  {
event.preventDefault();

const formData = new FormData(qrFormEl);
const text = formData.get("qrText");
const qrcodeUrl = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${text}`;


console.log("text",text);

randerQRcode(qrcodeUrl)
});

qrInputText.addEventListener("keyup", () =>  {
    
    if(!qrInputTextEl.value.trim()){
        qrContainerEl.classList.remove("show");
    }
    
    });
    





