// Functional component
import React, { useState } from 'react';
import Modal from '../components/modals/Modal'
import SignModal from '../components/modals/SignModal'
// Functional component
import Logo from '../images/hotel-resto-logo.png'

function Header() {
    //LOGIN    
    const [openModal, setOpenModal] = useState(false);
    //SIGN
    const [signModal, setSignModal] = useState(false);
    
    return <header> 
        <img src={Logo} alt={'Hotel Logo'} id={'logo'} />
        <nav>
            <button className='login' onClick={() => {setOpenModal(true)}}> LOGIN </button>
            <button className='sign-up' onClick={() => {setSignModal(true)}}> SIGN-UP </button>
        </nav>
        
        {openModal && <Modal closeModal={setOpenModal} />}
        {signModal && <SignModal closeModal={setSignModal} />}
    </header>
}

export default Header