import Home from "@/pages/home"
import { BrowserRouter, Routes, Route } from "react-router-dom"

export default function routes() {
  return (
    <BrowserRouter>
        <Routes>
            <Route path="/home" element={<Home></Home>}></Route>
        </Routes>
    </BrowserRouter>
  )
}
