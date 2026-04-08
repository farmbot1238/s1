let lastQuoteIndex = -1;
let subscribedEmails = [];

function showMessage(text, type = 'info') {
    const msgDiv = document.getElementById('statusMessage');
    msgDiv.textContent = text;
    msgDiv.className = `status-message ${type}`;
    msgDiv.style.display = 'block';
    setTimeout(() => {
        msgDiv.style.display = 'none';
    }, 3000);
}

function loadSubscribedEmails() {
    const stored = localStorage.getItem('subscribedEmails');
    if (stored) {
        subscribedEmails = JSON.parse(stored);
    }
}

function saveSubscribedEmails() {
    localStorage.setItem('subscribedEmails', JSON.stringify(subscribedEmails));
}

function submitSubscription() {
    const email = document.getElementById('subscribeEmail').value;
    if (!email || !email.includes('@')) {
        showMessage('⚠️ الرجاء إدخال بريد إلكتروني صحيح', 'error');
        return;
    }
    
    if (subscribedEmails.includes(email)) {
        showMessage('⚠️ هذا البريد مسجل مسبقاً! يمكنك إلغاء الاشتراك من الأسفل', 'error');
        return;
    }
    
    fetch(SITE_CONFIG.googleScriptURL, {
        method: 'POST',
        mode: 'no-cors',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ 
            email: email, 
            date: new Date().toISOString(),
            action: 'subscribe'
        })
    }).then(() => {
        subscribedEmails.push(email);
        saveSubscribedEmails();
        showMessage('✅ تم الاشتراك بنجاح! ستصل إليك التحديثات قريباً.', 'success');
        closeSubscribeModal();
    }).catch(() => {
        subscribedEmails.push(email);
        saveSubscribedEmails();
        showMessage('✅ تم الاشتراك بنجاح!', 'success');
        closeSubscribeModal();
    });
}

function unsubscribeEmail() {
    const email = document.getElementById('unsubscribeEmail').value;
    if (!email || !email.includes('@')) {
        showMessage('⚠️ الرجاء إدخال بريد إلكتروني صحيح', 'error');
        return;
    }
    
    const index = subscribedEmails.indexOf(email);
    if (index !== -1) {
        subscribedEmails.splice(index, 1);
        saveSubscribedEmails();
    }
    
    fetch(SITE_CONFIG.googleScriptURL, {
        method: 'POST',
        mode: 'no-cors',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ 
            email: email, 
            action: 'unsubscribe'
        })
    }).then(() => {
        showMessage('✅ تم إلغاء الاشتراك بنجاح! لن تصلك أي تحديثات مستقبلية.', 'success');
        closeSubscribeModal();
    }).catch(() => {
        showMessage('✅ تم إلغاء الاشتراك بنجاح!', 'success');
        closeSubscribeModal();
    });
}

function showSubscribeModal() {
    const modalHtml = `
        <div id="subscribeModal" class="modal-overlay">
            <div class="modal-content">
                <i class="fas fa-bell" style="font-size:3rem; color:#f9b81b; margin-bottom:15px;"></i>
                <h3 style="color:#1e3c5c; margin-bottom:15px;">اشترك في تحديثات الموقع</h3>
                <p style="color:#4a5f73; margin-bottom:20px;">أدخل بريدك الإلكتروني ليصلك كل تحديث جديد</p>
                <input type="email" id="subscribeEmail" placeholder="example@email.com">
                <button class="subscribe-btn" onclick="submitSubscription()">اشتراك</button>
                <button class="cancel-btn" onclick="closeSubscribeModal()">إلغاء</button>
                
                <div class="unsubscribe-section">
                    <p><i class="fas fa-trash-alt"></i> تريد إلغاء الاشتراك؟</p>
                    <input type="email" id="unsubscribeEmail" placeholder="أدخل بريدك لإلغاء الاشتراك">
                    <button class="unsubscribe-btn" onclick="unsubscribeEmail()">إلغاء الاشتراك</button>
                </div>
            </div>
        </div>
    `;
    document.body.insertAdjacentHTML('beforeend', modalHtml);
}

function closeSubscribeModal() {
    const modal = document.getElementById('subscribeModal');
    if (modal) modal.remove();
}

function getRandomQuote() {
    let newIndex;
    do {
        newIndex = Math.floor(Math.random() * QUOTES.length);
    } while (newIndex === lastQuoteIndex && QUOTES.length > 1);
    lastQuoteIndex = newIndex;
    return QUOTES[newIndex];
}

function showWelcome() {
    const container = document.getElementById('iframeContainer');
    if (!container) return;
    const quote = getRandomQuote();
    const quoteLines = quote.split('\n').join('<br>');
    
    // عرض الصفحة الرئيسية بشكل صحيح
    container.innerHTML = `
        <div style="background: linear-gradient(145deg, #1e3c5c, #0f2a3f); color: white; padding: 40px 30px; min-height: 100%; overflow-y: auto;">
            <div style="text-align: center; max-width: 700px; margin: 0 auto;">
                <i class="fas fa-graduation-cap" style="font-size: 4rem; color:#f9b81b; margin-bottom:20px;"></i>
                <h2 style="margin-bottom: 15px;">مرحباً بك في منصة ${SITE_CONFIG.siteName}</h2>
                <p style="margin-bottom: 30px; font-size: 1.1rem;">✨ متعاونون على التفوق ✨</p>
                
                <div style="margin: 30px auto; padding: 25px; background: rgba(255,255,255,0.1); border-radius: 30px; border-right: 4px solid #f9b81b; opacity: 0.7;">
                    <i class="fas fa-quote-right" style="color: #f9b81b; font-size: 1.5rem;"></i>
                    <p style="margin: 20px 0; line-height: 1.8; font-size: 1.1rem;">${quoteLines}</p>
                </div>

                <div style="margin: 30px auto; padding: 25px; background: rgba(0,0,0,0.35); border-radius: 30px; text-align: center; backdrop-filter: blur(5px);">
                    <i class="fas fa-comments" style="font-size: 2.5rem; color: #f9b81b; margin-bottom: 10px; display: block;"></i>
                    <h3 style="color: #f9b81b; margin-bottom: 15px; font-size: 1.3rem;">💬 دردشة دراسية</h3>
                    <p style="font-size: 0.95rem; margin-bottom: 15px; line-height: 1.8;">
                        📌 تواصل مع زملائك، ناقش أفكارك، وشارك استفساراتك<br>
                        بيئة تعاونية للتفوق والنجاح
                    </p>
                    <button onclick="loadIframe('${SITE_CONFIG.chat}')" style="background: linear-gradient(135deg, #f9b81b, #e5a00d); color: #1e3c5c; padding: 12px 35px; border-radius: 40px; border: none; font-weight: bold; font-size: 1rem; cursor: pointer; margin-top: 10px;">
                        <i class="fas fa-comment-dots"></i> ابدأ الدردشة الآن
                    </button>
                </div>
            </div>
        </div>
    `;
}

function buildMenu() {
    const menuContainer = document.getElementById('menuContainer');
    if (!menuContainer) return;
    menuContainer.innerHTML = '';
    
    MENU_STRUCTURE.forEach((section) => {
        const sectionDiv = document.createElement('div');
        sectionDiv.className = 'menu-section';
        let itemsHtml = '';
        
        section.items.forEach(item => {
            let actionAttr = '';
            if (item.action === 'iframe') {
                actionAttr = `loadIframe('${item.url}')`;
            } else if (item.action === 'home') {
                actionAttr = `showWelcome()`;
            } else if (item.action === 'subscribe') {
                actionAttr = `showSubscribeModal()`;
            } else if (item.action === 'email') {
                actionAttr = `window.location.href = 'mailto:${item.url}'`;
            }
            
            itemsHtml += `
                <button class="menu-btn" onclick="${actionAttr}">
                    <i class="${item.icon}"></i>
                    <span>${item.text}</span>
                </button>
            `;
        });
        
        sectionDiv.innerHTML = `
            <div class="menu-section-title">${section.title}</div>
            ${itemsHtml}
        `;
        menuContainer.appendChild(sectionDiv);
    });
    
    const emailDiv = document.createElement('div');
    emailDiv.className = 'email-text';
    emailDiv.innerHTML = `<i class="fas fa-envelope"></i> ${SITE_CONFIG.email}`;
    menuContainer.appendChild(emailDiv);
}

function loadIframe(url) {
    const container = document.getElementById('iframeContainer');
    if (!container) return;
    container.innerHTML = `<div class="loading" id="loadingIndicator"><i class="fas fa-spinner"></i> جاري التحميل...</div><iframe id="contentFrame" src="${url}" style="width:100%; height:100%; display:none;" onload="hideLoading()"></iframe>`;
}

function hideLoading() {
    const loading = document.getElementById('loadingIndicator');
    const iframe = document.getElementById('contentFrame');
    if (loading && iframe) { loading.style.display = 'none'; iframe.style.display = 'block'; }
}

function toggleSidebar() {
    document.getElementById('sidebar').classList.toggle('open');
}

document.addEventListener('click', function(e) {
    if (window.innerWidth <= 768) {
        const btn = e.target.closest('.menu-btn');
        const sidebar = document.getElementById('sidebar');
        if (btn && sidebar && sidebar.classList.contains('open')) sidebar.classList.remove('open');
    }
});

loadSubscribedEmails();

document.addEventListener('DOMContentLoaded', () => {
    buildMenu();
    showWelcome(); // عرض الصفحة الرئيسية عند التحميل
});

if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('/sw.js')
        .then(() => console.log('Service Worker Registered'))
        .catch(err => console.log('Service Worker Error:', err));
}
