import React from 'react'

const BreadCrumb = ({ show, onClose }) => {
  if (!show) {
    return null
  }
  return (
    <div className="" style={{ height: '40px', background: 'red' }}>
      <div
        className=""
        style={{
          margin: '0 8%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          height: '100%',
        }}
      >
        <div className="">
          <p style={{ color: '#fff' }}>
            <strong>NOTICE:</strong> this is a linked in Clone and should'nt be
            confused with the main LinkedIn website
          </p>
        </div>
        <div
          className=""
          style={{ marginRight: '40px', marginTop: '-5px', cursor: 'pointer' }}
          onClick={onClose}
        >
          <span
            onClick={onClose}
            style={{ color: '#fff', fontSize: '30px', cursor: 'pointer' }}
          >
            &times;
          </span>
        </div>
      </div>
    </div>
  )
}

export default BreadCrumb
