import React, { Component } from 'react'

export default class SelectedChair extends Component {
    render() {
        return (
            <div className="mt-5">
                <button className="gheDuocChon"></button>
                <span className='fs-4 ms-2'>Reserved</span>
                <br />
                <button className="gheDangChon"></button>
                <span className='fs-4 ms-2'>Booking</span>
                <br />
                <button className="ghe"></button>
                <span className='fs-4 ms-2'>Available</span>
            </div>
        )
    }
}
