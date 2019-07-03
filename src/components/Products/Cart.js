import React, { useState, useEffect } from 'react';
import ReactModal from 'react-modal'

const customStyles = {
  content : {
    top                   : '0',
    right                 : '0',
    left                  : '75%',
    bottom                : '0',
    transform             : 'translateX(0%)',
    zIndex                : '999',
    height                : '100vh'
  }
};


function Cart() {

  const [count, setCount] = useState(JSON.parse(window.localStorage.getItem('count') || 0));
  const [isModalOpen, setIsModalOpen] = useState(false);

  const items = JSON.parse(window.localStorage.getItem('products'))

  const handleModalOpen = event => {
    // console.log('handleModalOpen: ', event);
    setIsModalOpen(true)
    console.log("i should've opened")
  }

  const handleModalClose = event => {
    // console.log('handleModalOpen: ', event);
    setIsModalOpen(false)
  }

  useEffect(() => {
      window.addEventListener('click', function(){
        setCount(JSON.parse(window.localStorage.getItem('count')))
        this.console.log('yodalay')
      })
      
      console.log(count)
  }, []);

  return (
    <React.Fragment>
      <div onClick={ handleModalOpen }className="relative flex flex-col content-center justify-center cursor-pointer">
        <svg className="hover:color-teal-500" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
          width="24" height="24"
          viewBox="0 0 24 24"
          style={{fill: "#111"}}><path d="M 4.4140625 1.9960938 L 1.0039062 2.0136719 L 1.0136719 4.0136719 L 3.0839844 4.0039062 L 6.3789062 11.908203 L 5.1816406 13.824219 C 4.7816406 14.464219 4.7609531 15.272641 5.1269531 15.931641 C 5.4929531 16.590641 6.1874063 17 6.9414062 17 L 19 17 L 19 15 L 6.9414062 15 L 6.8769531 14.882812 L 8.0527344 13 L 15.521484 13 C 16.248484 13 16.917531 12.604703 17.269531 11.970703 L 20.873047 5.4863281 C 21.046047 5.1763281 21.041328 4.7981875 20.861328 4.4921875 C 20.681328 4.1871875 20.352047 4 19.998047 4 L 5.25 4 L 4.4140625 1.9960938 z M 6.0820312 6 L 18.298828 6 L 15.521484 11 L 8.1660156 11 L 6.0820312 6 z M 7 18 A 2 2 0 0 0 5 20 A 2 2 0 0 0 7 22 A 2 2 0 0 0 9 20 A 2 2 0 0 0 7 18 z M 17 18 A 2 2 0 0 0 15 20 A 2 2 0 0 0 17 22 A 2 2 0 0 0 19 20 A 2 2 0 0 0 17 18 z"></path>
        </svg>
        <span className="hover:bg-teal-500 hover:cursor-pointer bg-red-500 text-white rounded-full h-5 w-5 flex items-center justify-center text-xs absolute" style={{top: "-5px", right: "-10px"}}>{ count }</span>
      </div>

      <ReactModal
          isOpen={isModalOpen}
          onRequestClose={handleModalClose}
          contentLabel="Your Cart"
          style={customStyles}
          >
          <div className="flex flex-row justify-between">
            <h2 className="uppercase">Your Cart</h2>
            <button onClick={handleModalClose} className="font-bold underline">Close</button>
          </div>

          <div className="flex flex-col">
            
          </div>


        </ReactModal>

    </React.Fragment>
  );
}


export default Cart;