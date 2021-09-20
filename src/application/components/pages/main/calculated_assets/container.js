import { connect } from "react-redux"
import CalculatedAssetsComponent from "./component"
import { refreshAssetsDetailsRequest } from "application/redux/actions/assets"

const mapStateToProps = (state) => ({
    chartData: state.assets.responseFormPayload
})

const mapDispatchToProps = dispatch => ({
    changeValues: () => {
        dispatch(refreshAssetsDetailsRequest())
    }
})


export default connect(
    mapStateToProps, mapDispatchToProps
)(CalculatedAssetsComponent)