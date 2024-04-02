import "./Container.css"

function Container(props) {
    return (
        <ul>{props.children}</ul>
    )
}   

export { Container }