/**********************************************************************
 *
 *   Responsiveness hook generated by Quest
 *
 *   Responsive Logic for the component goes in this hook
 *   If you want to customize the min/max values for the breakpoints, open the component on Quest Editor.
 *
 *   For help and further details refer to: https://www.quest.ai/docs
 *
 *
 **********************************************************************/

import React from 'react';

const useQ2PortalResponsiveSize = () => {
  const [variant, setVariant] = React.useState<string>('ScreenDesktop');

  React.useEffect(() => {
    const handlerScreenMobile = (e) =>
      setVariant((size: string) => (e.matches ? 'ScreenMobile' : size));
    const ScreenMobileSize = window.matchMedia('(max-width: 908px)');
    setVariant((size: string) =>
      ScreenMobileSize.matches ? 'ScreenMobile' : size
    );
    ScreenMobileSize.addEventListener('change', handlerScreenMobile);

    const handlerScreenDesktop = (e) =>
      setVariant((size: string) => (e.matches ? 'ScreenDesktop' : size));
    const ScreenDesktopSize = window.matchMedia('(min-width: 908px)');
    setVariant((size: string) =>
      ScreenDesktopSize.matches ? 'ScreenDesktop' : size
    );
    ScreenDesktopSize.addEventListener('change', handlerScreenDesktop);
  }, []);

  return variant;
};

export default useQ2PortalResponsiveSize;
