import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Card, CardContent, CardMedia, List, ListItem, Typography,Button } from '@mui/material';

const styles = {
    header: {
      background: "url('http://www.autodatz.com/wp-content/uploads/2017/05/Old-Car-Wallpapers-Hd-36-with-Old-Car-Wallpapers-Hd.jpg')",
      textAlign: 'center',
      width: '100%',
      height: '450px',
      backgroundSize: 'cover',
      backgroundAttachment: 'fixed',
      position: 'relative',
      overflow: 'hidden',
      borderRadius: '0 0 85% 85% / 30%',
    },
    overlay: {
      width: '100%',
      height: '100%',
      padding: '10px',
      color: '#FFF',
      textShadow: '1px 1px 1px #333',
      backgroundImage: 'linear-gradient(135deg, #9f05ff69 10%, #fd5e086b 100%)',
      overflow:'hidden'
    },
    h1: {
      fontFamily: 'Dancing Script, cursive',
      fontSize: '80px',
      marginBottom: '30px',
      
    },
    h3: {
      fontFamily: 'Open Sans, sans-serif',
      marginBottom: '30px',
      fontSize:'20px'
    },
    p: {
      margin: '30px',
      fontSize: '20px'
    },
    button: {
      border: 'none',
      outline: 'none',
      padding: '10px 20px',
      borderRadius: '50px',
      color: '#333',
      background: '#fff',
      marginBottom: '50px',
      boxShadow: '0 3px 20px 0 #0000003b',
      cursor: 'pointer',
    },
  };
  

const PetList = () => {
  const { petType } = useParams();
  const [typeOfPet, setTypeOfPet] = useState([]);
  const [apiKey, setApiKey] = useState('');
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPets = async () => {
      let url = '';
      let key = '';
      if (petType === "Dog") {
        url = `https://api.thedogapi.com/v1/images/search?size=med&mime_types=jpg&format=json&has_breeds=true&order=RANDOM&page=0&limit=10`;
        key = 'live_DXXHlvgu7nXEtmoEiMoSNLZANzr3ZKmAmj2xoHUeKC1ju27EfZuK8jMFdcC89CzK'
      } else if (petType === "Cat") {
        url = 'https://api.thecatapi.com/v1/images/search?limit=20';
        key = 'live_wWM2bs021tOnpnL5UAbbv3zMilr33jvxRThVhW9SA3hVFXBE6FlCz2BAbN3TiCYt';
      }
      

      if (url && key) {
        try {
            const response = await fetch(url, {
              headers: {
                'x-api-key': key,
              },
            });
            if (!response.ok) {
              throw new Error(`HTTP error! status: ${response.status}`);
            }
            const data = await response.json();
            setTypeOfPet(data);
            setApiKey(key);
          } catch (error) {
            setError(error.message);
          }
      }
    };
    fetchPets();
  }, [petType]);

  const navigate = useNavigate();

  const navigateToHome = ()=>{
    navigate('/');
  };

  return (
    <div>
        <header style={styles.header}>
      <div className="overlay" style={styles.overlay}>
        <h1 style={styles.h1}>Choose your {petType}!</h1>
        <h3 style={styles.h3}>Find the breed of {petType} you like, enjoy!</h3>
        {petType === "Dog" ? (
        <p style={styles.p}>
            Dogs make exceptional pets for their unwavering loyalty, companionship, and ability
            to enhance emotional well-being. They promote an active lifestyle, offer protection, 
            and adapt well to diverse environments, enriching lives with their playful nature and
            deep bonds that bring joy and security to families and individuals alike.
        </p>
        ) : null}
        {petType === "Cat"?(
            <p style={styles.p}>
                Cats make excellent pets due to their independent yet affectionate nature. 
                They are low-maintenance, requiring minimal grooming and exercise. 
                Cats are great companions, providing comfort and reducing stress. 
                Their playful antics and calming presence make them perfect for various living environments, 
                enriching the lives of their owners.
            </p>
        ) : null}
        <Button style={styles.button} 
                variant="contained"
                color="primary" 
                onClick={navigateToHome}>
                Back to Home page!
        </Button>
      </div>
      </header>
      <List style={{ 
        marginTop: '50px', 
        display: 'flex', 
        flexDirection: 'column', 
        alignItems: 'center',
        
      }}>
        {typeOfPet.map((pet, index) => (
          <ListItem key={index}>
              {petType === "Dog" ? (
                <Card sx={{ display: 'flex', width: '100%' }}>
                <CardMedia
                  component="img"
                  sx={{ width: 200, minWidth: 200, objectFit: 'cover' }}
                  image={pet.url}
                  alt={pet.breeds[0]?.name || 'Unknown'}
                />
                <CardContent sx={{ flex: '1 0 auto' }}>
                <Typography variant="subtitle1">
                    Breed: {pet.breeds[0]?.name || 'Unknown'}
                    </Typography>
                    <Typography variant="body2">
                    {pet.breeds[0]?.weight ? `Weight: ${pet.breeds[0].weight.imperial} lb` : 'Weight: Unknown'}
                    </Typography>
                    <Typography variant="body2">
                    {pet.breeds[0]?.height ? `Height: ${pet.breeds[0].height.imperial} in` : 'Height: Unknown'}
                    </Typography>
                    <Typography variant="body2">
                    Life Span: {pet.breeds[0]?.life_span || 'Unknown'}
                    </Typography>
                    <Typography variant="body2">
                    Breed Group: {pet.breeds[0]?.breed_group || 'Unknown'}
                    </Typography>
                    <Typography variant="body2">
                    {pet.breeds[0]?.temperament ? `Temperament: ${pet.breeds[0].temperament}` : 'Temperament: Unknown'}
                    </Typography>
                </CardContent>
                </Card>
              ): null}
              {petType === "Cat" ? (
                <Card sx={{ display: 'flex', width: '100%' }}>
                <CardMedia
                  component="img"
                  sx={{ width: 200, minWidth: 200, objectFit: 'cover' }}
                  image={pet.url}
                  alt={pet.breeds[0]?.name || 'Unknown'}
                />
                
                <CardContent sx={{ flex: '1 0 auto' }}>
                    <Typography variant="subtitle1">
                        Breed: {pet.breeds[0]?.name || 'Unknown'}
                    </Typography>
                    <Typography variant="body2">
                        {pet.breeds[0]?.weight ? `Weight: ${pet.breeds[0].weight.imperial} lb` : 'Weight: Unknown'}
                    </Typography>
                    <Typography variant="body2">
                        {pet.breeds[0]?.height ? `Height: ${pet.breeds[0].height.imperial} in` : 'Height: Unknown'}
                    </Typography>
                    <Typography variant="body2">
                        Life Span: {pet.breeds[0]?.life_span || 'Unknown'}
                    </Typography>
                    <Typography variant="body2">
                        Breed Group: {pet.breeds[0]?.breed_group || 'Unknown'}
                    </Typography>
                    <Typography variant="body2">
                    {pet.breeds[0]?.temperament ? `Temperament: ${pet.breeds[0].temperament}` : 'Temperament: Unknown'}
                    </Typography>
                    <Typography variant="body2">
                    {pet.breeds[0]?.origin ? `Origin: ${pet.breeds[0].origin}` : 'Origin: Unknown'}
                    </Typography>
                    <Typography variant="body2">
                    Width: {pet.width || 'Unknown'}
                    </Typography>
                    <Typography variant="body2">
                    Height: {pet.height || 'Unknown'}
                    </Typography>
                </CardContent>
                </Card>
              ): null}
            
          </ListItem>
        ))}
      </List>
    </div>
  );
};

export default PetList;
