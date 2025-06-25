import {Route, Routes} from 'react-router-dom'
import { Login, Register} from '.'


export function MainRoutes(){
    return (
        <Routes>
            <Route path="/" element={<Login/>}/>
            <Route path="/registro" element={<Register/>}/>
        </Routes>
    )
}