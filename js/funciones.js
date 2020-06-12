var option_global;

function seleccionarOvni(option) {
  option_global = option;

  document.getElementById("escenario").style.animationPlayState = "running";
  document.getElementById("dado").style.animationPlayState = "running";
  document.getElementById("dado").style.opacity = "1";
  document.getElementById("contenedor-Preguntas").style.animationPlayState =
    "running";
  document.getElementById("pregunta").style.animationPlayState = "running";
  document.getElementById("respuestas").style.animationPlayState = "running";
  document.getElementById("input").style.animationPlayState = "running";
  document.getElementById("Contador_respuestas").style.animationPlayState =
    "running";
  document.getElementById("user").style.animationPlayState = "running";

  document.getElementById("base_1").remove();
  document.getElementById("base_2").remove();
  document.getElementById("base_3").remove();

  document.getElementById(option).style.top = "390px";
  document.getElementById(option).style.left = "60px";

  if (option == "ovni_1") {
    document.getElementById("ovni_2").remove();
    document.getElementById("ovni_3").remove();
  } else if (option == "ovni_2") {
    document.getElementById("ovni_1").remove();
    document.getElementById("ovni_3").remove();
  } else if (option == "ovni_3") {
    document.getElementById("ovni_1").remove();
    document.getElementById("ovni_2").remove();
  }
}

var posicion_actual = 0;
var x = new Array(
  "81",
  "124",
  "188",
  "221",
  "213",
  "162",
  "99",
  "62",
  "69",
  "115",
  "204",
  "270",
  "296",
  "291",
  "266",
  "273",
  "333",
  "387",
  "345",
  "379",
  "439",
  "450",
  "466",
  "523",
  "587",
  "645",
  "642",
  "602",
  "536",
  "461",
  "405",
  "385",
  "423",
  "495",
  "551"
);

var y = new Array(
  "328",
  "393",
  "385",
  "345",
  "302",
  "267",
  "236",
  "179",
  "118",
  "86",
  "58",
  "90",
  "139",
  "196",
  "258",
  "320",
  "356",
  "332",
  "273",
  "220",
  "236",
  "295",
  "362",
  "392",
  "390",
  "340",
  "270",
  "230",
  "208",
  "189",
  "162",
  "107",
  "61",
  "48",
  "80"
);

function cambiarDado() {
  var da = Math.floor(Math.random() * 6 + 1);
  var c = 1;
  var cambiar_dado = setInterval(function() {
    document.getElementById("dado").style.backgroundImage =
      "url(img/d" + c + ".png)";

    if (c == 6) {
      clearInterval(cambiar_dado);
      document.getElementById("dado").style.backgroundImage =
        "url(img/d" + da + ".png)";

      var c_mover = 1;
      var mover_ovni = setInterval(function() {
        posicion_actual++;
        document.getElementById(option_global).style.left =
          x[posicion_actual] + "px";
        document.getElementById(option_global).style.top =
          y[posicion_actual] + "px";

        if (c_mover == da) {
          clearInterval(mover_ovni);
        }
        c_mover++;
      }, 1000);
    }
    c++;
  }, 200);
  jugar();
}

function coordenada(event) {
  var x1 = event.clientX - 45;
  var y1 = event.clientY - 29;

  document.getElementById("coordenada").innerHTML =
    " x " + x1 + " <br> y " + y1;
}

var preguntas = [
  "Quien descubrio America",
  "Primera programadora de la Historia",
  "¿Cuáles son los sabores primarios?",
  "¿Cuál es el río más largo del mundo?",
  "¿cual es el cultivo que mas producen en colombia?",
  "La ciencia que trata del cultivo de los bosques se le denomina",
  "¿Qué rama de la Biología estudia los animales?",
  "¿Cuántas patas tiene la araña?",
  "¿Cómo se llama el animal más rápido del mundo?",
  "¿Cuál es el único mamífero capaz de volar?"
];

var respuestas = [
  ["Colon", "Juan Carlos II", "Cristian Nodal"],
  ["Camila", "Ada lovelace", "Toña"],
  [
    "Dulce, amargo, ácido, salado",
    "salado,amargo,picante",
    "amargo,dulce,frio"
  ],
  ["nilo", "Amozonas", "Catatumbo"],
  ["Cafe", "Platano", "Coca"],
  ["Silvicultura", "Agronomía", "agricultura"],
  ["zoología", "Botánica", "Ecología"],
  ["8", "6", "4"],
  ["guepardo", "venado", "la llena"],
  ["murciélago", "ardilla", "mono"]
];

var indice_respuesta_correcta;

function jugar() {
  var indice_aleatorio = Math.floor(Math.random() * preguntas.length);
  var respuestas_posibles = respuestas[indice_aleatorio];

  var posiciones = [0, 1, 2];
  var respuestas_reordenadas = [];

  var ya_entro = false;

  for (i in respuestas_posibles) {
    var posicion_aleatoria = Math.floor(Math.random() * posiciones.length);
    if (posicion_aleatoria == 0 && ya_entro == false) {
      indice_respuesta_correcta = i;
      ya_entro = true;
    }
    respuestas_reordenadas[i] =
      respuestas_posibles[posiciones[posicion_aleatoria]];
    posiciones.splice(posicion_aleatoria, 1);
  }

  var txt_respuestas = "";
  for (i in respuestas_reordenadas) {
    txt_respuestas +=
      '<input type="radio" id="Boton" name="pp" value="' +
      i +
      '">      <label>' +
      respuestas_reordenadas[i] +
      "</label><br>";
  }
  document.getElementById("respuestas").innerHTML = txt_respuestas;
  document.getElementById("pregunta").innerHTML = preguntas[indice_aleatorio];
}
var score_correcto = 0;
var score_Incorrecta = 0;

function comprobar() {
  var respuesta = $("input[type=radio]:checked").val();
  if (respuesta == indice_respuesta_correcta) {
    score_correcto++;
    document.getElementById("correcto").innerHTML = score_correcto;
  } else {
    score_Incorrecta++;
    document.getElementById("Incorrecta").innerHTML = score_Incorrecta;
  }
}
