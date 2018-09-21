import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faThumbsUp, faThumbsDown, faTimesCircle } from '@fortawesome/free-solid-svg-icons';

import Icon from 'Assets/icon.png';
import styles from './replay_block.css';

class ReplayBlock extends React.Component {

    constructor() {
        super();
    }

    render() {
        return (
            <div className={ styles.block }>
                <div className={ styles.close }>
                    <FontAwesomeIcon icon={ faTimesCircle } />
                </div>
                <div className={ styles.video }>
                    <iframe
                        src="https://www.youtube.com/embed/ZF6WOcbI0Zk"
                        frameBorder="0"
                        allow="autoplay; encrypted-media"
                        allowFullScreen></iframe>
                </div>
                <div className={ styles.side }>
                    <ul className={ styles.ul }>
                        <li>
                            <img src={ Icon } />
                            <div>
                                <p>みんなレベル10にしてヒカキンスキンゲットしてみてねー！😎👍﻿</p>
                            </div>
                        </li>
                        <li>
                            <img src={ Icon } />
                            <div>
                                <p>みんなレベル10にしてヒカキンスキンゲットしてみてねー！😎👍﻿</p>
                            </div>
                        </li>
                        <li>
                            <img src={ Icon } />
                            <div>
                                <p>みんなレベル10にしてヒカキンスキンゲットしてみてねー！😎👍﻿</p>
                            </div>
                        </li>
                        <li>
                            <img src={ Icon } />
                            <div>
                                <p>みんなレベル10にしてヒカキンスキンゲットしてみてねー！😎👍﻿</p>
                            </div>
                        </li>
                        <li>
                            <img src={ Icon } />
                            <div>
                                <p>みんなレベル10にしてヒカキンスキンゲットしてみてねー！😎👍﻿</p>
                            </div>
                        </li>
                        <li>
                            <img src={ Icon } />
                            <div>
                                <p>みんなレベル10にしてヒカキンスキンゲットしてみてねー！😎👍﻿</p>
                            </div>
                        </li>
                        <li>
                            <img src={ Icon } />
                            <div>
                                <p>みんなレベル10にしてヒカキンスキンゲットしてみてねー！😎👍﻿</p>
                            </div>
                        </li>
                        <li>
                            <img src={ Icon } />
                            <div>
                                <p>みんなレベル10にしてヒカキンスキンゲットしてみてねー！😎👍﻿</p>
                            </div>
                        </li>
                        <li>
                            <img src={ Icon } />
                            <div>
                                <p>みんなレベル10にしてヒカキンスキンゲットしてみてねー！😎👍﻿</p>
                            </div>
                        </li>
                    </ul>
                    <ul className={ styles.info }>
                        <li className={ styles.li }>
                            <span className={ styles.good }>
                                <FontAwesomeIcon icon={ faThumbsUp } />
                            </span>
                            <span>15000</span>
                        </li>
                        <li className={ styles.li }>
                            <span className={ styles.bad }>
                                <FontAwesomeIcon icon={ faThumbsDown } />
                            </span>
                            <span>800</span>
                        </li>
                    </ul>
                </div>
            </div>
        );
    }
}

export default ReplayBlock;
