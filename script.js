////https://deckofcardsapi.com/api/deck/pr5p9f4i46a5/draw/?count=2
// https://deckofcardsapi.com/api/deck/nijw5oagdro4/draw/?count=
let getInfo = document.querySelector('#getInfo')


function getRandon (event) {    
    event.preventDefault()
    let textInput = document.querySelector('#input').value.toLowerCase();
    let url= textInput;
    fetch(url)
    .then(res => {
        return res.json();
    })
    .then(res => {
        console.log(res)
        // console.log(res.cards[0].images.svg)
    //     let img = document.querySelector('.imgApi')
    //     img.setAttribute('src', res.cards[0].images.svg)        
    })
    .catch(err => {
        console.log("something went wrong...", err);
    });
}


getInfo.addEventListener('click',getRandon)
// -----------> exemplos de API com chave header<-------------------------------------------
// function getRandon (event) {    
//     event.preventDefault()
//     let textInput = document.querySelector('#input').value.toLowerCase();
//     let url= textInput;
//     fetch(url, {
//         headers: {
//           'x-api-key': '278a52a2-bf74-4038-a9e9-30b79e3e3ce6'
//         }
//     })
//     .then(res => {
//         return res.json();
//     })
//     .then(res => {
//         let img = document.querySelector('.categoryCatImage')
//         img.setAttribute('src', res[0].url)        
//     })
//     .catch(err => {
//         console.log("something went wrong...", err);
//     });
// }


// randomButton.addEventListener('click',getRandon)


// const obj = []


// function addObj (name, idade){
//     obj.push({name: name, idade: idade})
// }


// addObj('Marcos',20)
// addObj(`vinicius`,30)
// addObj(`douglas`,33)
// addObj(`Felippe`,40)
// addObj(`Ingrid`,45)
// addObj(`Claraliz`,6)
// console.log(obj)

// const nameB = `vinicius`
// // let b = obj.map(a => a.nome).includes(nameB)
// const b = obj.filter(a => {
//     a.name == nameB
// })
// b.idade += 1
// console.log(b)



// console.log(obj)



// addObj('Marcos', 20)
// addObj(`vinicius`, 30)
// addObj(`douglas`, 33)
// addObj(`Felippe`, 40)
// addObj(`Ingrid`, 45)
// addObj(`Claraliz`, 6)
// console.log(obj)

// const nameB = 'Marcos'
// let b = obj.filter(a => a.nome === nameB)
    
// console.log(b)



// console.log(obj)



// addObj('Marcos', 20)
// addObj(`vinicius`, 30)
// addObj(`douglas`, 33)
// addObj(`Felippe`, 40)
// addObj(`Ingrid`, 45)
// addObj(`Claraliz`, 6)
// console.log(obj)

// const nameB = 'Marcos'
// let b = obj.filter(a => a.nome === nameB)
    
// console.log(b)



// console.log(obj)

// const Cor = function(cor, usedTime){
//     this.cor = cor
//     this.usedTime = usedTime
// }

// function addCor (){
//     const r = []
//     r.push(a)
// }
// const a = new Cor('azul', 1)
// const b = new Cor('preto', 1)
// const c = new Cor('marrom', 1)
// const d = new Cor('branco', 1)

// console.log()


    
    

