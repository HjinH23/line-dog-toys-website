'use client'

import { useState } from 'react'
import styles from './ChatWidget.module.css'

export default function ChatWidget() {
    const [isOpen, setIsOpen] = useState(false)
    const [messages, setMessages] = useState([
        { type: 'bot', text: '您好!我是线条小狗客服小助手,有什么可以帮您的吗?😊' }
    ])
    const [input, setInput] = useState('')

    const quickReplies = [
        '产品咨询',
        '价格查询',
        '售后服务',
        '合作洽谈',
    ]

    const handleQuickReply = (reply: string) => {
        handleSendMessage(reply)
    }

    const handleSendMessage = (text?: string) => {
        const messageText = text || input
        if (!messageText.trim()) return

        // 添加用户消息
        setMessages(prev => [...prev, { type: 'user', text: messageText }])
        setInput('')

        // 模拟机器人回复
        setTimeout(() => {
            let botReply = ''

            if (messageText.includes('产品') || messageText.includes('咨询')) {
                botReply = '我们主要生产小狗、小熊、兔子等毛绒玩具系列。您可以访问产品展示页查看详情,或告诉我您感兴趣的产品类型!🧸'
            } else if (messageText.includes('价格')) {
                botReply = '我们的产品价格从68元到298元不等,具体价格请查看产品详情页。批量采购有优惠哦!💰'
            } else if (messageText.includes('售后')) {
                botReply = '我们提供7天无理由退换货服务,产品质保1年。如有任何问题,请联系我们的客服团队!📞'
            } else if (messageText.includes('合作')) {
                botReply = '感谢您的关注!请通过联系我们页面留下您的信息,我们的商务团队会尽快与您联系!🤝'
            } else {
                botReply = '感谢您的咨询!如需更详细的帮助,请拨打客服热线 400-888-6688,或在联系我们页面留言。我们的工作时间是周一至周五 9:00-18:00。'
            }

            setMessages(prev => [...prev, { type: 'bot', text: botReply }])
        }, 800)
    }

    return (
        <>
            {/* 聊天按钮 */}
            <button
                className={`${styles.chatButton} ${isOpen ? styles.hidden : ''}`}
                onClick={() => setIsOpen(true)}
                aria-label="在线咨询"
            >
                <span className={styles.chatIcon}>💬</span>
                <span className={styles.badge}>在线</span>
            </button>

            {/* 聊天窗口 */}
            <div className={`${styles.chatWindow} ${isOpen ? styles.open : ''}`}>
                <div className={styles.chatHeader}>
                    <div className={styles.headerInfo}>
                        <span className={styles.avatar}>🐶</span>
                        <div>
                            <h4>线条小狗客服</h4>
                            <span className={styles.status}>在线</span>
                        </div>
                    </div>
                    <button
                        className={styles.closeButton}
                        onClick={() => setIsOpen(false)}
                        aria-label="关闭"
                    >
                        ✕
                    </button>
                </div>

                <div className={styles.chatBody}>
                    {messages.map((msg, index) => (
                        <div
                            key={index}
                            className={`${styles.message} ${msg.type === 'user' ? styles.userMessage : styles.botMessage}`}
                        >
                            {msg.text}
                        </div>
                    ))}

                    {messages.length === 1 && (
                        <div className={styles.quickReplies}>
                            <p className={styles.quickRepliesTitle}>快速咨询:</p>
                            {quickReplies.map((reply, index) => (
                                <button
                                    key={index}
                                    className={styles.quickReplyButton}
                                    onClick={() => handleQuickReply(reply)}
                                >
                                    {reply}
                                </button>
                            ))}
                        </div>
                    )}
                </div>

                <div className={styles.chatFooter}>
                    <input
                        type="text"
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                        onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                        placeholder="输入您的问题..."
                        className={styles.chatInput}
                    />
                    <button
                        onClick={() => handleSendMessage()}
                        className={styles.sendButton}
                        aria-label="发送"
                    >
                        ➤
                    </button>
                </div>
            </div>
        </>
    )
}
