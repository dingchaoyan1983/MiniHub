/**
 * body container
 */
import {connect} from 'react-redux';
import MainBody from '../mainbody';

function mapStatesToProps({folders, file}) {
    return {
        folders,
        file
    };
}

export default connect(mapStatesToProps)(MainBody);
