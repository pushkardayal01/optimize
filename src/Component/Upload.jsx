import React from 'react'
import './Upload.css'
const Upload = () => {
  return (
    <div class="container">
    <form>
      <label for="fileInput">Choose the file:</label>
      <input type="file" id="fileInput" name="fileInput"/>

      <label for="operationSelect">Choose the operation:</label>
      <select id="operationSelect" name="operationSelect">
        <option value="laminate">Laminate</option>
        <option value="pasting">Pasting</option>
        <option value="cutting">Cutting</option>
      </select>

      <button type="submit">Upload</button>
    </form>
  </div>
  )
}

export default Upload
