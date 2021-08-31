import React, {Component} from "react";
import Spinner from "../Spinner";
import notFound from "../../img/not-found.jpg";

class AutoRefreshComponent extends Component {
    state = {
        interval: "",
    }

    componentDidMount() {
        const {onUpdate, refreshInterval} = this.props;

        onUpdate();
        const interval = setInterval(onUpdate, refreshInterval);
        this.setState({
            interval
        })
    }

    componentWillUnmount() {
        clearInterval(this.state.interval);
    }

    render() {
        const {title, loading, imgUrl} = this.props;
        return (
            <section className="block">
                <>
                    {loading ? <Spinner/> :
                        <>
                            <h4>{title}</h4>
                            <img src={imgUrl || notFound} alt={title}/>
                        </>}
                </>
            </section>
        );
    }
}

export default AutoRefreshComponent;