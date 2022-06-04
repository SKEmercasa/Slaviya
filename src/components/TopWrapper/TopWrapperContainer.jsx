import { enterSearchStringAC, buttonReplacementAC } from '../redux/instantSearch-Reducer';
import TopWrapper from './TopWrapper';
import { connect } from 'react-redux';

const mapStateToProps = (state) => {
    return {
        value: state.mainPage.searchSite,
        nameBtnHeader: state.mainPage.nameBtnHeader
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        searchLine: (word) => { dispatch(enterSearchStringAC(word)) },
        searchClick: () => { dispatch(buttonReplacementAC()) }
    }
}

const TopWrapperContainer = connect(mapStateToProps, mapDispatchToProps)(TopWrapper);

export default TopWrapperContainer;