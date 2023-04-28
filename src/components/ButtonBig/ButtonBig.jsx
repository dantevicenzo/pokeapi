/* eslint-disable react/prop-types */
import './ButtonBig.css'

export default function ButtonBig(props) {
  return (
    <button className='buttonBig' style={{backgroundColor: props.color}} onClick={ () => location.href=props.href }>{props.text}</button>
  )
}