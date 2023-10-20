import { useLoaderData } from "react-router-dom";
import Banner from "../../components/Banner/Banner";
import Weprovide from "../../components/weprovide/Weprovide";
import Category from "../../components/Category/Category";
import Featureproduct from "../../components/Featureproduct/Featureproduct";
import { useEffect, useState } from "react";
import Trusted from "../../components/trusted/Trusted";


const Home = () => {
 
const loader=useLoaderData()
// console.log(loader)
    return (
        <div  data-theme="cupcake">
          <Banner></Banner> 
          <Weprovide></Weprovide>
          <Category loader={loader}></Category>
          <Featureproduct  loader={loader}></Featureproduct>
          <Trusted></Trusted>
        </div>
    );
};

export default Home;