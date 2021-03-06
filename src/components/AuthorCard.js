import React from 'react'

const AuthorCard = ( { image, name, twitter, email } ) =>
    <section className="author-card">
        <img className="author-profile-image" src={ image } alt={ name } />
        <section className="author-card-content">
            <h4 className="author-card-name">{ name }</h4>
            <p className="twitter-handle"><a href={ `https://twitter.com/${twitter}`}>@{ twitter }</a></p>
            <p className="twitter-handle"><a href={ `mailto:${email}`}>{ email }</a></p>
        </section>
    </section>

export default AuthorCard