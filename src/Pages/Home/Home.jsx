import { useLoaderData } from "react-router-dom";
import Banner from "./Banner/Banner";
import ServiceCard from "./serviceCard/ServiceCard";


const Home = () => {
    const loadedServices= useLoaderData()
    
    return (
        <div className="space-y-10">
            <Banner></Banner>
            <h2 className="text-4xl text-orange-700 text-center"> Our services</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {
                loadedServices?.map(item=> <ServiceCard key={item._id} card={item}></ServiceCard> )
            }

            </div>
        </div>
    );
};

export default Home;