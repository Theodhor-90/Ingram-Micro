import { FunctionComponent } from 'react'

export const Footer: FunctionComponent<{}> = () => {
    const year = new Date().getFullYear()
    return (
        <footer className='ingram--footer'>
            <p className='ingram--footer__text'>
                {`© ${year} — All Rights Reserved. Ingram Micro Inc.`}
            </p>
            <p className='ingram--footer__text'>
                <a
                    href='https://corp.ingrammicro.com/Terms-of-Use/Privacy-Statement.aspx'
                    target='blank'
                >
                    Privacy
                </a>{' '}
                |{' '}
                <a
                    href='https://corp.ingrammicro.com/Terms-of-Use.aspx'
                    target='blank'
                >
                    Terms of Use
                </a>
            </p>
        </footer>
    )
}
