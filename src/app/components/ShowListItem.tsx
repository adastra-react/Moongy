import styled from 'styled-components';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

interface Props {
  show: any;
}


const InnerContainer = styled.div`
  width: 210px;
  
`

const Card = styled.div`
  width: 210px;
`

const CardMedia = styled.img`

`

function ShowListItem(show: Props) {
  console.log(show.show.show)
  return (
      <InnerContainer>
        <Card>
          <CardMedia
            src={show.show.show.image?.medium}
            alt="green iguana"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {show.show.show?.name}
            </Typography>
            {/* <Typography dangerouslySetInnerHTML={{__html: show.show.show?.summary}} variant="body2" color="text.secondary">
              
            </Typography> */}
          </CardContent>
          <CardActions>
            <Button size="small">See episodes</Button>
          </CardActions>
        </Card>
    </InnerContainer>
  )
}

export default ShowListItem