import Card from "react-bootstrap/Card";
import sample from "../../images/qwe.jpg";

import "./card.css";

function Product() {
  return ["Dark"].map((variant, idx) => (
    <Card
      bg={variant.toLowerCase()}
      key={idx}
      text={variant.toLowerCase() === "light" ? "dark" : "white"}
      className="mb-2 card"
    >
      <Card.Img variant="top" src={sample} />
      <Card.Body>
        <Card.Title>product name</Card.Title>
        <Card.Text>samll pref.</Card.Text>
        <Card.Link href="#">Add to card</Card.Link>
      </Card.Body>
    </Card>
  ));
}

export default Product;
