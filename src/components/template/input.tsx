export function InputText({
  label
}: {
  label: string;
}) {
  return (
    <div className="relative z-0">
      <input type="text" id="small_standard" className="block w-full px-0 py-2 text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " />
      <label htmlFor="small_standard" className="bg-white absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">{label}</label>
    </div>
  )
}


export function InputTextForms({
  label
}: {
  label: string;
}) {
  return (
    <div className="relative">
      <input type="text" id="small_outlined" className="block px-2.5 pb-1.5 pt-3 w-full text-sm text-gray-900 bg-transparent rounded-lg border-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " />
      <label htmlFor="small_outlined" className="bg-white absolute text-sm text-gray-500 duration-300 transform -translate-y-3 scale-75 top-1 z-10 origin-[0] bg-white peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-1 peer-focus:scale-75 peer-focus:-translate-y-3 left-1">{ label }</label>
    </div>
  )
}

export function InputSelect({
  label
}: {
  label: string;
}) {
  return (
    <div>  
      <label htmlFor="countries" style={{display: 'none'}} className="block mb-2 text-sm font-medium text-gray-900 ">Select an option</label>
      <select className="border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:placeholder-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500">
        <option value="">!!</option>
        <option value="">!</option>
        <option value="">!</option>
      </select>
    </div>
  )
}

export function InputPassword({
  label
}: {
  label: string;
}) {
  return (
    <div className="relative z-0">
      <input type="password" id="small_standard" className="block w-full px-0 py-2 text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " />
      <label htmlFor="small_standard" className="bg-white absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">{label}</label>
    </div>
  )
}

export function InputTextArea({
  label
}: {
  label: string;
}) {
  return (
    <div className="relative">  
      <label htmlFor="message" className="block mb-2 text-sm font-medium text-gray-900">{label}</label>
      <textarea id="message" rows={4} className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500" placeholder=""></textarea>
    </div>
  )
}