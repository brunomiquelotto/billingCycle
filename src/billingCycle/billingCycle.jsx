import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import ContentHeader from '../common/template/contentHeader'
import Content from '../common/template/content'
import Tabs from '../common/tab/tabs'
import TabsHeader from '../common/tab/tabsHeader'
import TabHeader from '../common/tab/tabHeader'
import TabsContent from '../common/tab/tabsContent'
import TabContent from '../common/tab/tabContent'

import List from './billingCycleList'

import { selectTab, showTabs } from '../common/tab/tabActions'

class BillingCycle extends Component {

    componentWillMount() {
        this.props.selectTab('tabList')
        this.props.showTabs('tabList', 'tabCreate')
    }
    
    render() {
        return (
            <div>
                <ContentHeader title='Ciclos de pagamentos' small = 'Cadastro' />
                <Content>
                    <Tabs>
                        <TabsHeader>
                            <TabHeader label='Listar' icon='bars' target='tabList'/>
                            <TabHeader label='Incluir' icon='plus' target='tabCreate'/>
                            <TabHeader label='Alterar' icon='pencil' target='tabUpdate'/>
                            <TabHeader label='Excluir' icon='trash' target='tabDelete'/>
                        </TabsHeader>
                        <TabsContent>
                            <TabContent id='tabList'>
                                <List/>
                            </TabContent>
                            <TabContent id='tabCreate'><h1>Inclui</h1></TabContent>
                            <TabContent id='tabUpdate'><h1>Update</h1></TabContent>
                            <TabContent id='tabDelete'><h1>Delete</h1></TabContent>
                        </TabsContent>
                    </Tabs>
                </Content>
            </div>
        )
    }
}

const mapDispatchToProps = dispatch => bindActionCreators({ selectTab, showTabs }, dispatch)
export default connect(null, mapDispatchToProps)(BillingCycle)