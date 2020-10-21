import React from 'react'
import { AmplifySignOut } from '@aws-amplify/ui-react'
import Link from 'next/link'
import { useRouter } from 'next/router'

const Header = () => {
  const router = useRouter()
  return (
    <>
      <div className="container">
        <div className="container1">
          <div className="container2">
            <Link href="/">
              <img src="/static/utoft_logo.png" className="thqImage image" />
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
            background-color: #110730;
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
            color: #ffffff;
            font-weight: 900;
            padding-top: 10px;
            padding-left: 20px;
            padding-right: 20px;
            letter-spacing: 1.5px;
            padding-bottom: 10px;
            text-transform: uppercase;
            border-bottom-width: 3px;
            border-color: transparent;
          }
          .link-active {
            border-color: #fff;
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
          }
        `}
      </style>
    </>
  )
}

export default Header
