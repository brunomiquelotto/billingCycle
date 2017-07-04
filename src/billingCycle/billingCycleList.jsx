import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { getList } from './billingCycleActions'

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
                </tr>
            )
        })
    }

}
const mapStateToProps = state => ({ list: state.billingCycle.list })
const mapDispatchToProps = dispatch => bindActionCreators( { getList }, dispatch ) 
export default connect(mapStateToProps, mapDispatchToProps)(BillingCycleList)