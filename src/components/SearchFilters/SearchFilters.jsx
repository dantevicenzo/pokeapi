import SearchFilter from '../SearchFilter/SearchFilter';
import './SearchFilters.css';

const typeCheckboxes = [
  {
    id: "t-Fire",
    label: "Fire"
  },
  {
    id: "t-Normal",
    label: "Normal"
  },
  {
    id: "t-Eletric",
    label: "Eletric"
  },
  {
    id: "t-Water",
    label: "Water"
  },
];

const attackCheckboxes = [
  {
    id: "a-Adaptability",
    label: "Adaptability"
  },
  {
    id: "a-Aftermath",
    label: "Aftermath"
  },
  {
    id: "a-Bulletproof",
    label: "Bulletproof"
  },
  {
    id: "a-Healer",
    label: "Healer"
  },
];

const weaknessCheckboxes = [
  {
    id: "w-Adaptability",
    label: "Adaptability"
  },
  {
    id: "w-Aftermath",
    label: "Aftermath"
  },
  {
    id: "w-Bulletproof",
    label: "Bulletproof"
  },
  {
    id: "w-Healer",
    label: "Healer"
  },
];

export default function SearchFilters() {
  return (
    <div className='searchFilterContainer'>
        <SearchFilter filterName="Type" checkboxes={ typeCheckboxes } id={ 1 }  />
        <SearchFilter filterName="Attack" checkboxes={ attackCheckboxes } id={ 2 }  />
        <SearchFilter filterName="Weakness" checkboxes={ weaknessCheckboxes } id={ 3 }  />
    </div>
  )
}
