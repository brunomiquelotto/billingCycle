import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { getList, showUpdate, showDelete } from './billingCycleActions'

class BillingCycleList extends Component {
    
    componentWillMount() {
        this.props.getList()
    }

    render() {
        return (
            <div>
                <table className='table'>
                    <thead>
                        <tr>
                            <th>Nome</th>
                            <th>Mes</th>
                            <th>Ano</th>
                            <th className='table-actions'>Ações</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.renderRows()}
                    </tbody>
                </table>
            </div>
        )
    }

    renderRows() {
        const list = this.props.list || []
        return list.map(item => {
            return (
                <tr key={item._id}>
                    <td>{item.name}</td>
                    <td>{item.month}</td>
                    <td>{item.year}</td>
                    <td>
                        <button className='btn btn-warning btn-xs' onClick={() => this.props.showUpdate(item)}>
                            <i className='fa fa-pencil'></i>
                        </button>
                        <button className='btn btn-danger btn-xs' onClick={() => this.props.showDelete(item)}>
                            <i className='fa fa-trash-o'></i>
                        </button>
                    </td>
                </tr>
            )
        })
    }

}
const mapStateToProps = state => ({ list: state.billingCycle.list })
const mapDispatchToProps = dispatch => bindActionCreators( { getList, showUpdate, showDelete }, dispatch ) 
export default connect(mapStateToProps, mapDispatchToProps)(BillingCycleList)