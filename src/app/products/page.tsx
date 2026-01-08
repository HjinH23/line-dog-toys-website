'use client'

import { useState } from 'react'
import ProductCard from '@/components/ProductCard'
import styles from './page.module.css'

export default function ProductsPage() {
    const [activeCategory, setActiveCategory] = useState('all')

    const categories = [
        { id: 'all', name: '全部产品', icon: '🎁' },
        { id: 'dog', name: '小狗系列', icon: '🐶' },
        { id: 'bear', name: '小熊系列', icon: '🐻' },
        { id: 'rabbit', name: '兔子系列', icon: '🐰' },
        { id: 'other', name: '其他动物', icon: '🦄' },
    ]

    const allProducts = [
        { name: '可爱小狗玩偶', price: 128, category: '小狗', image: '/products/dog-1.webp' },
        { name: '柯基小短腿', price: 148, category: '小狗', image: '/products/dog-2.webp' },
        { name: '哈士奇公仔', price: 168, category: '小狗', image: '/products/dog-3.webp' },
        { name: '温柔小熊抱枕', price: 158, category: '小熊', image: '/products/bear-1.webp' },
        { name: '泰迪熊宝宝', price: 138, category: '小熊', image: '/products/bear-2.webp' },
        { name: '北极熊毛绒', price: 178, category: '小熊', image: '/products/bear-3.webp' },
        { name: '软萌小兔公仔', price: 98, category: '兔子', image: '/products/rabbit-1.webp' },
        { name: '长耳兔玩偶', price: 118, category: '兔子', image: '/products/rabbit-2.webp' },
        { name: '彩虹独角兽', price: 188, category: '其他', image: '/products/unicorn-1.webp' },
        { name: '粉色小猪', price: 108, category: '其他', image: '/products/pig-1.webp' },
        { name: '呆萌企鹅', price: 128, category: '其他', image: '/products/penguin-1.webp' },
        { name: '可爱小猫咪', price: 138, category: '其他', image: '/products/cat-1.webp' },
    ]

    const filteredProducts = activeCategory === 'all'
        ? allProducts
        : allProducts.filter(p => {
            const categoryMap: { [key: string]: string } = {
                'dog': '小狗',
                'bear': '小熊',
                'rabbit': '兔子',
                'other': '其他'
            }
            return p.category === categoryMap[activeCategory]
        })

    return (
        <div className={styles.productsPage}>
            {/* 页面头部 */}
            <section className={styles.pageHeader}>
                <div className="container text-center">
                    <h1 className={styles.pageTitle}>
                        <span className="gradient-text">产品展示</span>
                    </h1>
                    <p className={styles.pageSubtitle}>
                        探索我们精心设计的毛绒玩具系列,每一个都充满爱与温暖 💕
                    </p>
                </div>
            </section>

            {/* 分类筛选 */}
            <section className={styles.filterSection}>
                <div className="container">
                    <div className={styles.categories}>
                        {categories.map((cat) => (
                            <button
                                key={cat.id}
                                className={`${styles.categoryButton} ${activeCategory === cat.id ? styles.active : ''}`}
                                onClick={() => setActiveCategory(cat.id)}
                            >
                                <span className={styles.categoryIcon}>{cat.icon}</span>
                                <span>{cat.name}</span>
                            </button>
                        ))}
                    </div>
                </div>
            </section>

            {/* 产品网格 */}
            <section className="section">
                <div className="container">
                    <div className={styles.productsCount}>
                        共 <strong>{filteredProducts.length}</strong> 个产品
                    </div>

                    <div className={styles.productsGrid}>
                        {filteredProducts.map((product, index) => (
                            <ProductCard key={index} {...product} />
                        ))}
                    </div>
                </div>
            </section>
        </div>
    )
}
