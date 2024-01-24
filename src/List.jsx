import PropTypes from 'prop-types';

function List(props) {
    
    const category = props.category;
    const itemList = props.items;

    const listItems = itemList.map((item) => 
    <li key={item.id}>{item.name}:&nbsp;<b>{item.cal}</b></li>);

    return <><h3 className="list-category">{category}</h3>
    <ol className="list-items">{listItems}</ol></>;
    //fruits.sort((a, b) => a.name.localeCompare(b.name)); - ALPHABETICAL
    //fruits.sort((a, b) => b.name.localeCompare(a.name)); - REVERSE ALPHABETICAL
    //fruits.sort((a, b) => a.cal - b.cal); - NUMERICAL
    //fruits.sort((a, b) => b.cal - a.cal); - REVERSE NUMERICAL

    //const lowCalFruits = fruits.filter(fruit => fruit.cal < 100)
    //const highCalFruits = fruits.filter(fruit => fruit.cal > 100)
};

List.propTypes = {
    category: PropTypes.string,
    items: PropTypes.arrayOf(PropTypes.shape(
            {id: PropTypes.number, 
            name: PropTypes.string,
            cal: PropTypes.number})),
}

List.defaultProps = {
    category: "Category",
    items: []
}
export default List;