/* DOM CRIA JOGO*/

const body = document.getElementById('pagina')

const divJogo = document.createElement('div')
divJogo.setAttribute('id', 'jogo')


const divTorre1 = document.createElement('div')
divTorre1.setAttribute('id', 't1')
divTorre1.classList.add('torre')

const divTorre2 = document.createElement('div')
divTorre2.setAttribute('id', 't2')
divTorre2.classList.add('torre')

const divTorre3 = document.createElement('div')
divTorre3.setAttribute('id', 't3')
divTorre3.classList.add('torre')


const divDisco1 = document.createElement('div')
divDisco1.setAttribute('id', 'd1')
divDisco1.setAttribute('data-disco', '1')

const divDisco2 = document.createElement('div')
divDisco2.setAttribute('id', 'd2')
divDisco2.setAttribute('data-disco', '2')

const divDisco3 = document.createElement('div')
divDisco3.setAttribute('id', 'd3')
divDisco3.setAttribute('data-disco', '3')

const divDisco4 = document.createElement('div')
divDisco4.setAttribute('id', 'd4')
divDisco4.setAttribute('data-disco', '4')

const divLog = document.createElement('div')
divLog.setAttribute('id', 'log')
divLog.innerText = 'Mova um disco para iniciar!'



body.appendChild(divJogo)
divJogo.appendChild(divTorre1)
divJogo.appendChild(divTorre2)
divJogo.appendChild(divTorre3)

divTorre1.appendChild(divDisco1)
divTorre1.appendChild(divDisco2)
divTorre1.appendChild(divDisco3)
divTorre1.appendChild(divDisco4)

body.appendChild(divLog)

/* DOM CRIA JOGO */


/* VARIÁVEIS */

let t1 = document.getElementById("t1")
let t2 = document.getElementById("t2")
let t3 = document.getElementById("t3")

let log = document.getElementById('log')

const botao = document.getElementById('botao')

let disco
let dataDisco = 0

let lastT1 = 0
let lastT2 = 0
let lastT3 = 0

/* VARIÁVEIS */


/* FUNÇÕES */

const valorDisco = (primeiro, torre, valorTorre) => {

    if (disco === undefined) {
        primeiro.remove()
        disco = primeiro
        dataDisco = 0

    } else if (disco !== undefined && valorTorre >= dataDisco || valorTorre === 0) {

        torre.prepend(disco)
        disco = undefined
        valorTorre = dataDisco
        dataDisco = 0
        log.classList.remove('log-alert')
        log.innerText = "Belo movimento!"
    } else {

        log.classList.add('log-alert')
        log.innerText = "Ops, você não pode fazer isso!"
    }
}


const pegaUltimo = () => {

    if (t1.firstElementChild !== null) {
        lastT1 = Number(t1.firstElementChild.dataset.disco)
    }
    if (t1.firstElementChild === null) {
        lastT1 = 0
    }

    if (t2.firstElementChild !== null) {
        lastT2 = Number(t2.firstElementChild.dataset.disco)
    }
    if (t2.firstElementChild === null) {
        lastT2 = 0
    }

    if (t3.firstElementChild !== null) {
        lastT3 = Number(t3.firstElementChild.dataset.disco)
    }
    if (t3.firstElementChild === null) {
        lastT3 = 0
    }
}


const vitoria = () => {
    if (t3.childElementCount === 4) {
        log.classList.add('log-vitoria')
        log.innerText = "Boa! Você conseguiu!"
    }
}



/* FUNÇÕES */



/* EVENTOS */

t1.addEventListener("click", function () {

    let primeiro = t1.firstElementChild
    let valorTorre = lastT1
    let torre = t1
    
    valorDisco(primeiro, torre, valorTorre)

    pegaUltimo()

    /* -------------------------------------------------------- */
    console.log('t1',lastT1, 't2', lastT2, 't3', lastT3, 'vT', valorTorre, 'dD',dataDisco)

    if (primeiro !== null && dataDisco === 0) {
        dataDisco = Number(primeiro.dataset.disco)
    } 

})


t2.addEventListener("click", function () {

    let primeiro = t2.firstElementChild
    let valorTorre = lastT2
    let torre = t2
    

    valorDisco(primeiro, torre, valorTorre)

    pegaUltimo()

    /* _____________________________________________ */
    console.log('t1',lastT1, 't2', lastT2, 't3', lastT3, 'vT', valorTorre, 'dD',dataDisco)

    if (primeiro !== null && dataDisco === 0) {
        dataDisco = Number(primeiro.dataset.disco)
    }

})


t3.addEventListener("click", function () {

    let primeiro = t3.firstElementChild
    let valorTorre = Number(lastT3)
    let torre = t3
    

    valorDisco(primeiro, torre, valorTorre)

    pegaUltimo()
    vitoria()

    /* ------------------------------------------------------ */
    console.log('t1',lastT1, 't2', lastT2, 't3', lastT3, 'vT', valorTorre, 'dD',dataDisco)

    if (primeiro !== null && dataDisco === 0) {
        dataDisco = Number(primeiro.dataset.disco)
    }

})


botao.addEventListener("click", function () {
    location.reload()
})

/* EVENTOS */