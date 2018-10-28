import React from 'react'

import Layout from '../layouts/base-layout'
import Hero from '../components/hero'

const IndexPage = () => (
  <Layout>
    <Hero>
      <div style={{ padding: '2em' }}>
        <h2
          style={{
            font: '130px/2 "Helvetica Neue", Helvetica, Arial, sans-serif',
            color: '#f5a52b',
            fontWeight: 'bold',
            textShadow:
              '0px 0px 0 rgb(217,136,15),0px 1px 0 rgb(210,129,8),0px 2px 0 rgb(204,123,2),0px 3px 0 rgb(198,117,-4),0px 4px 0 rgb(192,111,-10),0px 5px 0 rgb(185,104,-17),0px 6px 0 rgb(179,98,-23), 0px 7px 0 rgb(173,92,-29),0px 8px 7px rgba(0,0,0,0.6),0px 8px 1px rgba(0,0,0,0.5),0px 0px 7px rgba(0,0,0,.2)',
          }}
        >
          Hi, I’m Allard.
        </h2>
        <h3
          style={{
            // background-color: #565656;
            // text-shadow: 0px 2px 3px rgba(255,255,255,0.5);
            // -webkit-background-clip: text;
            //    -moz-background-clip: text;
            //         background-clip: text;
            backgroundColor: '#d8d8d8',
            WebkitBackgroundClip: 'text',
            MozBackgroundClip: 'text',
            BackgroundClip: 'text',
            color: 'transparent',
            fontSize: '56px',
            // backgroundColor: '#bababa',
            // textShadow: '0 2px 3px whitesmoke',
            textShadow: '0 2px 3px rgba(255, 255, 255, .5)',
          }}
        >
          UX Designer | Frontend Aficionado
        </h3>
      </div>
    </Hero>
  </Layout>
)

export default IndexPage
