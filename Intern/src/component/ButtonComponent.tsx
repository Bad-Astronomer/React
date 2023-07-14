import './css/ButtonComponent.css'

interface ButtonProps{
    text?: any;
    onClickFunction?: any;
}

const ButtonComponent = ({text, onClickFunction} : ButtonProps) => {
    if(!text) text = "Button";

    return (
        <div className="primary-button" onClick={onClickFunction}>
            {text}
        </div>
    )
}

export default ButtonComponent
