import image1 from '../../../assets/images/banner/1.jpg'
import image2 from '../../../assets/images/banner/2.jpg'
import image3 from '../../../assets/images/banner/3.jpg'
import image4 from '../../../assets/images/banner/4.jpg'
import image5 from '../../../assets/images/banner/5.jpg'
import image6 from '../../../assets/images/banner/6.jpg'

const Banner = () => {
    return (
        
            <div className="carousel rounded-xl w-full h-[600px]">
                <div id="slide1" className="carousel-item relative w-full">
                    <img src={image1} className="w-full" />
                    <div className="absolute flex items-center bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00)]  top-0 bottom-0">
                        <div className=' w-2/5 space-y-7 pl-12'>
                        <h2 className='text-6xl font-bold text-white'>Affordable Price for Car Servicing</h2>
                        <p className='text-white'>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                        <div className='flex' >
                            <button className='btn btn-primary mr-5'>Discover More</button>
                            <button className='btn btn-secondary btn-outline'>Latest Peojects</button>
                        </div>
                        </div>
                        
                    </div>
                    <div className="absolute flex gap-5 justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
                        <a href="#slide4" className="btn btn-circle">❮</a>
                        <a href="#slide2" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide2" className="carousel-item relative w-full">
                    <img src={image2} className="w-full" />
                    <div className="absolute flex items-center bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00)]  top-0 bottom-0">
                        <div className=' w-2/5 space-y-7 pl-12'>
                        <h2 className='text-6xl font-bold text-white'>Affordable Price for Car Servicing</h2>
                        <p className='text-white'>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                        <div className='flex' >
                            <button className='btn btn-primary mr-5'>Discover More</button>
                            <button className='btn btn-secondary btn-outline'>Latest Peojects</button>
                        </div>
                        </div>
                        
                    </div>
                    <div className="absolute flex gap-5 justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
                        <a href="#slide1" className="btn btn-circle">❮</a>
                        <a href="#slide3" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide3" className="carousel-item relative w-full">
                    <img src={image3} className="w-full" />
                    <div className="absolute flex items-center bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00)]  top-0 bottom-0">
                        <div className=' w-2/5 space-y-7 pl-12'>
                        <h2 className='text-6xl font-bold text-white'>Affordable Price for Car Servicing</h2>
                        <p className='text-white'>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                        <div className='flex' >
                            <button className='btn btn-primary mr-5'>Discover More</button>
                            <button className='btn btn-secondary btn-outline'>Latest Peojects</button>
                        </div>
                        </div>
                        
                    </div>
                    <div className="absolute flex gap-5 justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
                        <a href="#slide2" className="btn btn-circle">❮</a>
                        <a href="#slide4" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide4" className="carousel-item relative w-full">
                    <img src={image4} className="w-full" />
                    <div className="absolute flex items-center bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00)]  top-0 bottom-0">
                        <div className=' w-2/5 space-y-7 pl-12'>
                        <h2 className='text-6xl font-bold text-white'>Affordable Price for Car Servicing</h2>
                        <p className='text-white'>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                        <div className='flex' >
                            <button className='btn btn-primary mr-5'>Discover More</button>
                            <button className='btn btn-secondary btn-outline'>Latest Peojects</button>
                        </div>
                        </div>
                        
                    </div>
                    <div className="absolute flex gap-5 justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
                        <a href="#slide3" className="btn btn-circle">❮</a>
                        <a href="#slide1" className="btn btn-circle">❯</a>
                    </div>
                </div>
            </div>
        
    );
};

export default Banner;