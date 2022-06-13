import { searchLine, searchClick } from '../redux/instantSearch-Reducer';
import TopWrapper from './TopWrapper';
import { connect } from 'react-redux';

const mapStateToProps = (state) => {
    return {
        value: state.mainPage.searchSite,
        nameBtnHeader: state.mainPage.nameBtnHeader
    }
}

const TopWrapperContainer = connect(mapStateToProps, { searchLine, searchClick })(TopWrapper);

export default TopWrapperContainer;