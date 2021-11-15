import * as React from 'react'
import Skeleton from '@mui/material/Skeleton'
import Stack from '@mui/material/Stack'

const SkeletonArticle = () => {
  return (
    <Stack spacing={1}>
      <Skeleton variant='circular' width={40} height={40} />
      <Skeleton variant='text' />
      <Skeleton variant='text' />
      <Skeleton variant='circular' width={40} height={40} />
      <Skeleton variant='text' />
      <Skeleton variant='text' />
      <Skeleton variant='circular' width={40} height={40} />
      <Skeleton variant='text' />
      <Skeleton variant='text' />
    </Stack>
  )
}

export default SkeletonArticle
