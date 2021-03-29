let container = document.getElementById("app")
// let titulo = document.createElement("h1");
// titulo.innerHTML = "Título inserido via JavaScripto xD"
// container.appendChild(titulo)

function Contador(props) {
    
    // let numero = 0
    const  [numero, setNumero] = React.useState(0);

    function somar(){
        setNumero(numero + 1)
        console.log(numero)
    }

    function subtrair(){
        setNumero(numero + 1)
        console.log(numero)
    }

    return (
        <React.Fragment>
            <h1>{props.titulo}</h1>
            <h2>{numero}</h2>

            <button onClick={somar}>+</button>
            <button onClick={subtrair}>-</button>
        </React.Fragment>
    )
}

function App() {
    return (
        <React.Fragment>
            <h1>Vote na sua preferida</h1>
            <Contador titulo="Festa com amigos" />
            <Contador titulo="Netflix com @ namorad@" />
            <Contador titulo="Churrasco com a família" />
        </React.Fragment>

    )
}

ReactDOM.render(App(), container)