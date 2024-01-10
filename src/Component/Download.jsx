import React from 'react'
import './Download.css';
const Download = () => {
  return (
    <div class="container">
    <form>
      <label for="requestIdInput">Enter the requestId:</label>
      <input type="text" id="requestIdInput" name="requestIdInput"/>

      <label for="operationSelect">Choose the operation:</label>
      <select id="operationSelect" name="operationSelect">
        <option value="laminate">Laminate</option>
        <option value="pasting">Pasting</option>
        <option value="cutting">Cutting</option>
      </select>

      <button type="button" id="downloadButton">Download</button>
    </form>
  </div>
  )
}

export default Download
