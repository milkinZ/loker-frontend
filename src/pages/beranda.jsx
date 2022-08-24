import React from "react";
export default class Beranda extends React.Component{
    constructor(){
        super()
        this.state = {
            token: "",
            siswaCount: 0,
            pembayaranCount: 0,
            siswaName:"",
            siswa: null
        }
        if (localStorage.getItem("token")) {
            this.state.token = localStorage.getItem("token")
            this.state.siswa = JSON.parse(localStorage.getItem("siswa"))
        } else {
            window.location = "/login"
        }
    }
    headerConfig = () => {
        let header = {
            headers: { Authorization: `Bearer ${this.state.token}` }
        }
        return header
    }
render(){
    return(
        <div>
            <div className="container mt-2">
                <h3 className="my-2">
                    <strong>Welcome back, Admin</strong>
                </h3>
                <div className="row">
                    {/* products count */}
                    <div className="col-lg-4 col-md-6 col-sm-12 mt-2">
                        <div className="card">
                            <div className="card-body bg-danger">
                                <h4 className="text-dark">
                                    <strong>Siswa Count</strong>
                                </h4>
                                <h1 className="text-white">
                                    <strong>100</strong>
                                </h1>
                            </div>
                        </div>
                    </div>
                    {/* customer count */}
                    <div className="col-lg-4 col-md-6 col-sm-12 mt-2">
                        <div className="card">
                            <div className="card-body bg-info">
                                <h4 className="text-dark">
                                    <strong>History Count</strong>
                                </h4>
                                <h1 className="text-white">
                                    <strong>90</strong>
                                </h1>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
}