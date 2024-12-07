import { TextField } from '@mui/material'

const Input = ({label,id,placeholder,type,value,onChange,name,required=false}) => {
  return (
    <div className="flex flex-col gap-[5px]">
    {label && <label htmlFor={id} className="text-textPrimary text-xs font-semibold">
      {label}
    </label>}
    <TextField id={id} value={value} required={required} onChange={onChange} name={name} size="small" type={type} placeholder={placeholder} />
  </div>
  )
}

export default Input