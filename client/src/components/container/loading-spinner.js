/**
 * loading spinner redux container component, used for pass in the state and action 
 */
import { connect } from 'react-redux';
import LoadingSpinner from '../loading-spinner';

function mapStateToProps({loadingSpinner}) {
    return {
        loadingSpinner
    }
}

export default connect(mapStateToProps)(LoadingSpinner);
