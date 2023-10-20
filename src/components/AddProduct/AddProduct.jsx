import Swal from "sweetalert2";

const AddProduct = () => {
  const handleAdd = (event) => {
    event.preventDefault();
    const form = event.target;
    const productName = form.productName.value;
    const brandName = form.brandName.value;
    const productType = form.productType.value;
    const price = form.price.value;
    const rating = form.rating.value;
    const details = form.details.value;
    const photoUrl = form.photoUrl.value;
    const brandLogo = form.brandLogo.value;
    const product = {
      productName,
      brandName,
      productType,
      price,
      rating,
      details,
      photoUrl,
      brandLogo,
    };
    console.log(product);

    fetch(
      "https://technology-electronics-ij95miteu-shohebs-projects.vercel.app/product",
      {
        method: "post",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(product),
      }
    )
      .then((res) => res.json())
      .then((data) => {
        Swal.fire("Good job!", "product added!", "success");
        console.log(data);
      });
  };
  return (
    <div>
      <div className="h-screen flex justify-center items-center">
        <div className=" rounded-xl bg-gray-100 bg-clip-border text-gray-700 shadow-none">
          <form
            onSubmit={handleAdd}
            className="mt-8 mb-2 w-80 max-w-screen-lg  sm:w-auto"
          >
            <div className="mb-4  grid grid-cols-1  md:grid-cols-2 gap-6  p-4">
              <div className="relative h-11 w-full min-w-[200px]">
                <input
                  className="peer bg-white h-full w-full rounded-md border border-blue-gray-200 border-t-transparent bg-transparent px-3 py-3 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-sky-900 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
                  placeholder=" product name "
                  name="productName"
                />
              </div>

              <div className="relative h-11 w-full min-w-[200px]">
                <input
                  className="peer h-full bg-white w-full rounded-md border border-blue-gray-200 border-t-transparent bg-transparent px-3 py-3 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-sky-900 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
                  placeholder="Brand Name"
                  name="brandName"
                />
              </div>

              <div className="relative h-11 w-full min-w-[200px]">
                <input
                  className="peer h-full bg-white w-full rounded-md border border-blue-gray-200 border-t-transparent bg-transparent px-3 py-3 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-sky-900 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
                  placeholder="product type"
                  name="productType"
                />
              </div>

              <div className="relative h-11 w-full min-w-[200px]">
                <input
                  className="peer h-full bg-white w-full rounded-md border border-blue-gray-200 border-t-transparent bg-transparent px-3 py-3 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-sky-900 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
                  placeholder="price"
                  name="price"
                />
              </div>

              <div className="relative h-11 w-full min-w-[200px]">
                <input
                  className="peer h-full bg-white w-full rounded-md border border-blue-gray-200 border-t-transparent bg-transparent px-3 py-3 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-sky-900 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
                  placeholder=" rating"
                  name="rating"
                />
              </div>

              <div className="relative h-11 w-full min-w-[200px]">
                <input
                  className="peer h-full bg-white w-full rounded-md border border-blue-gray-200 border-t-transparent bg-transparent px-3 py-3 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-sky-900 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
                  placeholder=" details"
                  name="details"
                />
              </div>

              <div className="relative h-11 w-full col-span-2 min-w-full">
                <input
                  className="peer h-full bg-white w-full rounded-md border border-blue-gray-200 border-t-transparent bg-transparent px-3 py-3 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-sky-900 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
                  placeholder=" product image"
                  name="photoUrl"
                />
                <input
                  className="peer mt-3 bg-white w-full rounded-md border border-blue-gray-200 border-t-transparent bg-transparent px-3 py-3 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-sky-900 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50 mb-2"
                  placeholder="brand logo"
                  name="brandLogo"
                />
              </div>
            </div>

            <button
              className="mt-9 w-full select-none rounded-lg bg-sky-900 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-pink-500/20 transition-all hover:shadow-lg hover:shadow-pink-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
              type="submit"
              data-ripple-light="true"
            >
              {/* <input type="submit" value="    
" /> */}
              add product
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddProduct;
