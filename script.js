    let numberDiv = document.getElementById('numberDiv').innerHTML;
        let antall = 0;
        
    function addNumber() {
        antall = antall + 1;
        document.getElementById('numberDiv').innerHTML= antall;
    }

    function minusNumber() {
        antall = antall - 1;
        document.getElementById('numberDiv').innerHTML= antall;

    }