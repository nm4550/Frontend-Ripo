import * as React from 'react'
import Skeleton from '@mui/material/Skeleton'
import Stack from '@mui/material/Stack'
import Grid from '@mui/material/Grid'

const SkeletonArticle = () => {
  return (
    <Grid container sx={{ width: '100%' }} spacing={2}>
      {[1, 2, 3, 4, 5, 6].map(() => (
        <Grid item xs={12} sm={6} md={4}>
          <Stack spacing={1} sx={{ p: 3 }}>
            <Skeleton variant='rectangular' height={218} />
            <Skeleton variant='text' width='40%' />
            <Skeleton variant='text' width='20%' sx={{ mt: -1 }} />
          </Stack>
        </Grid>
      ))}
    </Grid>
  )
}

export default SkeletonArticle
