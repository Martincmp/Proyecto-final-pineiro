import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import './Item.css';

const Item = ({ product }) => {
  return (
    <Card className="carta" style={{ width: '12rem' }}>
      <Card.Img variant="top" src={product.pictureUrl} />
      <Card.Body className="fondo">
        <Card.Title>{product.title}</Card.Title>
        <Card.Text>
          $ {product.price}
        </Card.Text>
        <Card.Text>
          {product.description}
        </Card.Text>
          <Link to={`/item/${product.id}`}>
            <Button variant="secondary">
              Detalle
            </Button>
          </Link>
      </Card.Body>
    </Card>
  );
}
 
export default Item;