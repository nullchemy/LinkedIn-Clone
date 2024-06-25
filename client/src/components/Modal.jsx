import React from 'react'

const Modal = ({ show, onClose }) => {
  if (!show) {
    return null
  }

  return (
    <div
      className="modal"
      style={{
        position: 'fixed',
        top: '0px',
        left: '0px',
        zIndex: '999',
        height: '100vh',
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: '#0008',
      }}
    >
      <div
        className="modal-content"
        style={{
          height: '300px',
          width: '500px',
          borderRadius: '23px',
          background: '#fff',
          padding: '5px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          boxShadow:
            'rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px',
        }}
      >
        <div className="" style={{ color: '#000', textAlign: 'center' }}>
          <strong style={{ color: '#000', textAlign: 'center' }}>
            NOTICE:
          </strong>
          <p style={{ color: '#000', textAlign: 'center' }}>
            this is a linked in Clone and should'nt be confused with the main
            LinkedIn website
          </p>
          <br />
          <button
            onClick={onClose}
            style={{
              padding: '10px 20px',
              background: 'red',
              border: 'none',
              outline: 'none',
              borderRadius: '23px',
              color: '#fff',
            }}
          >
            Dismiss
          </button>
        </div>
      </div>
    </div>
  )
}

export default Modal
