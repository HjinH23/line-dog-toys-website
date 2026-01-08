import styles from './page.module.css'

export const metadata = {
    title: '关于我们 - 线条小狗',
    description: '了解线条小狗的品牌故事、发展历程和企业理念',
}

export default function AboutPage() {
    return (
        <div className={styles.aboutPage}>
            {/* 页面头部 */}
            <section className={styles.pageHeader}>
                <div className="container text-center">
                    <h1 className={styles.pageTitle}>
                        <span className="gradient-text">关于我们</span>
                    </h1>
                    <p className={styles.pageSubtitle}>
                        用心制作每一个玩具,陪伴孩子快乐成长
                    </p>
                </div>
            </section>

            {/* 公司简介 */}
            <section className="section">
                <div className="container">
                    <div className={styles.introGrid}>
                        <div className={styles.introImage}>
                            <div className={styles.imageContent}>🏭✨</div>
                        </div>
                        <div className={styles.introText}>
                            <h2 className={styles.sectionTitle}>我们是谁</h2>
                            <p className={styles.text}>
                                线条小狗成立于2015年,是一家专注于儿童毛绒玩具设计与生产的创新型企业。
                                我们的名字源于创始人第一个设计的小狗玩具——它有着简洁流畅的线条,
                                却能传递出无限的温暖与爱。
                            </p>
                            <p className={styles.text}>
                                从一个小小的工作室,到如今拥有现代化生产基地和专业设计团队,
                                我们始终坚持<strong className={styles.highlight}>品质第一、安全至上、创意无限</strong>的理念,
                                为8-14岁的孩子们创造最好的童年伙伴。
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* 品牌理念 */}
            <section className={`section ${styles.visionSection}`}>
                <div className="container">
                    <h2 className={`${styles.sectionTitle} text-center`}>品牌理念</h2>

                    <div className={styles.visionGrid}>
                        <div className={styles.visionCard}>
                            <div className={styles.visionIcon}>🎯</div>
                            <h3>使命</h3>
                            <p>为每个孩子提供安全、温暖、充满爱的毛绒玩具,成为他们童年最美好的回忆</p>
                        </div>

                        <div className={styles.visionCard}>
                            <div className={styles.visionIcon}>👁️</div>
                            <h3>愿景</h3>
                            <p>成为中国最受信赖的儿童毛绒玩具品牌,让线条小狗陪伴每一个孩子成长</p>
                        </div>

                        <div className={styles.visionCard}>
                            <div className={styles.visionIcon}>💎</div>
                            <h3>价值观</h3>
                            <p>安全第一、品质至上、创新设计、用心服务、社会责任</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* 产品优势 */}
            <section className="section">
                <div className="container">
                    <h2 className={`${styles.sectionTitle} text-center`}>我们的优势</h2>

                    <div className={styles.advantagesGrid}>
                        <div className={styles.advantageItem}>
                            <div className={styles.advantageNumber}>01</div>
                            <h3>安全材质</h3>
                            <p>
                                所有产品均采用环保无毒的优质材料,通过国际安全认证(CE、ASTM、GB6675),
                                确保孩子们可以安心玩耍。
                            </p>
                        </div>

                        <div className={styles.advantageItem}>
                            <div className={styles.advantageNumber}>02</div>
                            <h3>精湛工艺</h3>
                            <p>
                                每一个玩具都经过20道工序精心制作,从裁剪、缝制到填充、检验,
                                严格把控每一个细节。
                            </p>
                        </div>

                        <div className={styles.advantageItem}>
                            <div className={styles.advantageNumber}>03</div>
                            <h3>创意设计</h3>
                            <p>
                                拥有专业的设计团队,每年推出50+新款设计,
                                结合儿童心理学和美学,创造深受孩子喜爱的产品。
                            </p>
                        </div>

                        <div className={styles.advantageItem}>
                            <div className={styles.advantageNumber}>04</div>
                            <h3>品质保证</h3>
                            <p>
                                提供7天无理由退换货,1年质保服务,
                                专业客服团队全程跟进,让您购买无忧。
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* 发展历程 */}
            <section className={`section ${styles.timelineSection}`}>
                <div className="container">
                    <h2 className={`${styles.sectionTitle} text-center`}>发展历程</h2>

                    <div className={styles.timeline}>
                        <div className={styles.timelineItem}>
                            <div className={styles.timelineYear}>2015</div>
                            <div className={styles.timelineContent}>
                                <h4>品牌创立</h4>
                                <p>线条小狗在深圳成立,推出第一款小狗系列玩具</p>
                            </div>
                        </div>

                        <div className={styles.timelineItem}>
                            <div className={styles.timelineYear}>2017</div>
                            <div className={styles.timelineContent}>
                                <h4>产品线扩展</h4>
                                <p>推出小熊、兔子系列,产品种类达到30+款</p>
                            </div>
                        </div>

                        <div className={styles.timelineItem}>
                            <div className={styles.timelineYear}>2019</div>
                            <div className={styles.timelineContent}>
                                <h4>生产基地建成</h4>
                                <p>现代化生产基地投入使用,年产能达到100万件</p>
                            </div>
                        </div>

                        <div className={styles.timelineItem}>
                            <div className={styles.timelineYear}>2021</div>
                            <div className={styles.timelineContent}>
                                <h4>获得认证</h4>
                                <p>通过国际安全认证,产品出口至多个国家</p>
                            </div>
                        </div>

                        <div className={styles.timelineItem}>
                            <div className={styles.timelineYear}>2026</div>
                            <div className={styles.timelineContent}>
                                <h4>持续创新</h4>
                                <p>已服务超过100万家庭,继续为孩子们创造快乐</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className={styles.ctaSection}>
                <div className="container text-center">
                    <h2 className={styles.ctaTitle}>想了解更多?</h2>
                    <p className={styles.ctaText}>
                        欢迎联系我们,我们很乐意为您解答任何问题
                    </p>
                    <a href="/contact" className="btn btn-primary">
                        联系我们 →
                    </a>
                </div>
            </section>
        </div>
    )
}
