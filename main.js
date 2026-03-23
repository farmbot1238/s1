// ============================================
// الملف الرئيسي - لا تغير إلا إذا كنت فاهم
// ============================================

// بناء القائمة من البيانات
function buildMenu() {
    const menuContainer = document.getElementById('menuContainer');
    if (!menuContainer) return;
    
    menuContainer.innerHTML = '';
    
    MENU_STRUCTURE.forEach((section, index) => {
        if (section.type === 'featured') {
            // قسم مميز
            const featuredDiv = document.createElement('div');
            featuredDiv.className = 'featured-section';
            
            featuredDiv.innerHTML = `
                <div class="featured-header">
                    <i class="fas fa-users"></i> ${section.title} <i class="fas fa-star"></i>
                </div>
                <div class="featured-content">
                    <div class="featured-text">
                        <i class="fas fa-lightbulb"></i> تعاون - تنفيذ أفكار - مشاريع
                    </div>
                    ${section.items.map(item => `
                        <button class="discord-btn-special" onclick="handleAction('${item.action}', '${item.url}', this)">
                            <i class="${item.icon}"></i>
                            <span>${item.text}</span>
                        </button>
                    `).join('')}
                </div>
            `;
            menuContainer.appendChild(featuredDiv);
        } else {
            // قسم عادي
            const sectionDiv = document.createElement('div');
            sectionDiv.className = 'menu-section';
            
            sectionDiv.innerHTML = `
                <div class="menu-section-title">${section.title}</div>
                ${section.items.map(item => `
                    <button class="menu-btn" onclick="handleAction('${item.action}', '${item.url}', this)">
                        <i class="${item.icon}"></i>
                        <span>${item.text}</span>
                    </button>
                `).join('')}
            `;
            menuContainer.appendChild(sectionDiv);
        }
    });
    
    // إضافة الإيميل بشكل منفصل للقسم الأخير
    const lastSection = document.querySelector('.menu-section:last-child');
    if (lastSection) {
        const emailDiv = document.createElement('div');
        emailDiv.className = 'email-text';
        emailDiv.innerHTML = `<i class="fas fa-envelope"></i> ${SITE_CONFIG.email}`;
        lastSection.appendChild(emailDiv);
    }
}

// معالجة الضغط على الأزرار
function handleAction(action, url, buttonElement) {
    // تحديث الزر النشط
    document.querySelectorAll('.menu-btn').forEach(btn => {
        btn.classList.remove('active');
    });
    if (buttonElement && buttonElement.classList) {
        buttonElement.classList.add('active');
    }
    
    switch(action) {
        case 'iframe':
            loadIframe(url);
            break;
        case 'link':
            window.open(url, '_blank');
            break;
        default:
            console.warn('Unknown action:', action);
    }
}

// تحميل المحتوى في iframe
function loadIframe(url) {
    const container = document.getElementById('iframeContainer');
    if (!container) return;
    
    container.innerHTML = `
        <div class="loading" id="loadingIndicator">
            <i class="fas fa-spinner"></i> جاري التحميل...
        </div>
        <iframe id="contentFrame" src="${url}" style="width:100%; height:100%; display:none;" onload="hideLoading()"></iframe>
    `;
}

function hideLoading() {
    const loading = document.getElementById('loadingIndicator');
    const iframe = document.getElementById('contentFrame');
    if (loading && iframe) {
        loading.style.display = 'none';
        iframe.style.display = 'block';
    }
}

// تبديل القائمة للجوال
function toggleSidebar() {
    document.getElementById('sidebar').classList.toggle('open');
}

// إغلاق القائمة في الجوال عند النقر
document.addEventListener('click', function(e) {
    if (window.innerWidth <= 768) {
        const btn = e.target.closest('.menu-btn');
        const sidebar = document.getElementById('sidebar');
        if (btn && sidebar && sidebar.classList.contains('open')) {
            sidebar.classList.remove('open');
        }
    }
});

// عرض الصفحة الرئيسية
function showWelcome() {
    const container = document.getElementById('iframeContainer');
    if (!container) return;
    
    container.innerHTML = `
        <div style="display: flex; justify-content: center; align-items: center; height: 100%; background: linear-gradient(145deg, #1e3c5c, #0f2a3f); color: white; text-align: center; padding: 20px; flex-direction:column;">
            <i class="fas fa-graduation-cap" style="font-size: 4rem; color:#f9b81b; margin-bottom:20px;"></i>
            <h2>مرحباً بك في منصة ${SITE_CONFIG.siteName}</h2>
            <p style="margin:15px 0; font-size:1.1rem;">${SITE_CONFIG.ownerName} | متعاونين على التفوق</p>
            <div style="margin-top:20px; font-size:0.9rem; opacity:0.8;">اختر القسم المناسب من القائمة الجانبية</div>
        </div>
    `;
}

// تهيئة الموقع
document.addEventListener('DOMContentLoaded', () => {
    buildMenu();
    showWelcome();
    
    // تحديث اسم المالك في الهيدر
    const ownerElement = document.getElementById('ownerName');
    if (ownerElement) {
        ownerElement.textContent = SITE_CONFIG.ownerName;
    }
});
