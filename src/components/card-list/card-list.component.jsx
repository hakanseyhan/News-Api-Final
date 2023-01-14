import Card from '../card/card.component';
import './card-list.style.css';
const CardList = ({ filteredProducts }) => (
    <div className='card-list'>
    {
        filteredProducts.map((data) => {
            const { id } = data;
            return <Card articles={data} key={id} />
        })
    }
</div>
)

export default CardList;