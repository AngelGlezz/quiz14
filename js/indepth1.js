
var ventana_alto = window.innerHeight ? window.innerHeight : $(window).height();
var ventana_ancho = $(window).width();
var disable=true;
var active_ace=false;
var input_text=false;
var input_text2=false;
var input_goles=false;
var input_radio=false;
var tenis_name="";
var respuestas_array = new Array();
var final_time = 0;
var aciertos = 0;


var maxTime = 30;
var time = maxTime;
var time_out=0;

$('#dial').knob({
  readOnly : true,
  thickness : 0.2,
  max : maxTime,
  width: 45,
  height: 45,
  inputColor: "#fff",
  fgColor: "#fff",
  bgColor: "rgb(48, 103, 165)",
  angleArc: "360",
  rotation: "anticlockwise",
  displayPrevious: true,
  fontWeight: 16,
  
});

var intervalo;

$("#indepth_contador_circle input").css("margin-top",0);

$("#indepth_boton_empezar").on("click",function(){
	$("#indepth_boton_empezar").click(false);
	 ventana_alto = window.innerHeight ? window.innerHeight : $(window).height();
	 
	 var data = {
				  "preguntas": [
				    {
				      "pregunta": "¿Cuál fue el resultado del último Clásico?",
				      "respuestas": [
				        {
				          "respuesta": "Real Madrid ganó 2-1",
				          "tipo": "true"
				        },
				        {
				          "respuesta": "Empate 1-1",
				          "tipo": "false"
				        },
				        {
				          "respuesta": "Barcelona ganó 4-0",
				          "tipo": "false"
				        },
				        {
				          "respuesta": "Barcelona ganó 3-1",
				          "tipo": "false"
				        }
				      ]
				    },
				    {
				      "pregunta": "¿Dónde se jugó el último Clásico?",
				      "respuestas": [
				        {
				          "respuesta": "Estadio Santiago Bernabéu",
				          "tipo": "false"
				        },
				        {
				          "respuesta": "Estadio Soldier Field",
				          "tipo": "false"
				        },
				        {
				          "respuesta": "Estadio Olímpico de Roma",
				          "tipo": "false"
				        },
				        {
				          "respuesta": "Estadio Camp Nou",
				          "tipo": "true"
				        }
				      ]
				    },
				    {
				      "pregunta": "¿Quién es el máximo goleador del Barcelona en Clásicos?",
				      "respuestas": [
				        {
				          "respuesta": "Johan Cruyff",
				          "tipo": "false"
				        },
				        {
				          "respuesta": "Lionel Messi",
				          "tipo": "true"
				        },
				        {
				          "respuesta": "Gerard Piqué",
				          "tipo": "false"
				        },
				        {
				          "respuesta": "Luis Suárez",
				          "tipo": "false"
				        }
				      ]
				    },
				    {
				      "pregunta": "¿Cuántos goles ha marcado Messi en la historia de los Clásicos?",
				      "respuestas": [
				        {
				          "respuesta": "21",
				          "tipo": "true"
				        },
				        {
				          "respuesta": "20",
				          "tipo": "false"
				        },
				        {
				          "respuesta": "14",
				          "tipo": "false"
				        },
				        {
				          "respuesta": "18",
				          "tipo": "false"
				        }
				      ]
				    },
				    {
				      "pregunta": "¿Quién es el máximo goleador del Real Madrid en Clásicos?",
				      "respuestas": [
				        {
				          "respuesta": "Santiago Bernabéu",
				          "tipo": "false"
				        },
				        {
				          "respuesta": "Hugo Sánchez",
				          "tipo": "false"
				        },
				        {
				          "respuesta": "Alfredo Di Stéfano",
				          "tipo": "true"
				        },
				        {
				          "respuesta": "Cristiano Ronaldo",
				          "tipo": "false"
				        }
				      ]
				    },
				    {
				      "pregunta": "¿Cuántos goles ha marcado CR7 en Clásicos?",
				      "respuestas": [
				        {
				          "respuesta": "16",
				          "tipo": "true"
				        },
				        {
				          "respuesta": "20",
				          "tipo": "false"
				        },
				        {
				          "respuesta": "19",
				          "tipo": "false"
				        },
				        {
				          "respuesta": "15",
				          "tipo": "false"
				        }
				      ]
				    },
				    {
				      "pregunta": "¿En qué temporada el Barça goleó al Madrid por 6-2?",
				      "respuestas": [
				        {
				          "respuesta": "2000-2001",
				          "tipo": "false"
				        },
				        {
				          "respuesta": "2009-2010",
				          "tipo": "false"
				        },
				        {
				          "respuesta": "2008-2009",
				          "tipo": "true"
				        },
				        {
				          "respuesta": "2005-2006",
				          "tipo": "false"
				        }
				      ]
				    },
				    {
				      "pregunta": "¿A qué jugador ex-Barça le lanzaron una cabeza de cerdo durante un Clásico en el Camp Nou?",
				      "respuestas": [
				        {
				          "respuesta": "Schuster",
				          "tipo": "false"
				        },
				        {
				          "respuesta": "Figo",
				          "tipo": "true"
				        },
				        {
				          "respuesta": "Laudrup",
				          "tipo": "false"
				        },
				        {
				          "respuesta": "Ronaldo",
				          "tipo": "false"
				        }
				      ]
				    },
				    {
				      "pregunta": "¿Qué personaje figura del Barça es considerado a la fecha un “traidor” por la afición del Madrid?",
				      "respuestas": [
				        {
				          "respuesta": "Luis Enrique",
				          "tipo": "true"
				        },
				        {
				          "respuesta": "Schuster",
				          "tipo": "false"
				        },
				        {
				          "respuesta": "Ronaldo",
				          "tipo": "false"
				        },
				        {
				          "respuesta": "Luis Suárez",
				          "tipo": "false"
				        }
				      ]
				    },
				    {
				      "pregunta": "¿Qué jugador actual del Barça confesó cuando era niño ser hincha del Madrid?",
				      "respuestas": [
				        {
				          "respuesta": "Lionel Messi",
				          "tipo": "false"
				        },
				        {
				          "respuesta": "Luis Suárez",
				          "tipo": "false"
				        },
				        {
				          "respuesta": "Andrés Iniesta",
				          "tipo": "true"
				        },
				        {
				          "respuesta": "Neymar",
				          "tipo": "false"
				        }
				      ]
				    },
				    {
				      "pregunta": "¿Cuál fue el resultado del último partido en Champions que jugaron culés y merengues?",
				      "respuestas": [
				        {
				          "respuesta": "Barcelona ganó 2-1",
				          "tipo": "true"
				        },
				        {
				          "respuesta": "Real Madrid ganó 2-0",
				          "tipo": "false"
				        },
				        {
				          "respuesta": "Empate 2-2",
				          "tipo": "false"
				        },
				        {
				          "respuesta": "Empate 1-1",
				          "tipo": "false"
				        }
				      ]
				    },
				    {
				      "pregunta": "¿Quién era el entrenador del Barcelona en la famosa goleada de 6-2 al Madrid?",
				      "respuestas": [
				        {
				          "respuesta": "Pep Guardiola",
				          "tipo": "true"
				        },
				        {
				          "respuesta": "Tito Vilanova",
				          "tipo": "false"
				        },
				        {
				          "respuesta": "Luis Enrique",
				          "tipo": "false"
				        },
				        {
				          "respuesta": "Bobby Robson",
				          "tipo": "false"
				        }
				      ]
				    },
				    {
				      "pregunta": "¿Qué famoso personaje fue traductor y auxiliar en el Barça antes de dirigir al Real Madrid?",
				      "respuestas": [
				        {
				          "respuesta": "Zinedine Zidane",
				          "tipo": "false"
				        },
				        {
				          "respuesta": "Louis van Gaal",
				          "tipo": "false"
				        },
				        {
				          "respuesta": "José Mourinho",
				          "tipo": "true"
				        },
				        {
				          "respuesta": "Vicente del Bosque",
				          "tipo": "false"
				        }
				      ]
				    },
				    {
				      "pregunta": "¿Cuántos goles ha marcado Luis Suárez con el Barça al Madrid?",
				      "respuestas": [
				        {
				          "respuesta": "Ninguno",
				          "tipo": "false"
				        },
				        {
				          "respuesta": "Dos",
				          "tipo": "false"
				        },
				        {
				          "respuesta": "Ocho",
				          "tipo": "true"
				        },
				        {
				          "respuesta": "Seis",
				          "tipo": "false"
				        }
				      ]
				    },
				    {
				      "pregunta": "¿Quién ha disputado más Clásicos como jugador del Barça?",
				      "respuestas": [
				        {
				          "respuesta": "Andrés Iniesta",
				          "tipo": "false"
				        },
				        {
				          "respuesta": "Xavi",
				          "tipo": "true"
				        },
				        {
				          "respuesta": "Luis Enrique",
				          "tipo": "false"
				        },
				        {
				          "respuesta": "Carles Puyol",
				          "tipo": "false"
				        }
				      ]
				    },
				    {
				      "pregunta": "¿Quién ha disputado más Clásicos como jugador del Real Madrid?",
				      "respuestas": [
				        {
				          "respuesta": "Manolo Sanchís",
				          "tipo": "true"
				        },
				        {
				          "respuesta": "Raúl",
				          "tipo": "false"
				        },
				        {
				          "respuesta": "Cristiano Ronaldo",
				          "tipo": "false"
				        },
				        {
				          "respuesta": "Zidane",
				          "tipo": "false"
				        }
				      ]
				    },
				    {
				      "pregunta": "¿Quién marcó el gol del Barcelona en el último Clásico?",
				      "respuestas": [
				        {
				          "respuesta": "Lionel Messi",
				          "tipo": "false"
				        },
				        {
				          "respuesta": "Luis Suárez",
				          "tipo": "false"
				        },
				        {
				          "respuesta": "Neymar",
				          "tipo": "false"
				        },
				        {
				          "respuesta": "Gerard Piqué",
				          "tipo": "true"
				        }
				      ]
				    },
				    {
				      "pregunta": "¿Qué jugador dio el triunfo al Real Madrid en el último Clásico?",
				      "respuestas": [
				        {
				          "respuesta": "Cristiano Ronaldo",
				          "tipo": "true"
				        },
				        {
				          "respuesta": "Sergio Ramos",
				          "tipo": "false"
				        },
				        {
				          "respuesta": "Álvaro Morata",
				          "tipo": "false"
				        },
				        {
				          "respuesta": "Gareth Bale",
				          "tipo": "false"
				        }
				      ]
				    },
				    {
				      "pregunta": "¿Quién fue el portero titular del Barcelona en el último Clásico?",
				      "respuestas": [
				        {
				          "respuesta": "Ter Stegen",
				          "tipo": "false"
				        },
				        {
				          "respuesta": "Claudio Bravo",
				          "tipo": "true"
				        },
				        {
				          "respuesta": "Víctor Valdés",
				          "tipo": "false"
				        },
				        {
				          "respuesta": "Andoni Zubizarreta",
				          "tipo": "false"
				        }
				      ]
				    },
				    {
				      "pregunta": "Quién es el actual técnico del Real Madrid?",
				      "respuestas": [
				        {
				          "respuesta": "Zinedine Zidane",
				          "tipo": "true"
				        },
				        {
				          "respuesta": "José Mourinho",
				          "tipo": "false"
				        },
				        {
				          "respuesta": "Vicente del Bosque",
				          "tipo": "false"
				        },
				        {
				          "respuesta": "Paco Jémez",
				          "tipo": "false"
				        }
				      ]
				    }
				  ]
				};
		  preguntas=data.preguntas;
		 
		 $("#indepth_pregunta_cont").html("");
		 
		 $.each(preguntas, function( i, item ) {
			 
			var div=' <div class="indepth_pregunta_item"><div class="indepth_pregunta">'+(i+1)+'- '+item.pregunta+'</div><div class="indepth_pregunta_main"><div class="indepth_pregunta_img"><img src="'+urlIndepth+'images/preguntas/'+(i+1)+'.jpg" /></div><div class="indepth_respuestas_cont" num="'+i+'">';
				
			var div_items="";
			$.each(item.respuestas, function( j, items ) {
				div_items+='<div class="indepth_respuesta_item active" num="'+j+'">'+items.respuesta+'</div>';
			});						
										
			var div_fin='</div></div></div>';
			 
			 $("#indepth_pregunta_cont").append(div+div_items+div_fin);			 
		 });
		 
		 $("#indepth_page1").css({
			"top":ventana_alto-100,
			"visibility":"visible",
			"height": "auto"
		});
		
		$("#nav-bar-stats,#top-bar-wrapper,#body-wrapper").hide();
		
		$("#indepth_page1").show();
		
		$("#indepth_page1").animate({
			top: 0
		},2000, function(){
			$("#indepth_tiempo_cont").css("position","fixed");
			intervalo=setInterval(function() {
			  if(time<=0){
			  	clearInterval(intervalo);
			  	finish_test();
			 }	
			  time--;
			  $('#dial')
			        .val(time)
			        .trigger('change');
			}, 1000);
		});
		
		$(document).on("click",".indepth_respuesta_item",function(){
				
			var respuesta_cont = $(this).parent();
			var pregunta_num = respuesta_cont.attr("num");
			var respuesta_num = $(this).attr("num");
			var pregunta_obj = preguntas[pregunta_num];
			var respuesta_obj = pregunta_obj.respuestas[respuesta_num];
			
			tipo= (respuesta_obj.tipo === "true");
			
			if(tipo){
				$(this).addClass("bien");
				respuestas_array[pregunta_num]=true;
			}else{
				$(this).addClass("mal");
				respuestas_array[pregunta_num]=false;
			}
			
			respuesta_cont.find('.indepth_respuesta_item').removeClass("active").addClass("disable");
			respuesta_cont.find('.indepth_respuesta_item').click(false);
						
						
						
			if(preguntas.length == respuestas_array.length){
				final_time = time;
				respuestas_num=0;
				
					$.each(respuestas_array, function( i, item ) {
					  	if(item!=undefined)
					  		respuestas_num++;
				  	});
				  	
				 console.log("respuestas " + respuestas_num);
				 console.log(respuestas_num);
				
				if(respuestas_num == preguntas.length){
					clearInterval(intervalo);
					window.setTimeout(finish_test, 700);
				}
				
			}
			
		});
		
		
});


$('#dial')
        .val(99)
        .trigger('change');


function finish_test(){
	
	 ventana_alto = window.innerHeight ? window.innerHeight : $(window).height();;
	var ventana_ancho = $(window).width();
	
	
	
	$("#indepth_resultados").css({
		"visibility": "visible",
		"position":"fixed",
		"top": 0,
		"left": -ventana_ancho
	});
  	
  	$("#indepth_resultados").animate({
	  	"left": 0
  	},2000, function(){
	  	$("html, body, #indepth_page1").css("overflow","hidden");
  	});

  	$.each(respuestas_array, function( i, item ) {
	  	if(item){
		  	aciertos++;
	  	}
  	});
  	
  	aficionado="";
  	msg="";

  	if(aciertos<=5){
	  	aficionado="";
	  	msg="te subes al tren, pero se nota a leguas que eres villamelón";
  	}
  	
  	if(aciertos<=10 && aciertos >= 6){
	  	aficionado="";
	  	msg="desempolvas tu jersey cuando los tuyos llegan a las etapas finales de Champions ";
  	}

  	if(aciertos>=11 && aciertos<=15){
	  	aficionado="";
	  	msg="¡Wow! Eres un verdadero fanático. Pocos saben tanto del Clásico como tú";
  	}

  	if(aciertos>=16 && aciertos<=20){
	  	aficionado="";
	  	msg="eres una eminencia. Te las sabes de todas todas… ¡bien podrías pasar por europeo!";
  	}
  	
  	$("#indepth_aciertos").html(aciertos);
  	$("#indepth_aciertos_text").html(msg);
  	$("#tipo_aficionado").html( aficionado );
  	
}



$('.indepth_num').keydown(function(event) {
	// Allow special chars + arrows 
	if (event.keyCode == 46 || event.keyCode == 8 || event.keyCode == 9  || event.keyCode == 27 || event.keyCode == 13 || (event.keyCode == 65 && event.ctrlKey === true)  || (event.keyCode >= 35 && event.keyCode <= 39)){
	        return;
	}else {
	    // If it's not a number stop the keypress
	    if (event.shiftKey || (event.keyCode < 48 || event.keyCode > 57) && (event.keyCode < 96 || event.keyCode > 105 )) {
	        event.preventDefault(); 
	    }   
	}

});

$('.idepth_marcador, .idepth_marcador2').keydown(function(event) {
	// Allow special chars + arrows 
	if (event.keyCode == 46 || event.keyCode == 8 || event.keyCode == 9  || event.keyCode == 27 || event.keyCode == 13 || (event.keyCode == 65 && event.ctrlKey === true)  || (event.keyCode >= 35 && event.keyCode <= 39)){
	        return;
	}else {
	    // If it's not a number stop the keypress
	    if (event.shiftKey || (event.keyCode < 48 || event.keyCode > 57) && (event.keyCode < 96 || event.keyCode > 105 )) {
	        event.preventDefault(); 
	    }   
	}
});


$('.indepth_num').keyup(function(event) {
	
	if(parseInt($(".indepth_num").val())>0){
		input_goles=true;
	}else{
		input_goles=false;
	}
	indepth_comprobar();

});


$('.idepth_marcador').keyup(function(event) {
	if($(this).val()!="" ){
		input_text=true;
	}else{
		input_text=false;
	}
	
	indepth_comprobar();
});

$('.idepth_marcador2').keyup(function(event) {
	if($(this).val()!="" ){
		input_text2=true;
	}else{
		input_text2=false;
	}
	
	indepth_comprobar();
});


var indepth_comprobar = function(){
	console.log(input_text + " - " + input_text2 + " - " + input_goles);
	
	if(input_text && input_text2 && input_goles){
		$(".indepth_boton").removeClass("disable");
		disable=false;
	}else{
		$(".indepth_boton").addClass("disable");
		disable=true;
	}
	
	console.log(disable);
}


var indepth_sizeAdjust = function(firstTime){
	$(".indepth_page").each(function(){
		if($(this).attr("resize") == "true"){
			var h = parseInt($(this).width(),10) / $(this).attr("width") * $(this).attr("height");
			$(this).css("height", h + "px");
		}else if(firstTime && $(this).attr("resize") == "false"){
			$(".indepth_background", $(this)).css("min-width", $(this).attr("width") + "px");
			$(this).css("height", $(this).attr("height") + "px");
		}
	})
}

var indepth_preloadImgs = function(){
	$("img[over]").each(function(){
		$(this).attr("out", $(this).attr("src"));
		$(this).on("mouseenter", function(){
			$(this).attr("src", $(this).attr("over"));
		}).on("mouseleave", function(){
			$(this).attr("src", $(this).attr("out"));
		}).css("cursor", "pointer");

		var tmp = $("<img/>");
		tmp.attr("src", $(this).attr("over"));
		tmp.css({"position":"absolute", "top":"-9999px", "left":"-9999px"})
		tmp.appendTo("body");
	});
}

   
 function loadDisqus(source, identifier, url) {
if (window.DISQUS) {
   jQuery('#disqus_thread').insertAfter(source);
   /** if Disqus exists, call it's reset method with new parameters **/

    DISQUS.reset({
  reload: true,
  config: function () { 
   this.page.identifier = identifier.toString();    //important to convert it to string
   this.page.url = url;
  }
 });
} else {
//insert a wrapper in HTML after the relevant "show comments" link
	source.append('<div id="disqus_thread"></div>');
   //jQuery('<div id="disqus_thread"></div>').insertAfter(source);
   disqus_identifier = identifier; //set the identifier argument
   disqus_url = url; //set the permalink argument
   disqus_per_page=3;
   //append the Disqus embed script to HTML
   var dsq = document.createElement('script'); dsq.type = 'text/javascript'; dsq.async = true;
   dsq.src = 'http://' + disqus_shortname + '.disqus.com/embed.js';
   jQuery('head').append(dsq);
}
};


$(document).ready(function(){
	indepth_sizeAdjust(true);
	indepth_preloadImgs();
	ventana_alto = window.innerHeight ? window.innerHeight : $(window).height();
	ventana_ancho = $(window).width();
	
	$("#indepth_cover").css({
		"width": (ventana_ancho)+"px",
		"height": (ventana_alto-100)+"px"	
	})
		
	$("#indepth_resultados").css({
		"width":ventana_ancho+"px",
		"height":ventana_alto+"px"
	});

$("#indepth_twittear").click(function(){

	if(!disable){

		
		var text = encodeURIComponent("Mi predicción es: Barcelona "+$("input[name=goleador]").val()+"-"+$("input[name=goleador2]").val())+ " Real Madrid primer gol al minuto "+$("input[name=goles_anotados]").val()+" @juanfutroll";
		var url = encodeURIComponent("http://juanfutbol.com/indepth/pizzafut-el-clasico");
		window.open("https://twitter.com/share?text="+text+"&hashtags=pizzafut&url="+url,"","width=500, height=300");

	} else {
		
		
		
	}
	
	});
});
	
	$(document).on("click", "#indepth_button_ver" ,function(){
		$.fn.fullpage.moveSectionDown();
	});

$(window).on("resize", function(){

	ventana_alto = window.innerHeight ? window.innerHeight : $(window).height();
	ventana_ancho = $(window).width();

	$("#indepth_cover").css({
		"width": (ventana_ancho)+"px",
		"height": (ventana_alto-100)+"px"	
	})
		
	    $("#indepth_resultados").css({
			"width":ventana_ancho+"px",
			"height":ventana_alto+"px"
		});
});


