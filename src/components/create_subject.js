import React from 'react'

export default function CreateSubject() {
  return (
    <div className='container'>

    <form>
  <div class="mb-3">
    <label for="subject-name" class="form-label">Subject Name</label>
    <input type="text" className="form-control" id="subject-name" />
    
  </div>
  <div className="mb-3">
    <label for="cover-image" className="form-label">Cover Image</label>
    <input type="file" className="form-control" id="cover-image"/>
  </div>
  <select className="form-select" aria-label="Default select example">
  <option selected>Department</option>
  <option value="natural">Natural Science</option>
  <option value="social">Social Science</option>
  <option value="none">None</option>
</select>

<select className="form-select" aria-label="Default select example">
<option selected>Grade</option>
<option value="7">7th</option>
<option value="8">8th</option>
<option value="9">9th</option>
<option value="10">10th</option>
<option value="11">11th</option>
<option value="12">12th</option>

</select>
  <button type="submit" className="btn btn-primary">Submit</button>
</form>
    </div>
  )
}
