import { useEffect, useState } from 'react';

import { useMediaQuery } from '@material-ui/core';

export const DEVICE = {
  MOBILE: 'MOBILE',
  DESKTOP: 'DESKTOP'
}

const useDevice = () => {
  const [device, setDevice] = useState(null)
  const isDesktopMode = useMediaQuery('(min-width:768px)');

  useEffect(() => {
    setDevice(isDesktopMode ? DEVICE.DESKTOP : DEVICE.MOBILE)
  }, [isDesktopMode])

  return { device }
}

export default useDevice
