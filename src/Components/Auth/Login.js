import React from 'react';
import { Link } from 'react-router-dom';

export default function Login() {
  return (
      <React.Fragment>
          <div className="fix-menu">
          <section className="login-block">
        {/* <!-- Container-fluid starts --> */}
        <div className="container">
            <div className="row">
                <div className="col-sm-12">
                    {/* <!-- Authentication card start --> */}

                    <form className="md-float-material form-material">
                        <div className="text-center">
                            <img src="assets/images/logo.png" alt="logo.png"/>
                        </div>
                        <div className="auth-box card">
                            <div className="card-block">
                                <div className="row m-b-20">
                                    <div className="col-md-12">
                                        <h3 className="text-center">Login</h3>
                                    </div>
                                </div>
                                <div className="form-group form-primary">
                                    <input type="text" name="email" className="form-control" required=""
                                        placeholder="Your Email Address"/>
                                    <span className="form-bar"></span>
                                </div>
                                <div className="form-group form-primary">
                                    <input type="password" name="password" className="form-control" required=""
                                        placeholder="Password"/>
                                    <span className="form-bar"></span>
                                </div>
                                <div className="row m-t-25 text-left">
                                    <div className="col-12">
                                        <div className="checkbox-fade fade-in-primary d-">
                                            <label>
                                                <input type="checkbox" value=""/>
                                                <span className="cr"><i
                                                        className="cr-icon icofont icofont-ui-check txt-primary"></i></span>
                                                <span className="text-inverse">Remember me</span>
                                            </label>
                                        </div>
                                        <div className="forgot-phone text-right f-right">
                                            <Link to='/forgot'><a href="auth-reset-password.html" className="text-right f-w-600"> Forgot
                                                Password?</a></Link>
                                        </div>
                                    </div>
                                </div>
                                <Link to='/main'>
                                <div className="row m-t-30">
                                    <div className="col-md-12">
                                        <button type="button"
                                            className="btn btn-primary btn-md btn-block waves-effect waves-light text-center m-b-20">Login</button>
                                    </div>
                                </div>
                                </Link>
                                <hr />
                                <div className="row">
                                    <div className="col-md-10">
                                        <p className="text-inverse text-left m-b-0">Thank you.</p>
                                        <Link to='/register'><p className="text-inverse text-left"><a href="../index.html"><b className="f-w-600">Register</b></a></p></Link>
                                    </div>
                                    <div className="col-md-2">
                                        <img src="assets/images/auth/Logo-small-bottom.png"
                                            alt="small-logo.png"/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </form>
                    {/* <!-- end of form --> */}
                </div>
                {/* <!-- end of col-sm-12 --> */}
            </div>
            {/* <!-- end of row --> */}
        </div>
        {/* <!-- end of container-fluid --> */}
    </section>
          </div>
      </React.Fragment>
  )
}
