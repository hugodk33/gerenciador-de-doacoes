export function CheckBox({
    label
}: {
    label: string;
}) {
    return (        
        <div className="flex items-center mb-4">
            <input id="checkbox-1" type="checkbox" value="" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
            <label htmlFor="checkbox-1" className="ml-2 text-sm font-medium uppercase text-bold" style={{color: '#1d4ed8'}}>{ label }</label>
        </div>
    )
}