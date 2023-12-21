import { Fragment, useState } from "react"
import { Container } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Link from "antd/es/typography/Link";



const MediaAdFrom = () => {


    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);




    /////usenavigate////
    const navigate = useNavigate()

    const submitHandler = (e) => {
        e.preventDefault();
        // alert("form submitted")
        setTimeout(() => {
            navigate("/create")
        }, 600);

    }


    return (

        <Fragment>
            <Container>
                <form onSubmit={submitHandler} className="form py-5 my-3">
                <div class="row">
                    <div class="col">
                        <label className="form-label">Heading-1</label>
                        <input type="text" className="form-control" name="Heading1" placeholder="Add a heading that would make users intrested" />
                        <br />
                        <label className="form-label">Heading-2</label>
                        <input type="text" className="form-control" name="Heading2" placeholder="Add a heading that would make users intrested" />
                        <br />
                        <label className="form-label">Landscape Marketing image (1.9:1)</label>
                        <input type="text" className="form-control" name="Bussinessname" placeholder="Add your business name" /><br />
                        <label className="form-label">Vedio URL</label>
                        <input type="text" className="form-control" name="Bussinessname" placeholder="Add your business name" /><br />
                        <label className="form-label">Bussiness Name </label>
                        <input type="text" className="form-control" name="WebsiteURL" placeholder="Add the URL of the landing page you want to redirect users to" /><br />
                        <label className="form-label">Website URL</label>
                        <input type="text" className="form-control" name="WebsiteURL" placeholder="Add the URL of the landing page you want to redirect users to" /><br />
                    </div>
                    <div class="col">
                        <label className="form-label">Description</label>
                        <input type="text" class="form-control py-5 text-start" name="Description" placeholder="Add primary text to help users understand more about your products, services or offers" /><br />

                        <label className="form-label">Portrait Marketing image (4:5)</label>
                        <input type="text" class="form-control text-start" name="Description" placeholder="Add primary text to help users understand more about your products, services or offers" /><br />
                        <label className="form-label">Square Marketing image (1:1)</label>
                        <input type="text" class="form-control text-start" name="Description" placeholder="Add primary text to help users understand more about your products, services or offers" /><br />
                        <label className="form-label">Button label</label>
                        <select className="form-select" name="Buttonlabel"  >
                            <option>select a label that best suits your add</option>
                        </select>
                    </div>
                </div>
                <button className="btn btn-primary float-end mx-2" onClick={handleShow}>Submit</button>
                <Link to="/create"><button className="btn btn-secondary border-0 float-end">Back</button></Link>

                <Modal className="py-5 my-5" show={show} onHide={handleClose}>
                    <Modal.Body><h1 className="text-center py-5">Submitted</h1></Modal.Body>
                </Modal>
            </form>
        </Container>
        </Fragment >
    )
};

export default MediaAdFrom;