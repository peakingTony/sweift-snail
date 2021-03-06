import { connect } from 'react-redux'
import { graphql, compose } from 'react-apollo'
import RightPane from '../components/RightPane'

import { getPatientInfo } from '../actions'

const mapStateToProps = state => ({
  activedPatient: state.core.activedPatient,
})
export default compose(
  connect(mapStateToProps),
  graphql(getPatientInfo, {
    name: 'getPatientInfo',
    options: props => ({
      fetchPolicy: 'network-only',
      variables: {
        patientId: props.activedPatient.patientId || props.patientId,
      },
    }),
  }),
)(RightPane)
