function buscar() {
    const apikey = '8fa8be48' ; 
    const frmPesquisa = document.querySelector("form");

frmPesquisa.onsubmit = (ev) => {
    ev.preventDefault();

    const pesquisa = ev.target.pesquisa.value;

    if (pesquisa == "") {
    alert ('preencha o caminho!');
    return;


    }
    fetch(`https://www.omdbapi.com/?s=${pesquisa}&apikey=${apikey}`)
    .then(result => result.json())
    .then(json => carregaLista(json));

}
const carregaLista = (json) => {
    const lista = document.querySelector("div.lista");
    lista.innerHTML = "";

    if (!json.Response) {
        alert('nenhuma filme encontrado');
    }

    json.Search.forEach(Element => {
        console.log(Element);

        let item = document.createElement("div");
        item.classList.add("item");

        item.innerHTML = `<img src="${Element.Poster}" /><h2>${Element.Title}</h2>`
        
        lista.appendChild(item);
    })

    const chk = document.getElementById('chk')

    chk.addEventListener('change', () => {
      document.body.classList.toggle('dark')
    })
    

}
}

