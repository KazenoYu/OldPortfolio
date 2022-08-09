function closeDiv() {
  document.getElementById('card_div').style.display = 'none';
}

function openDiv() {
  document
    .getElementById('card_divOpen')
    .addEventListener('click', function (e) {
      document.getElementById('card_div').style.display = 'block';
    });
  console.log(openDiv);
}
