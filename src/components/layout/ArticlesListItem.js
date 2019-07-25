import React from 'react';
import { Link } from 'react-router-dom';
import { Hr } from '../global/Hr';

export default ({ article }) => (
    <div>
        <div>
            <div>
                <h3>
                    {article.category
                        ? article.category.map((cat, index) => (
                            <span key={index}>{cat}</span>
                        ))
                        : false
                    }
                </h3>
                <Link to={article.slug}>
                    <h2>{article.title}</h2>
                </Link>
            </div>
            <div>
                <img src={article.image} alt={article.title} />
            </div>
        </div>
        <Hr />
    </div>
);
