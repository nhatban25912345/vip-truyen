import 'swiper/css';
import React, { useState } from 'react';
import { Box, Typography } from "@mui/material";
import { useSwipeable } from "react-swipeable";
import './swipeable-book-list.css'

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';

// Custom component for swipeable card
const SwipeableCard = ({ item }) => {
    return (
        <Box>
            <img
                src={item.image}
                alt={item.text}
                style={{
                    width: '100%',
                    height: 'auto',
                    borderRadius: '8px',
                    pointerEvents: 'none' // Disable pointer events for the image
                }}
            />
            <Typography sx={{ marginTop: 1, fontSize: "12px", textColor: "#d1d5db", textAlign: "center" }}>{item.title}</Typography>
        </Box>
    );
};

const SwipeableBookList = ({ data }) => {
    return (
        <Box className='swipe-container'>
            <Swiper
                slidesPerView={5.4}
                spaceBetween={30}
                pagination={{
                    clickable: true,
                }}
                className="mySwiper"
            >
                {Array.isArray(data) && data.map((item) => (
                    <SwiperSlide key={item.id}>
                        <SwipeableCard item={item} />
                    </SwiperSlide>
                ))}
            </Swiper>
        </Box>
    );
};

export default SwipeableBookList;
