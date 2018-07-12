var fetchUrl = 'https://gp2projectc.herokuapp.com/'
var drop = document.getElementById('myDropdown')
var submit = document.querySelector('button')
var search = document.querySelector('.search')


submit.addEventListener('click', function getRandomJoke() {
  fetch(fetchUrl)
  .then(function (response) {
    return response.json()    
  })
  .then(function (corny) {
    
    var cornyArray = corny.data
    
    
    var randomJoke = cornyArray[Math.floor(Math.random() * cornyArray.length)];
    
    
    document.querySelector('.jokeSection').innerText = randomJoke.joke
    document.querySelector('.punchLineSection').innerText = randomJoke.punchline
    
      }
    )
  }
)

drop.addEventListener('change', function howManyJokes() {
  
  var jokePortion = document.querySelector('.joke')
  var numberOfJokes = event.target.value
  console.log(numberOfJokes);
  
  search.addEventListener('click', function getMultipleJokes() {
    fetch(fetchUrl)
    .then(function (response) {
      return response.json()    
    })
    .then(function (corny) {
      
    var cornyArray = corny.data
    const shuffled = cornyArray.sort(() => .5 - Math.random());  
    let selected = shuffled.slice(0,numberOfJokes) 
    clear()
    
    selected.map(moreJokes => {
      var theJoke = document.createElement('li')
      var thePunchline = document.createElement('li')    
      theJoke.innerHTML = moreJokes.joke
      theJoke.id = "jokeItem"
      thePunchline.innerHTML = moreJokes.punchline
      thePunchline.id = "punchlineItem"
      
      jokePortion.appendChild(theJoke)
      document.createElement('br')

      jokePortion.appendChild(thePunchline)
    })
    
    
          }
        )
      }
    )
  }
)

function clear () {
  var jokePortion = document.querySelector('.joke')
  jokePortion.innerHTML = ''
}