// make button component
const Button = (props) => {
    return (
        <button className="button" onClick={props.onClick}>
            {props.text}
        </button>
    );
}
