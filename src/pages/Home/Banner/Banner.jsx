import React from 'react';
import banner from '../../../assets/images/banner/5.jpg'
import banner4 from '../../../assets/images/banner/4.jpg'
import banner3 from '../../../assets/images/banner/3.jpg'
import banner2 from '../../../assets/images/banner/2.jpg'

const Banner = () => {
    return (
            <div className="carousel w-full md:h-[600px] rounded-xl ">
                <div id="slide1" className="carousel-item relative w-full">
                    <img src={banner} className="w-full" />
                    <div className="absolute h-full flex items-center bottom-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)] ">
                        <div className='text-white space-y-7 p-2 md:pl-[50px]'>
                            <h2 className='text-2xl md:text-6xl font-semibold'>Affordable <br /> Price For Car <br /> Servicing</h2>
                            <p className=''>There are many variations of passages of  available, but <br /> the majority have suffered alteration in some form</p>
                            <div>
                                <button className="btn text-white mr-4 bg-[#FF3811]  hover:bg-orange-600 border-none">Discover More</button>
                                <button className="btn btn-outline border-gray-50 text-white">Latest Project</button>

                            </div>

                        </div>
                    </div>
                    <div className="absolute flex gap-3 justify-end transform -translate-y-1/2  right-10 bottom-0">
                        <a href="#slide4" className="btn btn-circle">❮</a>
                        <a href="#slide2" className="btn btn-circle bg-[#FF3811]"><span className='text-zinc-50'>❯</span></a>
                    </div>
                </div>
                <div id="slide2" className="carousel-item relative w-full">
                    <img src={banner4} className="w-full" />
                    <div className="absolute h-full flex items-center bottom-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)] ">
                        <div className='text-white space-y-7 p-2 md:pl-[50px]'>
                            <h2 className='text-2xl md:text-6xl font-semibold'>Affordable <br /> Price For Car <br /> Servicing</h2>
                            <p className=''>There are many variations of passages of  available, but <br /> the majority have suffered alteration in some form</p>
                            <div>
                                <button className="btn text-white mr-4 bg-[#FF3811]  hover:bg-orange-600 border-none">Discover More</button>
                                <button className="btn btn-outline border-gray-50 text-white">Latest Project</button>

                            </div>

                        </div>
                    </div>
                    <div className="absolute flex gap-3 justify-end transform -translate-y-1/2  right-10 bottom-0">
                        <a href="#slide1" className="btn btn-circle">❮</a>
                        <a href="#slide3" className="btn btn-circle bg-[#FF3811]"><span className='text-zinc-50'>❯</span></a>
                    </div>
                </div>
                <div id="slide3" className="carousel-item relative w-full">
                    <img src={banner3} className="w-full" />
                    <div className="absolute h-full flex items-center bottom-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)] ">
                        <div className='text-white space-y-7 p-2 md:pl-[50px]'>
                            <h2 className='text-2xl md:text-6xl font-semibold'>Affordable <br /> Price For Car <br /> Servicing</h2>
                            <p className=''>There are many variations of passages of  available, but <br /> the majority have suffered alteration in some form</p>
                            <div>
                                <button className="btn text-white mr-4 bg-[#FF3811] hover:bg-orange-600 border-none">Discover More</button>
                                <button className="btn btn-outline border-gray-50 text-white">Latest Project</button>

                            </div>

                        </div>
                    </div>
                    <div className="absolute flex gap-3 justify-end transform -translate-y-1/2  right-10 bottom-0">
                        <a href="#slide2" className="btn btn-circle">❮</a>
                        <a href="#slide4" className="btn btn-circle bg-[#FF3811]"><span className='text-zinc-50'>❯</span></a>
                    </div>
                </div>
                <div id="slide4" className="carousel-item relative w-full">
                    <img src={banner2} className="w-full" />
                    <div className="absolute h-full flex items-center bottom-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)] ">
                        <div className='text-white space-y-7 p-2 md:pl-[50px]'>
                            <h2 className='text-2xl md:text-6xl font-semibold'>Affordable <br /> Price For Car <br /> Servicing</h2>
                            <p className=''>There are many variations of passages of  available, but <br /> the majority have suffered alteration in some form</p>
                            <div>
                                <button className="btn text-white mr-4 bg-[#FF3811]  hover:bg-orange-600 border-none">Discover More</button>
                                <button className="btn btn-outline border-gray-50 text-white">Latest Project</button>

                            </div>

                        </div>
                    </div>
                    <div className="absolute flex gap-3 justify-end transform -translate-y-1/2  right-10 bottom-0">
                        <a href="#slide3" className="btn btn-circle">❮</a>
                        <a href="#slide1" className="btn btn-circle bg-[#FF3811]"><span className='text-zinc-50'>❯</span></a>
                    </div>
                </div>
            </div>
       
    );
};

export default Banner;