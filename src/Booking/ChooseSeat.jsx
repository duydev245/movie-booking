import React, { Component } from 'react'
import SelectedChair from './SelectedChair'
import TableBooking from './TableBooking'

export default class ChooseSeat extends Component {
    render() {
        return (
            <div className='col-4'>
                <h2 className="mt-5 text-center text-white">YOUR LIST</h2>
                <div className="container">
                    <SelectedChair />
                    <TableBooking />
                </div>
            </div>
        )
    }
}
