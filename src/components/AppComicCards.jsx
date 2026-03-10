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

/* function AppComicCard(props) {
    return
} */