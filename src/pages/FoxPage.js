import React, {useState} from "react";
import PageLayout from "../components/hoc";
import AutoRefreshComponent from "../components/AutoRefreshComponent";
import FoxService from "../service/FoxService";

const FoxPage = () => {
    const [loading, setIsLoading] = useState(false);
    const [image, setImage] = useState("");

    const update = () => {
        setIsLoading(true);
        FoxService.getRandomFox()
            .then(data => {
                setIsLoading(false)
                setImage(data.image)
            })
    }

    return (
        <PageLayout pageTitle={"FoxPage"}>
            <AutoRefreshComponent onUpdate={update} refreshInterval={15000}
                                  title={"Fox"} loading={loading} imgUrl={image} />
        </PageLayout>
    )
}

export default FoxPage;