import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Axios from 'axios';

const Login = () => {

  const [email, setemail] = useState('')
  const [password, setpassword] = useState('')

  const [emails, setemails] = useState('')
  const [passwords, setpasswords] = useState('')

  const [login, setlogin] = useState('')

  const handleregister = () => {
    Axios.post('http://localhost:3001/register',
      { email: email, password: password }).then((response) => {
        console.log(response.data);
      })
  }


  const handlelogin = () => {
    Axios.post('http://localhost:3001/login',
      { email: emails, password: passwords }).then((response) => {
        if (response.data.message) {
          setlogin(response.data.message)
          console.log(response.data)
        } else {
          setlogin(response.data[0].email)
          console.log(response.data)


        }
      })
  }

  // const handlesubmit=(e)=>{
  //   e.preventDefault();
  //   const total=email+password
  //   console.log(total);
  // }
  return (
    <div >
      <h3 className='text-center pt-5'>Welcome! {login}</h3>
      <div className=' d-flex justify-content-around gap-3  pt-5'>
        <div>
          <Form>
            <h3>Register</h3>
            <Form.Group className="mb-3" >
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" placeholder="Enter email" onChange={(e) => setemail(e.target.value)} />
              <Form.Text className="text-muted">
                We'll never share your email with anyone else.
              </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" >
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Password" onChange={(e) => setpassword(e.target.value)} />
            </Form.Group>
            <Form.Group className="mb-3" >
              <Form.Check type="checkbox" label="Check me out" />
            </Form.Group>
            <Button variant="primary" onClick={handleregister}>
              Submit
            </Button>
          </Form>
        </div>
        <div>
          <Form>
            <h3>Log In</h3>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" placeholder="Enter email" onChange={(e) => setemails(e.target.value)} />
              <Form.Text className="text-muted">
                We'll never share your email with anyone else.
              </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" >
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Password" onChange={(e) => setpasswords(e.target.value)} />
            </Form.Group>
            <Form.Group className="mb-3" >
              <Form.Check type="checkbox" label="Check me out" />
            </Form.Group>
            <Button variant="primary" onClick={handlelogin}>
              Login
            </Button>
          </Form>

        </div>
      </div>
    </div>
  )
}

export default Login
