// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import './styles.css';

// import required modules
import { Parallax, Pagination, Navigation } from 'swiper/modules';

const Extra = () => {
  
    return (
        <div className='mb-5'>
          <Swiper
        style={{
          '--swiper-navigation-color': '#fff',
          '--swiper-pagination-color': '#fff',
        }}
        speed={600}
        parallax={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Parallax, Pagination, Navigation]}
        className="mySwiper"
      >
        <div
            slot="container-start"
            className="parallax-bg"
            style={{
                backgroundImage: 'url(https://img.freepik.com/free-photo/view-3d-car-with-simple-background_23-2150998614.jpg?t=st=1701796484~exp=1701800084~hmac=aac348809d1db7eb0bf6cfcad28ea51108a96589e0b239c11f61670b6285aad8&w=996)',
            }}
            data-swiper-parallax="-23%"
            ></div>
            <SwiperSlide>
            <div className="title" data-swiper-parallax="-300">
              Car
            </div>
            <div className="subtitle" data-swiper-parallax="-200">
              new
            </div>
            <div className="text-[16px]" data-swiper-parallax="-100">
              <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cumque totam aspernatur est minus quisquam, vitae aliquam dolore quae, sunt aliquid a soluta provident, libero corrupti! Recusandae, enim? Dolorum recusandae porro adipisci, quis eius rerum eligendi tenetur culpa, accusamus ipsa, possimus voluptatem.
              </p>
            </div>
          </SwiperSlide>
            <SwiperSlide>
            <div className="title" data-swiper-parallax="-300">
              Car
            </div>
            <div className="subtitle" data-swiper-parallax="-200">
              new
            </div>
            <div className="text-[16px] md:pt-10 pt-0" data-swiper-parallax="-100">
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cumque totam aspernatur est minus quisquam, vitae aliquam dolore quae, sunt aliquid a soluta provident, libero corrupti! Recusandae, enim? Dolorum recusandae porro adipisci, quis eius rerum eligendi tenetur culpa, accusamus ipsa, possimus voluptatem. 
              </p>
            </div>
          </SwiperSlide>
            <SwiperSlide>
            <div className="title" data-swiper-parallax="-300">
              Car
            </div>
            <div className="subtitle" data-swiper-parallax="-200">
              new
            </div>
            <div className="text-[16px] md:pt-10 pt-0" data-swiper-parallax="-100">
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cumque totam aspernatur est minus quisquam, vitae aliquam dolore quae, sunt aliquid a soluta provident, libero corrupti! Recusandae, enim? Dolorum recusandae porro adipisci, quis eius rerum eligendi tenetur culpa, accusamus ipsa, possimus voluptatem.
              </p>
            </div>
          </SwiperSlide>
            <SwiperSlide>
            <div className="title" data-swiper-parallax="-300">
              Car
            </div>
            <div className="subtitle" data-swiper-parallax="-200">
              new
            </div>
            <div className="text-[16px] md:pt-10 pt-0" data-swiper-parallax="-100">
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cumque totam aspernatur est minus quisquam, vitae aliquam dolore quae, sunt aliquid a soluta provident, libero corrupti! Recusandae, enim? Dolorum recusandae porro adipisci, quis eius rerum eligendi tenetur culpa, accusamus ipsa, possimus voluptatem.
              </p>
            </div>
          </SwiperSlide>
            <SwiperSlide>
            <div className="title" data-swiper-parallax="-300">
              Car
            </div>
            <div className="subtitle" data-swiper-parallax="-200">
              new
            </div>
            <div className="text-[16px] md:pt-10 pt-0" data-swiper-parallax="-100">
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cumque totam aspernatur est minus quisquam, vitae aliquam dolore quae, sunt aliquid a soluta provident, libero corrupti! Recusandae, enim? Dolorum recusandae porro adipisci, quis eius rerum eligendi tenetur culpa, accusamus ipsa, possimus voluptatem.
              </p>
            </div>
          </SwiperSlide>
      </Swiper>
        </div>
    );
};

export default Extra;



// export default function App() {
//   return (
//     <>
     
//     </>
//   );
// }
