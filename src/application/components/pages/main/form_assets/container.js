import { postAssetsDetailsRequest, storeAssetsDetailsRequest } from "application/redux/actions/assets"
import { connect } from "react-redux"
import FormAssetsComponent from "./component"

const mapStateToProps = (state) => ({
    requestFormPayload: state.assets.requestFormPayload,
    isSucceed: state.assets.succeed,
})

const mapDispatchToProps = dispatch => ({
    onCalculateAssets: payload => {
        dispatch(postAssetsDetailsRequest(payload))
        dispatch(storeAssetsDetailsRequest(payload))
    }
})


export default connect(
    mapStateToProps, mapDispatchToProps
)(FormAssetsComponent)