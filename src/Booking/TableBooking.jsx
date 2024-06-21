import { Popconfirm, message } from 'antd';
import React, { Component } from 'react'
import { connect } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faX } from '@fortawesome/free-solid-svg-icons';
import { TYPE_COMPLETE, TYPE_DELETED } from './actionType/constant';

class TableBooking extends Component {
    render() {
        const { bookingList, onCancel, onDelected, onComplete } = this.props;
        return (
            <div>
                <table className="table table-striped table-hover mt-4">
                    <thead>
                        <tr>
                            <th scope="col">Seat ID</th>
                            <th scope="col">Price</th>
                            <th className='text-danger' scope="col">Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {bookingList.map((item) => {
                            return (
                                <tr key={item.soGhe}>
                                    <th scope="row">{item.soGhe}</th>
                                    <td>{item.gia} VND</td>
                                    <td>
                                        <Popconfirm
                                            title="Click 'YES' to delete!"
                                            onConfirm={() => onDelected(item)}
                                            onCancel={onCancel}
                                            okText="YES"
                                            cancelText="NO"
                                        >
                                            <button className="btn btn-danger">
                                                <FontAwesomeIcon icon={faX}
                                                    className="fa-sm" />
                                            </button>
                                        </Popconfirm>
                                    </td>
                                </tr>
                            )
                        })}
                        <tr>
                            <th scope="col" className='fs-5 text-danger'>Total</th>
                            <td className='fs-5 text-danger'>
                                {bookingList.reduce((total, item) => {
                                    total += item.gia;
                                    return total;
                                }, 0)} VND
                            </td>
                            <td>
                                {bookingList.length > 0 && (
                                    <button
                                        className="btn btn-success"
                                        onClick={onComplete}
                                    >
                                        <FontAwesomeIcon icon={faCheck}
                                            className="fa-sm" />
                                    </button>
                                )}
                            </td>
                        </tr>
                    </tbody>
                </table>
                <div className='text-center'>

                </div>
            </div>
        )
    }
}


const mapStateToProps = (state) => {
    return {
        bookingList: state.movieReducer.bookingList,
    };
}

const mapDispatchToProps = (dispatch) => {
    return {
        onDelected: (data) => {
            dispatch({ type: TYPE_DELETED, payload: data });
        },

        onCancel: () => {
            return;
        },

        onComplete: () => {
            dispatch({ type: TYPE_COMPLETE });
            message.success('Success!')
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(TableBooking);
