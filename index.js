function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

let navi_pressure = window.location.href
const busca = navi_pressure.substring(navi_pressure.lastIndexOf('=') + 1)

fetch('https://fakestoreapi.com/products')
    .then(res => res.json())
    .then(data => 
        {
        var rastreio = 
        {
            nomes: document.querySelector('#buscape').value.toLowerCase(),
            filtrage: document.querySelector('#flitargei').value.toLowerCase(),
            de: document.querySelector('#money_1').value,
            ate: document.querySelector('#money_2').value
        }
        let content = ''
        let rank_1 = 0
        let rank_2 = 0
        let rank_3 = 0
        let rank_4 = 0
        path = window.location.pathname
        for (let j = 0; j < data.length; j++) {
            if (data[rank_1].rating.rate < data[j].rating.rate) {
                rank_1 = j
            }
        }
        for (let j = 0; j < data.length; j++) {
            if (data[rank_2].rating.rate < data[j].rating.rate && j != rank_1) {
                rank_2 = j
            }
        }
        for (let j = 0; j < data.length; j++) {
            if (data[rank_3].rating.rate < data[j].rating.rate && j != rank_1 && j != rank_2) {
                rank_3 = j
            }
        }
        for (let j = 0; j < data.length; j++) {
            if (data[rank_4].rating.rate < data[j].rating.rate && j != rank_1 && j != rank_2 && j != rank_3) {
                rank_4 = j
            }
        }
        
        
        
        
        if (path != "/detalhes.html") 
        {
            
            
            for (let i = 0; i < data.length; i++) {
                let item = data[i]
                content += `<div class="couluna">
                <button class="conect sofrer" id="produto-${data[i].id}">           
                <div class="cardio" data-index="${data[i].id}">
                <img src="${item.image}" class="fototeca" alt="">
                <div class="infarto">
                    <h5 class="nombrezito">${item.title}</h5>                    
                    <p class="price">$ ${item.price}</p>
                    <p class="textito">${item.rating.rate}/5</p>
                </div>
                </div>
                </button>
                </div>`
            }
            document.getElementById('mejores').innerHTML = `<p class="tituloooo">MELHORES NOTAS</p>
        <button class="conect sofrer" id="produto-${data[rank_1].id}"> 
        <div class="item_ranked">
            <img class="image_ranked" src="${data[rank_1].image}" alt="">
            <p class="nombre_ranked">${data[rank_1].title} | ${data[rank_1].rating.rate}/5</p>
        </div>
        </button>
        <button class="conect sofrer" id="produto-${data[rank_2].id}"> 
        <div class="item_ranked">
            <img class="image_ranked" src="${data[rank_2].image}" alt="">
            <p class="nombre_ranked">${data[rank_2].title} | ${data[rank_2].rating.rate}/5</p>
        </div>
        </button>
        <button class="conect sofrer" id="produto-${data[rank_3].id}"> 
        <div class="item_ranked">
            <img class="image_ranked" src="${data[rank_3].image}" alt="">
            <p class="nombre_ranked">${data[rank_3].title} | ${data[rank_3].rating.rate}/5</p>
        </div>
        </button>
        <button class="conect sofrer" id="produto-${data[rank_4].id}"> 
        <div class="item_ranked_final">
            <img class="image_ranked" src="${data[rank_4].image}" alt="">
            <p class="nombre_ranked">${data[rank_4].title} | ${data[rank_4].rating.rate}/5</p>
        </div>
        </button>
        `
            document.getElementById('products').innerHTML = content
            let fotos = []
            for(let i = 0; i < 11; i++)
            {
                fotos[i] = getRandomInt(0, data.length-1)
                for(let j = 0; j < i; j++)
                {
                    if(fotos[i] == fotos[j])
                    {
                        fotos[i] = getRandomInt(0, data.length-1)
                    }
                    
                }
                
            }
            for(let i = 0; i < 11; i++)
            {
                console.log(fotos[i])
                document.querySelector('#caroussel').innerHTML += `
                <li>
                <img src="${data[fotos[i]].image}" alt="" class="foto-carro">
                </li>             
                `
            }
        }
        const buttonx = document.getElementById('encontra')
        buttonx.addEventListener('click', finder)

        const buttons = document.querySelectorAll('.sofrer')
        buttons.forEach(button => {
        button.onclick = function() 
        {
            let item = this.id.split('-')[1]; // Extrai o id do produto
            window.location.href = "detalhes.html"+"?id="+item
        }})
        const buttony = document.getElementById('boto_f')
        buttony.addEventListener('click', finder)
        
    function finder(event)
    {
        rastreio.filtrage = document.querySelector('#flitargei').value.toLowerCase()
        rastreio.nomes = document.querySelector('#buscape').value.toLowerCase()
        rastreio.de = document.querySelector('#money_1').value
        rastreio.ate = document.querySelector('#money_2').value
        if(rastreio.de == '')
        {
            rastreio.de = 0
        }
        if(rastreio.ate == '')
        {
            rastreio.ate = 999999
        }
       
        let content = ''
        if(event)
        {
            event.preventDefault()
        }
        for(let i = 0; i < data.length; i++)
        {
            let item = data[i]
            if(rastreio.filtrage == "")
            {
                if(item.title.toLowerCase().includes(rastreio.nomes) && item.price >= rastreio.de && item.price <= rastreio.ate)
                {
                    content += `
                    <div class="couluna">
                        <button class="conect sofrer mucho" id="produto_2-${data[i].id}">           
                            <div class="cardio" data-index="${data[i].id}">
                                <img src="${item.image}" class="fototeca" alt="">
                                <div class="infarto">
                                    <h5 class="nombrezito">${item.title}</h5>                    
                                    <p class="price">R$ ${item.price}</p>
                                    <p class="textito">${item.rating.rate}/5</p>
                                </div>
                            </div>
                        </button>
                    </div>`
                }
            }
            else if(item.title.toLowerCase().includes(rastreio.nomes) && item.category.toLowerCase() == rastreio.filtrage && item.price >= rastreio.de && item.price <= rastreio.ate)
            {
                content += `
                <div class="couluna">
                    <button class="conect sofrer mucho" id="produto_2-${data[i].id}">           
                        <div class="cardio" data-index="${data[i].id}">
                            <img src="${item.image}" class="fototeca" alt="">
                            <div class="infarto">
                                <h5 class="nombrezito">${item.title}</h5>                    
                                <p class="price">R$ ${item.price}</p>
                                <p class="textito">${item.rating.rate}/5</p>
                            </div>
                        </div>
                    </button>
                </div>`
            }
                
        }
        document.getElementById('products').innerHTML = content
        const dortao = document.querySelectorAll(`.mucho`)
                console.log(dortao)
                dortao.forEach(button => {
                button.onclick = function() 
                {
                    let item = this.id.split('-')[1]; // Extrai o id do produto
                    window.location.href = "detalhes.html"+"?id="+item
                }})
    }
    function finder_2(track)
    {
        let content = ''
        for(let i = 0; i < data.length; i++)
        {
            let item = data[i]
            if(item.title.toLowerCase().includes(track))
            {
                content += `
                <div class="couluna">
                    <button class="conect sofrer mucho" id="produto_2-${data[i].id}">           
                        <div class="cardio" data-index="${data[i].id}">
                            <img src="${item.image}" class="fototeca" alt="">
                            <div class="infarto">
                                <h5 class="nombrezito">${item.title}</h5>                    
                                <p class="price">R$ ${item.price}</p>
                                <p class="textito">${item.rating.rate}/5</p>
                            </div>
                        </div>
                    </button>
                </div>`
            }
                
        }
        document.getElementById('products').innerHTML = content
        const portal = document.querySelectorAll(`.mucho`)
                console.log(portal)
                portal.forEach(button => 
                {
                    button.onclick = function() 
                    {
                        let item = this.id.split('-')[1]; // Extrai o id do produto
                        window.location.href = "detalhes.html"+"?id="+item
                    }
                })
    }
    console.log(busca)
    if(busca != navi_pressure)
    {
        finder_2(busca)
    }



    //CUIDADO,AQUI COMEÇA A GABRIELAGEM




    //Button Left
    let BtLeft = document.getElementById("left")
    //Button Right
    let BtRight = document.getElementById("right")
    //Parent of cards
    const caroussel = document.getElementById("caroussel")


    //First Card
    let Fst = document.querySelector("#caroussel>li:first-child")
    //Last Card
    let Lst = document.querySelector("#caroussel>li:last-child")

    //Inicial Values
    let Wait = false
    let Size = -1

    //Find Number of Cards
    for (Size = 1; document.querySelector(`#caroussel>li:nth-child(${Size}n)`) != Lst; Size++);
    //Main card (class "M<value>" - 0 middle, -1 left, +1 right,can go from -99 to 99)
    let Main = parseInt(Size / 2) + (Size % 2) + parseInt(caroussel.className.substring(caroussel.className.lastIndexOf("M") + 1, caroussel.className.lastIndexOf("M-") + 3))
    document.querySelector(`#caroussel>li:nth-child(${Main}n)`).className = "Main"

    //Size
    let Gap = parseInt(window.getComputedStyle(Fst.parentElement).gap)
    console.log(Gap)
    let Offset = Gap + (document.querySelector(`#caroussel>li:nth-child(${Main - 1}n)`).clientWidth)
    console.log(Offset)

    if (Size % 2 == 0) {
        Fst.style.margin = `0 0 0 ${Offset}px`
    }

    //Animation
    const Cgo = (x) => {
        return ([
            { transform: `translateX(0px)` },
            { transform: `translateX(${x}px)`, easing: "ease-out" }])
    }

    //Animation Timing config
    const CTiming = {
        //Animations duration - Milisseconds
        duration: 200,
        iterations: 1,
    }

    //Button Left trigger
    BtLeft.addEventListener("click", () => {
        if (Wait) {
            console.log("LeftButton Error : Please Wait")
        }
        else {
            document.querySelector(`#caroussel>li:nth-child(${Main}n)`).className = " "
            Wait = true
            Gap = parseInt(window.getComputedStyle(Fst.parentElement).gap)
            Offset = Gap + (document.querySelector(`#caroussel>li:nth-child(${Main - 1}n)`).clientWidth)
            caroussel.animate(Cgo(Offset), CTiming).onfinish = () => {
                let Lhtml = Lst.innerHTML
                for (let i = Size; i > 1; i--) {
                    document.querySelector(`#caroussel>li:nth-child(${i}n)`).innerHTML = document.querySelector(`#caroussel>li:nth-child(${i - 1}n)`).innerHTML
                }
                Fst.innerHTML = Lhtml
                document.querySelector(`#caroussel>li:nth-child(${Main}n)`).className = "Main"
                Wait = false
            }
        }
    })

    //Button Right trigger
    BtRight.addEventListener("click", () => {
        if (Wait) {
            console.log("RightButton Error : Please Wait")
        }
        else {
            Wait = true
            document.querySelector(`#caroussel>li:nth-child(${Main}n)`).className = " "
            let Gap = parseInt(window.getComputedStyle(Fst.parentElement).gap)
            console.log(Gap)
            let Offset = Gap + (document.querySelector(`#caroussel>li:nth-child(${Main + 1}n)`).clientWidth)
            console.log(Offset)
            caroussel.animate(Cgo(-Offset), CTiming).onfinish = () => {
                let Lhtml = Fst.innerHTML
                for (let i = 1; i < Size; i++) {
                    document.querySelector(`#caroussel>li:nth-child(${i}n)`).innerHTML = document.querySelector(`#caroussel>li:nth-child(${i + 1}n)`).innerHTML
                }
                Lst.innerHTML = Lhtml
                document.querySelector(`#caroussel>li:nth-child(${Main}n)`).className = "Main"
                Wait = false
            }
        }
    })
})