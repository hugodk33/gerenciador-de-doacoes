interface ChildProps {
    onClick: () => any,
    children?: React.ReactNode
}

export const Btn: React.FC<ChildProps> = (props) => {
    return (
        <button onClick={props.onClick} className="btn-p w-full items-center block text-white font-semibold uppercase bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">
            {
                props.children
            }
        </button>
    )
}

export const BtnS: React.FC<ChildProps> = (props) => {
    return (
        <button onClick={props.onClick} className="btn-p w-full items-center block text-white font-semibold uppercase bg-gradient-to-r from-gray-400 via-gray-500 to-gray-500 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-cyan-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">
            {
                props.children
            }
        </button>
    )
}

export const BtnR: React.FC<ChildProps> = (props) => {
    return (
        <button onClick={props.onClick} className="flex rounded-full justify-center bg-gray-100 drop-shadow-md w-10 h-10 text-gray mr-2 ml-4">
            {
                props.children
            }
        </button>
    )
}

//onClick={props.onclick}

//<button type="button" class="text-white bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 shadow-lg shadow-cyan-500/50 dark:shadow-lg dark:shadow-cyan-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">Cyan</button>
