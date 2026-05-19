//crear las propiedades del objeto

let p= {
    teclas : document.querySelectorAll('#calculadora ul li'),
    accion : null,
    digito : null,
    operaciones : document.querySelector("#operaciones"),
    cantisignos : 0,
    cantidecimales : false,
    resultado : false,
}

//crear los metodos que tendra
let m = {
    inicio: function()
    {
        for(let i=0; i<p.teclas.length; i++)
        {
            p.teclas[i].addEventListener("click", m.oprimirtecla);
        }


    },   
    
    oprimirtecla: function(tecla)
    {

        p.accion = tecla.target.getAttribute("class");
        p.digito = tecla.target.innerHTML;
        console.log(p.digito);
    
        m.calculadora(p.accion,p.digito);



    },

    calculadora: function(accion, digito)
    {
            switch(accion)
            {

                case "numero":
                    console.log("numero");
                    //console.log(numero);

                    if(p.operaciones.innerHTML == "0")
                    {
                        p.operaciones.innerHTML = digito;
                    }
                    else
                    {
                        p.operaciones.innerHTML += digito;
                    }

                break;

                case "signo":
                    console.log("signo");
                break;
                case "decimal":
                    console.log("decimal");
                break;

                case "igual":
                    console.log("igual");
                break;
                
            }
                
    },

    borrarCalculadora: function(){
    p.operaciones.innerHTML = "0";
}
    
}
    m.inicio();