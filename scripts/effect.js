$(window).load(function(){
    $('.loading').fadeOut('fast');
    $('.container').fadeIn('fast');
});
$('document').ready(function(){
        var vw;

        function layoutLettersResponsive() {
            var width = $(window).width();
            vw = width/2;
            var step;
            if (width <= 400) step = 42;           // very small phones
            else if (width <= 576) step = 48;      // small phones (tighter)
            else if (width <= 768) step = 64;      // tablets portrait (tighter)
            else step = 100;                       // desktop

            var topPos = 240; // fixed as requested
            // center based on actual balloon width (responsive)
            var bw = parseInt($('.balloons').css('width'), 10);
            if (isNaN(bw) || bw <= 0) bw = 100;
            var start = vw - (3 * step + bw/2);

            $('#b1,#b2,#b3,#b4,#b5,#b6,#b7').stop();
            $('#b11').animate({top:topPos, left: start + (0*step)},500);
            $('#b22').animate({top:topPos, left: start + (1*step)},500);
            $('#b33').animate({top:topPos, left: start + (2*step)},500);
            $('#b44').animate({top:topPos, left: start + (3*step)},500);
            $('#b55').animate({top:topPos, left: start + (4*step)},500);
            $('#b66').animate({top:topPos, left: start + (5*step)},500);
            $('#b77').animate({top:topPos, left: start + (6*step)},500);
        }

        $(window).resize(function(){
            layoutLettersResponsive();
        });

    $('#turn_on').click(function(){
		$('#bulb_yellow').addClass('bulb-glow-yellow');
		$('#bulb_red').addClass('bulb-glow-red');
		$('#bulb_blue').addClass('bulb-glow-blue');
		$('#bulb_green').addClass('bulb-glow-green');
		$('#bulb_pink').addClass('bulb-glow-pink');
		$('#bulb_orange').addClass('bulb-glow-orange');
        $('body').addClass('peach');
        // Toggle ambient flicker overlay
        $('body').addClass('lights-on');
        $(this).fadeOut(200).promise().done(function(){
            $('#play').fadeIn(300);
        });
	});
	$('#play').click(function(){
		var audio = $('.song')[0];
        audio.play();
        $('#bulb_yellow').addClass('bulb-glow-yellow-after');
		$('#bulb_red').addClass('bulb-glow-red-after');
		$('#bulb_blue').addClass('bulb-glow-blue-after');
		$('#bulb_green').addClass('bulb-glow-green-after');
		$('#bulb_pink').addClass('bulb-glow-pink-after');
		$('#bulb_orange').addClass('bulb-glow-orange-after');
        $('body').css('background-color','#FFF');
		$('body').addClass('peach-after');
        $(this).fadeOut(200).promise().done(function(){
            $('#bannar_coming').fadeIn(300);
        });
	});

    $('#bannar_coming').click(function(){
		$('.bannar').addClass('bannar-come');
        $(this).fadeOut(200).promise().done(function(){
            $('#balloons_flying').fadeIn(300);
        });
	});

    function loopOne() {
        var w=$(window).width(), h=$(window).height();
        var randleft = Math.max(0, (w-120)*Math.random());
        var randtop = Math.max(0, (h-160)*Math.random());
        $('#b1').animate({left:randleft,bottom:randtop},9000,function(){ loopOne(); });
    }
    function loopTwo() {
        var w=$(window).width(), h=$(window).height();
        var randleft = Math.max(0, (w-120)*Math.random());
        var randtop = Math.max(0, (h-160)*Math.random());
        $('#b2').animate({left:randleft,bottom:randtop},9800,function(){ loopTwo(); });
    }
    function loopThree() {
        var w=$(window).width(), h=$(window).height();
        var randleft = Math.max(0, (w-120)*Math.random());
        var randtop = Math.max(0, (h-160)*Math.random());
        $('#b3').animate({left:randleft,bottom:randtop},10400,function(){ loopThree(); });
    }
    function loopFour() {
        var w=$(window).width(), h=$(window).height();
        var randleft = Math.max(0, (w-120)*Math.random());
        var randtop = Math.max(0, (h-160)*Math.random());
        $('#b4').animate({left:randleft,bottom:randtop},9200,function(){ loopFour(); });
    }
    function loopFive() {
        var w=$(window).width(), h=$(window).height();
        var randleft = Math.max(0, (w-120)*Math.random());
        var randtop = Math.max(0, (h-160)*Math.random());
        $('#b5').animate({left:randleft,bottom:randtop},10100,function(){ loopFive(); });
    }

    function loopSix() {
        var w=$(window).width(), h=$(window).height();
        var randleft = Math.max(0, (w-120)*Math.random());
        var randtop = Math.max(0, (h-160)*Math.random());
        $('#b6').animate({left:randleft,bottom:randtop},9600,function(){ loopSix(); });
    }
    function loopSeven() {
        var w=$(window).width(), h=$(window).height();
        var randleft = Math.max(0, (w-120)*Math.random());
        var randtop = Math.max(0, (h-160)*Math.random());
        $('#b7').animate({left:randleft,bottom:randtop},11000,function(){ loopSeven(); });
    }

    $('#balloons_flying').click(function(){
        var h=$(window).height();
        $('.balloon-border').animate({top: -Math.max(300, h*0.8)},6000);
		$('#b1,#b4,#b5,#b7').addClass('balloons-rotate-behaviour-one');
        $('#b2,#b3,#b6').addClass('balloons-rotate-behaviour-two');
		loopOne();
		loopTwo();
		loopThree();
		loopFour();
		loopFive();
		loopSix();
		loopSeven();
		
        $(this).fadeOut(200).promise().done(function(){
            $('#cake_fadein').fadeIn(300);
        });
	});	

    $('#cake_fadein').click(function(){
		$('.cake').fadeIn('slow');
        $(this).fadeOut(200).promise().done(function(){
            $('#light_candle').fadeIn(300);
        });
	});

	$('#light_candle').click(function(){
		$('.fuego').fadeIn('slow');
        $(this).fadeOut(200).promise().done(function(){
            $('#wish_message').fadeIn(300);
        });
	});

		
        $('#wish_message').click(function(){
            vw = $(window).width()/2;

            $('#b1,#b2,#b3,#b4,#b5,#b6,#b7').stop();
            $('#b1').attr('id','b11');
            $('#b2').attr('id','b22')
            $('#b3').attr('id','b33')
            $('#b4').attr('id','b44')
            $('#b5').attr('id','b55')
            $('#b6').attr('id','b66')
            $('#b7').attr('id','b77')

            layoutLettersResponsive();
            $('.balloons').css('opacity','0.9');
            $('.balloons h2').fadeIn(3000);
            $(this).fadeOut(200).promise().done(function(){
                $('#story').fadeIn(300);
            });
        });
	
	$('#story').click(function(){
		$(this).fadeOut('slow');
		$('.cake').fadeOut('fast').promise().done(function(){
			$('.message').fadeIn('slow');
		});
		
		var i;

        function msgLoop (i) {
			$("p:nth-child("+i+")").fadeOut('slow').delay(800).promise().done(function(){
			i=i+1;
			$("p:nth-child("+i+")").fadeIn('slow').delay(1000);
			if(i==50){
				$("p:nth-child(49)").fadeOut('slow').promise().done(function () {
                    $('.cake').fadeIn('fast');
				});
				
			}
			else{
				msgLoop(i);
			}			

		});
			// body...
		}
		
		msgLoop(0);
		
	});

    // envelope feature removed
});




//alert('hello');