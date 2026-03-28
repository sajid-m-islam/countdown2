export default function (props) {
    return (
        <div className="filter">
            <button onClick={() => props.onSelectGenre("all")}>
                All genres
            </button>

            {props.genres.map((genre) => (
                <button key={genre} onClick={() => props.onSelectGenre(genre)}>
                    {genre}
                </button>
            ))}
        </div>
    );
}
