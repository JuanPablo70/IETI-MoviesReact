export const MovieCard = (props) => {

    const {name, onCheckClick} = props;

    function handleClick() {
        console.log(`Checked ${name}`);
        onCheckClick(name);
    }

    return (
        <li>
            <article>
                <h3>{name}</h3>
                <button onClick={handleClick}>Check</button>
            </article>
        </li>
    );
}