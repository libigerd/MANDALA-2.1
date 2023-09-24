// eslint-disable-next-line 
import React, { useState } from "react";
import Mandala from "./js/Mandala";
import {
  Card,
  Modal,
  ModalBody,
  ModalHeader,
  ModalTitle,
} from "react-bootstrap";
import { Button } from "react-bootstrap";

import ImageM from "./data/Image_1.js";
import ImageGallery from "react-image-gallery";
import { images } from "./data/gallery-image";

//  fetch data
//  const user = {
//  Id: X, user: "", app: "", points: Y, time: mm:ss, value:  ,callback: }



export default function App() {
  const [modalShow, setModalShow] = useState(true);
  const [galleryShow, setGalleryShow] = useState(false);
  const handleClose = () => setGalleryShow(false);
  const handleShow = () => setGalleryShow(true);

  const exitApp = () => {
    throw {};
  };

  return (
    <>
      <div className="ModalInstructions">
        <Modal
          show={modalShow}
          size="xl"
          tabIndex="-1"
          aria-labelledby="instructionsModalLabel"
          aria-hidden="true"
          centered
        >
          <ModalHeader>
            <ModalTitle id="contained-modal-title-vcenter">
              Vítejte u vyplňování barevných mandal
            </ModalTitle>
          </ModalHeader>
          <ModalBody>
            <p>
              V dalším kroku tohoto relaxačního cvičení se vám na obrazovce
              objeví předloha, kterou můžete vybarvit barvami z přiložené palety
              barev dle vlastní fantazie.
            </p>
          </ModalBody>
          <Button
            type="button"
            variant="primary"
            className="btn btn-primary border rounded-3 border-3 w-100 h-100"
            fontSize="1vh"
            onClick={() => setModalShow(false)}
          >
            Rozumím
          </Button>
        </Modal>
      </div>
      <div className="gallery">
        <Modal
          show={galleryShow}
          size="xl"
          tabIndex="-1"
          aria-labelledby="GalleryLabel"
          aria-hidden="true"
          centered
        >
          <ModalHeader>
            <ModalTitle id="contained-modal-title-vcenter">
              Zde můžete vybrat jiný vzor
            </ModalTitle>
          </ModalHeader>
          <ModalBody>
            <div>
              <header>
                <div className="header-wrapper">
                
                </div>
              </header>
            </div>
          </ModalBody>
          <Button
            type="button"
            variant="primary"
            className="btn btn-primary border rounded-3 border-3 w-100 h-100"
            fontSize="1vh"
            onClick={() => setGalleryShow(false)}
          >
            Vybrat
          </Button>
        </Modal>
      </div>
      <Card>
        <Card.Body>
          <Mandala Image={ImageM} />
        </Card.Body>
        <Card.Footer>
          <div className="container-fluid">
            <div className="row">
              <div className="col-6 mb-2">
                <Button
                  id="exit"
                  variant="outline-primary"
                  className="col-6 mb-2 rounded-3 border-3 w-100 h-100"
                  onClick={() => exitApp()}
                >
                  Odejít
                </Button>
              </div>
              <div className="col-6 mb-2">
                <Button
                  id="select"
                  variant="secondary"
                  className="col-6 mb-2 rounded-3 border-0 w-100 h-100"
                  type="button"
                  onClick={() => {
                    setGalleryShow(true);
                  }}
                >
                  Vybrat jinou předlohu
                </Button>
              </div>
            </div>
          </div>
        </Card.Footer>
      </Card>
    </>
  );
}
