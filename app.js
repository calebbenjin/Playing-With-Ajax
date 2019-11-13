const btnX = document.querySelector('#btnX');
const btnF = document.querySelector('#btnF');
const btnJ = document.querySelector('#btnJ');
const btnA = document.querySelector('#btnA');
const text = document.querySelector('p');

const url = 'https://ron-swanson-quotes.herokuapp.com/v2/quotes';

btnX.addEventListener('click', () => {
  const XHR = new XMLHttpRequest();
  XHR.onreadystatechange = () => {
    if(XHR.readyState == 4 && XHR.status == 200) {
      const quote = JSON.parse(XHR.responseText);
      text.innerText = quote;
    }
  }
  XHR.open('GET', url);
  XHR.send();
})

// fetch

btnF.addEventListener('click', () => {
  fetch(url)
  .then((req) => {
    req.json()
    .then((data) => {
      text.innerText = data[0];
    })
  })
  .catch(() => {
    console.log('ERROR!!!');
  })
});

// jquery
$('#btnJ').click(function() {
  $.getJSON(url)
  .done(function(data){
    $(text).text(data[0]);
  })
})

btnA.addEventListener('click', () => {
  axios.get(url)
  .then((res) => {
    text.innerText = res.data;
  }).catch(() => {
    console.log('ERROR!!!')
  })
})