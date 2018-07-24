var fetchUrl = 'https://gp2projectc.herokuapp.com/'
var drop = document.getElementById('myDropdown')
var submit = document.querySelector('button')
var manyJokesButton = document.querySelector('.manyJokesButton')
var manyJokes = document.querySelector('.lotsOfJokes')

submit.addEventListener('click', function getRandomJoke() {
  fetch(fetchUrl)
    .then(function (response) {
      return response.json()
    })
    .then(function (corny) {
    cornyArray = corny.data
    var randomJoke = cornyArray[Math.floor(Math.random() * cornyArray.length)];
    document.querySelector('.jokeSection').innerText = randomJoke.joke
    document.querySelector('.punchLineSection').innerText = randomJoke.punchline
      }
    )
  }
)

drop.addEventListener('change', function howManyJokes() {
  var numberOfJokes = event.target.value
  manyJokesButton.addEventListener('click', function getSeveralJokes() {
    fetch(fetchUrl)
    .then(function (response) {
      return response.json()
      })
    .then(function (corny) {
      cornyArray = corny.data
      return getRandom(corny)
    }
)}
)

function getRandom() {
  manyJokes.innerHTML = ''
  for (i=0; i < numberOfJokes; i++) {
    var testing = cornyArray[Math.floor(Math.random() * cornyArray.length)];
    console.log(testing)
    
    let arr = new Array()
      var jokePortion = testing.joke
      var punchlinePortion = testing.punchline
      arr.push(`${jokePortion}<br> 
      ${punchlinePortion}`)
    
  var html = `             
      <p>${arr[0]} 
      </p>`

  manyJokes.innerHTML += html
      }
    }
  } 
)
      
  