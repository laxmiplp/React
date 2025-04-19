import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Cards from './Cards/Cards'
import Card from './Cards/Card'
import Table from './Tables/Table'
import SingleTable from './Tables/SingleTable'
const CardRouter = () => {
    return (
        <div>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Cards />} />
                    <Route path="/cards" element={<Cards />} />
                    <Route path="/cards/:id" element={<Card />} />
                    <Route path="/table" element={<Table />} />
                    <Route path="/table/:tableId" element={<SingleTable />} />

                </Routes>
            </BrowserRouter>
        </div>
    )
}

export default CardRouter