import './ItemListContainer.css';

function ItemListContainer({greeting}) {
  return (
    <div className="list__container">
      <h2>{greeting}</h2>
    </div>
  );
}

export default ItemListContainer;