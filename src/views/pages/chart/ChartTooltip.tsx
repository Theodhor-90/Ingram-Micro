export const ChartTooltip = () => {
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        })
     }
  return (
    <div className='mobile-chart-tooltip' onClick={() => scrollToTop()}>
      <svg
        width='56'
        height='56'
        viewBox='0 0 56 56'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
      >
        <g filter='url(#filter0_d_688_2354)'>
          <rect
            x='8'
            y='4'
            width='40'
            height='40'
            rx='20'
            fill='#00B7A2'
            shapeRendering='crispEdges'
          />
          <path
            fillRule='evenodd'
            clipRule='evenodd'
            d='M27.0491 15.0081L27.2156 14.9907L27.215 23.5361L20.045 28.1747L19.9696 28.0255C19.3268 26.7579 19.0005 25.3901 19.0005 23.959C19.0005 21.7206 19.8271 19.5758 21.3284 17.9186C22.8189 16.2726 24.8501 15.2394 27.0491 15.0081ZM21.002 29.6164L20.8965 29.486L27.9459 24.9258L34.4248 30.263L34.305 30.3806C32.6122 32.0422 30.3733 32.9579 28.0001 32.9579C25.2721 32.9579 22.721 31.7401 21.002 29.6164Z'
            fill='white'
          />
          <path
            opacity='0.75'
            d='M34.6719 17.9185C33.1812 16.2734 31.1494 15.2401 28.9512 15.0088L28.7847 14.9915V23.5933L35.4181 29.0563L35.5108 28.9169C36.4852 27.4435 37 25.7291 37 23.958C37 21.7205 36.1732 19.5749 34.6721 17.9184L34.6719 17.9185Z'
            fill='white'
          />
        </g>
        <defs>
          <filter
            id='filter0_d_688_2354'
            x='0'
            y='0'
            width='56'
            height='56'
            filterUnits='userSpaceOnUse'
            colorInterpolationFilters='sRGB'
          >
            <feFlood floodOpacity='0' result='BackgroundImageFix' />
            <feColorMatrix
              in='SourceAlpha'
              type='matrix'
              values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0'
              result='hardAlpha'
            />
            <feOffset dy='4' />
            <feGaussianBlur stdDeviation='4' />
            <feComposite in2='hardAlpha' operator='out' />
            <feColorMatrix
              type='matrix'
              values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.16 0'
            />
            <feBlend
              mode='normal'
              in2='BackgroundImageFix'
              result='effect1_dropShadow_688_2354'
            />
            <feBlend
              mode='normal'
              in='SourceGraphic'
              in2='effect1_dropShadow_688_2354'
              result='shape'
            />
          </filter>
        </defs>
      </svg>
    </div>
  )
}
