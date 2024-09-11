
import { useState } from "react";
const Titulo = ({goodDay}) => {
    const [boton,setButton] = useState('!')
    const mostrar = () => {
    setButton('. Each day is a present!')
}
    return (
        <section>
            <h1 className="color">Hello world, {goodDay}{boton} </h1>
            <button onClick={mostrar}>Click aqui</button>
        </section>
    );
};

export default Titulo;
