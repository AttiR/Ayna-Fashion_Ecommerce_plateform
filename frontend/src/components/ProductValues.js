import * as React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import { Typography } from '@material-ui/core';

const item = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  px: 5,
};

function ProductValues() {
  return (
    <Box
      component="section"
      sx={{
        display: 'flex',
        overflow: 'hidden',
        bgcolor: 'rgba(249, 191, 59,1)',
        color: 'white',
      }}
    >
      <Container sx={{ mt: 20, mb: 30, display: 'flex', position: 'relative' }}>
        <Box
          component="img"
          src="/static/images/appCurvyLines.svg"
          alt="curvy lines"
          sx={{ pointerEvents: 'none', position: 'absolute', top: -180 }}
        />
        <Grid container spacing={5}>
          <Grid item xs={12} md={4}>
            <Box sx={item}>
              <Box
                component="img"
                src="/static/images/productValues1.svg"
                alt="suitcase"
                sx={{ height: 55 }}
              />
              <Typography variant="h6" style={{ margin: '30px auto' }}>
                Trending Styles
              </Typography>
              <Typography variant="h5">
                Our stock is collection of trendy design & styles. We have
                varity of formal and causal oufits suitbale for any occasion,
                whether you are enjoying at beach or in any meeting.
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} md={4}>
            <Box sx={item}>
              <Box
                component="img"
                src="/static/images/productValues2.svg"
                alt="graph"
                sx={{ height: 55 }}
              />
              <Typography variant="h6" style={{ margin: '30px auto' }}>
                New experiences
              </Typography>
              <Typography variant="h5">
                Feel the differnce, be confident with our weariung outfits. They
                are special designs for every occasion
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} md={4}>
            <Box sx={item}>
              <Box
                component="img"
                src="/static/images/productValues3.svg"
                alt="clock"
                sx={{ height: 55 }}
              />
              <Typography variant="h6" style={{ margin: '30px auto' }}>
                Exclusive offfers
              </Typography>
              <Typography variant="h5" paragraph>
                By registering, you will access specially negotiated rates that
                you will not find anywhere else.
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

export default ProductValues;
