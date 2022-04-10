// Functional component
import React, { useState } from 'react';
import Modal from './modals/Modal'
import SignModal from './modals/SignModal'

function Nav() {
    //LOGIN    
    const [openModal, setOpenModal] = useState(false);
    //SIGN
    const [signModal, setSignModal] = useState(false);

    return ( 
        <section>
    <nav>
        <button className='login' onClick={() => {setOpenModal(true)}}> LOGIN </button>
        <button className='sign-up' onClick={() => {setSignModal(true)}}> SIGN-UP </button>
    </nav>
    
    {openModal && <Modal closeModal={setOpenModal} />}
    {signModal && <SignModal closeModal={setSignModal} />}
    </section>
    )}



export default Nav