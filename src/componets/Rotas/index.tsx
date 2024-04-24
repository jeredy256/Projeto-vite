import { Route, Routes } from "react-router-dom";
import Main from "../compon/main";

const Rota = () => {
    return(
        <Routes>
            <Route path="/" element={<Main/>} />
        </Routes>
    )
}

export default Rota