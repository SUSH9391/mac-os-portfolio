import useWindowStore from '#store/window.js'

const WindowControllers = ({ target }) => {
    const { closeWindow, minimizeWindow, maximizeWindow } = useWindowStore();
    
    const handleClose = (e) => {
        e.stopPropagation();
        closeWindow(target);
    };
    
    const handleMinimize = (e) => {
        e.stopPropagation();
        minimizeWindow(target);
    };
    
    const handleMaximize = (e) => {
        e.stopPropagation();
        maximizeWindow(target);
    };
    
  return (
    <div id='window-controls'>
        <div className='close' onClick={handleClose} />
        <div className='minimize' onClick={handleMinimize} />
        <div className='maximize' onClick={handleMaximize} />
    </div>
  )
}

export default WindowControllers
