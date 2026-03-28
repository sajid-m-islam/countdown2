// Book component
export default function (props) {
    return (
        <div className="book-card">
            {/* display book information */}
            <p>
                {props.title}, {props.author}, {props.price}
            </p>
        </div>
    );
}
