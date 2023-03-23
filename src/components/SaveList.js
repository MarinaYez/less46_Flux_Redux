import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
const SaveList = () => {
 const dispatchFunc = useDispatch();
  const logIn = useSelector((state) => state.isLoggedIn);
  const coffee = useSelector((state) => state.coffee);
  const sugar = useSelector((state) => state.sugar);

  const SaveItem = () => {
    localStorage.setItem('coffee', coffee);
    localStorage.setItem('sugar', sugar);
  }

  const ClearItem = () => {
    dispatchFunc({ type: 'Clear' })
  }
  const UploadItem = () => {
    if (localStorage.getItem('coffee')) {
      dispatchFunc({type: 'Upload'})
    }
    
    return
  }

  return (
    
    <div className='save'>
      <>
        {!logIn
          ?
          <p>You must be logged in to save the list.</p>
          :
          <>
            <button onClick={SaveItem}>SAVE</button>
            <button onClick={ClearItem} >CLEAR</button>
            {localStorage.getItem('coffee') && <button onClick={UploadItem} >UPLOAD</button>}
          </>
        }
      </>
          
      </div>
  )
}

export default SaveList