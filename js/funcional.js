//crear las propiedades del objeto

let p = {

    teclas: document.querySelectorAll('#calculadora ul li'),
    accion: null,
    digito: null,
    operaciones: document.querySelector("#operaciones"),
    cantisignos: 0,
    cantidecimales: false,
    resultado: false

}

//crear los metodos que tendra

let m = {

    inicio: function () {

        for (let i = 0; i < p.teclas.length; i++) {

            p.teclas[i].addEventListener("click", m.oprimirtecla);

        }

    },

    oprimirtecla: function (tecla) {

        p.accion = tecla.target.getAttribute("class");
        p.digito = tecla.target.innerHTML;

        console.log(p.digito);

        m.calculadora(p.accion, p.digito);

    },

    calculadora: function (accion, digito) {

        switch (accion) {

            //NUMEROS
            case "numero":

                p.cantisignos = 0;

                if (p.operaciones.innerHTML == "0") {

                    p.operaciones.innerHTML = digito;

                } else {

                    if (p.resultado) {

                        p.resultado = false;
                        p.operaciones.innerHTML = digito;

                    } else {

                        p.operaciones.innerHTML += digito;

                    }

                }

            break;


            //SIGNOS
            case "signo":

                p.cantidecimales = false;

                p.operaciones.innerHTML += digito;

            break;


            //DECIMAL
            case "decimal":

                if (!p.cantidecimales) {

                    p.operaciones.innerHTML += digito;
                    p.cantidecimales = true;

                }

            break;


            //IGUAL
            case "igual":

                p.operaciones.innerHTML = eval(p.operaciones.innerHTML);
                p.resultado = true;

            break;


            //FUNCIONES
            case "funcion":

                let valor = parseFloat(p.operaciones.innerHTML);

                switch (digito) {

                    //RAIZ CUADRADA
                    case "√":

                        p.operaciones.innerHTML = Math.sqrt(valor);

                    break;


                    //POTENCIA
                    case "x²":

                        p.operaciones.innerHTML = Math.pow(valor, 2);

                    break;


                    //COSENO
                    case "COS":

                        p.operaciones.innerHTML = Math.cos(valor * Math.PI / 180);

                    break;


                    //SENO
                    case "Sin":

                        p.operaciones.innerHTML = Math.sin(valor * Math.PI / 180);

                    break;

                }

                p.resultado = true;

            break;

        }

    },


    //BORRAR
    borrarCalculadora: function () {

        p.operaciones.innerHTML = "0";
        p.cantidecimales = false;
        p.resultado = false;

    }

}

//INICIAR
m.inicio();

//agregar el teclado entregar con trasibilidad del proyecto 

//implementacion de teclado
//implementcion de seno y Conseno
//estudiar el codigo por que me van a preguntar todo hacerlo muy bonito
//es para el viernes despues de las doce del dia