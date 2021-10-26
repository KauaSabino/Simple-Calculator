let num1, num2, sinal, equation;

function verific(clicked_id){
    if(num1 === undefined){
        num1 = parseFloat(clicked_id);
        document.getElementById("display").value = num1;
    }

    else if(sinal !== undefined & num2 === undefined){
        num2 = parseFloat(clicked_id);
        document.getElementById("display").value = num1 + sinal + num2;
    };

};
function verificsinal(clicked_id){

    if(num1 !== undefined & sinal === undefined){
        sinal = clicked_id;
        document.getElementById("display").value = num1 + sinal;
    }
};

function result(){
    if(sinal === "*"){
        equation = num1 * num2
        document.getElementById("display").value = equation;
    }
    else if(sinal === "/"){
        equation = num1 / num2
        document.getElementById("display").value = equation;
    }
    else if(sinal === "+"){
        equation = num1 + num2
        document.getElementById("display").value = equation;
    }
    else if(sinal === "-"){
        equation = num1 - num2
        document.getElementById("display").value = equation;
    }

};
function clean(){
    num1 = undefined;
    num2 = undefined;
    sinal = undefined;
    equation = undefined;
    document.getElementById("display").value = "";
}
;