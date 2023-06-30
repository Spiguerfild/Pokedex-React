import { Box, Button, Card, CardContent, CircularProgress, Grid, TextField, Typography } from '@mui/material'
import { useEffect, useState } from 'react'
import { TopBar } from './components/TopBar'
import { styled } from '@mui/material/styles';
import axios from 'axios';
import './App.css';
import { Information } from './components/Information';

const CssTextField = styled(TextField)({
  '& label': {
    color: '#7d7d7dc7',
  },
  '& label.Mui-focused': {
    color: '#6F7E8C',
  },
  '& .MuiInput-underline:after': {
    borderBottomColor: '#B2BAC2',
  },
  '& .MuiOutlinedInput-root': {
    '& fieldset': {
      borderColor: '#343a43',
    },
    '&:hover fieldset': {
      borderColor: '#B2BAC2',
    },
    '&.Mui-focused fieldset': {
      borderColor: '#6F7E8C',
    },
  },
});


function App() {

  const [numb, setNumb] = useState('')
  const [pokemon, setPokemon] = useState([])
  const [havePoke, setHavePoke] = useState(true)
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {

  }, [pokemon, havePoke])

  const handleClick = async (e) => {
    e.preventDefault();

    setIsLoading(true)
    if (e.target.value === '') setNumb("")
    else {

      try {

        const { data } = await axios.get(`https://pokeapi.co/api/v2/pokemon/${numb}`)
        setPokemon(data)
        setHavePoke(true)
      } catch (error) {

        console.log(error)
        if (error.response.status === 404) {
          setHavePoke(false)
        }

      } finally {

        setTimeout(() => {
          setIsLoading(false)
        }, 2000);

      }

    }
  }
  console.log('pokemon----->', pokemon)
  return (
    <>
      <TopBar />
      <Box sx={{ padding: '60px 0' }}>

        <Grid container spacing={2} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          {/*Card do form  ------------------------------------------------------------------------------*/}

          <Grid item xs={12} sm={12} md={6} lg={6} sx={{ display: 'flex', justifyContent: 'center' }}>
            <form onSubmit={handleClick}>
              <Card elevation={4}
                sx={{
                  maxWidth: 300,
                  maxHeight: 200,
                  // border: '5px solid #343a43',
                  backgroundColor: '#fff',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  textAlign: 'center',
                  // padding: '20px',
                  transition: '.3s',
                  width: '300px'
                }}
              >
                <CardContent sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '20px' }}>

                  <Typography variant='h4' fontFamily={'sans-serif'}>Buscar Pokemon</Typography>

                  <CssTextField required label="Número/Nome do Pokemon" variant="outlined" onChange={(e) => setNumb(e.target.value)} />

                  <Button type='submit' variant='contained' sx={{
                    backgroundColor: `#343a43`,
                    transition: '.3s',
                    width: '50%',
                    '&:hover': {
                      transition: '.3s',
                      backgroundColor: '#343a43'
                    },
                  }}>
                    Pesquisar
                  </Button>

                </CardContent>
              </Card>
            </form>
          </Grid>

          {/*Card do pokemon  ------------------------------------------------------------------------------*/}

          {isLoading ?
            /*se estiver carregando mostra esse card com load*/
            <Grid item xs={12} sm={12} md={6} lg={6} sx={{ display: 'flex', justifyContent: 'center' }}>
              <Card id='nothing'
                elevation={8}
                sx={{
                  maxWidth: 300,
                  backgroundColor: '#dbdbdb',
                  display: 'flex',
                  flexDirection: 'column',
                  border: '3px solid #343a43',
                  justifyContent: 'space-between',
                  textAlign: 'center',
                  padding: '10px',
                  transition: '.3s',
                  width: '300px',
                  height: '320px',
                }}
              >
                <CardContent>
                  <CircularProgress />
                </CardContent>
              </Card>
            </Grid>
            :
            /*se estiver carregado mostra com os dados do pokemon*/

            havePoke === false ?
              /*pokemon existe? ou voltou erro do axios? se deu erro ele mostra esse  */
              <Grid item xs={12} sm={12} md={6} lg={6} sx={{ display: 'flex', justifyContent: 'center' }}>
                <Card id='nothing'
                  elevation={8}
                  sx={{
                    maxWidth: 300,
                    backgroundColor: '#dbdbdb',
                    display: 'flex',
                    flexDirection: 'column',
                    border: '3px solid #ed5564',
                    justifyContent: 'space-between',
                    textAlign: 'center',
                    padding: '10px',
                    transition: '.3s',
                    width: '300px', // Definindo um valor específico para width no estado inicial
                    height: '320px', // Definindo um valor específico para height no estado inicial
                  }}
                >
                  <CardContent>
                    <Typography sx={{ fontSize: 50 }} fontFamily={'Pokemon Solid '} color={'#000'} gutterBottom>
                      Pokemon <br /> não existe...
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
              :
              /*pokemon existe? se sim mostra esse card */
              <Grid item xs={12} sm={12} md={6} lg={6} sx={{ display: 'flex', justifyContent: 'center' }}>
                <Card id={pokemon.length === 0 ? "" : pokemon.types[0].type.name}
                  elevation={8}
                  sx={{
                    maxWidth: 300,
                    // backgroundColor: '#dbdbdb',
                    display: 'flex',
                    flexDirection: 'column',
                    // border: '3px solid #343a43',
                    justifyContent: 'space-between',
                    textAlign: 'center',
                    // padding: '10px',
                    transition: '.3s',
                    width: '300px', // Definindo um valor específico para width no estado inicial
                    // height: '350px', // Definindo um valor específico para height no estado inicial
                  }}
                >
                  {pokemon.length === 0 ? "" :
                    <div style={{
                      display: 'flex',
                      flexDirection: 'column',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                      padding: '24px 0px 0px 0px',
                      height: '100%',
                      gap: '80px',
                      fontStyle: 'italic',

                    }}>

                      <img src={pokemon.sprites.other.dream_world.front_default} width={'60%'} alt="" />
                      <div style={{
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        width: '100%',
                        backgroundColor: '#d7d7d7',

                      }}>

                        <Information infoFst={'Nome'} infoSec={pokemon.name || 'não informado'} />
                        <Information infoFst={'Altura'} infoSec={pokemon.height || 'não informado'} />
                        <Information infoFst={'Min base status'} infoSec={pokemon.stats[0].base_stat || 'não informado'} />
                        <Information infoFst={'Max base status'} infoSec={pokemon.stats[pokemon.stats.length - 1].base_stat || 'não informado'} />
                        <Information infoFst={'Peso'} infoSec={pokemon.weight || 'não informado'} />


                      </div>

                    </div>
                  }
                </Card>
              </Grid>

          }
        </Grid>
      </Box>
    </>
  )
}

export default App
