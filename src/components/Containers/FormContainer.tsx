
const FormContainer = ({header,grid=3,children}) => {
  return (
    <div className="bg-white shadow rounded">
        <div className="px-4 py-2 border-b text-sm font-semibold">{header}</div>
        <div className={`px-4 pt-4 pb-6`}>
          {children}
        </div>
      </div>
  )
}

export default FormContainer