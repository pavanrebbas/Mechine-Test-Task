import { Fragment, useState } from "react"
import { Container } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Link from "antd/es/typography/Link";


const TextAdForm = () => {

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [data, setdata] = useState(
        {
            Heading1: "",
            Heading2: "",
            Bussinessname: "",
            WebsiteURL: "",
            Description: "",
            Buttonlabel: "",


        }
    );

    // DE-STRUCTURING///
    const { Heading1, Heading2, Bussinessname, WebsiteURL, Description, Buttonlabel } = data



    // Onchage handler
    const onchagehandler = (e) => {
        setdata({ ...data, [e.target.name]: [e.target.value] })
    };


    /////usenavigate////
    const navigate = useNavigate()

    const submitHandler = (e) => {
        e.preventDefault();
        setTimeout(() => {
            navigate("/create")
        }, 600);
    }


    return (

        <Fragment>
            <Container>
                <form onSubmit={submitHandler}>
                    <div class="row my-5">
                        <div class="col">
                            <label className="form-label">Heading-1</label>
                            <input type="text" className="form-control" value={Heading1} name="Heading1" onChange={onchagehandler} placeholder="Add a heading that would make users intrested" /><br />
                            <label className="form-label">Heading-2</label>
                            <input type="text" className="form-control" value={Heading2} name="Heading2" onChange={onchagehandler} placeholder="Add a heading that would make users intrested" /><br />
                            <label className="form-label">Bussiness name</label>
                            <input type="text" className="form-control" value={Bussinessname} name="Bussinessname" onChange={onchagehandler} placeholder="Add your business name" /><br />
                            <label className="form-label">Website URL</label>
                            <input type="text" className="form-control" value={WebsiteURL} name="WebsiteURL" onChange={onchagehandler} placeholder="Add the URL of the landing page you want to redirect users to" /><br />
                        </div>
                        <div class="col">
                            <label className="form-label">Description</label>
                            <input type="text" class="form-control py-5 text-start" value={Description} name="Description" onChange={onchagehandler} placeholder="Add primary text to help users understand more about your products, services or offers" /><br />

                            <label className="form-label">Button label</label>
                            <select className="form-select" value={Buttonlabel} name="Buttonlabel" onChange={onchagehandler} >
                                <option>select a label that best suits your add</option>
                            </select>
                        </div>
                    </div>
                    <button className="btn btn-primary float-end mx-2" onClick={handleShow}>Submit</button>
                    <Link to="/create"><button className="btn btn-secondary border-0 float-end">Back</button></Link>

                    <Modal show={show} onHide={handleClose}>
                        <Modal.Body><h1 className="text-center">Submitted</h1></Modal.Body>
                    </Modal>
                </form>
            </Container>
        </Fragment>
    )
};

export default TextAdForm;







