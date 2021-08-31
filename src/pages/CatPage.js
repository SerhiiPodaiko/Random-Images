import React, {useState} from "react";
import PageLayout from "../components/hoc";
import AutoRefreshComponent from "../components/AutoRefreshComponent";
import CatService from "../service/CatService";

const CatPage = () => {
    const [loading, setIsLoading] = useState(false);
    const [image, setImage] = useState("");

    const update = () => {
        setIsLoading(true);
        CatService.getRandomCat()
            .then(data => {
                setIsLoading(false)
                setImage(CatService.buildUrl(data.url))
            })
    }

    return (
        <PageLayout pageTitle={"CatPage"}>
            <AutoRefreshComponent onUpdate={update} refreshInterval={5000}
                                  title={"Cat"} loading={loading} imgUrl={image} />
        </PageLayout>
    )
}

export default CatPage;