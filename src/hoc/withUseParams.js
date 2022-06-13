import { useParams } from 'react-router-dom';

export const withUseParams = (Component) => {
    const UrlCurrent = (props) => {

        let { cardId } = useParams();
        return <Component {...props} cardId={cardId} />
    }
    return UrlCurrent;
}