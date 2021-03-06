$(document).ready(function() {

  let numberOfBoxes = $('.box').length;
  let tenRndmNums = function() {
    let rndmNums = [];

    function rndmNumGen() {
      let rndmNum = Math.floor(Math.random() * numberOfBoxes);

      if(rndmNums.indexOf(rndmNum) === -1) {
        rndmNums.push(rndmNum);
      } else {
        rndmNumGen();
      }
    }

    while (rndmNums.length < 10) {
      rndmNumGen();
    }

    return rndmNums;
  }

  tenRndmNums = tenRndmNums();

  // Get the length(how many classes) of '.box' there is
  // Input that as a parameter into the function
  // While the array.length is less than 10
  // Run a function that gets a random number between 0 and length
  // Push that number into the array

  // Need to randomly make 10 '.box' classes red
  // When 'easy' button is clicked
  // Put 10 random numbers into an array
  // If the current idx is inside the random numbers array

  $('.box').each(function(idx, ele) {

    if (tenRndmNums.indexOf(idx) > -1) {
     $(ele).addClass('aMine')
   }
  })


  $('.box').click(function() {
    if ($(this).hasClass('aMine')) {
      $('.aMine').each(function(idx, ele) {
        $(ele).addClass('makeRed')
      })
    } else {
      $(this).addClass('makeWhite')
    }
  })

});

