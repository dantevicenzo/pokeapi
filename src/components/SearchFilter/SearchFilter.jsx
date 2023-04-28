import './SearchFilter.css'

var expanded = false;

function showCheckboxes() {
  var checkboxes = document.getElementById("checkboxes");
  if (!expanded) {
    checkboxes.style.display = "block";
    expanded = true;
  } else {
    checkboxes.style.display = "none";
    expanded = false;
  }
}

export default function SearchFilter() {
  return (
    <div>
        <div className="multiselect">
            <div className="selectBox" onClick={ showCheckboxes }>
                <select>
                    <option>Tipo</option>
                </select>
                <div className="overSelect"></div>
            </div>
            <div id="checkboxes">
                <label htmlFor="one">
                    <input type="checkbox" id="one" />Fire
                </label>
                <label htmlFor="two">
                    <input type="checkbox" id="two" />Normal
                </label>
                <label htmlFor="three">
                    <input type="checkbox" id="three" />Eletric
                </label>
            </div>
        </div>
    </div>
  )
}
