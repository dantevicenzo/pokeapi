/* eslint-disable react/prop-types */
import SearchFilterCheckBox from '../SearchFilterCheckBox/SearchFilterCheckBox';
import './SearchFilter.css'

let expanded = false;

function showCheckboxes(id) {
    let clickedCheckboxes = document.getElementById("checkboxes" + id);
    let clickedExpanded = clickedCheckboxes.style.display == "block";
  
    if (!expanded) {
      clickedCheckboxes.style.display = "block";
      expanded = true;
    } else if (clickedExpanded){
      //pegar todas as checkboxes
      hideAllCheckboxes();
      expanded = false;
    } else {
      hideAllCheckboxes();
      clickedCheckboxes.style.display = "block";
      expanded = true;
    }
  }

  function hideAllCheckboxes(){
    let allCheckboxes = Array.from(document.querySelectorAll('.checkboxes'));
    allCheckboxes.map( (checkboxes) => {
      checkboxes.style.display = "none";
    })
  }

export default function SearchFilter(props) {

    const checkboxes = props.checkboxes.map((checkbox) =>
        <SearchFilterCheckBox key={checkbox.id} id={checkbox.id} label={checkbox.label} />
    );

  return (
    <div className="multiselect">
        <div className="selectBox" onClick={ () => showCheckboxes(props.id) }>
            <select>
                <option>{props.filterName}</option>
            </select>
            <div className="overSelect"></div>
        </div>
        <div id={"checkboxes" + props.id}  className='checkboxes'>
            {checkboxes}
        </div>
    </div>
  )
}
