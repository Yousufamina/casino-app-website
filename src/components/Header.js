import React , {Component} from 'react';

class Header extends Component {
    render() {
        return (
            <div>
                <nav className="navbar navbar-light bg-light static-top">
                    <div className="container">
                        <a className="navbar-brand" href="#!">Start Bootstrap</a>
                        <a className="btn btn-primary" href="#signup">Sign Up</a>
                    </div>
                </nav>
                <header className="masthead">
                    <div className="container position-relative">
                        <div className="row justify-content-center">
                            <div className="col-xl-6">
                                <div className="text-center text-white">
                                    <h1 className="mb-5">Online Casinos For Canadian Residents</h1>
                                </div>
                            </div>
                        </div>
                    </div>
                </header>


            </div>

        )
    }
}
export  default Header;
