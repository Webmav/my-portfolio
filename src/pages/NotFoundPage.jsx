import { FaExclamationTriangle } from "react-icons/fa"

export default function NotFoundPage() {
    return(
        <div className="grid justify-center mx-inline my-75">
            <FaExclamationTriangle className="text-yellow-400 text-8xl mb-4"/>
            <h1 className="mx-inline justify-self-center">Not Found</h1>
        </div>
    )
}