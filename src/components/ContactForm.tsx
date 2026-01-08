'use client'

import { useState, FormEvent } from 'react'
import styles from './ContactForm.module.css'

export default function ContactForm() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: '',
    })
    const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle')

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()

        // 模拟表单提交
        setTimeout(() => {
            setStatus('success')
            setFormData({ name: '', email: '', subject: '', message: '' })

            setTimeout(() => {
                setStatus('idle')
            }, 3000)
        }, 500)
    }

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        })
    }

    return (
        <form className={styles.form} onSubmit={handleSubmit}>
            <div className={styles.formGroup}>
                <label htmlFor="name" className={styles.label}>
                    姓名 <span className={styles.required}>*</span>
                </label>
                <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className={styles.input}
                    required
                    placeholder="请输入您的姓名"
                />
            </div>

            <div className={styles.formGroup}>
                <label htmlFor="email" className={styles.label}>
                    邮箱 <span className={styles.required}>*</span>
                </label>
                <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className={styles.input}
                    required
                    placeholder="your@email.com"
                />
            </div>

            <div className={styles.formGroup}>
                <label htmlFor="subject" className={styles.label}>
                    主题 <span className={styles.required}>*</span>
                </label>
                <select
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className={styles.input}
                    required
                >
                    <option value="">请选择咨询主题</option>
                    <option value="product">产品咨询</option>
                    <option value="order">订单问题</option>
                    <option value="cooperation">合作洽谈</option>
                    <option value="other">其他问题</option>
                </select>
            </div>

            <div className={styles.formGroup}>
                <label htmlFor="message" className={styles.label}>
                    留言 <span className={styles.required}>*</span>
                </label>
                <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    className={`${styles.input} ${styles.textarea}`}
                    required
                    rows={6}
                    placeholder="请详细描述您的问题或需求..."
                />
            </div>

            <button type="submit" className={styles.submitButton}>
                发送消息
            </button>

            {status === 'success' && (
                <div className={styles.successMessage}>
                    ✅ 消息发送成功!我们会尽快回复您。
                </div>
            )}

            {status === 'error' && (
                <div className={styles.errorMessage}>
                    ❌ 发送失败,请稍后重试。
                </div>
            )}
        </form>
    )
}
