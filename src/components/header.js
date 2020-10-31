import React from 'react'
import { AmplifySignOut } from '@aws-amplify/ui-react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useColorMode } from '../utlis/colorModeContext'

const Header = () => {
  const router = useRouter()
  const { colorMode } = useColorMode()
  return (
    <>
      <div className="container">
        <div className="container1">
          <div className="container2">
            <Link href="/">
              <a>
                <img
                  src="/static/utoft_logo.png"
                  className="thqImage image"
                  width="140"
                  height="50"
                />
              </a>
            </Link>
          </div>
          {router.pathname !== '/admin' && (
            <div className="container3">
              <Link href="/" className="thqLink text">
                <a
                  className={`link ${
                    router.pathname === '/' ? 'link-active' : ''
                  }`}
                >
                  HOME
                </a>
              </Link>
              <Link href="/about" className="thqLink text">
                <a
                  className={`link ${
                    router.pathname === '/about' ? 'link-active' : ''
                  }`}
                >
                  ABOUT
                </a>
              </Link>
            </div>
          )}
          {router.pathname === '/admin' && (
            <div className="container3">
              <AmplifySignOut />
            </div>
          )}
        </div>
      </div>
      <style jsx>
        {`
          .container {
            width: 100%;
            height: 100px;
            display: flex;
            overflow: auto;
            flex-wrap: wrap;
            align-items: center;
            flex-direction: row;
            justify-content: center;
            background-color: ${colorMode === 'light'
              ? 'var(--dark-primary)'
              : 'var(--dark-shade)'};
          }
          .container1 {
            width: 100%;
            display: flex;
            flex-wrap: wrap;
            max-width: 800px;
            align-items: center;
            padding-left: 20px;
            padding-right: 20px;
            flex-direction: row;
            justify-content: space-between;
          }
          .container2 {
            display: flex;
            flex-wrap: wrap;
            align-items: center;
            flex-direction: row;
            justify-content: center;
          }
          .image {
            height: 50px;
            object-fit: cover;
          }
          .container3 {
            display: flex;
            flex-wrap: wrap;
            align-items: center;
            flex-direction: row;
            justify-content: flex-end;
          }
          .link {
            color: var(--light-tint);
            font-size: 1rem;
            font-weight: 900;
            padding: 5px 15px;
            letter-spacing: 1.5px;
            text-transform: uppercase;
            border-bottom-width: 6px;
            border-color: transparent;
          }
          .link-active {
            border-color: var(--amplify-primary-color);
          }
          @media (max-width: 479px) {
            .container {
              height: 80px;
            }
            .image {
              width: 100px;
              height: auto;
            }
            .text {
              font-size: 12px;
              padding-left: 10px;
              padding-right: 10px;
            }
            .link {
              font-size: 0.87rem;
            }
          }
        `}
      </style>
    </>
  )
}

export default Header
