import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper";

export default function HowItWorksTiles() {
  return (
    <>
      <Container className="how_it_works_mobile">
        <Row>
          <Col>
            <Swiper
              observer={true}
              slidesPerView={4}
              spaceBetween={0}
              pagination={{
                type: "progressbar",
              }}
              navigation={true}
              modules={[Pagination, Navigation]}
              breakpoints={{
                320: {
                  slidesPerView: 1,
                },
                768: {
                  slidesPerView: 2,
                },
                1024: {
                  slidesPerView: 4,
                },
              }}
              className="mySwiper"
            >
              <SwiperSlide>
                <div className="how_mobile_tile">
                  <img
                    className="how_img"
                    src="/img1.png"
                    alt="img"
                    width={193}
                    height={272}
                    priority
                  />
                  <div className="progressbar"></div>
                  <p className="how_text">
                    The system receives the document as input (from a scan, an
                    email, etc.)
                  </p>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="how_mobile_tile">
                  <img
                    className="how_img"
                    src="/img2.png"
                    alt="img"
                    width={193}
                    height={272}
                    priority
                  />
                  <div className="progressbar"></div>
                  <p className="how_text">
                    The machine identifies the document type and classifies it
                    accordingly.
                  </p>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="how_mobile_tile">
                  <img
                    className="how_img"
                    src="/img3.png"
                    alt="img"
                    width={193}
                    height={272}
                    priority
                  />
                  <div className="progressbar"></div>
                  <p className="how_text">
                    It recognizes the areas where the important information
                    resides on the document.
                  </p>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="how_mobile_tile">
                  <img
                    className="how_img"
                    src="/img4.png"
                    alt="img"
                    width={193}
                    height={272}
                    priority
                  />
                  <div className="progressbar"></div>
                  <p className="how_text">
                    It extracts the key information, which can be sent for
                    further processing or storing.
                  </p>
                </div>
              </SwiperSlide>
            </Swiper>
          </Col>
        </Row>
      </Container>
    </>
  );
}
