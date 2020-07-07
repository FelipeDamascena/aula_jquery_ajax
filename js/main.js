
function consultaCep(){
    $(".barraProgresso").show();
var cep = document.getElementById("cep").value;
var url = "https://viacep.com.br/ws/" + cep + "/json";

console.log(url);    
$.ajax({
    url : url,
    type : "GET",
    success : function(response){
            console.log(response);
            $("#titulo_cep").html("CEP: " + response.cep);
            $("#logradouro").html(response.logradouro);
            document.getElementById("logradouro").innerHTML = response.logradouro;
            document.getElementById("bairro").innerHTML = response.bairro;
            document.getElementById("localidade").innerHTML = response.localidade;
            document.getElementById("uf").innerHTML = response.uf;
            //alert(response.logradouro);
            $(".cep").show();
            $(".barraProgresso").hide();
        }
    })
}
$(function(){
$(".cep").hide();
$(".barraProgresso").hide();
})