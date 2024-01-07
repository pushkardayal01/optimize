import React from 'react'

const Upload = () => {
  return (
    <div className="box">
         <input type="file" id="fileInput" name="fileInput"></input>
         <select name="Operations" id="operations">
            <option value="opt_cutting_layout">Cutting Layout</option>
            <option value="opt_laminate_layout">Laminate Layout</option>
            <option value="opt_pasting_layout">Pasting Layout</option>
            
        </select>
    </div>
  )
}

export default Upload
