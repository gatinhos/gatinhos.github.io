const loveMenssages = [
    'Tem amor que parece que nasceu para durar uma vida inteira, tipo o meu por você.',
    'O amor não é viver felizes para sempre, isso é um conto de fadas. O amor é saber como enfrentar a vida juntos.',
    'Amor verdadeiro é aquele que o vento não leva e a distância não separa.',
    'Amar é uma incrível vontade de ficar junto, partilhar a vida e cuidar do outro.',
    'Que o nosso amor pra sempre viva.',
    'Você é minha coisa mais favorita do mundo.',
    'Distância não significa nada quando alguém significa tudo',
    'Você me transborda amor.',
    'O melhor lugar do mundo é sempre ao lado de quem te faz feliz!',
    'Vamos viver tudo que há pra viver.',
    'Você é a tradução do que é o amor.',
    'Meu amor por você vai além das palavras, vai além de mim, vai muito mais além do que eu posso explicar.',
    'Quando estamos juntos, eu esqueço de todo o resto.',
    'Em teus braços encontrei meu sonho completo.',
    'Somos tão bonitos juntos, que viramos poesia.',
    'Amor gera amor ♥',
    'Porque o seu sorriso é tudo o que eu preciso.',
    'Se cada pessoa é um mundo, então, você é o meu.',
    'Você me faz tão feliz, nosso amor é a coisa mais bonita que há no mundo.',
    'Vamos juntos, porque a vida sem você já não tem mais graça!'
]


function createImg({ imgSource, className }){
    const img = document.createElement('img')
    img.src = imgSource
    img.className = className
    return img
}

function createText({ contentText, className }){
    const text = document.createElement('p')
    text.innerHTML = contentText
    text.className = className
    return text
}

function createImgCard({ cardConfig, imgConfig, textConfig }){
    const { className } = cardConfig

    const img = createImg({ ...imgConfig })
    const text = createText({ ...textConfig })

    const card = document.createElement('li')
    card.className = className

    card.appendChild(img)
    card.appendChild(text)

    return card
}

const imageList = document.getElementById('image-container')

for(let i = 1; i <= 20;i++){
    const card = createImgCard({
        cardConfig: {
            className: 'images-container__card'
        },
        imgConfig:{
            imgSource: `./assets/img/album/img${i}.jpg`,
            className: 'images-container__card__img'
        },
        textConfig: {
            contentText: loveMenssages[i-1],
            className: 'images-container__card__text'
        }
    })

    imageList.appendChild(card)
}