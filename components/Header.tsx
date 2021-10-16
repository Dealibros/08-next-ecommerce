import { css } from '@emotion/react';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Image from 'next/image';
import Link from 'next/link';
import sunshine from '../public/sunshine.svg';

const navContainer = css`
  margin-right: auto;
  margin-left: auto;
`;

const nav = css`
  margin-bottom: 0;
  font-size: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: black;
  color: white !important;
  flex-wrap: wrap;
  justify-content: space-between;
  list-style: none;
  margin: 0;
  text-decoration: none;
  padding-bottom: 0.6rem;
  padding-top: 0.6rem;
`;

const navdiv = css`
  margin-bottom: 0;
  font-size: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: black;
  color: white !important;
  flex-wrap: wrap;
  justify-content: space-between;
  list-style: none;
  margin: 0;
  text-decoration: none;
  padding-bottom: 0.6rem;
  padding-top: 0.6rem;
  padding: 0.6rem 2rem 0.6rem 2rem;
`;

const navLi = css`
  font-size: 1.3rem;
  padding: 0 3rem 0 3rem !important;
  :active {
    font-size: 1rem;
    border-color: white;
    color: white;
  }
`;

const a = css`
  text-decoration: none;
  color: white !important;
  :hover {
    color: #a5966d;
  }
`;

const sunshineLogo = css`
  z-index: 10;
  width: 2rem;
  height: 2rem;
  padding-left: 2rem;
`;

type Props = {
  cartCount: number;
};

function Header(props: Props) {
  return (
    <div css={navContainer}>
      <nav>
        <ul css={nav}>
          <div css={navdiv}>
            <Image css={sunshineLogo} src={sunshine} alt="logo" />
          </div>
          <div css={navdiv}>
            <li css={navLi}>
              <Link href="/">
                <a css={a}>Home</a>
              </Link>
            </li>
            <li css={navLi}>
              <Link href="/tours">
                <a css={a}>Tours</a>
              </Link>
            </li>
            <li css={navLi}>
              <Link href="/contact-page">
                <a css={a}>Contact us</a>
              </Link>
            </li>
            <li css={navLi}>
              <Link href="/shopping-cart-page">
                <a css={a}>
                  <FontAwesomeIcon size="1x" icon={faShoppingCart} />{' '}
                  <span>{props.cartCount}</span>
                </a>
              </Link>
              <Link href="/thank-you-page">
                <a css={a}>
                  <span role="img" aria-label="cart">
                    *
                  </span>
                </a>
              </Link>
              <Link href="/check-out-page">
                <a css={a}>
                  <span role="img" aria-label="cart">
                    +
                  </span>
                </a>
              </Link>
            </li>
          </div>
        </ul>
      </nav>
    </div>
  );
}

export default Header;
