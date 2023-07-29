import { Box, Typography } from '@mui/material';
import React from 'react';

export default function IllustrationSearch(props) {
  return (
    <center>
      <Box sx={{
        marginTop: '3rem',
        marginBottom: '1rem',
        maxWidth: '100%',
        width: '120px',
        '.cls-1, .cls-4, .cls-6, .cls-7': { fill: 'none' },
        '.cls-1': { stroke: '#bf3d2a' },
        '.cls-1,.cls-4,.cls-7': {
          strokeLinecap: 'round',
          strokeMiterlimit: 10,
          strokeWidth: '8px'
        },
        '.cls-2': { fill: '#f15b45' },
        '.cls-3': { fill: '#bf3d2a' },
        '.cls-4': { stroke: '#f15b45' },
        '.cls-5': { fill: '#801517' },
        '.cls-7': { stroke: '#801517' }
      }}>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 294.36 362.58" {...props} style={{marginLeft:'-19%'}}>
          <g id="Layer_2" data-name="Layer 2">
            <g id="Layer_1-2" data-name="Layer 1">
              <ellipse class="cls-1" cx="164.4" cy="63.34" rx="45.63" ry="59.34" />
              <path class="cls-2" d="M34.44,334.88a27.7,27.7,0,0,0,27.7,27.7H266.66a27.7,27.7,0,0,0,27.7-27.7V144H34.44Z" />
              <path class="cls-3" d="M266.66,63.34H62.14A27.7,27.7,0,0,0,34.44,91v53H294.36V91A27.7,27.7,0,0,0,266.66,63.34Z" />
              <path class="cls-2" d="M294.36,91a27.71,27.71,0,0,0-14.45-24.33A45.62,45.62,0,0,0,286.6,144h7.76Z" />
              <path class="cls-2" d="M34.44,91v53H42.2a45.63,45.63,0,0,0,6.69-77.31A27.69,27.69,0,0,0,34.44,91Z" />
              <ellipse class="cls-4" cx="164.4" cy="144.02" rx="45.63" ry="59.34" />
              <path class="cls-5" d="M122.92,207.17l-14.41,4a13.2,13.2,0,0,0-.91,4.85c0,6.29,4.21,11.39,9.41,11.39s9.4-5.1,9.4-11.39A12.4,12.4,0,0,0,122.92,207.17Z" />
              <path class="cls-5" d="M205.87,207.17l14.42,4a13.41,13.41,0,0,1,.9,4.85c0,6.29-4.21,11.39-9.4,11.39s-9.41-5.1-9.41-11.39A12.44,12.44,0,0,1,205.87,207.17Z" />
              <line class="cls-6" y1="108.49" y2="108.04" />
              <path class="cls-7" d="M145,256.85a21.16,21.16,0,0,1,38.89,0" />
            </g>
          </g>
        </svg>
      </Box >
      <Typography variant='h2'>Sacola vazia</Typography>
    </center>
  )
}
