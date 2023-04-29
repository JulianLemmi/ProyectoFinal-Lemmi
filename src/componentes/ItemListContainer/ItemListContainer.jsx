import './ItemListContainer.css';

const ItemListContainer = ({greeting}) => {
    return (
        <div>
            <h2 className='titulo'>{greeting}</h2>
        </div>
    )
}

export default ItemListContainer
