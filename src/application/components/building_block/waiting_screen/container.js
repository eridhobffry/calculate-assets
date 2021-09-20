import { connect } from 'react-redux'

import WaitingScreen from './component'

const mapStateToProps = (state, props) => {
    return {
        waitingScreen: state.waitingScreen,
    }
}

const mapDispatchToProps = () => ({})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(WaitingScreen)