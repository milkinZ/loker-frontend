import React from "react"
import axios from 'axios'
import { base_url } from '../config'
import { Button, Container, Col, Row, Image } from "react-bootstrap";
export default class Login extends React.Component {
    constructor() {
        super()
        this.state = {
            username_pelamar: "",
            password_pelamar: "",
            message: "",
            logged: true
        }
    }
    bind = (event) => {
        this.setState({ [event.target.name]: event.target.value })
    }

    Login = event => {
        event.preventDefault()
        let sendData = {
            username_pelamar: this.state.username_pelamar,
            password_pelamar: this.state.password_pelamar
        }
        let url = base_url + "/pelamar/auth"
        axios.post(url, sendData)
            .then(response => {
                this.setState({ logged: response.data.logged })

                // this.setState({level: response.data.level})
                if (this.state.logged) {
                    let pelamar = response.data.data
                    let token = response.data.token
                    localStorage.setItem("pelamar", JSON.stringify(pelamar))
                    localStorage.setItem("token", token)
                    window.location = '/'
                }
            })
            .catch(error => console.log(error))
    }
    render() {
        return (
            <div>
                <Container className='mt-5'>
                    <Row>
                        <Col lg={4} md={6} sm={12} className='mt-5'>
                            <img className='user.png ' src='./img/account.png' style={{ width: "80px", height: "80px", display: 'block', marginLeft: "auto", marginRight: "auto" }} />
                            <h3 style={{ fontFamily: "Merriweather", textAlign:"center" }} className="text-white mt-4">Login Page</h3>
                            {!this.state.logged ?
                                (
                                    <div className="alert alert-danger mt-1">
                                        Invalid Username or password
                                    </div>
                                ) : null}
                            <form onSubmit={ev => this.Login(ev)}>
                                <h5 className="text-white mt-4" >Username</h5>
                                <input type={`text`} name='username_pelamar' className="form-control mb-2 rounded-pill mt-3"
                                    required
                                    value={this.state.username_pelamar}
                                    onChange={this.bind} />

                                <h5 className="text-white mt-4" >Password</h5>
                                <input type={`password`} name='password_pelamar' className="form-control mb-2 rounded-pill mt-3"
                                    required
                                    value={this.state.password_pelamar}
                                    onChange={this.bind} />
                                <div className="d-grid gap-2">
                                <Button variant='btn-block' type='submit' className='mt-3 text-white' style={{ background: `#813AFE`, borderColor: `#813AFE5` }}>
                                    Login
                                </Button>
                                </div>
                            </form>

                        </Col>
                        <Col lg={8} md={6} sm={12}>
                            <div>
                                <Image className='w-100' src='./img/LoginImg.svg' />
                            </div>
                        </Col>

                    </Row>
                </Container>
            </div>
        )
    }
}
