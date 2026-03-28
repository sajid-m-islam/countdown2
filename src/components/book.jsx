export default function (props) {
    return (
        <div className="book-card">
            <h3>
                {props.title}, {props.author}, {props.price}
            </h3>
        </div>
    );
}
