const inputCEP = document.querySelector('#inputCEP')
//const Bairro = document.querySelector('#bairro')

function getCEP() {
    fetch(`https://viacep.com.br/ws/${inputCEP.value}/json`)
    .then((Response) =>Response.json())
    .then ((dados) =>{
        console.log(dados)
        bairro.innerText = dados.bairro
        lou.innerText = dados.logradouro
        uf.innerText = dados.uf 
        cit.innerText = dados.localidade
    })
.catch((erro) => console(erro))
}
