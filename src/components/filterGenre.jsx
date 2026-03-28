// Filter by genre function
export default function (props) {
    return (
        <div>
            {/**
             Create button for all genres
             */}
            <button
                onClick={() => props.onSelectGenre("all")}
                className="filter-buttons"
            >
                All genres
            </button>

            {/* Create button for each genre */}
            {props.genres.map((genre) => (
                <button
                    key={genre}
                    onClick={() => props.onSelectGenre(genre)}
                    className="filter-buttons"
                >
                    {genre.charAt().toUpperCase() + genre.slice(1)}
                </button>
            ))}
            <h3>
                {props.filter.charAt().toUpperCase() + props.filter.slice(1)}
            </h3>
        </div>
    );
}
