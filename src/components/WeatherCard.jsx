import React from 'react';
import PropTypes from 'prop-types';
import '../App.css';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const WeatherCard = ({ cityName, temperature }) => {
  return (
    <>
      <div className='weather-card'>
        <Card sx={{ maxWidth: 345 }}>
          <CardMedia
            component="img"
            alt="Weather"
            height="140"
            image="weatherImage.jpg" // Placeholder image
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Weather in {cityName}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Temperature: {temperature} °C
            </Typography>
          </CardContent>
          {/* <CardActions>
            <Button size="small">Share</Button>
            <Button size="small">Learn More</Button>
          </CardActions> */}
        </Card>
      </div>
    </>
  );
};

WeatherCard.propTypes = {
  cityName: PropTypes.string.isRequired,
  temperature: PropTypes.string.isRequired,
};

export default WeatherCard;
