import Link from 'next/link'
import styles from './Footer.module.css'

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <div className={styles.wave}>
                <svg viewBox="0 0 1200 120" preserveAspectRatio="none">
                    <path d="M0,0 C150,100 350,0 600,50 C850,100 1050,0 1200,50 L1200,120 L0,120 Z" fill="currentColor" />
                </svg>
            </div>

            <div className={styles.container}>
                <div className={styles.grid}>
                    {/* 公司信息 */}
                    <div className={styles.column}>
                        <h3 className={styles.title}>线条小狗</h3>
                        <p className={styles.description}>
                            专注于为8-14岁儿童提供高品质、安全、充满爱的毛绒玩具,
                            让每一个孩子都能拥有温暖的童年陪伴。
                        </p>
                        <p className={styles.description}>
                            <strong>联系人:黄锦宏</strong>
                        </p>
                        <div className={styles.social}>
                            <a href="#" className={styles.socialLink} aria-label="微信">
                                <span>💬</span>
                            </a>
                            <a href="#" className={styles.socialLink} aria-label="微博">
                                <span>📱</span>
                            </a>
                            <a href="#" className={styles.socialLink} aria-label="抖音">
                                <span>🎵</span>
                            </a>
                        </div>
                    </div>

                    {/* 快速链接 */}
                    <div className={styles.column}>
                        <h4 className={styles.columnTitle}>快速链接</h4>
                        <ul className={styles.links}>
                            <li><Link href="/">首页</Link></li>
                            <li><Link href="/products">产品展示</Link></li>
                            <li><Link href="/about">关于我们</Link></li>
                            <li><Link href="/contact">联系我们</Link></li>
                        </ul>
                    </div>

                    {/* 产品分类 */}
                    <div className={styles.column}>
                        <h4 className={styles.columnTitle}>产品分类</h4>
                        <ul className={styles.links}>
                            <li><Link href="/products?category=dog">小狗系列</Link></li>
                            <li><Link href="/products?category=bear">小熊系列</Link></li>
                            <li><Link href="/products?category=rabbit">兔子系列</Link></li>
                            <li><Link href="/products?category=other">其他动物</Link></li>
                        </ul>
                    </div>

                    {/* 联系方式 */}
                    <div className={styles.column}>
                        <h4 className={styles.columnTitle}>联系我们</h4>
                        <ul className={styles.contact}>
                            <li>📍 中国广东省深圳市</li>
                            <li>📞 400-888-6688</li>
                            <li>✉️ hello@linedog.com</li>
                            <li>🕐 周一至周五 9:00-18:00</li>
                        </ul>
                    </div>
                </div>

                <div className={styles.bottom}>
                    <p>&copy; 2026 线条小狗毛绒玩具有限公司. 保留所有权利.</p>
                    <div className={styles.bottomLinks}>
                        <Link href="#">隐私政策</Link>
                        <Link href="#">服务条款</Link>
                        <Link href="#">网站地图</Link>
                    </div>
                </div>
            </div>
        </footer>
    )
}
