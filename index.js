import React from 'react';
import ReactDOMServer from 'react-dom/server';
import express from 'express';
import App from './src/App';
import path from 'path';
import { StaticRouter } from 'react-router-dom';

const app = express();
const PORT = 3000;

app.use('/static', express.static(path.resolve(__dirname, 'assets')));
app.use('/assets', express.static(path.resolve(__dirname, 'assets/images')));

app.get('/*', (req, res, next) => {
    const context = {};
    const component = ReactDOMServer.renderToString(
        <div id="root">
            <StaticRouter location={req.url} context={context}>
                <App/>
            </StaticRouter>
        </div>
    )
    const html = `
<!--
                _   _                     _ _ 
    ___ ___ ___| |_| |_ ___ ___   ___ ___|_| |
   |_ -| _'| -_| '_|   | _'|   | | _'| _ | | |
   |___|__,|___|_,_|_|_|__,|_|_| |__,|_  |_|_|
                                     |___|    

   Developed by Saekhan Agil.
   Contact: syaikhanagil.id@gmail.com

-->
<!DOCTYPE html><html lang="en"><head><meta charset="UTF-8"><meta http-equiv="X-UA-Compatible" content="IE=edge"><meta http-equiv="X-UA-Compatible" content="IE=7"><meta name="google" content="notranslate"/>
    <title>Saekhan Agil</title>
    <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no">
    <meta name="description" content="An ordinary people who really like web development, especially front-end development.">
    <meta name="keywords" content="Web, Developer, Programmer, Front-End, Back-End, Full-Stack, Laravel, NodeJS, React, Vue, HTML, CSS, Javascript">
    <meta name="theme-color" content="#353353">
    <meta name="msapplication-navbutton-color" content="#353353">
    <meta name="apple-mobile-web-app-status-bar-style" content="#353353">
    <meta property="og:type" content="website">
    <meta property="og:locale" content="en_US">
    <meta property="og:url" content="//saekhanagil.com"/>
    <meta property="og:title" content="Saekhan Agil"/>
    <meta property="og:image" content="//saekhanagil.com/assets/logo-agil.png"/>
    <meta property="og:description" content="An ordinary people who really like web development, especially front-end development."/>
    <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1">
    <link rel="icon" type="image/x-icon" href="/assets/logo-agil.png" />
    <link rel="preload" href="/static/app.css" as="style">
    <link rel="preload" href="/static/app.js" as="script">
    <link rel="stylesheet" href="/static/app.css">
    <link rel="canonical" href="https://www.saekhanagil.com/" />
    <!-- Global site tag (gtag.js) - Google Analytics -->
    <script async src="https://www.googletagmanager.com/gtag/js?id=UA-189310892-1"></script>
    <script>window.dataLayer = window.dataLayer || [];function gtag(){dataLayer.push(arguments);}gtag('js', new Date());gtag('config', 'UA-189310892-1');</script>
    <style>#preloader {position: fixed;display: block;width: 100%;height: 100%;top: 0;left: 0;background: #fff;z-index: 1000;}.spinner {position: absolute;width: 70px;text-align: center;top: 50%;left: 50%;transform: translate(-50%, -50%);}.spinner>div {width: 18px;height: 18px;background-color: #353353;border-radius: 100%;display: inline-block;-webkit-animation: sk-bouncedelay 1.4s infinite ease-in-out both;animation: sk-bouncedelay 1.4s infinite ease-in-out both;}.spinner .bounce1 {-webkit-animation-delay: -0.32s;animation-delay: -0.32s;}.spinner .bounce2 {-webkit-animation-delay: -0.16s;animation-delay: -0.16s;}@-webkit-keyframes sk-bouncedelay {0%,80%,100% {-webkit-transform: scale(0)}40% {-webkit-transform: scale(1.0)}}@keyframes sk-bouncedelay {0%,80%,100% {-webkit-transform: scale(0);transform: scale(0);}40% {-webkit-transform: scale(1.0);transform: scale(1.0);}}</style>
</head>
<body>
<div id="preloader"><div class="spinner"><div class="bounce1"></div><div class="bounce2"></div><div class="bounce3"></div></div></div>
${component}<script src="/static/app.js"></script><script src="/static/canvas.js"></script></body></html>`
    if (context.url) {
        res.writeHead(301, { Location: context.url });
        res.end();
    } else {
        res.send(html); 
    }
});
app.listen(PORT, () => {
    console.log('App running on => http://127.0.0.1:'+PORT);
});
