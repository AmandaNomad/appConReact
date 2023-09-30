import Button from "./Boton"
import "./PanelDeBotones.css"

export default function PanelDeBotones({clickHandler}){

    const handleClick = nombreDeBoton => clickHandler(nombreDeBoton);

    return(
        <div className="component-button-panel">
            <div>
                <Button name="AC" clickHandler={handleClick} gray />
                <Button name="+/-" clickHandler={handleClick} gray />
                <Button name="%" clickHandler={handleClick} gray/>
                <Button name="/" clickHandler={handleClick} orange/>
            </div>
            <div>
                <Button name="7" clickHandler={handleClick} />
                <Button name="8" clickHandler={handleClick} />
                <Button name="9" clickHandler={handleClick} />
                <Button name="*" clickHandler={handleClick} orange/>
            </div>
            <div>
                <Button name="4" clickHandler={handleClick} />
                <Button name="5" clickHandler={handleClick} />
                <Button name="6" clickHandler={handleClick} />
                <Button name="-" clickHandler={handleClick} orange/>
            </div>
            <div>
                <Button name="1" clickHandler={handleClick} />
                <Button name="2" clickHandler={handleClick} />
                <Button name="3" clickHandler={handleClick} />
                <Button name="+" clickHandler={handleClick} orange/>
            </div>
            <div>
                <Button name="0" clickHandler={handleClick} wide/>
                <Button name="." clickHandler={handleClick} />
                <Button name="=" clickHandler={handleClick} orange/>
            </div>
        </div>
    )

}