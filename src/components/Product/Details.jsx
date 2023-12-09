import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const Details = () => {
  const loader = useLoaderData();
  const {
    _id,
    productName,
    brandName,
    productType,
    price,
    rating,
    details,
    photoUrl,
    brandLogo,
  } = loader;

  const handleaddcart = () => {
    const data = { _id, productName, brandName, productType, price, photoUrl };
    console.log(data);

    fetch("https://technology-electronics.vercel.app/cart", {
      method: "post",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((sata) => {
        Swal.fire("added product successfully!", "product add !", "success");
        console.log(sata);
      });
  };
  return (
    <div>
      <div className="flex items-center justify-center w-8full">
        <div className="w-full p-4">
          <div className="flex flex-col justify-center p-10 bg-white rounded-lg shadow-2xl card">
            <div className="prod-title">
              <p className="text-2xl font-bold text-gray-900 uppercase">
                {productName}
              </p>
              <p className="text-sm text-gray-400 uppercase"></p>
            </div>
            <div className="prod-img flex flex-col md:flex-row -ml-10 mt-3 gap-4 mb-7">
              <img src={photoUrl} className="object-cover object-center w-64" />
              <p className="">{details}</p>
            </div>
            <div className="grid gap-10 prod-info">
              <div>
                <ul className="flex flex-row items-center justify-center">
                  <li className="mr-4 last:mr-0">
                    <span className="block p-1 transition duration-300 ease-in border-2 border-gray-500 rounded-full">
                      <a
                        href="#blue"
                        className="block w-6 h-6 bg-blue-900 rounded-full"
                      ></a>
                    </span>
                  </li>
                  <li className="mr-4 last:mr-0">
                    <span className="block p-1 transition duration-300 ease-in border-2 border-white rounded-full hover:border-gray-500">
                      <a
                        href="#yellow"
                        className="block w-6 h-6 bg-yellow-500 rounded-full"
                      ></a>
                    </span>
                  </li>
                  <li className="mr-4 last:mr-0">
                    <span className="block p-1 transition duration-300 ease-in border-2 border-white rounded-full hover:border-gray-500">
                      <a
                        href="#red"
                        className="block w-6 h-6 bg-red-500 rounded-full"
                      ></a>
                    </span>
                  </li>
                  <li className="mr-4 last:mr-0">
                    <span className="block p-1 transition duration-300 ease-in border-2 border-white rounded-full hover:border-gray-500">
                      <a
                        href="#green"
                        className="block w-6 h-6 bg-green-500 rounded-full"
                      ></a>
                    </span>
                  </li>
                </ul>
              </div>
              <div className="flex flex-col items-center justify-between text-gray-900 md:flex-row">
                <p className="text-xl font-bold">{price} $</p>
                <button
                  onClick={handleaddcart}
                  className="px-6 py-2 uppercase transition duration-200 ease-in border-2 border-gray-900 rounded-full hover:bg-gray-800 hover:text-white focus:outline-none"
                >
                  Add to cart
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;
