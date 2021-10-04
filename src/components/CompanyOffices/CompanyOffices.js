import React from 'react';
import comapnyimag1 from '../../images/company/companyCity/company1.jpg';
import comapnyimag2 from '../../images/company/companyCity/company2.jpg';
import comapnyimag3 from '../../images/company/companyCity/company3.jpg';
import comapnyimag4 from '../../images/company/companyCity/company4.jpg';

const CompanyOffices = () => {
    return (
        <div className="p-5">
            <div className="row row-cols-1 row-cols-md-3 g-4">
                <div className="col">
                    <div className="card h-100 border-0">
                        <img src={comapnyimag1} className="card-img-top  h-50" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">San Francisco, CA</h5>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card h-100 border-0">
                        <img src={comapnyimag2} className="card-img-top  h-50" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">Denver, CO</h5>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card h-100 border-0">
                        <img src={comapnyimag3} className="card-img-top  h-50" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">Dublin, Ireland</h5>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card h-100 border-0">
                        <img src={comapnyimag4} className="card-img-top  h-50" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">Ankara, Turkey</h5>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CompanyOffices;