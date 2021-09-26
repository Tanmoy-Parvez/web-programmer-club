import React from 'react';
import "./Programmer.css"

const Programmer = (props) => {
    // destructuring property from props
    const { name, age, birthDate, img, salary, expert } = props.programmer;
    return (
        <div className="col-md-4">
            <div className="card-container">
                <div className="card-image">
                    <img src={img} alt="" />
                </div>
                {/* card body section */}
                <div className="card-body">
                    <h4>{name}</h4>
                    <h6 className="fw-normal">Age: {age} years</h6>
                    <h6 className="fw-normal">Date of Birth: {birthDate}</h6>
                    <h6 className="fw-normal">Expert in: {expert}</h6>
                    <h6 className="fw-normal">Salary: ${salary}</h6>
                    <button
                        className="btn btn-warning w-100 mt-3"
                        onClick={() => props.handleAddToCart(props.programmer)}>
                        <i class="far fa-check-circle"></i>  Select</button>
                </div>
            </div>
        </div>
    );
};

export default Programmer;