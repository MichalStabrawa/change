function CalculatorSection() {
    return ( <
        div >

        <
        div className = "calc_wrapper" >
        <
        input type = "number"
        id = "addMoney" / > zł <
        select id = "getPrice" > < option id = "option1"
        value = "10" > EURO < /option></select >

        <
        ButtonNew id = "btn-show" / >

        <
        button id = "sprawdzam" > + < /button>

        <
        div id = "changeMoney" > Przelicz < /div> <
        /div>

        <
        div id = "tabelka" >
        <
        /div>

        <
        div id = "tabelka2" >
        <
        tr > < th > Kraj < /th> <
        th > Kod < /th> <
        th > Kurs < /th></tr >
        <
        /div> <
        /div>
    );
}
