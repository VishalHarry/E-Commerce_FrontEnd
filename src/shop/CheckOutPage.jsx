import React, { useState } from 'react';
import { Modal, Button } from 'react-bootstrap';

function CheckOutPage() {
    const [show, setShow] = useState(false);
    const [activeTab, setActiveTab] = useState("visa");

    // Handle tab change
    const handleTabChange = (tab) => setActiveTab(tab);

    const handleShow = () => setShow(true);
    const handleClose = () => setShow(false);

    return (
        <div className="modalCard">
            {/* Button to Open Modal */}
           <Button variant='primary' className='py-2' onClick={handleShow}>Process to checkout</Button>

            {/* Modal */}
            <Modal
                show={show}
                onHide={handleClose}
                animation={false}
                centered
            >
    
            </Modal>
        </div>
    );
}

export default CheckOutPage;
