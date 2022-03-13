import React, {useState, useEffect} from "react";
import {Modal, Button, Form} from "react-bootstrap";

const initialState = {
  title: "",
  price: "",
  description: "",
  image: "",
  category: "",
};

const MyVerticallyCenteredModal = props => {
  const [product, setProduct] = useState(initialState);

  // useEffect(() => {
  //   const AddProduct = async () => {
  //     const response = await fetch("https://fakestoreapi.com/products", {
  //       method: "POST",
  //       body: JSON.stringify({
  //         title: product.title,
  //         price: product.price,
  //         description: product.description,
  //         image: product.image,
  //         category: product.category,
  //       }),
  //     })
  //       .then(res => res.json())
  //       .then(json => console.log(json));
  //   };
  //   AddProduct();
  // }, []);

  const addTitle = e => {
    setProduct({...product, title: e.target.value});
  };
  const addPrice = e => {
    setProduct({...product, price: e.target.value});
  };
  const addDescription = e => {
    setProduct({...product, description: e.target.value});
  };
  const addImage = e => {
    setProduct({...product, image: e.target.value});
  };
  const addCategory = e => {
    setProduct({...product, category: e.target.value});
    console.log("-----------", product.category);
  };
  async function Burtgeh() {
    const formData = new FormData();
    formData.append("title", product.title);
    formData.append("price", product.price);
    formData.append("description", product.description);
    formData.append("image", product.image);
    formData.append("category", product.category);
    let result = await fetch("https://fakestoreapi.com/products", {
      method: "POST",
      body: formData,
    })
      .then(res => res.json())
      .then(json => console.log(json));
    alert("hadgallaa");
    console.warn(formData);
    console.log(formData);
  }
  // const Burtgeh = async () => {
  //   const response = await fetch("https://fakestoreapi.com/products", {
  //     method: "POST",
  //     body: JSON.stringify({
  //       title: product.title,
  //       price: product.price,
  //       description: product.description,
  //       image: product.image,
  //       category: product.category,
  //     }),
  //   })
  //     .then(res => res.json())
  //     .then(json => console.log(json));
  // };
  return (
    <>
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Бараа нэмэх
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Барааны нэр</Form.Label>
              <Form.Control type="text" placeholder="Нэр" onChange={addTitle} />
              <Form.Label>Үнэ</Form.Label>
              <Form.Control type="text" placeholder="Үнэ" onChange={addPrice} />
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>Барааны тайлбар</Form.Label>
              <Form.Control as="textarea" rows={3} onChange={addDescription} />
              <Form.Label>Зураг</Form.Label>
              <Form.Control type="text" placeholder="URL" onChange={addImage} />
              <Form.Label>Төрөл</Form.Label>
              <Form.Control
                type="text"
                placeholder="Төрөл"
                onChange={addCategory}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          {/* <Button variant="outline-dark" onClick={props.onHide}>Болих</Button> */}
          <Button variant="dark" onClick={Burtgeh}>
            {" "}
            + Бараа нэмэх
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default MyVerticallyCenteredModal;
