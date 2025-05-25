let currentStep = 0;
const steps = document.querySelectorAll('.form-step');

function showStep(index) {
  steps.forEach((step, i) => {
    step.classList.toggle('active', i === index);
  });
}

function nextStep() {
  if (currentStep < steps.length - 1) {
    currentStep++;
    showStep(currentStep);
  } else {
    fetch("https://formspree.io/f/manozrvv", {
      method: "POST",
      body: new FormData(document.getElementById("fanfanForm")),
      headers: { 'Accept': 'application/json' }
    })
    .then(() => {
      window.location.href = "thankyou.html";
    })
    .catch((error) => {
      alert("發送失敗，請稍後再試或聯絡箱寶！");
      console.error(error);
    });
  }
}

function prevStep() {
  if (currentStep > 0) {
    currentStep--;
    showStep(currentStep);
  }
}

showStep(currentStep);
