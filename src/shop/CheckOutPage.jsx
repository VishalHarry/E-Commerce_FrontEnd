import React, { useState } from "react";
import { Modal, Button, Tab, Nav } from "react-bootstrap";
import img1 from '../assets/images/cursorImg/paypal.png'
import img2 from '../assets/images/cursorImg/visa.jpg'

function CheckOutPage() {
    const [show, setShow] = useState(false);
    const [activeTab, setActiveTab] = useState("visa");

    const handleTabChange = (tab) => setActiveTab(tab);
    const handleShow = () => setShow(true);
    const handleClose = () => setShow(false);

    return (
        <div className="modalCard text-center mt-8">
            {/* Button to Open Modal */}
            <Button
                variant="primary"
                className="py-2 px-4 bg-blue-500 hover:bg-blue-600 text-white rounded"
                onClick={handleShow}
            >
                Proceed to Checkout
            </Button>

            {/* Modal */}
            {show && (
                <div className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm flex justify-center items-start z-50">
                    <div
                        className="bg-white w-full max-w-md mx-auto mt-16 p-6 rounded-lg shadow-lg transform transition-all duration-300 ease-out animate-slide-down"
                    >
                        <Modal.Header className="bg-gray-100 text-center" closeButton>
                            <Modal.Title className="text-lg font-semibold">Payment Options</Modal.Title>
                        </Modal.Header>
                        <Modal.Body className="bg-white p-6">
                            <Tab.Container activeKey={activeTab} onSelect={handleTabChange}>
                                {/* Tabs */}
                                <Nav variant="tabs" className="flex space-x-4 mb-4">
                                    <Nav.Item>
                                        <Nav.Link
                                            eventKey="visa"
                                            className={`${activeTab === "visa"
                                                ? "text-blue-500 border-b-2 border-blue-500"
                                                : "text-gray-600"
                                                } hover:text-blue-500 flex justify-center items-center`}
                                        >
                                            <img
                                                src={img1} // Your image source
                                                alt="Visa"
                                                className="w-12 h-12" // You can adjust these values as needed
                                            />
                                        </Nav.Link>

                                    </Nav.Item>
                                    <Nav.Item>
                                        <Nav.Link
                                            eventKey="paypal"
                                            className={`${activeTab === "paypal"
                                                    ? "text-blue-500 border-b-2 border-blue-500"
                                                    : "text-gray-600"
                                                } hover:text-blue-500 flex justify-center items-center`}
                                        >
                                            <img
                                                src={img2} // Your PayPal image source
                                                alt="PayPal"
                                                className="w-12 h-12" // Adjust the size as needed
                                            />
                                        </Nav.Link>

                                    </Nav.Item>
                                </Nav>

                                {/* Tab Content */}
                                <Tab.Content>
                                    {/* Visa Tab */}
                                    <Tab.Pane eventKey="visa">
                                        <form>
                                            <div className="mb-4">
                                                <label className="block text-sm font-medium text-gray-700">Card Number</label>
                                                <input
                                                    type="text"
                                                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                                    placeholder="Enter card number"
                                                    required
                                                />
                                            </div>
                                            <div className="mb-4">
                                                <label className="block text-sm font-medium text-gray-700">Expiration Date</label>
                                                <input
                                                    type="text"
                                                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                                    placeholder="MM/YY"
                                                    required
                                                />
                                            </div>
                                            <div className="mb-4">
                                                <label className="block text-sm font-medium text-gray-700">CVV</label>
                                                <input
                                                    type="text"
                                                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                                    placeholder="Enter CVV"
                                                    required
                                                />
                                            </div>
                                        </form>
                                    </Tab.Pane>

                                    {/* PayPal Tab */}
                                    <Tab.Pane eventKey="paypal">
                                        <div className="text-center">
                                            <p className="text-gray-600">You will be redirected to PayPal for payment.</p>
                                            <button
                                                type="button"
                                                className="mt-4 py-2 px-6 bg-yellow-500 hover:bg-yellow-600 text-white rounded-lg"
                                            >
                                                Proceed to PayPal
                                            </button>
                                        </div>
                                    </Tab.Pane>
                                </Tab.Content>
                            </Tab.Container>
                        </Modal.Body>
                        <Modal.Footer className="bg-gray-100">
                            <Button
                                variant="secondary"
                                className="py-2 px-4 bg-gray-300 hover:bg-gray-400 text-black rounded"
                                onClick={handleClose}
                            >
                                Cancel
                            </Button>
                            <Button
                                variant="primary"
                                className="py-2 px-4 bg-blue-500 hover:bg-blue-600 text-white rounded"
                            >
                                Pay Now
                            </Button>
                        </Modal.Footer>
                    </div>
                </div>
            )}
        </div>
    );
}

export default CheckOutPage;
