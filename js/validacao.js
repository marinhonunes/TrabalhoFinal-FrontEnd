function validarNomeCompletoInput(input) { //validar nome completo
   const nomeCompleto = input.value.trim();
   const erroMsg = document.getElementById('erro-nome-completo');

   if (!nomeCompleto) {
      erroMsg.innerText = 'Por favor, informe seu nome completo.';
      input.classList.add('campo-invalido');
      input.setCustomValidity('Por favor, informe seu nome completo.');
      return;
   }

   const palavras = nomeCompleto.split(' ');
   if (palavras.length < 2) {
      erroMsg.innerText = 'Por favor, informe seu nome completo, com pelo menos duas palavras.';
      input.classList.add('campo-invalido');
      input.setCustomValidity('Por favor, informe seu nome completo, com pelo menos duas palavras.');
      return;
   }

   for (let palavra of palavras) {
      if (palavra.length < 2) {
         erroMsg.innerText = 'Por favor, informe um nome válido.';
         input.classList.add('campo-invalido');
         input.setCustomValidity('Por favor, informe um nome válido.');
         return;
      }
   }

   erroMsg.innerText = '';
   input.classList.remove('campo-invalido');
   input.setCustomValidity('');
}


function validarNomeArtisticoInput() { // validar nome artistico
   const nomeArtisticoInput = document.getElementById("nome-artistico");
   const nomeArtistico = nomeArtisticoInput.value.trim();
   const erroMsg = document.getElementById("erro-nome-artistico");


   if (!nomeArtistico) {
      erroMsg.innerText = "Por favor, informe um nome artístico válido.";
      nomeArtisticoInput.classList.add("campo-invalido");
      nomeArtisticoInput.focus();
      return false;
   }


   const regexNomeArtistico = /^[a-zA-ZÀ-ú0-9 ]+$/;
   if (!regexNomeArtistico.test(nomeArtistico)) {
      erroMsg.innerText = "Por favor, informe um nome artístico válido.";
      nomeArtisticoInput.classList.add("campo-invalido");
      nomeArtisticoInput.focus();
      return false;
   }


   erroMsg.innerText = "";
   nomeArtisticoInput.classList.remove("campo-invalido");
   return true;
}



function mCEP() { //mascara CEP
   var cep = event.target.value;
   cep = cep.replace(/\D/g, "")
   cep = cep.replace(/^(\d{2})(\d)/, "$1.$2")
   cep = cep.replace(/.(\d{3})(\d)/, ".$1-$2")
   event.target.value = cep;
}

function mCpf() { //Mascara CPF
   var cpf = event.target.value;
   cpf = cpf.replace(/\D/g, "")
   cpf = cpf.replace(/(\d{3})(\d)/, "$1.$2")
   cpf = cpf.replace(/(\d{3})(\d)/, "$1.$2")
   cpf = cpf.replace(/(\d{3})(\d{1,2})$/, "$1-$2")
   event.target.value = cpf;
}

function validarCPF() { //Validar CPF
   var cpf = event.target.value;
   var ok = 1;
   var add;
   if (cpf != "") {
      cpf = cpf.replace(/[^\d]+/g, '');
      if (cpf.length != 11 ||
         cpf == "00000000000" ||
         cpf == "11111111111" ||
         cpf == "22222222222" ||
         cpf == "33333333333" ||
         cpf == "44444444444" ||
         cpf == "55555555555" ||
         cpf == "66666666666" ||
         cpf == "77777777777" ||
         cpf == "88888888888" ||
         cpf == "99999999999")
         ok = 0;
      if (ok == 1) {
         add = 0;
         for (i = 0; i < 9; i++)
            add += parseInt(cpf.charAt(i)) * (10 - i);
         rev = 11 - (add % 11);
         if (rev == 10 || rev == 11)
            rev = 0;
         if (rev != parseInt(cpf.charAt(9)))
            ok = 0;
         if (ok == 1) {
            add = 0;
            for (i = 0; i < 10; i++)
               add += parseInt(cpf.charAt(i)) * (11 - i);
            rev = 11 - (add % 11);
            if (rev == 10 || rev == 11)
               rev = 0;
            if (rev != parseInt(cpf.charAt(10)))
               ok = 0;
         }
      }
      if (ok == 0) {
         alert("CPF inválido! Informe um CPF valido!");
      }
   }
}

function validarEmailInput() { //validar email
   const emailInput = document.getElementById("contact-email");
   const email = emailInput.value.trim();
   const erroMsg = document.getElementById("erro-email");

   if (!email) {
      erroMsg.innerText = "Por favor, informe um endereço de e-mail válido.";
      emailInput.classList.add("campo-invalido");
      emailInput.focus();
      return false;
   }
   if (!/\S+@\S+\.\S+/.test(email)) {
      erroMsg.innerText = "Por favor, informe um endereço de e-mail válido.";
      emailInput.classList.add("campo-invalido");
      emailInput.focus();
      return false;
   }
   erroMsg.innerText = "";
   emailInput.classList.remove("campo-invalido");
   return true;
}


function mTel() { // máscara para telefone fixo
   var tel = event.target.value;
   tel = tel.replace(/\D/g, "")
   tel = tel.replace(/^(\d)/, "($1")
   tel = tel.replace(/(.{3})(\d)/, "$1)$2")
   if (tel.length == 9) {
      tel = tel.replace(/(.{1})$/, "-$1")
   } else if (tel.length == 10) {
      tel = tel.replace(/(.{2})$/, "-$1")
   } else if (tel.length == 11) {
      tel = tel.replace(/(.{3})$/, "-$1")
   } else if (tel.length == 12) {
      tel = tel.replace(/(.{4})$/, "-$1")
   } else if (tel.length > 12) {
      tel = tel.replace(/(.{4})$/, "-$1")
   }
   event.target.value = tel;
}

function validateUrlInput() { //Validar url
   const input = document.getElementById("redes-sociais")
   const inputValue = input.value
   const urlRegex = new RegExp("^(http|https)://.*$")
   const isValidUrl = urlRegex.test(inputValue)

   if (isValidUrl) {

      console.log("URL válida!")
   } else {

      console.error("URL inválida!")

   }
}

