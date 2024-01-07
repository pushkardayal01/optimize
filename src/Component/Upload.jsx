import React from 'react'

const Upload = () => {
  return (
    <div className="box">
         <div className='primary select'>Select the File</div>
         <input className ='input' type="file" id="fileInput" name="fileInput"></input>
         <div className='primary select'>Choose the Operations</div>
         <div className="dropdown">
            <select name="Operations" id="operations">
            <option value="opt_cutting_layout">Cutting Layout</option>
            <option value="opt_laminate_layout">Laminate Layout</option>
            <option value="opt_pasting_layout">Pasting Layout</option>
            
            </select>
         </div>
         <button>Upload the file</button>
    </div>
  )
}

export default Upload
