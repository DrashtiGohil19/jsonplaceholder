import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css'
import Card from 'react-bootstrap/Card';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Container from 'react-bootstrap/esm/Container';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';


function Spost() {
    const [val, setval] = useState([]);
    const [status, setstatus] = useState(false);
    const [post, setpost] = useState([]);

    const params = useParams();

    const searchHandler = (e) =>{
        e.preventDefault();
        let elm = e.target.search.value;
    
        const fetchSerchData = () => {

            return fetch(`https://jsonplaceholder.typicode.com/comments?postId=${elm}`)
                .then(response => response.json())
                .then(data => setpost(data))
        }
        const fetchUserData = () => {

            return fetch(`https://jsonplaceholder.typicode.com/posts/${elm}`)
                .then(response => response.json())
                .then(data => setval(data))
        }
        fetchSerchData();
        fetchUserData();
        setstatus(true)
    }

    useEffect(() => {
        const fetchUserData = () => {

            return fetch(`https://jsonplaceholder.typicode.com/posts/${params.id}`)
                .then(response => response.json())
                .then(data => setval(data))
        }
        const fetchDataComment = () => {

            return fetch(`https://jsonplaceholder.typicode.com/posts/${params.id}/comments`)
                .then(response => response.json())
                .then(data => setpost(data))
        }
        fetchUserData();
        fetchDataComment();
        setstatus(true)
    }, [params.id])

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
                                <Form className="d-flex" onSubmit={searchHandler}>
                                    <Form.Control
                                        type="search"
                                        placeholder="Search"
                                        className="me-2"
                                        aria-label="Search"
                                        id="search"
                                    />
                                    <Button variant="outline-success" type="submit" >Search</Button>
                                </Form>
                            </Navbar.Collapse>
                        </Container>
                    </Navbar>
                </div>

                <Container>
                    <div className='align-items-center spacer d-flex justify-content-center'>
                        <Card style={{ width: '22rem' }} className='text-center'>
                            <Card.Body>
                                <Card.Title className='mt-3'>{val.title}</Card.Title>
                                <Card.Subtitle className="mb-2 text-center mt-4">Id : {val.id}</Card.Subtitle>
                                <Card.Subtitle className="mb-2 text-center mt-4">UserId : {val.userId}</Card.Subtitle>
                                <Card.Text className='mt-4'>
                                    {val.body}
                                </Card.Text>
                                <Card.Link href='/'>Go Back</Card.Link>
                            </Card.Body>
                        </Card>
                    </div>
                </Container>

                <Container>
                    <div className='d-flex flex-wrap g-25 spacer'>

                        {
                            post.map((data, index)=>{
                                return (
                                    <Card style={{ width: '22rem' }} className='text-center' key={index}>
                                        <Card.Body>
                                            <Card.Title className='mt-3'>PostId : {data.postId}</Card.Title>
                                            <Card.Subtitle className="mb-2 text-center mt-4">Id : {data.id}</Card.Subtitle>
                                            <Card.Subtitle className="mb-2 text-center mt-4">name : {data.name}</Card.Subtitle>
                                            <Card.Text>Email : {data.email} </Card.Text>
                                            <Card.Text className='mt-4'>
                                                {data.body}
                                            </Card.Text>
                                            <Card.Link href='/'>Go Back</Card.Link>
                                        </Card.Body>
                                    </Card>
                                )
                            })
                        }
                    </div>
                </Container>
            </>
        )
    } else {
        <div className='loader'></div>
    }
}
export default Spost