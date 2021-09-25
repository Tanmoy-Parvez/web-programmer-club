import React from 'react';
import "./Programmer.css"

const Programmer = (props) => {
    const { name, age, birthDate, img, salary } = props.programmer;
    return (
        <div>
            <div className="card mb-3" style={{ "max-width": "540px;" }}>
                <div className="row g-0">
                    <div className="col-md-4">
                        <img src={img} className="img-fluid rounded-circle" alt="..." />
                    </div>
                    <div className="col-md-8">
                        <div className="card-body">
                            <h5 className="card-title">{name}</h5>
                            <p className="card-text">{age}</p>
                            <p className="card-text">{birthDate}</p>
                            <p className="card-text">{salary}</p>
                            <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                            <button onClick={() => props.handleAddToCart(props.programmer)} className="btn btn-warning"><i class="far fa-check-circle"></i> Select</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Programmer;