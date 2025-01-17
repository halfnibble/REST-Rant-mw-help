const React = require('react')

function Def (html) {
    return (
        <html lang="en">
            <head>
                <meta charSet="utf-8"/>
                <meta name="viewport" content="width=device-width, initial-scale=1"/>
                <title>REST-Rant APP</title>
                <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.0/dist/css/bootstrap.min.css"/>
                <link rel="stylesheet" href="/style.css"/>
            </head>
            <body>
                <nav>
                    <ul className="nav nav-tabs" role="tablist">
                        <li className="nav-item">
                            <a className="nav-link " href="/">Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link " href="/places">Places</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link " href="/places/new">Add Place</a>
                        </li>
                    </ul>
                </nav>
                {html.children}
            </body>
        </html>
    )
}

module.exports = Def
