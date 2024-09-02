import React, { useState } from 'react';
import { Box, IconButton } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

interface CorouselProps {
  items: (JSX.Element)[]
}

export const Carousel: React.FC<CorouselProps> = ({ items }) => {
  const [index, setIndex] = useState(0);
  const itemsToShow = 3;
  const totalItems = items.length;

  const nextSlide = () => {
    setIndex((prevIndex) => (prevIndex + 1) % (totalItems - itemsToShow + 1));
  };

  const prevSlide = () => {
    setIndex((prevIndex) => (prevIndex - 1 + (totalItems - itemsToShow + 1)) % (totalItems - itemsToShow + 1));
  };

  return (
    <Box sx={{ position: 'relative', width: '100%', overflow: 'hidden' }}>
      <Box sx={{
        display: 'flex',
        transition: 'transform 0.5s ease-in-out',
        transform: `translateX(-${index * (100 / itemsToShow)}%)`
      }}>
        {items.map((item, i) => (
          <Box
            key={i}
            sx={{
              minWidth: `${100 / itemsToShow}%`,
              padding: 1,
              marginX: 1,
              boxSizing: 'border-box',
              textAlign: 'center',
              backgroundColor: '#f5f5f5',
              border: '1px solid #ddd',
            }}
          >
            {item}
          </Box>
        ))}
      </Box>
      <IconButton
        onClick={prevSlide}
        sx={{ position: 'absolute', top: '50%', left: 0, transform: 'translateY(-50%)' }}
      >
        <ArrowBackIcon />
      </IconButton>
      <IconButton
        onClick={nextSlide}
        sx={{ position: 'absolute', top: '50%', right: 0, transform: 'translateY(-50%)' }}
      >
        <ArrowForwardIcon />
      </IconButton>
    </Box>
  );
};
