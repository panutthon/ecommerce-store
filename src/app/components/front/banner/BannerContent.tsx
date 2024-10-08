import React from 'react'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Stack from '@mui/material/Stack'
import { Theme } from '@mui/material/styles'
import Typography from '@mui/material/Typography'
import useMediaQuery from '@mui/material/useMediaQuery'
import { styled } from '@mui/material/styles'
import { 
  RocketLaunch as IconRocket,
} from '@mui/icons-material'


// third party
import { motion } from 'framer-motion';

const StyledButton = styled(Button)(() => ({
  padding: '13px 48px',
  fontSize: '16px',
}));

const BannerContent = () => {

  const lgDown = useMediaQuery((theme: Theme) => theme.breakpoints.down('lg'));
  
  return (
    <Box mt={lgDown ? 8 : 0}>
      <motion.div
        initial={{ opacity: 0, translateY: 550 }}
        animate={{ opacity: 1, translateY: 0 }}
        transition={{
          type: 'spring',
          stiffness: 150,
          damping: 30,
        }}
      >
        <Typography variant="h6" display={'flex'} gap={1} mb={2}>
          <Typography color={'secondary'}>
            <IconRocket />
          </Typography>{' '}
          Warehouse management system via web browser
        </Typography>

        <Typography
          variant="h1"
          fontWeight={900}
          sx={{
            fontSize: {
              md: '54px',
            },
            lineHeight: {
              md: '60px',
            },
          }}
        >
          Developer &{' '}
          <Typography component={'span'} variant="inherit" color={'primary'}>
            StoreKeeper
          </Typography>{' '}
          NextJs dashboard
        </Typography>
      </motion.div>
      <Box pt={4} pb={3}>
        <motion.div
          initial={{ opacity: 0, translateY: 550 }}
          animate={{ opacity: 1, translateY: 0 }}
          transition={{
            type: 'spring',
            stiffness: 150,
            damping: 30,
            delay: 0.2,
          }}
        >
          <Typography variant="h1" fontWeight={300} fontSize={'22px'}>
          With the intention of developing a system that actually works and meets the needs of users at all levels.
          </Typography>
        </motion.div>
      </Box>
      <motion.div
        initial={{ opacity: 0, translateY: 550 }}
        animate={{ opacity: 1, translateY: 0 }}
        transition={{
          type: 'spring',
          stiffness: 150,
          damping: 30,
          delay: 0.4,
        }}
      >
        <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2} mt={3}>
          <StyledButton variant="contained" color="primary" href="login">
            Login
          </StyledButton>

          <StyledButton variant="outlined" href="#demos">
            Preview
          </StyledButton>
        </Stack>
      </motion.div>
    </Box>
  );
};

export default BannerContent