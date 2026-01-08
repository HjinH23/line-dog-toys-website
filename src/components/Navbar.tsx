'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'
import styles from './Navbar.module.css'

export default function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    const navLinks = [
        { href: '/', label: '首页' },
        { href: '/products', label: '产品展示' },
        { href: '/about', label: '关于我们' },
        { href: '/contact', label: '联系我们' },
    ]

    return (
        <nav className={styles.navbar}>
            <div className={styles.container}>
                <Link href="/" className={styles.logo}>
                    <Image
                        src="/logo.webp"
                        alt="线条小狗"
                        width={50}
                        height={50}
                        priority
                    />
                    <span className={styles.logoText}>线条小狗</span>
                </Link>

                {/* 桌面端导航 */}
                <ul className={styles.navLinks}>
                    {navLinks.map((link) => (
                        <li key={link.href}>
                            <Link href={link.href} className={styles.navLink}>
                                {link.label}
                            </Link>
                        </li>
                    ))}
                </ul>

                {/* 移动端菜单按钮 */}
                <button
                    className={`${styles.menuButton} ${isMenuOpen ? styles.open : ''}`}
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                    aria-label="菜单"
                >
                    <span></span>
                    <span></span>
                    <span></span>
                </button>
            </div>

            {/* 移动端菜单 */}
            <div className={`${styles.mobileMenu} ${isMenuOpen ? styles.show : ''}`}>
                <ul>
                    {navLinks.map((link) => (
                        <li key={link.href}>
                            <Link
                                href={link.href}
                                className={styles.mobileNavLink}
                                onClick={() => setIsMenuOpen(false)}
                            >
                                {link.label}
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
        </nav>
    )
}
