$(document).ready(function() {
  $('#start_btn').click(function() {
    $('#welcome').fadeOut(1500);
    play();
  });
});

//reset button
$('#reset').click(function() {
  $('#welcome').fadeIn(1000);
  window.setTimeout(function() {restoreBall();}, 1001);
  $(document).on('mousedown');
  $('#start_btn').click(function() {
    $('#welcome').fadeOut(1500);
    // $(document).on('mousedown');
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

// Rotate ball so window is visible when mouse button is released
//Ball Spins in direction mouse was releases

function rotate(e) {
  var mouseRelease = event.pageX;
  $(document).off('mousedown');
  $(document).off('mousemove');
  if (mouseRelease < 715) {
    $('.eightBall').css('background-position', '-3000px 0');
    $('.eightBall').css('transition', 'all 2s ease');
    $('.fortuneTile').delay(2000).fadeIn(3000);
  }
  else if (mouseRelease >= 715) {
    $('.eightBall').css('background-position', '3000px 0');
    $('.eightBall').css('transition', 'all 2s ease');
    $('.fortuneTile').delay(2000).fadeIn(3000);
  }
 $(document).off('mouseup');
}


//Eight Ball follows mouse while button is held down

function follow(e) {
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
  var seed = getRandomInt(1,20);
  $('.fortuneTile').fadeOut(0);
  $('.fortuneTile').css('background-image', getAnswer(seed));
  $('.fortuneTile').css('top', getTop(seed) )
  $(document).mousedown(function() {
    $(document).mousemove(function(event) {
      follow(event);
    });
  });
  $(document).mouseup(function(event) {
    rotate(event)
  });
}


// Generate Random number

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
};


// position tile appropriatley

function getTop(seed) {
  var t = '40%';
  if (seed == 0 || seed == 1 || seed == 3 || seed == 6 || seed == 11 || seed == 15 || seed == 19) {
    t = '35%';
  };
  return t;
};


// load random answer tile

function getAnswer(seed) {
	var fortune = [
        `url('https://rawgit.com/johneckert/0e9c9355197fa6482feb199228e3f88e/raw/715bdcfd72b65decb5258751212c636ba4427ab4/tileOne.svg')`,
                `url('https://rawgit.com/johneckert/f5fac63f09e817cf0b5b2a47e288fc3a/raw/718e86b83c70d1716e93d7b5bda3030d264cf2dc/tileTwo.svg')`,
                `url('https://rawgit.com/johneckert/137189955efa98abafb3e580e458f9d4/raw/99d99db670f58d9a3f7032ed67406a695a25ce65/tileThree.svg')`,
                 `url('https://rawgit.com/johneckert/7fa882f58d73f995fd47bbd50a6a3938/raw/dd40a2d4d57b2fd68dc0b41a771d6cc8962a5694/tileFour.svg')`,
                 `url('https://rawgit.com/johneckert/a0dec056c41c1d09792db7ac036aef48/raw/dea74094942bffe51c10a8450c7d588dc5ad799d/tileFive.svg')`,
                 `url('https://rawgit.com/johneckert/1c3be24fdbab4d7fa4e8f63a35104c9a/raw/b7ebf1e1d99f5cff40bdc4a1964d65ac698f501e/tileSix.svg')`,
                 `url('https://rawgit.com/johneckert/ece812401b2319bb1435fc7ada882bae/raw/001b20f77f20a9c1b84d3b7abb4f58623ca79dc2/tileSeven.svg')`,
                 `url('https://rawgit.com/johneckert/a71cf72bcf8309a52351d7217ac9a540/raw/eb5fe4c5a8b43a3a23c99efc17b06742914f49e7/tileEight.svg')`,
                 `url('https://rawgit.com/johneckert/69e0f569443f9d8942d44f19af0ce2a8/raw/a05ca7b6156fa9d574cdd0def8efe0985f4f599a/tileNine.svg')`,
                 `url('https://rawgit.com/johneckert/c4f155739024b61b0a9eeb477cc9892a/raw/5e5ca98b7e12ddc23858b209a6eb32b25b45645b/tileTen.svg')`,
                 `url('https://rawgit.com/johneckert/b300bc50e5a76d8b9aec062af3ea4e17/raw/e015a4ec46cabb868b34302da2e5807fa0b94a79/tileEleven.svg')`,
                 `url('https://rawgit.com/johneckert/ba5313aa391f1335d91b395628a93416/raw/69c467deb5ab31419b76af2848b7b56fcbe96e38/tileTwelve.svg')`,
                 `url('https://rawgit.com/johneckert/908c52b47edb819ed53d3ac3d6b0456a/raw/6a6b8e19f98ae8718b302f3f17ac638e3a4e520a/tileThirteen.svg')`,
                 `url('https://rawgit.com/johneckert/02fdf4ffcc6083aa5f30593d35c4a9a1/raw/9b6c7cb3d42cab9ef32818fc7473142494448e29/tileFourteen.svg')`,
                 `url('https://rawgit.com/johneckert/ba979b5ef1f75eacba0c6f33b7710b28/raw/3d475f21790197def4f4d6f89f74108200d87451/tileFifteen.svg')`,
                 `url('https://rawgit.com/johneckert/32a32ebe429c520c550d1e712bff93d8/raw/d80033dda18f4f88c2926c4d28170e3f183ca74f/tileSixteen.svg')`,
                 `url('https://rawgit.com/johneckert/3cdf13b2e293f098e39f57451d9a84e6/raw/82239e4f5305a490d5d178ac9f2bb88148168529/tileSeventeen.svg')`,
                 `url('https://rawgit.com/johneckert/b229285dfea0a96c8b4297e67b6cc0cc/raw/c73eb183f3defeed6e3da5fc7d4b5a940ff8b424/tileEighteen.svg')`,
                 `url('https://rawgit.com/johneckert/5286c47c7c5a89f400ef1086f90ed0c5/raw/4f3565a051babc33d341f6b716d2db2371847a06/tileNineteen.svg')`,
                 `url('https://rawgit.com/johneckert/ff8e62dfbf445996b04c4b45515bbae2/raw/dfb44f16266939f6683fa62452b3171153eb7af7/tileTwenty.svg')`
                ];

	return fortune[seed];
}
