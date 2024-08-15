document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("signupForm");

  form.addEventListener("submit", (event) => {
    event.preventDefault(); // Evita o envio do formulário imediato

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    if (validateForm(name, email, password)) {
      console.log("Formulário válido, pronto para ser enviado.");
      // Aqui você pode adicionar o código para enviar os dados para o backend
    }
  });

  function validateForm(name, email, password) {
    if (name === "" || email === "" || password === "") {
      alert("Por favor, preencha todos os campos.");
      return false;
    }

    if (!validateEmail(email)) {
      alert("Por favor, insira um e-mail válido.");
      return false;
    }

    if (password.length < 6) {
      alert("A senha deve ter pelo menos 6 caracteres.");
      return false;
    }

    return true;
  }

  function validateEmail(email) {
    const re = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    return re.test(email);
  }
});
