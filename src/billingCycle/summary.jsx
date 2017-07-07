import React from 'react'

import Row from '../common/layout/row'
import Grid from '../common/layout/grid'
import ValueBox from '../common/widget/valueBox'

export default ({debt, credit}) => (
    <Grid cols='12'>
        <fieldset>      
            <legend>Resumo</legend>
            <Row>
                <ValueBox cols='12 4' color='green' icon='bank' value={`R$ ${credit}`} text='Total de créditos'/>
                <ValueBox cols='12 4' color='red' icon='credit-card' value={`R$ ${debt}`} text='Total de débitos' />
                <ValueBox cols='12 4' color='blue' icon='credit-card' value={`R$ ${credit - debt}`} text='Total consolidado' />
            </Row>
        </fieldset>
    </Grid>
    
)