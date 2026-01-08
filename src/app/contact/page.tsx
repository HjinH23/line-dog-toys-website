import ContactForm from '@/components/ContactForm'
import styles from './page.module.css'

export const metadata = {
    title: '联系我们 - 线条小狗',
    description: '联系线条小狗,我们随时为您服务',
}

export default function ContactPage() {
    return (
        <div className={styles.contactPage}>
            {/* 页面头部 */}
            <section className={styles.pageHeader}>
                <div className="container text-center">
                    <h1 className={styles.pageTitle}>
                        <span className="gradient-text">联系我们</span>
                    </h1>
                    <p className={styles.pageSubtitle}>
                        我们很乐意听到您的声音,随时为您提供帮助 💌
                    </p>
                </div>
            </section>

            {/* 联系内容 */}
            <section className="section">
                <div className="container">
                    <div className={styles.contactGrid}>
                        {/* 联系表单 */}
                        <div className={styles.formSection}>
                            <h2 className={styles.sectionTitle}>发送消息</h2>
                            <p className={styles.sectionDescription}>
                                填写下面的表单,我们会在24小时内回复您
                            </p>
                            <ContactForm />
                        </div>

                        {/* 联系信息 */}
                        <div className={styles.infoSection}>
                            <h2 className={styles.sectionTitle}>联系信息</h2>
                            <p className={styles.sectionDescription}>
                                您也可以通过以下方式联系我们
                            </p>

                            <div className={styles.infoCards}>
                                <div className={styles.infoCard}>
                                    <div className={styles.infoIcon}>👤</div>
                                    <h3>联系人</h3>
                                    <p>黄锦宏<br />线条小狗毛绒玩具有限公司</p>
                                </div>

                                <div className={styles.infoCard}>
                                    <div className={styles.infoIcon}>📍</div>
                                    <h3>公司地址</h3>
                                    <p>中国广东省深圳市南山区<br />科技园南区R2-B栋5楼</p>
                                </div>

                                <div className={styles.infoCard}>
                                    <div className={styles.infoIcon}>📞</div>
                                    <h3>联系电话</h3>
                                    <p>客服热线: 400-888-6688<br />商务合作: 0755-8888-9999</p>
                                </div>

                                <div className={styles.infoCard}>
                                    <div className={styles.infoIcon}>✉️</div>
                                    <h3>电子邮箱</h3>
                                    <p>客服邮箱: hello@linedog.com<br />商务邮箱: business@linedog.com</p>
                                </div>

                                <div className={styles.infoCard}>
                                    <div className={styles.infoIcon}>🕐</div>
                                    <h3>工作时间</h3>
                                    <p>周一至周五: 9:00 - 18:00<br />周六周日: 10:00 - 17:00</p>
                                </div>
                            </div>

                            {/* 社交媒体 */}
                            <div className={styles.socialSection}>
                                <h3 className={styles.socialTitle}>关注我们</h3>
                                <div className={styles.socialLinks}>
                                    <a href="#" className={styles.socialLink}>
                                        <span>💬</span>
                                        <span>微信公众号</span>
                                    </a>
                                    <a href="#" className={styles.socialLink}>
                                        <span>📱</span>
                                        <span>官方微博</span>
                                    </a>
                                    <a href="#" className={styles.socialLink}>
                                        <span>🎵</span>
                                        <span>抖音号</span>
                                    </a>
                                    <a href="#" className={styles.socialLink}>
                                        <span>📷</span>
                                        <span>小红书</span>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* FAQ */}
            <section className={`section ${styles.faqSection}`}>
                <div className="container">
                    <h2 className={`${styles.sectionTitle} text-center`}>常见问题</h2>

                    <div className={styles.faqGrid}>
                        <div className={styles.faqItem}>
                            <h3>❓ 产品是否安全?</h3>
                            <p>
                                我们所有产品均采用环保无毒材料,通过CE、ASTM、GB6675等国际安全认证,
                                可以放心给孩子使用。
                            </p>
                        </div>

                        <div className={styles.faqItem}>
                            <h3>❓ 如何购买产品?</h3>
                            <p>
                                您可以通过我们的官方网站、天猫旗舰店、京东旗舰店或线下合作门店购买。
                                批量采购请联系我们的商务团队。
                            </p>
                        </div>

                        <div className={styles.faqItem}>
                            <h3>❓ 支持退换货吗?</h3>
                            <p>
                                我们提供7天无理由退换货服务,产品质保1年。
                                如有质量问题,我们会免费为您更换或退款。
                            </p>
                        </div>

                        <div className={styles.faqItem}>
                            <h3>❓ 如何清洗毛绒玩具?</h3>
                            <p>
                                建议手洗或使用洗衣袋机洗,水温不超过30℃,
                                使用中性洗涤剂,自然晾干即可。详细说明请参考产品标签。
                            </p>
                        </div>

                        <div className={styles.faqItem}>
                            <h3>❓ 是否支持定制?</h3>
                            <p>
                                我们支持企业定制和大批量定制服务,
                                包括尺寸、颜色、LOGO等个性化需求。请联系商务团队咨询。
                            </p>
                        </div>

                        <div className={styles.faqItem}>
                            <h3>❓ 配送需要多久?</h3>
                            <p>
                                国内订单一般3-5个工作日送达,偏远地区可能需要7-10天。
                                急单可选择加急配送服务。
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}
