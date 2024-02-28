const reviews = [
    {
      id: 1,
      name: 'susana smith',
      job: 'web developer',
      img: 'https://www.course-api.com/images/people/person-1.jpeg',
      text: "Como cliente, minha colaboração com este desenvolvedor foi nada menos que excepcional. Comunicativo, habilidoso e sempre disposto a superar expectativas. Uma escolha inteligente para quem busca bons resultados .",
    },
    {
      id: 2,
      name: 'anna johnson',
      job: 'web designer',
      img: 'https://www.course-api.com/images/people/person-2.jpeg',
      text: '"Encontrar um desenvolvedor foi uma verdadeira benção! Experiência excepcional, entrega no prazo e código impecável. Recomendaria a todos os clientes em busca de qualidade e confiabilidade."',
    },
    {
      id: 3,
      name: 'peter jones',
      job: 'intern',
      img: 'https://www.course-api.com/images/people/person-4.jpeg',
      text: 'Trabalhar com este desenvolvedor foi uma experiência incrível. Compreendeu perfeitamente minhas necessidades de design e trouxe minhas ideias à vida. Colaboração fácil e resultados excepcionais!',
    },
    {
      id: 4,
      name: 'bill anderson',
      job: 'the boss',
      img: 'https://www.course-api.com/images/people/person-3.jpeg',
      text: 'Contratei este desenvolvedor para um projeto crucial e não poderia estar mais satisfeito. Profissional, comprometido e com habilidades técnicas notáveis. Sem dúvida, uma escolha acertada para qualquer empresa.',
    },
  ];

//   get itemns

const img = document.getElementById('person-img')
const author = document.getElementById('author')
const job = document.getElementById('job')
const info = document.getElementById('info')

const prevBtn = document.getElementById('previous')
const nextBtn = document.getElementById('next')


let currentItem = Math.floor(Math.random() * reviews.length);
// load initial information 

window.addEventListener('DOMContentLoaded', function(){
    showPerson(currentItem)
});

function showPerson(person) {
    const item = reviews[person]
    img.src = item.img;
    author.textContent = item.name;
    job.textContent = item.job;
    info.textContent = item.text;
    console.log(item.textContent)
}


function nextPerson() {
    currentItem++
    currentItem >= reviews.length ? currentItem = 0 : null;
    showPerson(currentItem);
}

function previousPerson() {
    currentItem--
    currentItem < 0 ? currentItem = reviews.length - 1  : null;
    showPerson(currentItem);
}