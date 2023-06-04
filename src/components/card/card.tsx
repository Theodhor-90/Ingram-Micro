import { FunctionComponent } from 'react'

interface Card {
  title?: string
  paragraph?: string
  link?: string
}

export const Card: FunctionComponent<Card> = ({ paragraph, title, link }) => {
  return (
    <a
      className='ingram--card__container'
      href={link}
      target='_blank'
      rel='noopener noreferrer'
    >
      <div className='ingram--card'>
        <div className='ingram--card__content-container'>
          <h3 className='title'>{title}</h3>
          {paragraph ? <p className='paragraph'>{paragraph}</p> : ''}
        </div>
        <div className='icon-container'>
          <svg
            width='16'
            height='16'
            viewBox='0 0 16 16'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              fillRule='evenodd'
              clipRule='evenodd'
              d='M6.83027 8.01939L8.00452 9.19717L14.3342 2.84856L14.3196 6.55895L15.9765 6.5527L16 0L9.46689 0.0236106L9.46066 1.68473L13.16 1.67084L6.83027 8.01939ZM7.96367 1.94794V3.95558H1.99136V13.9924H11.9448V7.97015H13.936V16H0V1.94794H7.96367Z'
              fill='#00B7A2'
            />
          </svg>
        </div>
      </div>
    </a>
  )
}
