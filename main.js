let pndt1 = document.getElementById('pndt1');
    let pndt2 = document.getElementById('pndt2');
    let pndt3 = document.getElementById('pndt3');

    pndt1.addEventListener('click', pndt1Function);
    pndt2.addEventListener('click', pndt2Function);
    pndt3.addEventListener('click', pndt3Function);

    function pndt1Function(){
        window.alert("Button 1 was clicked!")
    }
    function pndt2Function(){
        window.alert("Button 2 was clicked!")
    }
    function pndt3Function(){
        window.alert("Button 3 was clicked!")
    }