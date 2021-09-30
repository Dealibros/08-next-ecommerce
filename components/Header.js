import { css } from '@emotion/react';
import Link from 'next/link';

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
  justify-content: space-evenly;
  list-style: none;
  margin: 0;
  text-decoration: none;
  padding-bottom: 1rem;
  padding-top: 0.8rem;
`;

const navLi = css`
  font-size: 1.3rem;
  padding: 0 1.8rem 0 1.8rem;

  :active {
    font-size: 1rem;
    border-color: white;
    color: white;
  }
`;

const a = css`
  text-decoration: none;

  :hover {
    color: #a5966d;
  }
`;

function Header() {
  return (
    <div css={navContainer}>
      <nav>
        <ul css={nav}>
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
                <span role="img" aria-label="cart">
                  🛒
                </span>
              </a>
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Header;
