import React, { Component } from 'react'
import Screen from './Screen';
import SeatList from './SeatList';
import RowNumber from './RowNumber';

export default class Seat extends Component {
    render() {

        return (
            <div className='col-8 text-center'>
                <h1 className='text-warning'>ONLINE BOOKING MOVIE TICKET</h1>
                <Screen />
                <RowNumber />
                <SeatList />
            </div>
        )
    }
}
