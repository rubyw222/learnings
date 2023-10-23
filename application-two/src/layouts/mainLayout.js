import { Container } from "react-bootstrap";
import Header from "../components/header";
import { ToastContainer } from 'react-toastify';
// import 'react-toastify/dist/ReactTostify.css';

const MainLayout = (props) => {
  return (
    <Container className="mt-2 mb-2">
      <Header />
      {props.children}
      <ToastContainer/>
    </Container>
  )
}

export default MainLayout;