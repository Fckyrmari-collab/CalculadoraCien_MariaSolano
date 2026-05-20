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

        // le decimos al navegador que escuche el teclado

        window.addEventListener("keydown", m.teclado);

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

                if (p.operaciones.innerHTML.trim() == "0") {

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

    },

    //implentacion de teclado
    teclado: function (evento) {
    document.addEventListener("keydown", m.teclado); 
    

        let tecla = evento.key; // Aqui guardamos que tecla se presiono
      
        
    let teclasValidas = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "+", "-", "*", "/", ".", "Enter", "Backspace", "Escape"];

    // Verificamos si la tecla presionada es una de las teclas válidas
    if (teclasValidas.includes(tecla)) {
        //Detenemos que la calculadora duplique 
        evento.preventDefault();
        evento.stopPropagation();
    }


    // si es un numero del 0 al 9 
     if (tecla >= "0" && tecla <= "9") {
        m.calculadora("numero", tecla);
     }

     // si es un signo de operaciones basicas
     else if (tecla == "+" || tecla == "-" || tecla == "*" || tecla == "/") {
        m.calculadora("signo", tecla);
     }

     //si es el punto decimal
        else if (tecla == ".") 
        { 
            m.calculadora("decimal", tecla);
        }

     // Si presiona Enter (para dar el resultado)
     else if (tecla == "Enter") {
        // evitamos que el enter haga cosas raras
        m.calculadora("igual", "=");
     }
     // Si presiona Backspace (retroceso) o escape (para borrar todo)
        else if (tecla == "Backspace" || tecla == "Escape") {
            m.borrarCalculadora();
        }
    }
}

//INICIAR
m.inicio();
