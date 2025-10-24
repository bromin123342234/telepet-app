* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
    margin: 0;
    padding: 20px;
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    color: white;
    min-height: 100vh;
    width: 100vw;
    overflow: hidden;
}

.container {
    max-width: 100%;
    margin: 0 auto;
    text-align: center;
    padding: 10px;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
}

#pet-container {
    margin: 10px 0;
    flex-grow: 1;
    display: flex;
    align-items: center;
    justify-content: center;
}

#pet-image {
    width: 200px;
    height: 200px;
    border-radius: 50%;
    border: 5px solid gold;
    box-shadow: 0 0 20px rgba(255, 215, 0, 0.5);
    object-fit: cover;
}

.stats {
    background: rgba(255, 255, 255, 0.2);
    padding: 15px;
    border-radius: 15px;
    margin: 10px 0;
    backdrop-filter: blur(10px);
}

.stat-item {
    margin: 8px 0;
    font-size: 18px;
    font-weight: bold;
}

.actions {
    display: flex;
    flex-direction: column;
    gap: 10px;
    margin: 10px 0;
}

.action-btn {
    background: linear-gradient(45deg, #FFD700, #FFA500);
    border: none;
    padding: 16px 20px;
    border-radius: 25px;
    font-size: 18px;
    font-weight: bold;
    cursor: pointer;
    transition: all 0.3s;
    color: #333;
    box-shadow: 0 4px 15px rgba(255, 215, 0, 0.3);
}

.action-btn:hover {
    transform: translateY(-2px);
    box-shadow: 0 6px 20px rgba(255, 215, 0, 0.5);
}

.shop-btn {
    background: linear-gradient(45deg, #FF6B6B, #FF8E53);
}

.shop {
    background: rgba(255, 255, 255, 0.95);
    color: #333;
    padding: 20px;
    border-radius: 20px;
    margin-top: 10px;
    backdrop-filter: blur(10px);
}

.shop h3 {
    margin-bottom: 15px;
    color: #667eea;
}

.shop-item {
    background: linear-gradient(45deg, #667eea, #764ba2);
    color: white;
    border: none;
    padding: 12px 15px;
    margin: 8px 0;
    border-radius: 20px;
    font-size: 16px;
    cursor: pointer;
    transition: all 0.3s;
    width: 100%;
}

.shop-item:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 15px rgba(102, 126, 234, 0.4);
}

.close-btn {
    background: #ff4757;
    color: white;
    border: none;
    padding: 10px 15px;
    margin-top: 10px;
    border-radius: 20px;
    cursor: pointer;
    transition: all 0.3s;
    width: 100%;
}

.close-btn:hover {
    background: #ff3742;
    transform: translateY(-2px);
}

.hidden {
    display: none;
}

/* Анимации */
@keyframes bounce {
    0%, 100% { transform: scale(1); }
    50% { transform: scale(1.05); }
}

#pet-image {
    animation: bounce 2s ease-in-out infinite;
}
