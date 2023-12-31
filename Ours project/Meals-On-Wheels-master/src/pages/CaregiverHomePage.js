import { useContext, useEffect, useState } from "react";
import {
  Button,
  Carousel,
  Col,
  Container,
  Dropdown,
  DropdownButton,
  Row,
  Form,
  Modal,
  Table,
} from "react-bootstrap";
import {
  postPartnerOrderCompleteAPI,
} from "../api/partner-api";
import {
  getAdminOrderPendingAPI,
  getAdminOrderReadyToDeliverAPI,
  getAdminUserActiveAPI,
  getAdminUserAPI,
  getAdminUserCountAPI,
  getPartnersAPI,
  getRidersAPI,
  postAdminOrderDeliverAPI,
  postAdminOrderPrepareAPI,
} from "../api/admin-api";
import { getMenu, addMenu } from "../api/api";
import {
  carousel1,
  carousel2,
  carousel3,

} from "../assets";
import Layout from "../components/layout/Layout";
import AuthContext from "../context/auth-context";
import {
  menu_type,
  order_type,
  user_count,
  user_type,
} from "../context/context-type";

import "./css/CaregiverHomePage.css";

const CaregiverHomePage = () => {
  
  const { token, currentUser } = useContext(AuthContext);
  const [show, setShow] = useState(false);
  const [orderList, setOrderList] = useState([order_type]);
  const [deliverList, setDeliverList] = useState([order_type]);
  const [users, setUsers] = useState([user_type]);
  const [msg, setMsg] = useState("");
  const [riders, setRider] = useState([user_type]);
  const [paertners, setPartner] = useState([user_type]);
  const [userCount, setUserCount] = useState(user_count);
  const [menu, setMenu] = useState([menu_type]);
  const [index, setIndex] = useState(0);
  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  const [packageName, setPackageName] = useState("");
  const [mainCourse, setMainCourse] = useState("");
  const [salad, setSalad] = useState("");
  const [soup, setSoup] = useState("");
  const [dessert, setDessert] = useState("");
  const [drink, setDrink] = useState("");
  const [frozen, setFrozen] = useState("");
  const [image, setImage] = useState(null);
  const [status, setStatus] = useState("");

  const handleSubmit = async (event) => {
    setStatus(""); // Reset status
    //event.preventDefault();
    const formData = new FormData();

    formData.append("packageName", packageName);
    formData.append("mainCourse", mainCourse);
    formData.append("salad", salad);
    formData.append("soup", soup);
    formData.append("dessert", dessert);
    formData.append("drink", drink);
    formData.append("frozen", frozen);
    formData.append("packageImage", image);

    addMenu(token, formData);
    setShow(false);
  };


  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  function handlePrepare(order, user) {
    postAdminOrderPrepareAPI(token, order, user)
      .then((resp) => setMsg(resp.data.message))
      .catch((err) => console.log(err));
  }
  function handleDeliver(order, user) {
    postAdminOrderDeliverAPI(token, order, user)
      .then((resp) => setMsg(resp.data.message))
      .catch((err) => console.log(err));
  }

  function handleActive(id) {
    getAdminUserActiveAPI(token, id)
      .then((resp) => setMsg(resp.data.message))
      .catch((err) => console.log(err));
  }

  useEffect(() => {
    getAdminOrderPendingAPI(token)
      .then((resp) => setOrderList(resp.data))
      .catch((err) => console.log(err));

    getAdminOrderReadyToDeliverAPI(token)
      .then((resp) => setDeliverList(resp.data))
      .catch((err) => console.log(err));

    getPartnersAPI(token)
      .then((resp) => setPartner(resp.data))
      .catch((err) => console.log(err));

    getRidersAPI(token)
      .then((resp) => setRider(resp.data))
      .catch((err) => console.log(err));

    getAdminUserCountAPI(token)
      .then((resp) => setUserCount(resp.data))
      .catch((err) => console.log(err));

    getAdminUserAPI(token)
      .then((resp) => {
        resp.data = resp.data
          .filter((item) => {
            return item.active === false;
          })
          .map((item) => {
            setUsers(item);
            return item;
          });
        setUsers(resp.data);
      })
      .catch((err) => console.log(err));

    getMenu(token)
      .then((resp) => {
        setMenu(resp.data);
      })
      .catch((err) => {
        console.log(err);
      });
  },[token, msg]);
  
  return (
    <Layout>
      <Container>
        <h1 className="py-5 fw-bold">Hello, {currentUser.name}!</h1>

        <div className="mb-5">
          <Col sm={12}>
            <Carousel activeIndex={index} onSelect={handleSelect}>
              <Carousel.Item>
                <img
                  className="d-block w-100 carousel-member rounded"
                  src={carousel1}
                  alt="First slide"
                />
                <Carousel.Caption>
                  <h3>What is Healthy Diet</h3>
                  <p>
                    A healthy diet is an essential aspect of a well-balanced
                    lifestyle. It should include a variety of fruits,
                    vegetables, whole grains, lean protein sources, and healthy
                    fats. A healthy diet is not about strict limitations, but
                    rather about feeling good, having more energy, and keeping
                    your body healthy.
                  </p>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100 carousel-member rounded"
                  src={carousel2}
                  alt="Second slide"
                />

                <Carousel.Caption>
                  <h3>Benefit of Healthy Diet</h3>
                  <p>
                    Eating a healthy diet has numerous benefits for both
                    physical and mental health. Eating a diet rich in nutrients
                    also supports strong bones, healthy skin, and good eye
                    health. Additionally, a healthy diet can improve mental
                    clarity, increase energy levels, and boost mood. Moreover,
                    it can aid in digestion, reduce inflammation, and support a
                    strong immune system.
                  </p>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100 carousel-member rounded"
                  src={carousel3}
                  alt="Third slide"
                />

                <Carousel.Caption>
                  <h3>Our Meal Package</h3>
                  <p>
                    Our meal package include a balanced selection of nutritious
                    options, including whole grains, lean proteins, and plenty
                    of fresh fruits and vegetables. The menu also offer healthy
                    fats and limit processed foods, added sugars, and unhealthy
                    fats. We follow a strict regulation to make well-balanced,
                    portion-controlled, and meet specific dietary requirements,
                    such as low-sodium or gluten-free options.
                  </p>
                </Carousel.Caption>
              </Carousel.Item>
            </Carousel>
          </Col>
        </div>

        {/* Table Assign Partner Task */}
        <div className="pb-5">
          <Col size={12} md={12}>
            <div className="task pb-5">
              <h4 className="fw-bold title-caregiver">Assign Partner Task</h4>
              {/* Dont Delete This Comment */}
              {/* {msg && <Button onClick={() => setMsg("")}>{msg}</Button>} */}
              <div className="card">
                <div className="container">
                  <div className="task-header-div">
                    <Table
                      striped
                      className="text-white text-center driver my-3 task-header tbl-width col-width"
                    >
                      <thead className="driver-table">
                        <tr>
                          <th>No</th>
                          <th>Meals Request List</th>
                          <th>Status</th>
                          <th>Assigned Partner</th>
                          <th>Select Partner</th>
                        </tr>
                      </thead>
                    </Table>
                  </div>
                  <div className="task-tbl-div">
                    <Table
                      striped
                      className="text-white text-center driver my-3 task-tbl tbl-width col-width"
                    >
                      <tbody className="text-white">
                        {orderList.map((order, index) => (
                          <tr key={order.id}>
                            <td className="text-white">{index + 1}</td>
                            <td className="text-white">
                              {order.mealPackage.packageName}
                            </td>
                            <td className="text-white">
                              <div className="status text-white d-flex justify-content-center">
                               
                                <span className="fw-bold ms-3">
                                  {order.orderStatus}
                                </span>
                              </div>
                            </td>
                            <td className="text-white">
                              {order.preparedBy?.name}
                            </td>
                            {/* <td className='text-white'>{order.deliveredBy?.name}</td> */}
                            <td className="text-white">
                              <DropdownButton
                                title="Select"
                                variant="danger"
                                key="start"
                                id="dropdown-button-drop-start"
                                drop="start"
                                size="sm"
                              >
                                {paertners.map((partner) => (
                                  <Dropdown.Item
                                    href="#/action-1"
                                    onClick={() =>
                                      handlePrepare(order.id, partner.id)
                                    }
                                    key={partner.id}
                                  >
                                    {partner.name} {partner.status}
                                  </Dropdown.Item>
                                ))}
                              </DropdownButton>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </Table>
                  </div>
                </div>
              </div>
            </div>
          </Col>
          </div>
        <div>
          <Col size={12} md={12}>
            {/* Table Rider Task */}
            <div className="task pb-5">
              <h4 className="fw-bold title-caregiver">Assign Driver Task</h4>
              {/* Dont Delete This Comment */}
              {/* {msg && <Button onClick={() => setMsg("")}>{msg}</Button>} */}
              <div className="card">
                <div className="container">
                  <div className="task-header-div">
                    <Table
                      striped
                      className="text-white text-center driver my-3 task-header tbl-width col-width"
                    >
                      <thead className="driver-table">
                        <tr>
                          <th>No</th>
                          <th>Meals Request List</th>
                          <th>Status</th>
                          <th>Assigned Driver</th>
                          <th>Select Driver</th>
                        </tr>
                      </thead>
                    </Table>
                  </div>
                  <div className="task-tbl-div">
                    <Table
                      striped
                      className="text-white text-center driver my-3 task-tbl tbl-width col-width"
                    >
                      <tbody className="text-white">
                        {deliverList.map((order, index) => (
                          <tr key={order.id}>
                            <td className="text-white">{index + 1}</td>
                            <td className="text-white">
                              {order.mealPackage.packageName}
                            </td>
                            <td className="text-white">
                              <div className="status text-white d-flex justify-content-center">
                                
                                <span className="fw-bold ms-3">
                                  {order.orderStatus}
                                </span>
                              </div>
                            </td>
                            <td className="text-white">
                              {order.deliveredBy?.name}
                            </td>
                            {/* <td className='text-white'>{order.deliveredBy?.name}</td> */}
                            <td className="text-white">
                              <DropdownButton
                                title="Select"
                                variant="danger"
                                key="start"
                                id="dropdown-button-drop-start"
                                drop="start"
                                size="sm"
                              >
                                {riders.map((rider) => (
                                  <Dropdown.Item
                                    href="#/action-1"
                                    onClick={() =>
                                      handleDeliver(order.id, rider.id)
                                    }
                                    key={rider.id}
                                  >
                                    {rider.name} {rider.status}
                                  </Dropdown.Item>
                                ))}
                              </DropdownButton>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </Table>
                  </div>
                </div>
              </div>
            </div>
          </Col>

          <Col size={12} md={12}>
            {/* Card Driver Available */}
            <div className="pb-5">
              <h4 className="text-center fw-bold title-caregiver">
                Driver Availability
              </h4>
              <div className="card task-tbl-meal">
                <Table striped className="text-white text-center driver mb-3">
                  <thead className="driver-table">
                    <tr>
                      <th>no</th>
                      <th>Name</th>
                      <th>status</th>
                    </tr>
                  </thead>
                  <tbody className="text-white">
                    {riders.slice(0, 6).map((rider, index) => (
                      <tr key={rider.id}>
                        <td className="text-white">{index + 1}</td>
                        <td className="text-white">{rider.name}</td>
                        <td className="text-white">{rider.status}</td>
                      </tr>
                    ))}
                  </tbody>
                </Table>
              </div>
            </div>
          </Col>
        </div>
      </Container>
      <div
        className="circle-yellow-lg"
        style={{ bottom: "450px", left: "-100px" }}
      ></div>
      <div
        className="half-circle"
        style={{ bottom: "50px", right: "-50px" }}
      ></div>
    </Layout>
  );
};

export default CaregiverHomePage;
