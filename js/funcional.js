//crear las propiedades del objeto

let p= {
    teclas=document.querySelectorAll('#calculadora ul li'),
    accion = null,
    digito = null,
    operaciones = [document.querySelectorAll("#operaciones")],
    cantidad = false,
    resultado = null
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
    
    
    oprimirtecla: function(tecla){
        p.accion = tecla.target.getAttribute("class");
        m.calculadora(p.accion);


    },
    calculadora: function(accion)
    {
            switch(accion)
            {

                case "numero":
                    console.log("numero");
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
    }
    m.inicio();