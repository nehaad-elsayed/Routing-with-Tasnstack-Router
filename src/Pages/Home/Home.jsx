import { useState } from "react";
import Modal from "../../Components/Modal/Modal";
export default function Home() {
  const [showModal, setShowModal] = useState(false);
  return (
    <>
      <section   style={{ minHeight: "50vh" , display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center"}}>
        <h1>Home Page</h1>
        <h2> Try usign portal here</h2>
        <button onClick={() => setShowModal(true)}>Open Modal</button>
        {showModal && (
          <Modal>
            <div
              style={{
                position: "fixed",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
                background: "#fff",
                padding: "1rem",
                boxShadow: "0 2px 10px rgba(0,0,0,0.3)",
                zIndex: 1000,
              }}
            >
              <h3>Modal</h3>
              <p>this created by React Portal</p>
              <button onClick={() => setShowModal(false)}>Close</button>
            </div>
          </Modal>
        )}
      </section>
    </>
  );
}
