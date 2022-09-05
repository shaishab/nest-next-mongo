import React from "react";

const Favicon = (): JSX.Element => {
    return (
        <>
            <link rel="shortcut icon" href="/static/favicon.ico" />
            <link rel="aandroid-chrome-192x192-icon" sizes="192x1192" href="/static/android-chrome-192x192.png"/>
            <link rel="android-chrome-512x512-icon" sizes="512x512" href="/static/android-chrome-512x512.png"/>
            <link rel="apple-touch-icon" sizes="180x180" href="/static/apple-touch-icon.png.png"/>
            <link rel="icon" sizes="32x32" href="/static/favicon-32x32.png"/>
            <link rel="icon" sizes="16x16" href="/static/favicon-16x16.png"/>
            {/* <link rel="manifest" href="/site.webmanifest"/> */}
            <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5"/>
            <meta name="apple-mobile-web-app-title" content="Snippit"/>
            <meta name="application-name" content="Nest-Next-Mongo"/>
            <meta name="msapplication-TileColor" content="#ffc40d"/>
            <meta name="theme-color" content="#ffffff"/>
        </>
    );
}

export default Favicon;