
import Featurecard from "./Featurecard";

const Featureproduct = ({loader}) => {



    return (
       <div>
        <h1 className="font-semibold text-3xl m-8 text-center">FEATURED PRODUCTS </h1>
         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-6">
          {
            loader.map(get=><Featurecard key={get.id} data={get} ></Featurecard>)
          }
        </div>
       </div>
    );
};

export default Featureproduct;