import React, { useState } from 'react';
import { Box, Card, Grid, Paper, Typography, FormControl, InputLabel, Select, MenuItem } from '@mui/material';
import { CardActionArea, CardMedia } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { styled, ThemeProvider, createTheme } from '@mui/material/styles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDog,faPaw,faDove,faCat,faShieldDog,faShieldCat } from '@fortawesome/free-solid-svg-icons';

const theme = createTheme({
  palette: {
    mode: 'light',
  },
  typography: {
    body2: {
      fontSize: 14,
    },
  },
});

const Container = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  height: '100vh',
  backgroundImage: 'linear-gradient(135deg, #9f05ff69 10%, #fd5e086b 100%)',
});

const BoxContainer = styled(Box)({
  flex: 1,
  height: 'calc(100vh / 3)',
  margin: '1px',
  overflow: 'hidden',
});

const StyledCard = styled(Card)({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  height: '100%',
});

const StyledCardMedia = styled(CardMedia)({
  height: '100%',
  objectFit: 'fill',
  overflow: 'hidden',
});

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(0),
  textAlign: 'center',
  color: theme.palette.text.secondary,
  height: '100%'
}));

const CustomTypography1 = styled(Typography)({
  fontFamily: 'serif',
  fontSize: '3rem',
  fontWeight: 'bold',
  color: 'blueviolet',
});

const CustomTypography2 = styled(Typography)({
  fontFamily: 'cursive',
  fontSize: '5rem',
  fontWeight: 'bold',
  color: 'blueviolet',
});

const CustomFormControl = styled(FormControl)({
  minWidth: 200,
  margin: '30px',
  width: '80%',
  height: '70%',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  color:'palevioletred'
});

const CustomSelect = styled(Select)({
  height: '100%',
});

const Home = () => {
  const navigate = useNavigate();
  const [selectedPet, setSelectedPet] = useState('');

  const handleFindPetClick = (event) => {
    const selectedType = event.target.value;
    setSelectedPet(selectedType);
    navigate(`/petlist/${selectedType}`);
  };

  return (
    <ThemeProvider theme={theme}>
      <Container>
        <BoxContainer>
          <Grid container display="flex" direction="row" justifyContent="center" alignItems="center" spacing={1} style={{ height: '100%' }}>
            <Grid display="flex" direction="column" justifyContent="center" alignItems="center" item xs={4} style={{ height: '100%' }}>
              <CustomTypography1 variant='h1'>Find your</CustomTypography1>
              <CustomTypography2 variant='h2'>Soul-pet</CustomTypography2>
            </Grid>
            <Grid item xs={4} style={{ height: '100%' }}>
              <Item>
                <StyledCard variant="outlined" style={{ height: '100%' }}>
                  <StyledCardMedia
                    component="img"
                    image="/Images/image 1.jpg"
                    alt="side image"
                    style={{ height: '100%', maxHeight: '100%', maxWidth: '100%' }}
                  />
                </StyledCard>
              </Item>
            </Grid>
            <Grid item xs={4} style={{ height: '100%' }}>
              <Item>
                <StyledCard variant="outlined" style={{ height: '100%' }}>
                  <CardActionArea style={{ height: '100%' }}>
                    <StyledCardMedia
                      component="img"
                      image="/Images/image 8.jpg"
                      alt="side image"
                      style={{ height: '100%', maxHeight: '100%', maxWidth: '100%' }}
                    />
                  </CardActionArea>
                </StyledCard>
              </Item>
            </Grid>
          </Grid>
        </BoxContainer>
        <BoxContainer>
          <Grid container
            display="flex"
            direction="row"
            justifyContent="center"
            alignItems="center"
            spacing={1}
            style={{ height: '100%' }}
          >
            <Grid item xs={6} style={{ height: '100%' }}>
              <CustomFormControl>
                <InputLabel style={{ alignSelf: 'center', fontSize: '60px', color:'blueviolet' }} id="demo-simple-select-label">Find your Pet</InputLabel>
                <CustomSelect
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={selectedPet}
                  onChange={handleFindPetClick}
                  fullWidth
                >
                  <MenuItem value={'Dog'}>Dogs</MenuItem>
                  <MenuItem value={'Cat'}>Cats</MenuItem>
                </CustomSelect>
              </CustomFormControl>
            </Grid>
            <Grid item xs={3} style={{ height: '100%' }}>
              <Item>
                <StyledCard variant="outlined" style={{ height: '100%' }}>
                  <CardActionArea style={{ height: '100%' }}>
                    <StyledCardMedia
                      component="img"
                      image="/Images/image 4.jpg"
                      alt="side image"
                      style={{ height: '100%', maxHeight: '100%', maxWidth: '100%' }}
                    />
                  </CardActionArea>
                </StyledCard>
              </Item>
            </Grid>
            <Grid item xs={3} style={{ height: '100%' }}>
              <Item>
                <StyledCard variant="outlined" style={{ height: '100%' }}>
                  <CardActionArea style={{ height: '100%' }}>
                    <StyledCardMedia
                      component="img"
                      image="/Images/image 5.jpg"
                      alt="side image"
                      style={{ height: '100%', maxHeight: '100%', maxWidth: '100%' }}
                    />
                  </CardActionArea>
                </StyledCard>
              </Item>
            </Grid>
          </Grid>
        </BoxContainer>
        <BoxContainer>
          <Grid container display="flex" direction="row" justifyContent="center" alignItems="center" spacing={1} style={{ height: '100%' }}>
            <Grid display="flex" direction="column" spacing={3} item xs={4} style={{ height: '100%' }}>
                <Grid item xs={4} style={{padding: '10px', margin:'10px',height:'40%'}}>
                    <FontAwesomeIcon style={{height:'100%',width:'33%'}} icon={faDog} />
                    <FontAwesomeIcon style={{height:'100%',width:'33%'}} icon={faPaw} />
                    <FontAwesomeIcon style={{height:'100%',width:'33%'}} icon={faShieldDog} />
                </Grid>
                <Grid item xs={4} style={{padding: '10px', margin:'10px',height:'40%'}}>
                    <FontAwesomeIcon style={{height:'100%',width:'33%'}} icon={faDove} />
                    <FontAwesomeIcon style={{height:'100%',width:'33%'}} icon={faCat} />
                    <FontAwesomeIcon style={{height:'100%',width:'33%'}} icon={faShieldCat} />
                </Grid>
                
            
            </Grid>
            <Grid item xs={4} style={{ height: '100%' }}>
              <Item>
                <StyledCard variant="outlined" style={{ height: '100%' }}>
                  <CardActionArea style={{ height: '100%' }}>
                    <StyledCardMedia
                      component="img"
                      image="/Images/image 6.jpg"
                      alt="side image"
                      style={{ height: '100%', maxHeight: '100%', maxWidth: '100%' }}
                    />
                  </CardActionArea>
                </StyledCard>
              </Item>
            </Grid>
            <Grid item xs={4} style={{ height: '100%' }}>
              <Item>
                <StyledCard variant="outlined" style={{ height: '100%' }}>
                  <CardActionArea style={{ height: '100%' }}>
                    <StyledCardMedia
                      component="img"
                      image="/Images/image 7.jpg"
                      alt="side image"
                      style={{ height: '100%', maxWidth: '100%' }}
                    />
                  </CardActionArea>
                </StyledCard>
              </Item>
            </Grid>
          </Grid>
        </BoxContainer>
      </Container>
    </ThemeProvider>
  );
}

export default Home;