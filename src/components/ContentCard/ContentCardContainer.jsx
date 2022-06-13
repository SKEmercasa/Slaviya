import React from 'react';
import ContentCard from './ContentCard';
import { connect } from 'react-redux';
import { showCurrentCard } from '../redux/cardGoods-Reducer';
import { withUseParams } from '../../hoc/withUseParams';

class ContentCardApi extends React.Component {

    componentDidMount() {
        this.props.showCurrentCard();
    }

    render() {
        return <ContentCard {...this.props} />
    }
}

const UrlCurrent = withUseParams(ContentCardApi);


const mapStateToProps = (state) => {
    return {
        card: state.cardGoods.isShowCurrentCard
    }
}

const ContentCardContainer = connect(mapStateToProps, { showCurrentCard })(UrlCurrent);

export default ContentCardContainer;