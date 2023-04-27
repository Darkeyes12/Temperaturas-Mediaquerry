function operacionFcn() {
    num1 = document.getElementById("numberOne").value;
    opcion = document.getElementById("ListBox1").value;

    num1 = parseFloat(num1);
    opcion = parseFloat(opcion);
    resultado = 0;
    if(opcion==1){
        resultado = "Ingrese una opcion";                       
        document.getElementById("resultado").innerHTML = resultado;
    }
    else{
        switch(true){
            case opcion == 2:
                resultado = (num1*1.8)+32;           
            break;
            case opcion == 3:
                resultado = (num1-32)/1.8;            
            break;
            case opcion == 4:
                resultado = num1 + 273.15;            
            break;
            case opcion == 5:
                resultado = num1 - 273.15;            
            break;
            case opcion == 6:
                resultado = ((num1 - 273.15)*1.8)+32;            
            break;
            case opcion == 7:
                resultado = ((num1-32)/1.8)+273.15;            
            break;
        }
        document.getElementById("resultado").innerHTML = parseFloat(resultado).toFixed(2) + " grados";
    }

    
}

