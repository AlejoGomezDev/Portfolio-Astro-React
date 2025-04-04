document.addEventListener("keyup", (e) => {
    if (e.target.matches("form [required]")) {
      let $input = e.target,
        pattern = $input.pattern;
  
      if (pattern && $input.value !== "") {
        let regex = new RegExp(pattern);
        if (!regex.exec($input.value)) return;
      }
    }
  });
  
  var $contactForm = document.querySelector("form");
  var $inputs = document.querySelectorAll("form [required]");
  var $formError = document.querySelector(".hidden:first-of-type");
  var $formResponse = document.querySelector(".hidden:last-of-type");
  var $submitBtn = document.querySelector("#submit");
  
  function validarForm() {
    let isValid = true;
    $inputs.forEach(($input) => {
      let pattern = $input.pattern;
      let value = $input.value;
  
      if (pattern && value !== "") {
        let regex = new RegExp(pattern);
        if (!regex.test(value)) {
          isValid = false;
        }
      }
    });
  
    return isValid;
  }
  
  document.addEventListener("submit", (e) => {
    e.preventDefault();
  
    if (!validarForm()) {
      $formError.classList.remove("hidden");
      $formResponse.classList.add("hidden");
      return;
    } else {
      $formError.classList.add("hidden");
      $submitBtn.value = "Enviando...";
      $submitBtn.classList.add("disabled");
    }
  
    fetch("https://formsubmit.co/ajax/alejongomez@gmail.com", {
      method: "POST",
      body: new FormData(e.target)
    })
      .then((res) => (res.ok ? res.json() : Promise.reject(res)))
      .then((json) => {
        $formResponse.classList.remove("hidden");
        $contactForm.reset();
        $submitBtn.classList.remove("disabled");
        $submitBtn.value = "Enviar";
        setTimeout(() => {
          $formResponse.classList.add("hidden");
        }, 2000);
      })
      .catch((err) => {
        console.log(err);
        $submitBtn.disabled = false;
        $submitBtn.value = "Enviar";
        $submitBtn.classList.remove("disabled");
      });
  });