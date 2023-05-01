/* eslint-disable react/prop-types */
import './SearchBar.css'

export default function SearchBar({value, onChange, onKeyUp}) {
  return (
    <>
    <input type="text" value={value} onKeyUp={onKeyUp} onChange={onChange} placeholder="Search by name or national number"></input>
    </>
  )
}
