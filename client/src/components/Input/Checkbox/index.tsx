import { ICheckbox } from './types'

const Checkbox = ({ label, checked, handleClick }: ICheckbox) => {
  return (
    <div>
      <input
        type="checkbox"
        name="checkbox-input"
        checked={checked}
        onClick={handleClick}
      />
      <label htmlFor="checkbox-input">{label}</label>
    </div>
  )
}
export default Checkbox
