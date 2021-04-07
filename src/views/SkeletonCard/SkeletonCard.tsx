import React, { FunctionComponent } from 'react';
import Card from '../../components/Card/Card';
import styles from './SkeletonCard.module.css'

const SkeletonCard: FunctionComponent = () => {
        return (
        <article>
            <Card className={styles.card__skeleton}>
                <div className={styles.skeleton__img} />
                <section className={styles.skeleton__details}>
                    <div className={styles.skeleton__title}>
                    </div>
                    <span className={styles.skeleton__paragraph}></span>
                    <span className={styles.skeleton__link}></span>
                </section>
            </Card>
        </article>
    )
}

export default SkeletonCard;