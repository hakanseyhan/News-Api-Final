import './card.styles.css'

const Card = ({ articles }) => {
    const { title, urlToImage, author, description } = articles;
    return (

        <div className='card-container '>
            <div className='card'>
                <div className='card-side front'>
                    <img className='card-image' src={urlToImage} alt={title} />
                    <span>Author</span><h2>{author}</h2>
                </div>
                <div className='card-side back'>
                    <div className='text'>
                        <h3>{title}</h3>
                        <p>{description}</p>

                    </div>
                </div>
            </div>



        </div>
    )
}


export default Card;