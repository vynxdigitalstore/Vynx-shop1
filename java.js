// PRODUCTS data (keeps original product texts but expanded to include requested items)
const PRODUCTS = {
    games: [
        { id: 'discord_nitro', name: { en: 'Discord Nitro', mm: 'Discord Nitro' }, desc: { en: 'Boost animated emoji, bigger uploads and more.', mm: 'Discord Nitro — animated emoji, သင့် uploads အသေးဝေးတိုးပါသည်။' }, img: '/images/sla 3.jpg' },
        { id: 'ml_diamonds', name: { en: 'Mobile Legends Diamonds', mm: 'Mobile Legends ရွှေ' }, desc: { en: 'Top up diamonds quickly for skins and heroes.', mm: 'Mobile Legends အတွက် diamonds ဖြည့်စွက်ရေး။' }, img: '/images/download (2).jpg' },
        { id: 'pubg_uc', name: { en: 'PUBG UC', mm: 'PUBG UC' }, desc: { en: 'Buy UC for cosmetics and crates.', mm: 'PUBG အတွက် UC ဝယ်ယူပြီး အင်္ကျီများ ရယူပါ။' }, img: './Images/Download PUBG and TikTok using a VPN….jpg' },
        { id: 'honor_tokens', name: { en: 'Honor of Kings Tokens', mm: 'Honor of Kings Tokens' }, desc: { en: 'Tokens for in-game purchases.', mm: 'ဂိမ်းအတွင်း ဝယ်ယူမှုများအတွက် tokens.' }, img: '/images/890cc704-7674-42d7-8ec4-73e249a0b28f.jpg' },
        { id: 'roblox_robux', name: { en: 'Roblox Robux', mm: 'Roblox Robux' }, desc: { en: 'Get Robux instantly for avatars and items.', mm: 'Robux ဝယ်ယူပြီး avatar နှင့် item များ ဝယ်ပါ။' }, img: '/images/Apenas A Logo do Roblox Que Parece Muito A Do Diacord.jpg' }
    ],
    ent: [
        { id: 'netflix', name: { en: 'Netflix', mm: 'Netflix' }, desc: { en: 'Premium streaming accounts for movies & series.', mm: 'Movies နှင့် series များ ကြည့်ရန် Netflix account များ။' }, img: '/images/nectlfix.jpg' },
        { id: 'prime', name: { en: 'Prime Video', mm: 'Prime Video' }, desc: { en: 'Amazon Prime streaming access.', mm: 'Amazon Prime streaming access.' }, img: '/images/Looking for a way to enjoy unlimited movies, TV….jpg' },
        { id: 'disney', name: { en: 'Disney+', mm: 'Disney+' }, desc: { en: 'Disney+ streaming accounts.', mm: 'Disney+ account များ။' }, img: '/images/disney plsu.jpg' },
        { id: 'spotify', name: { en: 'Spotify', mm: 'Spotify' }, desc: { en: 'Music streaming premium access.', mm: 'ဂီတ streaming အတွက် Premium Access' }, img: '/images/spotify.jpg' },
        { id: 'applemusic', name: { en: 'Apple Music', mm: 'Apple Music' }, desc: { en: 'Apple Music premium.', mm: 'Apple Music premium.' }, img: '/images/apple music.jpg' },
        { id: 'yt_premium', name: { en: 'YouTube Premium', mm: 'YouTube Premium' }, desc: { en: 'Ad-free YouTube and downloads.', mm: 'Ad-free YouTube နှင့် downloads.' }, img: '/images/youtube.jpg' }
    ],
    social: [
        { id: 'fb_follow', name: { en: 'Facebook Followers', mm: 'Facebook Followers' }, desc: { en: 'Increase page followers and engagement.', mm: 'Followers များ တိုးစေပြီး engagement တိုးစေသည်။' }, img: '/images/Facebook Check more at https___dbapk_com_facebook_.jpg' },
        { id: 'tiktok_like', name: { en: 'TikTok Likes', mm: 'TikTok Likes' }, desc: { en: 'Boost video likes and reach.', mm: 'ဗီဒီယို likes များတိုးပြီး ရောက်ရှိမှု တိုးစေသည်။' }, img: '/images/Odwiedź TikToka, by odkrywać filmy!.jpg' },
        { id: 'telegram_premium', name: { en: 'Telegram Premium', mm: 'Telegram Premium' }, desc: { en: 'Premium features for Telegram users.', mm: 'Telegram Premium features.' }, img: '/images/telegram.jpg' },
        { id: 'zoom_pro', name: { en: 'Zoom Pro', mm: 'Zoom Pro' }, desc: { en: 'Premium Zoom accounts for meetings.', mm: 'Zoom meetings အတွက် Pro account.' }, img: '/images/zoom.jpg' },
        { id: 'chatgpt', name: { en: 'ChatGPT Pro', mm: 'ChatGPT Pro' }, desc: { en: 'Access to advanced AI features (where available).', mm: 'မြင့်မားသော AI features အသုံးပြုနိုင်သည်။' }, img: '/images/gpt.jpg' },
        { id: 'copilot', name: { en: 'Copilot Pro', mm: 'Copilot Pro' }, desc: { en: 'AI coding assistant subscription.', mm: 'AI coding assistant subscription.' }, img: '/images/copilot1.jpg' }
    ],
    vpn: [
        { id: 'expressvpn', name: { en: 'ExpressVPN', mm: 'ExpressVPN' }, desc: { en: 'Fast, secure VPN with global servers.', mm: 'မြန်နှုန်းမြင့်၊ လုံခြုံသော server များရှိသည်။' }, img: '/images/b9b1e855-7e9f-4a8a-8983-67e6caea9144.jpg' },
        { id: 'jumpvpn', name: { en: 'Jump VPN', mm: 'Jump VPN' }, desc: { en: 'Fast and affordable VPN.', mm: 'မြန်နှုန်းမြင့် VPN.' }, img: '/images/unnamed.jpg' },
        { id: 'lets_vpn', name: { en: 'Lets VPN', mm: 'Lets VPN' }, desc: { en: 'Affordable & reliable VPN service.', mm: 'စျေးသက်သာပြီး ယုံကြည်ရသော VPN.' }, img: '/images/lets.jpg' },
        { id: 'xvpn', name: { en: 'X-VPN', mm: 'X-VPN' }, desc: { en: 'Global VPN with multiple protocols.', mm: 'Global VPN with multiple protocols.' }, img: '/images/x vpn For Pc - Free Download On Windows 10_8_7….jpg' }
    ],
    design: [
        { id: 'canva', name: { en: 'Canva', mm: 'Canva' }, desc: { en: 'Templates and tools for quick design.', mm: 'အလွယ်တကူ design ပြုလုပ်ရန် templates များ။' }, img: '/images/cunva.jpg' },
        { id: 'capcut', name: { en: 'CapCut', mm: 'CapCut' }, desc: { en: 'Video editing tools and templates.', mm: 'Video editing tools and templates.' }, img: '/images/capcut.jpg' },
        { id: 'filmora', name: { en: 'Filmora', mm: 'Filmora' }, desc: { en: 'Easy video editor for creators.', mm: 'Easy video editor for creators.' }, img: '/images/filmora.jpg' },
        { id: 'picsart', name: { en: 'PicsArt', mm: 'PicsArt' }, desc: { en: 'Photo editor and collage maker.', mm: 'Photo editor and collage maker.' }, img: '/images/picsart.jpg' },
        { id: 'procreate', name: { en: 'Procreate', mm: 'Procreate' }, desc: { en: 'Powerful drawing app for iPad.', mm: 'iPad အတွက် ပုံဆွဲ app။' }, img: '/images/Procreate.jpg' },
        { id: 'freepik', name: { en: 'Freepik', mm: 'Freepik' }, desc: { en: 'Stock photos, vectors and assets.', mm: 'Stock photos, vectors and assets.' }, img: '/images/freepik.png' },
        { id: 'adobe_cc', name: { en: 'Adobe Creative Cloud', mm: 'Adobe Creative Cloud' }, desc: { en: 'Full Adobe apps subscription.', mm: 'Full Adobe apps subscription.' }, img: '/images/aacccloud.jpg' }
    ],
    learn: [
        { id: 'quillbot', name: { en: 'QuillBot', mm: 'QuillBot' }, desc: { en: 'Writing assistant and paraphrasing tool.', mm: 'Writing assistant and paraphrasing tool.' }, img: '/images/Can QuillBot be Detected_.jpg' },
        { id: 'grammarly', name: { en: 'Grammarly', mm: 'Grammarly' }, desc: { en: 'Write better with advanced grammar checks.', mm: 'စာရေးမှုကို မြှင့်တင်ရန် grammar check များ။' }, img: '/images/Why Grammarly is useful in blogging.jpg' },
        { id: 'busuu', name: { en: 'Busuu', mm: 'Busuu' }, desc: { en: 'Language learning platform.', mm: 'Language learning platform.' }, img: '/images/Busuu Lifetime Deal_ Language Learning App.jpg' },
        { id: 'elsa', name: { en: 'ELSA', mm: 'ELSA' }, desc: { en: 'English pronunciation coach app.', mm: 'English pronunciation coach app.' }, img: '/images/elas.jpg' },
        { id: 'duolingo', name: { en: 'Duolingo Super', mm: 'Duolingo Super' }, desc: { en: 'Learn languages faster with Super features.', mm: 'ဘာသာစကားများ ပိုမြန်စွာ သင်ယူပါ။' }, img: '/images/suolingo.jpg' }
    ]
};

// messaging apps options
const MESSAGE_APPS = [
    { id: 'telegram', label: 'Telegram', type: 'link', href: 'https://t.me/vynxdigitalmarketing' },
    { id: 'whatsapp', label: 'WhatsApp', type: 'link', href: 'https://wa.me/9595663509220?text=' },
    { id: 'facebook', label: 'Facebook Messenger', type: 'link', href: 'https://m.me/vynx.digital.stor?ref=' },
    { id: 'discord', label: 'Discord DM', type: 'link', href: 'https://discord.gg/ScxKkfJa' },
    { id: 'sms', label: 'SMS', type: 'link', href: 'sms:+9595663509220?body=' }
];

// render catalog
function renderCatalog() {
    const container = document.getElementById('catalog');
    container.innerHTML = '';
    Object.keys(PRODUCTS).forEach(catKey => {
        const cat = PRODUCTS[catKey];
        const section = document.createElement('div');
        section.className = 'category';
        const title = document.createElement('h2');
        title.textContent = (function mapKey(k) {
            switch (k) {
                case 'games':
                    return 'Games / ဂိမ်းများ';
                case 'ent':
                    return 'Entertainment / ဖျော်ဖြေမှု';
                case 'social':
                    return 'Social Media / လူမှုကွန်ရက်';
                case 'vpn':
                    return 'VPN / ဝန်ဆောင်မှု';
                case 'design':
                    return 'Design Platforms / ဒီဇိုင်းပလက်ဖောင်များ';
                case 'learn':
                    return 'Learning Platforms / သင်ယူရေးပလက်ဖောင်များ';
                default:
                    return k;
            }
        })(catKey);
        section.appendChild(title);

        const grid = document.createElement('div');
        grid.className = 'grid';

        cat.forEach(p => {
            const card = document.createElement('div');
            card.className = 'card';
            card.innerHTML = `
        <div style="display:flex;gap:12px;align-items:center">
          <img src="${p.img}" alt="${p.name.en} logo" />
          <div style="flex:1">
            <h3>${p.name.en} <small style="display:block;font-size:12px;opacity:.85">${p.name.mm}</small></h3>
            <p>${p.desc.en} <br/><small style="opacity:.85">${p.desc.mm}</small></p>
          </div>
        </div>
        <div class="actions">
          <button class="message-btn" data-product-id="${p.id}" data-product-name="${escape(p.name.en)}">Message to Buy</button>
          <button class="info-btn" data-product='${escape(JSON.stringify(p))}'>More Info</button>
        </div>
      `;
            grid.appendChild(card);
        });

        section.appendChild(grid);
        container.appendChild(section);
    });
}

// helpers for modal & messaging
function openMessageModal(prefill) {
    const modal = document.getElementById('messageModal');
    const appsGrid = document.getElementById('msgApps');
    appsGrid.innerHTML = '';
    MESSAGE_APPS.forEach(a => {
        const node = document.createElement('div');
        node.className = 'msg-app';
        node.setAttribute('data-app', a.id);
        node.setAttribute('tabindex', '0');
        node.innerHTML = `<div class="label">${a.label}</div><div class="desc muted" style="margin-left:auto">Open</div>`;
        node.addEventListener('click', () => launchApp(a, prefill));
        node.addEventListener('keydown', (e) => { if (e.key === 'Enter') launchApp(a, prefill); });
        appsGrid.appendChild(node);
    });
    modal.classList.add('show');
}

function launchApp(app, prefill) {
    // prefill is a simple text like "I'd like to buy: PRODUCT_NAME"
    const text = encodeURIComponent(prefill);
    let url = app.href;
    if (app.id === 'whatsapp' || app.id === 'sms') {
        url = app.href + text;
    } else if (app.id === 'facebook') {
        // facebook messenger can accept a ref param
        url = app.href + encodeURIComponent(prefill);
    } else if (app.id === 'telegram' || app.id === 'discord') {
        url = app.href; // direct chat/invite
    }
    window.open(url, '_blank');
}

// info modal
function openInfoModal(product) {
    const infoModal = document.getElementById('infoModal');
    const infoBody = document.getElementById('infoBody');
    infoBody.innerHTML = `<strong>${product.name.en}</strong> <div class="muted" style="font-size:13px">${product.name.mm}</div><p style="margin-top:8px">${product.desc.en}<br/><small style="opacity:.9">${product.desc.mm}</small></p>`;
    // store selected product
    infoModal.dataset.selected = product.id;
    infoModal.classList.add('show');
}

// event listeners
document.addEventListener('DOMContentLoaded', () => {
    renderCatalog();
    document.getElementById('year').textContent = new Date().getFullYear();

    document.getElementById('shopNow').addEventListener('click', () => document.getElementById('products').scrollIntoView({ behavior: 'smooth' }));
    document.getElementById('contactNow').addEventListener('click', () => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' }));

    // open message options when clicking any message-btn
    document.body.addEventListener('click', (e) => {
        if (e.target.matches('.message-btn')) {
            const pid = e.target.getAttribute('data-product-id');
            const pname = unescape(e.target.getAttribute('data-product-name'));
            const prefill = `I'd like to buy: ${pname} (Product ID: ${pid})`;
            // open modal to let user pick app
            openMessageModal(prefill);
        }

        if (e.target.matches('.info-btn')) {
            const prod = JSON.parse(unescape(e.target.getAttribute('data-product')));
            openInfoModal(prod);
        }

        if (e.target.id === 'openMessageOptions') {
            openMessageModal('Hello, I want to buy some products.');
        }
    });

    // modal close
    document.getElementById('closeMsgModal').addEventListener('click', () => document.getElementById('messageModal').classList.remove('show'));
    document.getElementById('closeInfo').addEventListener('click', () => document.getElementById('infoModal').classList.remove('show'));
    document.getElementById('buyFromInfo').addEventListener('click', () => {
        const info = document.getElementById('infoModal');
        const pid = info.dataset.selected;
        const p = Object.values(PRODUCTS).flat().find(x => x.id === pid);
        if (p) openMessageModal(`I'd like to buy: ${p.name.en} (Product ID: ${p.id})`);
    });

    // language toggle
    const btnEn = document.getElementById('btn-en');
    const btnMm = document.getElementById('btn-mm');
    btnEn.addEventListener('click', () => setLang('en'));
    btnMm.addEventListener('click', () => setLang('mm'));

    setLang('en');

    // mobile nav
    const navToggle = document.getElementById('navToggle');
    navToggle.addEventListener('click', () => {
        const mainNav = document.getElementById('mainNav');
        const expanded = navToggle.getAttribute('aria-expanded') === 'true';
        navToggle.setAttribute('aria-expanded', String(!expanded));
        mainNav.style.display = expanded ? 'none' : 'flex';
        mainNav.style.flexDirection = 'column';
        mainNav.style.position = 'absolute';
        mainNav.style.right = '20px';
        mainNav.style.top = '70px';
        mainNav.style.padding = '12px';
        mainNav.style.borderRadius = '8px';
    });

});

// simple i18n (keeps original text unchanged)
const I18N = {
    en: {
        tagline: 'We sell premium digital services at affordable prices. Contact us today!',
        shop_now: 'Shop Now',
        contact_us: 'Contact Us',
        nav_products: 'Products',
        nav_contact: 'Contact',
        nav_about: 'About',
        extra_msg: 'This list is not all we sell. DM us for other digital products you want.',
        contact_title: 'Contact Us',
        contact_phone: 'Phone',
        contact_others: 'Other',
        contact_msg: 'Send us a message',
        contact_msg_desc: 'Click any "Message to Buy" button to contact us via Telegram for fast service.',
        contact_card_title: 'VYNX Support',
        contact_card_desc: 'Open 9:00 — 21:00 (local). For urgent requests use Telegram or call directly.'
    },
    mm: {
        tagline: 'ကျွန်မတို့ Vynx Digital Marketing shop မှ digital services များကို စျေးသက်သာစွာ ရောင်းချပေးနေပါပြီ။ စိတ်ဝင်စားပါက အောက်ပါစာမျက်နှာများတွင် အသေးစိတ်ကြည့်ရှုနိုင်ပါသည်။',
        shop_now: 'စျေး၀ယ်ရန်',
        contact_us: 'ဆက်သွယ်ရန်',
        nav_products: 'ထုတ်ကုန်များ',
        nav_contact: 'ဆက်သွယ်ရန်',
        nav_about: 'အကြောင်း',
        extra_msg: 'ထိုစာရင်းမှာ အကုန်လုံး မပါသေးပါ။ မလိုအပ်သော ပစ္စည်းများ ရှိပါက DM ပို့၍ မေးမြန်းနိုင်ပါသည်။',
        contact_title: 'ဆက်သွယ်ရန်',
        contact_phone: 'ဖုန်း',
        contact_others: 'အခြား',
        contact_msg: 'စာပို့ပါ',
        contact_msg_desc: '"Message to Buy" ခလုတ်ကိုနှိပ်၍ Telegram မှတဆင့် ဝယ်ယူရန် ဆက်သွယ်ပါ။',
        contact_card_title: 'VYNX ထောက်ခံရေး',
        contact_card_desc: 'နံနက် 9:00 — ည 9:00 ထိ ဖြင့်စွဲပါ။ အရေးပေါ်အခြေအနေများတွင် Telegram သို့ ပိုမိုလျင်မြန်ပါသည်။'
    }
};

function setLang(l) {
    const map = I18N[l] || I18N.en;
    document.querySelectorAll('[data-i18n-text]').forEach(el => { const key = el.getAttribute('data-i18n-text'); if (map[key]) el.textContent = map[key]; });
    document.querySelectorAll('[data-i18n]').forEach(el => { const key = el.getAttribute('data-i18n'); if (map[key]) el.textContent = map[key]; });
    document.getElementById('btn-en').classList.toggle('active', l === 'en');
    document.getElementById('btn-mm').classList.toggle('active', l === 'mm');
    document.getElementById('btn-en').setAttribute('aria-pressed', l === 'en');
    document.getElementById('btn-mm').setAttribute('aria-pressed', l === 'mm');
}