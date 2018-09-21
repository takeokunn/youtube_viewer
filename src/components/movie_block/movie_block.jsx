import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faThumbsUp, faThumbsDown } from '@fortawesome/free-solid-svg-icons';

import styles from './movie_block.css';
import no_image from 'Assets/no_image.png';

class MovieBlock extends React.Component {

    constructor() {
        super();
    }

    render() {
        return (
            <div className={ styles.block }>
                <img src={ no_image } className={ styles.img } />
                <p className={ styles.title }>【青鬼オンライン】ついに1位で青逃成功!? ヒカキンスキンゲットw</p>
                <ul className={ styles.ul }>
                    <li className={ styles.li }>
                        <span className={ styles.good }><FontAwesomeIcon icon={ faThumbsUp } /></span>
                        <span>15000</span>
                    </li>
                    <li className={ styles.li }>
                        <span className={ styles.bad }><FontAwesomeIcon icon={ faThumbsDown } /></span>
                        <span>800</span>
                    </li>
                </ul>
            </div>
        );
    }
}

export default MovieBlock;
