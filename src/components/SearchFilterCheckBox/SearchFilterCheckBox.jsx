/* eslint-disable react/prop-types */

export default function SearchFilterCheckBox(props) {
  return (
    <label htmlFor={props.id}>
        <input type="checkbox" id={props.id} />{props.label}
    </label>
  )
}
