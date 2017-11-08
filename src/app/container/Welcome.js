import { HOTELS, loadHotels } from "../services/welcome";
import Welcome from "../component/Welcome";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";

const mapStateToProps = ( state ) => {
    return {
        [HOTELS]: state.welcome[ HOTELS ]
    };
};

const mapDispatchToProps = ( dispatch ) => {
    return bindActionCreators({ loadHotels }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(Welcome);


