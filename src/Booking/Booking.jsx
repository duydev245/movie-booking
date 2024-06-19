import React, { Component } from 'react'
import Seat from './Seat'
import ChooseSeat from './ChooseSeat'
import './style.css'

export default class Booking extends Component {
    render() {
        return (
            <div className='bookingMovie'>
                <div className="container">
                    <div className="row">
                        <Seat />
                        <ChooseSeat />
                    </div>
                </div>
            </div>
        )
    }
}
