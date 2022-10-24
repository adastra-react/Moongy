import React from 'react'
import styled from 'styled-components';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import { useSpring, animated } from '@react-spring/web';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { setEpisodes, setEpisodesLoading } from '../redux/ShowsSlice';
import TvShowEpisodes from './TvShowEpisodes';


interface Props {
  show: any;
}

interface FadeProps {
  children?: React.ReactElement;
  in: boolean;
  onEnter?: () => {};
  onExited?: () => {};
}

const Fade = React.forwardRef<HTMLDivElement, FadeProps>(function Fade(props, ref) {
  const { in: open, children, onEnter, onExited, ...other } = props;
  const style = useSpring({
    from: { opacity: 0 },
    to: { opacity: open ? 1 : 0 },
    onStart: () => {
      if (open && onEnter) {
        onEnter();
      }
    },
    onRest: () => {
      if (!open && onExited) {
        onExited();
      }
    },
  });

  return (
    <animated.div ref={ref} style={style} {...other}>
      {children}
    </animated.div>
  );
});

const style = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};


const InnerContainer = styled.div`
  width: 210px;
  margin: 6px;
`

const Card = styled.div`
  width: 210px;
`

const CardMedia = styled.img`

`

const TruncatedTextContainer = styled.div`
  width: 100%;
  height: 100px;
  overflow: scroll;
  /* background-color: black; */
`

function ShowListItem(show: Props) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const dispatch = useDispatch();

  const handleGetAllEpisodes = async () => {
    dispatch(setEpisodesLoading(true));
    const { data } = await axios.get(`http://api.tvmaze.com/shows/${show?.show?.show?.id}/episodes`);
    dispatch(setEpisodes(data));
    dispatch(setEpisodesLoading(false));
  }
    

  return (
      <InnerContainer>
        <Card>
          <CardMedia
            src={show?.show?.show?.image?.medium}
            alt="green iguana"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {show?.show?.show?.name}
            </Typography>
            <TruncatedTextContainer>
                <Typography dangerouslySetInnerHTML={{__html: show?.show?.show?.summary}} variant="body2" color="text.secondary" />
            </TruncatedTextContainer>
          </CardContent>
          <CardActions>
            <Button onClick={() => {
              handleOpen();
              handleGetAllEpisodes();
            }} size="small">See episodes</Button>
            <Modal
              aria-labelledby="spring-modal-title"
              aria-describedby="spring-modal-description"
              open={open}
              onClose={handleClose}
              closeAfterTransition
              BackdropComponent={Backdrop}
              BackdropProps={{
                timeout: 500,
              }}
            >
              <Fade in={open}>
                <Box sx={style}>
                  <Typography id="spring-modal-title" variant="h6" component="h2">
                    {show?.show?.show?.name} Episode list
                  </Typography>
                  <TvShowEpisodes />
                </Box>
              </Fade>
            </Modal>

          </CardActions>
        </Card>
    </InnerContainer>
  )
}

export default ShowListItem