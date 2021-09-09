const db_slider = [
    [
        `
            <h2 class='titulo'>Slide 01 - Exemplo de título</h2>
            <p class='texto'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam aut natus explicabo, soluta molestiae facere magnam culpa porro nam earum obcaecati debitis qui similique eius consequatur repudiandae asperiores provident eveniet. Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam aut natus explicabo, soluta molestiae facere magnam culpa porro nam earum obcaecati debitis qui similique eius consequatur repudiandae asperiores provident eveniet.
            </p>
        `
    ],
    [
        `
            <h2 class='titulo'>Slide 02 - Exemplo de título</h2>
            <p class='texto'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam aut natus explicabo, soluta molestiae facere magnam culpa porro nam earum obcaecati debitis qui similique eius consequatur repudiandae asperiores provident eveniet. Lorem ipsum dolor sit amet consectetur adipisicing elit. 
            </p>
        `
    ],
    [
        `
            <h2 class='titulo'>Slide 03 - Exemplo de título</h2>
            <p class='texto'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam aut natus explicabo, soluta molestiae facere magnam culpa porro nam earum obcaecati debitis qui similique eius consequatur repudiandae asperiores provident eveniet. Lorem ipsum dolor sit amet consectetur adipisicing elit. 
            </p>
        `
    ]
]
function sliderIniciar(id){

    // Pega o container do slider.
    let slider = document.getElementById(id)

    // Pega a li do slider.
    let elemento = document.querySelector(`#${id} .slider-elemento`)

    // Pega a data-attribute com o slide atual.
    let slideAtual = slider.getAttribute("data-slider")

    //Pega o botão proximo.
    let btProximo = document.querySelector(`#${id} .bt-proximo`)

    if(slideAtual == 'null'){
        elemento.innerHTML = db_slider[0]
        slideAtual = 0
        slider.setAttribute('data-slider',slideAtual)
    }
    
}

function proximoSlide(id){
    let elemento = document.querySelector(`#${id} .slider-elemento`)
    let slider = document.getElementById(id)
    let slideAtual = parseInt(slider.getAttribute("data-slider"))
    if(slideAtual < (db_slider.length-1)){
        slideAtual++
        elemento.innerHTML = db_slider[slideAtual]
        slider.setAttribute("data-slider",slideAtual)
    }
}

function slideAnterior(id){
    let elemento = document.querySelector(`#${id} .slider-elemento`)
    let slider = document.getElementById(id)
    let slideAtual = parseInt(slider.getAttribute("data-slider"))
    if(slideAtual > 0){
        slideAtual--
        elemento.innerHTML = db_slider[slideAtual]
        slider.setAttribute("data-slider",slideAtual)
    }
}

sliderIniciar('slide1')