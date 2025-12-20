import React from 'react'
import useWindowStore from '#store/window'
const WindowControllers = ({ target }) => {
    const { closeWindow } = useWindowStore();
  return (
    <div id='window-controllers'>
        <div className='close' onClick={() => closeWindow(target)} />
        <div className='minimize'/>
        <div className='maximize'/>
    </div>
  )
}

export default WindowControllers
