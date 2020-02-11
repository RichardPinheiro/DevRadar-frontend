import React from 'react'

import './styles.css'

const DevItens = ({ developer }) => (
    <li className="dev-item">
        <header>
            <img src={ developer.avatar_url } alt={ developer.name }/>
            <div className="user-info">
                <strong> { developer.name } </strong>
                <strong>
                    <span> 
                        <i className="fa fa-github fa-lg"></i> { developer.github_username }
                    </span>
                </strong>
                <span>
                    <i className="fa fa-laptop fa-lg"></i> { developer.techs.join(', ') }
                </span>
            </div>
        </header>
        <p> { developer.bio } </p>
        <a href={ `https://github.com/${developer.github_username}` } target="_blank">
            <i className="fa fa-github fa-lg"></i> Profile GitHub
        </a>
    </li>
)

export default DevItens