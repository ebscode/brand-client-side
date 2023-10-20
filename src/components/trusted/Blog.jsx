import Aos from 'aos';
import React, { useEffect } from 'react';

const Blog = () => {
    useEffect(()=>{

        Aos.init({duration: 2000});


    },[])
    return (
        <div data-aos="fade-up"
        data-aos-duration="1000">
            <section className="py-6 sm:py-12 ">
	<div className="container p-6 mx-auto space-y-8">
		<div className="space-y-2 text-center">
			<h2 className="text-3xl font-bold">Latest technology news & articles</h2>
			<p className="font-serif text-sm dark:text-gray-400"></p>
		</div>
		<div className="grid grid-cols-1 gap-x-4 gap-y-8 md:grid-cols-2 lg:grid-cols-4">
			<article className="flex flex-col ">
				<a rel="noopener noreferrer" href="#" aria-label="Te nulla oportere reprimique his dolorum">
					<img alt="" className="object-cover w-full h-52 dark:bg-gray-500" src="https://www.91-cdn.com/hub/wp-content/uploads/2023/09/pixel-8-teaser.jpg" />
				</a>
				<div className="flex flex-col flex-1 p-6">
					<a rel="noopener noreferrer" href="#" aria-label="Te nulla oportere reprimique his dolorum"></a>
					<a rel="noopener noreferrer" href="#" className="text-xs tracki uppercase hover:underline dark:text-blue-400">read</a>
					<h3 className="flex-1 py-2 text-lg font-semibold leadi">7 years of software updates for the Pixel 8 series</h3>
					<div className="flex flex-wrap justify-between pt-3 space-x-2 text-xs dark:text-gray-400">
						<span>June 1, 2023</span>
						<span>2.1K views</span>
					</div>
				</div>
			</article>
			<article className="flex flex-col ">
				<a rel="noopener noreferrer" href="#" aria-label="Te nulla oportere reprimique his dolorum">
					<img alt="" className="object-cover w-full h-52 " src="https://media.wired.com/photos/64c05fcfeb3f06fa8140d1ce/master/w_1600%2Cc_limit/Samsung-Galaxy-Z-Flip5-and-Fold5-SOURCE-Julian-Chokkattu-Gear.jpg" />
				</a>
				<div className="flex flex-col flex-1 p-6">
					<a rel="noopener noreferrer" href="#" aria-label="Te nulla oportere reprimique his dolorum"></a>
					<a rel="noopener noreferrer" href="#" className="text-xs tracki uppercase hover:underline dark:text-blue-400">read</a>
					<h3 className="flex-1 py-2 text-lg font-semibold leadi">Galaxy Z Flip5 and Z Fold5: Delivering Positive Impact for the Planet</h3>
					<div className="flex flex-wrap justify-between pt-3 space-x-2 text-xs dark:text-gray-400">
						<span>June 2, 2023</span>
						<span>2.2K views</span>
					</div>
				</div>
			</article>
			<article className="flex flex-col ">
				<a rel="noopener noreferrer" href="#" aria-label="Te nulla oportere reprimique his dolorum">
					<img alt="" className="object-cover w-full h-52 " src="https://fs.npstatic.com/userfiles/7687254/image/Sony_Xperia_Pro-I/NextPit_Sony_Xperia_Pro_I_Camera-w810h462.jpg" />
				</a>
				<div className="flex flex-col flex-1 p-6">
					<a rel="noopener noreferrer" href="#" aria-label="Te nulla oportere reprimique his dolorum"></a>
					<a rel="noopener noreferrer" href="#" className="text-xs tracki uppercase hover:underline dark:text-blue-400">read</a>
					<h3 className="flex-1 py-2 text-lg font-semibold leadi">Sony Xperia Pro-II May Shockingly Sport a Dual 1-inch Camera</h3>
					<div className="flex flex-wrap justify-between pt-3 space-x-2 text-xs dark:text-gray-400">
						<span>June 3, 2023</span>
						<span>2.3K views</span>
					</div>
				</div>
			</article>
			<article className="flex flex-col ">
				<a rel="noopener noreferrer" href="#" aria-label="Te nulla oportere reprimique his dolorum">
					<img alt="" className="object-cover w-full h-52 " src="https://www.pcworld.com/wp-content/uploads/2023/04/closed-1.jpg?quality=50&strip=all&w=1024" />
				</a>
				<div className="flex flex-col flex-1 p-6">
					<a rel="noopener noreferrer" href="#" aria-label="Te nulla oportere reprimique his dolorum"></a>
					<a rel="noopener noreferrer" href="#" className="text-xs tracki uppercase hover:underline dark:text-blue-400">read</a>
					<h3 className="flex-1 py-2 text-lg font-semibold leadi">Surface Laptop 5 – “Premium and simply gorgeous”</h3>
					<div className="flex flex-wrap justify-between pt-3 space-x-2 text-xs dark:text-gray-400">
						<span>november 4, 2022</span>
						<span>2.4K views</span>
					</div>
				</div>
			</article>
		</div>
	</div>
</section>
        </div>
    );
};

export default Blog;