import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import '../App.css'
import 'bootstrap/dist/css/bootstrap.min.css';


function Post() {

  const [val, setval] = useState([]);
  const [status, setstatus] = useState(false);

  useEffect(() => {
    const fetchUserData = () => {

      return fetch("https://jsonplaceholder.typicode.com/posts")
        .then(response => response.json())
        .then(data => setval(data))
    }
    fetchUserData();
    setstatus(true)
  }, [])


  if (status) {
    return (
      <>
          <div>
            <Navbar bg="light" expand="lg">
              <Container>
                <Navbar.Brand href="#">Navbar scroll</Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                  <Nav
                    className="me-auto my-2 my-lg-0"
                    style={{ maxHeight: '100px' }}
                    navbarScroll
                  >
                    <Nav.Link href="#action1">Home</Nav.Link>
                    <Nav.Link href="#action2">Link</Nav.Link>
                    <NavDropdown title="Link" id="navbarScrollingDropdown">
                      <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
                      <NavDropdown.Item href="#action4">
                        Another action
                      </NavDropdown.Item>
                      <NavDropdown.Divider />
                      <NavDropdown.Item href="#action5">
                        Something else here
                      </NavDropdown.Item>
                    </NavDropdown>
                    <Nav.Link href="#" disabled>
                      Link
                    </Nav.Link>
                  </Nav>
                  <Form className="d-flex">
                    <Form.Control
                      type="search"
                      placeholder="Search"
                      className="me-2"
                      aria-label="Search"
                    />
                    <Button variant="outline-success">Search</Button>
                  </Form>
                </Navbar.Collapse>
              </Container>
            </Navbar>
          </div>


        <Container>
          <div className='d-flex flex-wrap g-25 spacer'>
            {
              val.map((data, index) => {
                return (
                  <Card style={{ width: '22rem' }} key={index} className='text-center'>
                    <Card.Body>
                      <Card.Title className='mt-3'>{data.title}</Card.Title>
                      <Card.Subtitle className="mb-2 text-center mt-4">Id : {data.id}</Card.Subtitle>
                      <Card.Subtitle className="mb-2 text-center mt-1">UserId : {data.userId}</Card.Subtitle>
                      <Card.Text className='mt-4'>
                       {data.body}
                      </Card.Text>
                      <Card.Link href={`post/${data.id}`}>More Details</Card.Link>
                    </Card.Body>
                  </Card>
                )
              })
            }
          </div>
        </Container>
      </>
    )
  }
  else {
    <div className='loader'></div>
  }
}

export default Post;