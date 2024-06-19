import React, { Component } from 'react'
import { connect } from 'react-redux';
import { TYPE_SELECTED } from './actionType/constant';

class SeatList extends Component {
    render() {
        const { list, bookingList, onSelected } = this.props;
        // console.log('bookingList: ', bookingList);
        const newSeatList = [...list];
        // cut the rowNumber (1st element in Array)
        newSeatList.splice(0, 1);

        return (
            <div className='mt-4'>
                {newSeatList.map((item) => {
                    const { hang, danhSachGhe } = item;
                    return (
                        <div className="chair-row" key={'hang: ' + hang}>

                            <div className='type'>
                                <span className="firstChar">{hang}</span>
                            </div>

                            {danhSachGhe.map((item) => {
                                let booked = '';
                                if (item.daDat) {
                                    booked = "gheDuocChon";
                                }

                                let booking = '';

                                let index = bookingList.findIndex((value) => {
                                    return value.soGhe === item.soGhe;
                                })

                                if (index !== -1) {
                                    booking = 'gheDangChon';
                                }

                                return (
                                    <button
                                        key={item.soGhe}
                                        className={`ghe ${booked} ${booking}`}
                                        onClick={() => {
                                            if (!item.daDat) {
                                                onSelected(item);
                                            }
                                        }}
                                    >
                                        {item.soGhe}
                                    </button>
                                )
                            })}

                        </div>
                    )
                })}
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        list: state.movieReducer.list,
        bookingList: state.movieReducer.bookingList
    };
}

const mapDispatchToProps = (dispatch) => {
    return {
        onSelected: (data) => {
            dispatch({ type: TYPE_SELECTED, payload: data });
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SeatList);