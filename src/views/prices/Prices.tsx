// ** React Imports
import { ChangeEvent, MouseEvent, useState, SyntheticEvent } from 'react'

// ** MUI Imports
import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import Grid from '@mui/material/Grid'
import Link from '@mui/material/Link'
import Button from '@mui/material/Button'
import TextField from '@mui/material/TextField'
import CardHeader from '@mui/material/CardHeader'
import InputLabel from '@mui/material/InputLabel'
import IconButton from '@mui/material/IconButton'
import Typography from '@mui/material/Typography'
import CardContent from '@mui/material/CardContent'
import FormControl from '@mui/material/FormControl'
import OutlinedInput from '@mui/material/OutlinedInput'
import InputAdornment from '@mui/material/InputAdornment'
import FormHelperText from '@mui/material/FormHelperText'

// ** Icons Imports
import CurrencyBrl from 'mdi-material-ui/CurrencyBrl'
import CurrencyUsd from 'mdi-material-ui/CurrencyUsd'
import { Icon } from '@mui/material'
import { Console } from 'console'

interface State {
  password: string
  showPassword: boolean
}

interface State1 {
CurrencyUsdValue:number 
}

interface State2 {
  CurrencyBrlValue:number 
  }

 interface State3 {
  CurrencyPrice:number
 } 

const Prices = () => {
  // ** States

  let url = `https://economia.awesomeapi.com.br/last/USD-BRL`;
  fetch(url)
    .then((res) => {
      return res.json();
    })
    .then((json) => {
      CurrencyPrice.CurrencyPrice = json.USDBRL.bid;
      CurrencyBrlValue.CurrencyBrlValue = (CurrencyUsdValue.CurrencyUsdValue * CurrencyPrice.CurrencyPrice); 

    });
 

  const [CurrencyUsdValue, setCurrencyUsdValue] = useState<State1>({
    CurrencyUsdValue:1.0
  })

  const [CurrencyBrlValue, setCurrencyBrlValueValue] = useState<State2>({
    CurrencyBrlValue:0.0
    })

    const [CurrencyPrice, setCurrencyPriceValue] = useState<State3>({
      CurrencyPrice:0.0
    })
  
  const handleCurrencyUsdValueChange = (prop: keyof State1) => (event: ChangeEvent<HTMLInputElement>) => {
    setCurrencyUsdValue({ ...CurrencyUsdValue, [prop]: parseFloat(event.target.value)})
    CurrencyBrlValue.CurrencyBrlValue = CurrencyPrice.CurrencyPrice * CurrencyUsdValue.CurrencyUsdValue;


    console.log(CurrencyBrlValue.CurrencyBrlValue, CurrencyUsdValue.CurrencyUsdValue, CurrencyPrice.CurrencyPrice);
  }

  const handleCurrencyBrlValueChange = (prop: keyof State2) => (event: ChangeEvent<HTMLInputElement>) => {
    setCurrencyBrlValueValue({ ...CurrencyBrlValue, [prop]: parseFloat(event.target.value) })
  }
  
  return (
    <Card>
      <CardHeader title='Cotação Moedas' titleTypographyProps={{ variant: 'h6' }} />
      <CardContent>
        <form onSubmit={e => e.preventDefault()}>
          <Grid container spacing={5}>
            <Grid item xs={12}>
              <TextField fullWidth label='Dolares' placeholder='Dolares'  
                
                value={CurrencyUsdValue.CurrencyUsdValue}
               onChange={handleCurrencyUsdValueChange('CurrencyUsdValue')}

               InputProps={{
                startAdornment: (
                  <InputAdornment position='start'>
                    <CurrencyUsd />
                  </InputAdornment>
                )
              }}

             />
              
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                type='CurrencyBrlValue'
                label='Reais'
                placeholder='Reais'   
                helperText=''
                value={CurrencyBrlValue.CurrencyBrlValue}

               onChange={handleCurrencyBrlValueChange('CurrencyBrlValue')}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position='start'>
                      <CurrencyBrl />
                    </InputAdornment>
                  )
                }}
                
              />
              
            </Grid>
            
            <Grid item xs={12}>
              <Box
                sx={{
                  gap: 5,
                  display: 'flex',
                  flexWrap: 'wrap',
                  alignItems: 'center',
                  justifyContent: 'space-between'
                }}
              >
                <Button type='submit' variant='contained' size='large'>
                  Get Started!
                </Button>
                
              </Box>
            </Grid>
          </Grid>
        </form>
      </CardContent>
    </Card>
  )
}

export default Prices
