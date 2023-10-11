export const MovieCard = (props) => {

    const {name, onFavouriteClick, isFavourite} = props;

    function handleClick() {
      onFavouriteClick(name);
    }

    return (
      <li>
        <article>
          <h3>{name}</h3>
          <label>
            <button onClick={handleClick}>{isFavourite ? "❤️" : "♡"}</button>
          </label>
        </article>
      </li>
    );
}