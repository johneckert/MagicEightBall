$(document).ready(function() {
  $('#start_btn').click(function() {
    $('#welcome').fadeOut(1500);
    play();
  });
});

// Rotate ball so window is visible when mouse button is released

//Ball Spins in direction mouse was releases

function rotate(event) {
  var mouseRelease = event.pageX;
  $(document).off('mousedown');
  $(document).off('mousemove');
  if (mouseRelease < 715) {
    $('.eightBall').css('background-position', '-3000px 0');
    $('.eightBall').css('transition', 'all 2s ease');
    $('.fortuneTile')
      .delay(2000)
      .fadeIn(3000);
  } else if (mouseRelease >= 715) {
    $('.eightBall').css('background-position', '3000px 0');
    $('.eightBall').css('transition', 'all 2s ease');
    $('.fortuneTile')
      .delay(2000)
      .fadeIn(3000);
  }
  $(document).off('mouseup');
}

//Eight Ball follows mouse while button is held down

function follow(event) {
  var x = event.pageX;
  var a = 0;
  var b = 1200;
  var c = -100;
  var d = 100;
  var posX = (x - a) * ((d - c) / (b - a)) + c;
  $('.eightBall').css('background-position', `${posX}px 0`);
}

//fortune tile is set to invisible and random fortune is generated and positioned based on tile orientation
//animations are started

function play() {
  var seed = getRandomInt(1, 20);
  $('.fortuneTile').fadeOut(0);
  $('.fortuneTile').css('background-image', getAnswer(seed));
  $('.fortuneTile').css('top', getTop(seed));
  $(document).mousedown(function() {
    $(document).mousemove(function(event) {
      follow(event);
    });
  });
  $(document).mouseup(function(event) {
    rotate(event);
  });
}

// Generate Random number

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

// position tile appropriatley

function getTop(seed) {
  var t = '40%';
  if (seed == 0 || seed == 1 || seed == 3 || seed == 6 || seed == 11 || seed == 15 || seed == 19) {
    t = '35%';
  }
  return t;
}

// load random answer tile

function getAnswer(seed) {
  var fortune = [
    `url('https://gist.githubusercontent.com/johneckert/0e9c9355197fa6482feb199228e3f88e/raw/87f249b70f86ee0e5f8db6c1601f7dd9a3cc2f77/tileOne.svg')`,
    `url('https://gist.githubusercontent.com/johneckert/f5fac63f09e817cf0b5b2a47e288fc3a/raw/79cb76419bb1c8bf08d0444353b7b7234cb7b437/tileTwo.svg')`,
    `url('https://gist.githubusercontent.com/johneckert/137189955efa98abafb3e580e458f9d4/raw/76827247869cc89afbf18a16bcd96bcb46efd007/tileThree.svg')`,
    `url('https://gist.githubusercontent.com/johneckert/7fa882f58d73f995fd47bbd50a6a3938/raw/fc740040b8956119a9ae1853bac30aecd895fc89/tileFour.svg')`,
    `url('https://gist.githubusercontent.com/johneckert/a0dec056c41c1d09792db7ac036aef48/raw/5591c0a7f05769b99a899b359151bc5f252d5ef7/tileFive.svg')`,
    `url('https://gist.githubusercontent.com/johneckert/1c3be24fdbab4d7fa4e8f63a35104c9a/raw/11ca0451dc33108923308a06025f8d7bb212cc6a/tileSix.svg')`,
    `url('https://gist.githubusercontent.com/johneckert/ece812401b2319bb1435fc7ada882bae/raw/74a72c6d190679d701908388442cac29974ce66c/tileSeven.svg')`,
    `url('https://gist.githubusercontent.com/johneckert/a71cf72bcf8309a52351d7217ac9a540/raw/4eea1e62a27f53ee57e343beb7e9a873633fd132/tileEight.svg')`,
    `url('https://gist.githubusercontent.com/johneckert/69e0f569443f9d8942d44f19af0ce2a8/raw/fd54425afe302de28f444050f697feddf1fed503/tileNine.svg')`,
    `url('https://gist.githubusercontent.com/johneckert/c4f155739024b61b0a9eeb477cc9892a/raw/766ca50effb1280ee29426e1a41bfb2f7ed24633/tileTen.svg')`,
    `url('https://gist.githubusercontent.com/johneckert/b300bc50e5a76d8b9aec062af3ea4e17/raw/692dcbc81a8e319285c37cdc989e459857530f9c/tileEleven.svg')`,
    `url('https://gist.githubusercontent.com/johneckert/ba5313aa391f1335d91b395628a93416/raw/ada3e06320c2057d8f347328909172ecc79659f9/tileTwelve.svg')`,
    `url('https://gist.githubusercontent.com/johneckert/908c52b47edb819ed53d3ac3d6b0456a/raw/206d8e2e55b516c4ba95be2ac5016b24bfd6b8da/tileThirteen.svg')`,
    `url('https://gist.githubusercontent.com/johneckert/02fdf4ffcc6083aa5f30593d35c4a9a1/raw/016fa06b6a07b395346f1e19600a8d38f8066e49/tileFourteen.svg')`,
    `url('https://gist.githubusercontent.com/johneckert/ba979b5ef1f75eacba0c6f33b7710b28/raw/d1b8c7661b2437e87ebadb7f59043298a274b350/tileFifteen.svg')`,
    `url('https://gist.githubusercontent.com/johneckert/32a32ebe429c520c550d1e712bff93d8/raw/763d490e78e2143622d09cbe7225d79092709fe3/tileSixteen.svg')`,
    `url('https://gist.githubusercontent.com/johneckert/3cdf13b2e293f098e39f57451d9a84e6/raw/602fe1851a5e35a7f0d2b40eebb298c37b26b39b/tileSeventeen.svg')`,
    `url('https://gist.githubusercontent.com/johneckert/b229285dfea0a96c8b4297e67b6cc0cc/raw/f03e0ad802d5e0985fd8b9dc4cefcbe6938e978a/tileEighteen.svg')`,
    `url('https://gist.githubusercontent.com/johneckert/5286c47c7c5a89f400ef1086f90ed0c5/raw/06b6779eaf43f49387219f112dbc45cc21bcb2a5/tileNineteen.svg')`,
    `url('https://gist.githubusercontent.com/johneckert/ff8e62dfbf445996b04c4b45515bbae2/raw/cbaafdaa83a09469d398fe06e51237fd667a0161/tileTwenty.svg')`,
  ];

  return fortune[seed];
}

/////////////////////////// IN PROGRESS

//reset button
$('#reset').click(function() {
  $('#welcome').fadeIn(1000);
  window.setTimeout(function() {
    restoreBall();
  }, 1001);
  $(document).on('mousedown');
  $('#start_btn').click(function() {
    $('#welcome').fadeOut(1500);
    $(document).on('mousemove');
    $(document).on('mouseup');
    play();
  });
});

//restores the 8ball to its origional position
function restoreBall() {
  $('.fortuneTile').fadeOut(0);
  $('.eightBall').css('background-position', '0px 0');
  $('.eightBall').css('transition', 'all 0.2s ease');
}
