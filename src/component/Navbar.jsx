import React, {useContext} from "react";
import {NavLink} from "react-router-dom";
import {useSelector} from "react-redux";
import UserContext from "../context/UserContext";
import {Button} from "react-bootstrap";
import MyVerticallyCenteredModal from "./AddProduct";

const Navbar = () => {
  const userCtx = useContext(UserContext);
  const [modalShow, setModalShow] = React.useState(false);
  const state = useSelector(state => state.handleCart);
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-white py-3 shadow-sm">
        <div className="container">
          <NavLink className="navbar-brand fw-bold fs-4" to="/">
            FAKESTORE.
          </NavLink>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink className="nav-link active" aria-current="page" to="/">
                  Нүүр
                </NavLink>
              </li>
              <li className="nav-item">
                {/* <NavLink className="nav-link" to="/add-product">
                  Бараа нэмэх
                </NavLink> */}
                <Button variant="dark" onClick={() => setModalShow(true)}>
                  Бараа нэмэх
                </Button>

                <MyVerticallyCenteredModal
                  show={modalShow}
                  onHide={() => setModalShow(false)}
                />
              </li>
            </ul>
            <div className="buttons">
              {userCtx.state.token ? (
                <>
                  <span>
                    {userCtx.state.token}
                  </span>
                  <NavLink to="/cart" className="btn btn-outline-dark ms-2">
                    <i className="fa fa-shopping-cart me-1"></i> Сагс (
                    {state.length})
                  </NavLink>
                </>
              ) : (
                <>
                  <NavLink to="/login" className="btn btn-outline-dark">
                    <i className="fa fa-sign-in me-1"></i> Нэвтрэх
                  </NavLink>
                  <NavLink to="/cart" className="btn btn-outline-dark ms-2">
                    <i className="fa fa-shopping-cart me-1"></i> Сагс (
                    {state.length})
                  </NavLink>
                </>
              )}
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
