import React, {useState} from "react";
import PageLayout from "../components/hoc";
import AutoRefreshComponent from "../components/AutoRefreshComponent";
import DogService from "../service/DogService";

const DogPage = () => {
    const [loading, setIsLoading] = useState(false);
    const [image, setImage] = useState("");

    const update = () => {
        setIsLoading(true);
        DogService.getRandomDog()
            .then(data => {
                setIsLoading(false)
                setImage(data.message)
            })
    }

    return (
        <PageLayout pageTitle={"DogPage"}>
            <AutoRefreshComponent onUpdate={update} refreshInterval={10000}
                                  title={"Dog"} loading={loading} imgUrl={image} />
        </PageLayout>
    )
}

export default DogPage;