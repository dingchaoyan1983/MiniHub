/**
 * body container
 */
import {connect} from 'react-redux';
import MainBody from '../mainbody';

function mapStatesToProps({ file }) {
    return {
        file
    };
}

export default connect(mapStatesToProps)(MainBody);
