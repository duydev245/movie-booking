import React, { Component } from 'react'
import { connect } from 'react-redux';

class RowNumber extends Component {
    render() {
        const { list } = this.props;
        // copy the rowNumber (1st element in Array)
        const rowNumList = [...list].splice(0, 1);

        return (
            <div className='mt-4 first-row'>
                <button className="rowNumber" disabled>#</button>
                {rowNumList.map((item) => {
                    const { danhSachGhe } = item;
                    return danhSachGhe.map((item) => {
                        return (
                            <button
                                key={item.soGhe}
                                className="rowNumber"
                                disabled
                            >
                                {item.soGhe}
                            </button>
                        )
                    })
                })}
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        list: state.movieReducer.list,
    };
}

const mapDispatchToProps = (dispatch) => {
    return {}
}

export default connect(mapStateToProps, mapDispatchToProps)(RowNumber);