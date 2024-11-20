import { ReactNode } from "react"

import { Login } from "./Login";


type Props = {
    children: ReactNode
}
export const ProtectedRoute = ({ children }: Props) => {
    const logged = true;
    return (
        <div>
            {logged
                ? children
                : <Login />
            }
        </div>
    )
}