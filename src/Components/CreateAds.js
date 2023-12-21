import { Fragment, useState } from "react"
import { Button, Card, CardBody, CardImg, CardTitle, Col, Container, FormCheck, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import TextAdForm from "./TetxAdForm";
import MediaAdFrom from "./MediaAdForm";
const CreateAds = () => {

    /////Text AD FORM usesate////
    const [textAdcheck, settextAdcheck] = useState(false);

    //onclick button to TextAD form
    const onchagehandlerText = () => {
        settextAdcheck(!textAdcheck)
    };

    /////MediaAD FORM usesate////
    const [mediacheck, setmediacheck] = useState(false);

    //onclick button to MediaAD form
    const onchagehandlerMedia = () => {
        setmediacheck(!mediacheck)
    };



    return (

        <Fragment>

            <Container className="text-center my-5 pt-5">
                <p> <span className="fw-bold">Note :</span>  click the checkbox ( TextAD or MediaAd) and go to respective inputs</p>
                <Row className=" offset-lg-3 py-3">

                    <Col xs={6} lg={4}>
                        <Card>
                            <input type="checkbox" data-toggle="toggle" className="my-2 checkbox" onChange={onchagehandlerText}></input>
                            <CardImg src="https://media.istockphoto.com/id/1204778488/vector/chat-interface-application-with-dialogue-window-clean-mobile-ui-design-concept-sms-messenger.jpg?s=612x612&w=0&k=20&c=LaCe1SmcMPqHV2FXDKukpCqpWRZvaFKp9VY0U9aBH5E=" width="10px"></CardImg>
                            <CardBody style={{ backgroundColor: "lightgray" }}>
                                <CardTitle >
                                    <h4 className="fw-bold">Text Ad</h4 >
                                </CardTitle>
                            </CardBody>
                        </Card>
                    </Col>

                    <Col xs={6} lg={4}>
                        <Card >
                            <input type="checkbox" className="my-2 checkbox" onChange={onchagehandlerMedia}></input>
                            <CardImg src="https://media.istockphoto.com/id/1204778488/vector/chat-interface-application-with-dialogue-window-clean-mobile-ui-design-concept-sms-messenger.jpg?s=612x612&w=0&k=20&c=LaCe1SmcMPqHV2FXDKukpCqpWRZvaFKp9VY0U9aBH5E="></CardImg>
                            <CardBody style={{ backgroundColor: "lightgray" }}>
                                <CardTitle >
                                    <h4 className="fw-bold">Media Ad</h4 >
                                </CardTitle>
                            </CardBody>
                        </Card>
                    </Col>
                </Row>


                {/* TextAD Form */}
                {
                    textAdcheck ? <Link to="/textAd"><Button className="bg-primary px-5" >
                        Next
                    </Button>
                    </Link> : ""
                }

                {/* MediaAD Form */}
                {
                    mediacheck ? <Link to="/mediaAd"><Button className="bg-primary px-5" >
                        Next
                    </Button></Link> : ""
                }

            </Container>

        </Fragment>
    )
};

export default CreateAds;