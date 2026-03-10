/* DESTRUCTURING */
export default function AppComicCard({ comic }) {
    return (
        <div className="col">
            <div className="cardholder">
                <img className="comics" src={comic.thumb} alt={comic.series} />
            </div>
            <span className="text-white d-block mt-2">
                {comic.series.toUpperCase()}
            </span>
        </div>
    );
}

/* NO DESTRUCTURING */
/* export default function AppComicCard(props) {
    return (
        <div>
            <img src={props.comic.thumb} alt={props.comic.series} />
            <span>{props.comic.series}</span>
        </div>
    );
} */