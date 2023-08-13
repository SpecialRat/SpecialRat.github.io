// define function called average
function calculateAverage(){
    
    input1 = document.getElementById("input1").value;
    input2 = document.getElementById("input2").value;
    input3 = document.getElementById("input3").value;
    input4 = document.getElementById("input4").value;
    input5 = document.getElementById("input5").value;

    input1 = parseInt(input1);
    input2 = parseInt(input2);
    input3 = parseInt(input3);
    input4 = parseInt(input4);
    input5 = parseInt(input5);

    total = input1 + input2 + input3 + input4 + input5;
    document.getElementById("result").innerHTML = "Your average team SR is: " + total/5;
    // alert("The average is " + total/5);

};