const form = document.getElementById("form-deposito");

function validaNome(nomeCompleto) {
     const nomeComoArray = nomeCompleto.split(" ");
     return nomeComoArray.length >= 2;

}

form.addEventListener("submit",function(e){
     let formValido = false;
     e.preventDefault(); 

     const nomeBeneficiario = document.getElementById("nomeBeneficiario");
     const numeroContaBeneficiario = document.getElementById("numero-conta");
     const valorDeposito = document.getElementById("valor-deposito");
     const mensagemSucesso = "Montante de": ${valorDeposito.value} "deposito para o cliente": ${nomeBeneficiario.value} - "conta":${numeroContaBeneficiario.value};
     
     formEValido = validanome(nomeBeneficiario.value)
          if (formEValido) {
               alert(mensagemSucesso)

               nomeBeneficiario.value ='';
               numeroContaBeneficiario.value ='';
               valorDeposito.value = '';


          }else{
               alert("O Nome não está completo");
             }
       }

})
console.log(form);




