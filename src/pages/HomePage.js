import React, {Component} from "react";
import PageLayout from "../components/hoc";
import AutoRefreshComponent from "../components/AutoRefreshComponent";
import CatService from "../service/CatService";
import DogService from "../service/DogService";
import FoxService from "../service/FoxService";

export default class HomePage extends Component {
    state = {
        cat: {
            image: "",
            loading: false,
        },
        dog: {
            image: "",
            loading: false,
        },
        fox: {
            image: "",
            loading: false,
        },
    }

    updateCatImage = () => {
        this.setState({...this.state, cat: {...this.state.cat, loading: true}});
        CatService.getRandomCat()
            .then(data => {
                this.setState({
                    ...this.state, cat: {
                        image: CatService.buildUrl(data.url),
                        loading: false,
                    }
                })
            });
    }

    updateDogImage = () => {
        this.setState({...this.state, dog: {...this.state.dog, loading: true}});
        DogService.getRandomDog()
            .then(data => {
                this.setState({
                    ...this.state, dog: {
                        image: data.message,
                        loading: false,
                    }
                })
            })
    }

    updateFoxImage = () => {
        this.setState({...this.state, fox: {...this.state.fox, loading: true}});
        FoxService.getRandomFox()
            .then(data => {
                this.setState({
                    ...this.state, fox: {
                        image: data.image,
                        loading: false,
                    }
                })
            })

    }

    render() {
        const {
            cat: { loading: isLoadingCat, image: catImage },
            dog: { loading: isLoadingDog, image: dogImage },
            fox: { loading: isLoadingFox, image: foxImage }
        } = this.state;

        return (
            <PageLayout pageTitle={"HomePage"}>
                <AutoRefreshComponent onUpdate={this.updateCatImage}
                                      refreshInterval={5000} loading={isLoadingCat}
                                      title={"Cat"} imgUrl={catImage}/>

                <AutoRefreshComponent onUpdate={this.updateDogImage}
                                      refreshInterval={10000} loading={isLoadingDog}
                                      title={"Dog"} imgUrl={dogImage}/>

                <AutoRefreshComponent onUpdate={this.updateFoxImage}
                                      refreshInterval={15000} loading={isLoadingFox}
                                      title={"Fox"} imgUrl={foxImage}/>
            </PageLayout>
        )
    }
}
