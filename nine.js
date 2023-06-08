let navi_pressure = window.location.href
let id = navi_pressure.substring(navi_pressure.lastIndexOf('=') + 1)

fetch('https://fakestoreapi.com/products')
    .then(res => res.json())
    .then(data => 
        {
            var rastreiox = 
            {
            nomes: document.querySelector('#buscapez').value.toLowerCase()
            }
            console.log("Dor " + id)
            for (let i = 0; i < data.length; i++) {
                if (data[i].id == id) {
                    document.querySelector('#le_rest').innerHTML = `<div id="fotona_x">
                        <img src="${data[i].image}" alt="Foto do produto" class="fotox"> 
                    </div> 
                    <div id="descript">
                        <h1 class="titulox">${data[i].title}</h1>
                        <p class="textox">${data[i].description}</p>
                        <p class="textox" id="nota">Nota do produto: ${data[i].rating.rate}/5</p>
                        <p class="textox" id="dindin">$ ${data[i].price}</p>
                        <div id="botao">
                        <button type="button" class="compree">Comprar</button>
                        </div>
                    </div>
                    `
                }
        }
        const buttony = document.getElementById('botonz')
        buttony.addEventListener('click', finderx)
        function finderx(event)
        {
        if(event)
        {
            event.preventDefault()
        }
        rastreiox.nomes = document.querySelector('#buscapez').value.toLowerCase()
        if(rastreiox.nomes == "" || rastreiox.nomes == null || rastreiox.nomes == undefined)
        {
            return
        }
        window.location.href = "index.html"+"?nome="+rastreiox.nomes
        
        
    }})