import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import "./InfoBox.css";
import AcUnitIcon from '@mui/icons-material/AcUnit';
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
export default function InfoBox({info}) {
    let Image_Url = "https://images.unsplash.com/photo-1650812782565-97637cad0050?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

    let COLD_URL = "https://images.unsplash.com/photo-1519863436079-8436f74be632?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
    let HOT_URL = "https://images.unsplash.com/photo-1504370805625-d32c54b16100?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
    let RAINY_URL = "https://images.unsplash.com/photo-1697518725445-037f24d787b4?q=80&w=2076&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
  return (
    <div className="InfoBox" >
      <Card sx={{ maxWidth: 500 }}>
        <CardMedia
          sx={{ height: 240 ,width:350 }}
          image= {info.humidity>60 ? RAINY_URL : info.temp > 15 ? HOT_URL : COLD_URL}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            <i>{info.city}</i>
            <span className='icon'>{
              info.humidity > 60 ? <ThunderstormIcon/> : info.temp > 15 ? <WbSunnyIcon/> :  <AcUnitIcon/>
              }</span>
          </Typography>
          <Typography variant="body2" sx={{ color: "text.secondary" }}>
            <p>Temprature : <i>{info.temp}&deg;C</i></p>
            <p>Minimum Temprature : <i>{info.tempMin}&deg;C</i></p>
            <p>Maximum Temprature : <i> {info.tempMax}&deg;C</i></p>
            <p>Humidity : <i>{info.humidity}&deg;C</i> </p>
            <p>This temprature feels like : <i>{info.feelsLike}&deg;C</i></p>
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
}
