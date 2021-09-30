import { css } from '@emotion/react';
/* eslint-disable jsx-a11y/label-has-associated-control */
import Head from 'next/head';
import Layout from '../components/Layout';

const title = css`
  text-align: center;
  margin: 0.4rem;
`;

const form = css`
  border-radius: 3rem;
  display: inline-block;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 4rem;
  text-align: center;
  background-color: rgb(190, 199, 143);
  padding: 0.3rem 0 3rem 1rem;
  font-family: 'New Tegomin';
  box-shadow: 10px 10px 5px grey;
  align-items: right;
  margin: 5rem 0 0 1.5rem;
  padding: 2.5rem 10rem;
`;

const mainForm = css`
  display: block;
  text-align: center;
  margin-bottom: 6rem;
  margin-top: 2rem;
`;

const row = css`
  padding: 1rem 1rem;
  margin-top: 0;

  input {
    border-radius: 0.4rem;
    margin: 0.3rem;
    padding: 0.3rem 0.5rem;
    font-family: 'New Tegomin';
  }
`;

const textarea = css`
  border-radius: 0.4rem;
  margin-left: 0.4rem;
  padding: 1.8rem !important;
`;

const button = css`
  font-family: 'New Tegomin';
  padding: 0.6rem 1rem;
  border-radius: 0.4rem;
  margin-bottom: 1rem;
  background-color: #17a2b8;
  border-color: #17a2b8;
  color: white;
`;

function Contact() {
  return (
    <div>
      <div>
        <Layout>
          <Head>
            <title>About Ecommerce </title>
          </Head>

          <section css={mainForm}>
            <div>
              <form css={form}>
                <h1 css={title}>Contact Form</h1>
                <div class="form-row">
                  <div css={row}>
                    <label for="name">Full Name</label>
                    <br />
                    <input
                      class="form-control"
                      id="name"
                      placeholder="Full name"
                      formControlName="name"
                    />
                  </div>
                  <div css={row}>
                    <label for="inputEmail4">Email</label>
                    <br />
                    <input
                      type="email"
                      class="form-control"
                      id="inputEmail4"
                      placeholder="Email"
                      formControlName="email"
                    />
                  </div>
                </div>

                <div css={row}>
                  <label for="subject">Subject</label>
                  <br />
                  <input
                    css={textarea}
                    type="Subject"
                    id="subject"
                    name="subject"
                  />
                </div>

                <button css={button}>Send</button>
              </form>
            </div>
          </section>
        </Layout>
      </div>
    </div>
  );
}

export default Contact;
