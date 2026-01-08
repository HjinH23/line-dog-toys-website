import Image from 'next/image'
import styles from './ProductCard.module.css'

interface ProductCardProps {
    name: string
    price: number
    category: string
    image: string
}

export default function ProductCard({ name, price, category, image }: ProductCardProps) {
    const categoryColors: { [key: string]: string } = {
        '小狗': '#FF6B9D',
        '小熊': '#B794F6',
        '兔子': '#FFB84D',
        '其他': '#6BCF7F',
    }

    return (
        <div className={styles.card}>
            <div className={styles.imageWrapper}>
                <Image
                    src={image}
                    alt={name}
                    width={300}
                    height={300}
                    className={styles.image}
                />
                <span
                    className={styles.categoryBadge}
                    style={{ background: categoryColors[category] || '#FF6B9D' }}
                >
                    {category}
                </span>
            </div>

            <div className={styles.content}>
                <h3 className={styles.name}>{name}</h3>
                <div className={styles.footer}>
                    <span className={styles.price}>¥{price}</span>
                    <button className={styles.button}>查看详情</button>
                </div>
            </div>
        </div>
    )
}
