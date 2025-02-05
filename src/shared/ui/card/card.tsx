import React from "react";
import { Card, CardContent, CardMedia, Typography } from "@mui/material";

interface CardProps {
  image: string;
  title: string;
  description: string;
}

const CustomCard: React.FC<CardProps> = ({ image, title, description }) => {
  return (
    <Card>
      <CardMedia component="img" image={image} alt={title} />
      <CardContent>
        <Typography variant="h6">{title}</Typography>
        <Typography variant="body2">{description}</Typography>
      </CardContent>
    </Card>
  );
};

export default CustomCard;
