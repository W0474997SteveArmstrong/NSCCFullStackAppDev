
import './Helloworld.css'
function Helloworld(props){
    return (
        <>
        <span>{props.greeting}   </span>
        <span>{props.greeting2}</span>
        <div className="Helloworld">Hello World</div>
        </>
    );
}

export default Helloworld;