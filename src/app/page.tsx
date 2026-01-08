import Link from 'next/link'
import ProductCard from '@/components/ProductCard'
import styles from './page.module.css'

export default function Home() {
    const featuredProducts = [
        { name: '可爱小狗玩偶', price: 128, category: '小狗', image: '/products/dog-1.webp' },
        { name: '温柔小熊抱枕', price: 158, category: '小熊', image: '/products/bear-1.webp' },
        { name: '软萌小兔公仔', price: 98, category: '兔子', image: '/products/rabbit-1.webp' },
        { name: '彩虹独角兽', price: 188, category: '其他', image: '/products/unicorn-1.webp' },
    ]

    return (
        <div className={styles.home}>
            {/* 英雄区 */}
            <section className={styles.hero}>
                <div className={styles.heroContent}>
                    <div className={styles.heroText}>
                        <h1 className={styles.heroTitle}>
                            欢迎来到<br />
                            <span className="gradient-text">线条小狗</span>的世界
                        </h1>
                        <p className={styles.heroSubtitle}>
                            为8-14岁的孩子们带来温暖陪伴<br />
                            每一个毛绒玩具都充满爱与快乐 🎈
                        </p>
                        <div className={styles.heroButtons}>
                            <Link href="/products" className="btn btn-primary">
                                探索产品
                            </Link>
                            <Link href="/about" className="btn btn-secondary">
                                了解我们
                            </Link>
                        </div>
                    </div>
                    <div className={styles.heroImage}>
                        <div className={styles.floatingElement} style={{ top: '10%', left: '10%' }}>⭐</div>
                        <div className={styles.floatingElement} style={{ top: '20%', right: '15%' }}>🌈</div>
                        <div className={styles.floatingElement} style={{ bottom: '30%', left: '5%' }}>☁️</div>
                        <div className={styles.floatingElement} style={{ bottom: '15%', right: '10%' }}>✨</div>
                        <div className={styles.mainIllustration}>🧸</div>
                    </div>
                </div>
            </section>

            {/* 特色产品 */}
            <section className="section">
                <div className="container">
                    <h2 className={`${styles.sectionTitle} text-center`}>
                        ✨ 热门产品 ✨
                    </h2>
                    <p className={`${styles.sectionSubtitle} text-center`}>
                        精选最受欢迎的毛绒玩具,给孩子最好的陪伴
                    </p>

                    <div className={styles.productsGrid}>
                        {featuredProducts.map((product, index) => (
                            <ProductCard key={index} {...product} />
                        ))}
                    </div>

                    <div className={styles.viewMore}>
                        <Link href="/products" className="btn btn-primary">
                            查看更多产品 →
                        </Link>
                    </div>
                </div>
            </section>

            {/* 品牌故事 */}
            <section className={`section ${styles.storySection}`}>
                <div className="container">
                    <div className={styles.storyGrid}>
                        <div className={styles.storyImage}>
                            <div className={styles.storyIllustration}>🐶💕</div>
                        </div>
                        <div className={styles.storyContent}>
                            <h2 className={styles.sectionTitle}>我们的故事</h2>
                            <p className={styles.storyText}>
                                线条小狗成立于2015年,源于一个简单的愿望:
                                <strong>让每个孩子都能拥有一个温暖的童年伙伴</strong>。
                            </p>
                            <p className={styles.storyText}>
                                我们专注于设计和生产高品质的毛绒玩具,每一个产品都经过精心设计,
                                采用安全环保的材料,确保孩子们可以安心玩耍。
                            </p>
                            <p className={styles.storyText}>
                                从最初的小狗系列,到现在的小熊、兔子等多个系列,
                                我们始终坚持<strong>品质第一、安全至上</strong>的理念,
                                已经陪伴了超过100万个家庭的孩子成长。
                            </p>
                            <Link href="/about" className="btn btn-secondary">
                                了解更多 →
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* 为什么选择我们 */}
            <section className="section">
                <div className="container">
                    <h2 className={`${styles.sectionTitle} text-center`}>
                        为什么选择线条小狗?
                    </h2>

                    <div className={styles.featuresGrid}>
                        <div className={styles.featureCard}>
                            <div className={styles.featureIcon}>🛡️</div>
                            <h3>安全材质</h3>
                            <p>采用环保无毒材料,通过国际安全认证,让家长放心</p>
                        </div>

                        <div className={styles.featureCard}>
                            <div className={styles.featureIcon}>✨</div>
                            <h3>精致工艺</h3>
                            <p>每一针每一线都经过严格把控,确保产品质量</p>
                        </div>

                        <div className={styles.featureCard}>
                            <div className={styles.featureIcon}>🎨</div>
                            <h3>创意设计</h3>
                            <p>独特的设计风格,激发孩子的想象力和创造力</p>
                        </div>

                        <div className={styles.featureCard}>
                            <div className={styles.featureIcon}>💝</div>
                            <h3>贴心服务</h3>
                            <p>7天无理由退换,1年质保,全程无忧售后</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA区域 */}
            <section className={styles.ctaSection}>
                <div className="container text-center">
                    <h2 className={styles.ctaTitle}>准备好选择您的毛绒伙伴了吗?</h2>
                    <p className={styles.ctaSubtitle}>
                        浏览我们的产品系列,找到最适合您孩子的玩具
                    </p>
                    <div className={styles.ctaButtons}>
                        <Link href="/products" className="btn btn-primary">
                            立即选购
                        </Link>
                        <Link href="/contact" className="btn btn-secondary">
                            联系咨询
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    )
}
