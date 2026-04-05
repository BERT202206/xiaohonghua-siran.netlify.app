/**
 * 小红花奖励册 - 主应用逻辑
 * Red Flower Reward Book - Main Application Logic
 * @version 1.0.0
 */

/* ===== 数据配置 ===== */
const MONTH_NAMES = [
    '一月', '二月', '三月', '四月', '五月', '六月',
    '七月', '八月', '九月', '十月', '十一月', '十二月'
];

const MONTH_ICONS = [
    'fa-snowflake', 'fa-heart', 'fa-seedling', 'fa-leaf',
    'fa-sun', 'fa-umbrella-beach', 'fa-ice-cream', 'fa-fire',
    'fa-cloud-sun', 'fa-mountain', 'fa-moon', 'fa-gift'
];

/* 每行贴纸数量 - 铺满模式 */
const SLOTS_PER_ROW = 20;

/* 当前选中的月份（默认当月） */
let currentMonth = new Date().getMonth();

/* ===== 工具函数 ===== */

/**
 * 获取指定月份的天数（以2025年为准）
 * @param {number} m - 月份索引 (0-11)
 * @returns {number} 天数
 */
function getDaysInMonth(m) {
    return new Date(2025, m + 1, 0).getDate();
}

/**
 * 判断某天是否为周末（以2025年为准）
 * @param {number} m - 月份索引 (0-11)
 * @param {number} day - 日期 (1-31)
 * @returns {boolean} 是否为周末
 */
function isWeekend(m, day) {
    const d = new Date(2025, m, day);
    const dow = d.getDay();
    return dow === 0 || dow === 6;
}

/* ===== 渲染函数 ===== */

/**
 * 生成月份页面的 HTML
 * @param {number} m - 月份索引 (0-11)
 * @param {boolean} isPrint - 是否为打印模式
 * @returns {string} HTML字符串
 */
function buildMonthHTML(m, isPrint) {
    const days = getDaysInMonth(m);
    let rows = '';

    for (let d = 1; d <= days; d++) {
        /* 每5天一条虚线分隔 */
        const sepClass = (d > 1 && d % 5 === 1) ? ' separator' : '';
        const weClass = isWeekend(m, d) ? ' weekend' : '';

        /* 生成铺满整行的贴纸格子 */
        let slots = '';
        for (let s = 0; s < SLOTS_PER_ROW; s++) {
            slots += '<div class="slot"></div>';
        }

        rows += `
            <div class="day-row${sepClass}">
                <div class="day-num${weClass}">${d}</div>
                <div class="day-slots">${slots}</div>
            </div>`;
    }

    const wrapperClass = isPrint ? 'print-page' : '';

    return `
        <div class="${wrapperClass}"${isPrint ? ' style="width:210mm;height:297mm;"' : ''}>
            <div class="month-content">
                <header class="page-header">
                    <div class="page-main-title">
                        <span class="deco">✿</span>
                        每日奖励小红花
                        <span class="deco">✿</span>
                    </div>
                    <div class="page-month-name">${MONTH_NAMES[m]}</div>
                    <div class="page-subtitle">每天贴满小红花 · 坚持就是胜利</div>
                </header>
                <div class="days-area">${rows}</div>
                <footer class="page-footer">
                    <div class="footer-info">
                        <div class="footer-line">
                            <span class="footer-label">姓名</span>
                            <span class="footer-underline"></span>
                        </div>
                        <div class="footer-line">
                            <span class="footer-label">本月总计</span>
                            <span class="footer-underline"></span>
                            <span class="footer-label">朵</span>
                        </div>
                    </div>
                    <div class="footer-brand">✿ 小红花奖励册 ✿</div>
                </footer>
            </div>
        </div>`;
}

/**
 * 渲染侧边栏月份按钮网格
 */
function renderGrid() {
    const grid = document.getElementById('monthGrid');
    grid.innerHTML = MONTH_NAMES.map((name, i) => {
        const days = getDaysInMonth(i);
        const active = i === currentMonth ? ' active' : '';
        return `
            <button class="month-btn${active}"
                    onclick="switchMonth(${i})"
                    role="tab"
                    aria-selected="${i === currentMonth}"
                    aria-label="${name}，${days}天">
                <span class="m-icon"><i class="fas ${MONTH_ICONS[i]}"></i></span>
                <span>${name}</span>
                <span class="m-days">${days}天</span>
            </button>`;
    }).join('');
}

/**
 * 切换到指定月份
 * @param {number} i - 月份索引 (0-11)
 */
function switchMonth(i) {
    currentMonth = i;
    renderGrid();
    const paper = document.getElementById('a4Paper');
    paper.innerHTML = buildMonthHTML(i, false);

    /* 触发淡入动画 */
    const mc = paper.querySelector('.month-content');
    mc.classList.remove('fade-in');
    void mc.offsetWidth; /* 强制重排 */
    mc.classList.add('fade-in');
}

/* ===== 打印功能 ===== */

/**
 * 打印当前月份
 */
function printCurrent() {
    const area = document.getElementById('printArea');
    area.innerHTML = buildMonthHTML(currentMonth, true);
    requestAnimationFrame(() => {
        setTimeout(() => window.print(), 120);
    });
}

/**
 * 打印全年12个月
 */
function printAll() {
    const area = document.getElementById('printArea');
    let html = '';
    for (let i = 0; i < 12; i++) {
        html += buildMonthHTML(i, true);
    }
    area.innerHTML = html;
    requestAnimationFrame(() => {
        setTimeout(() => window.print(), 250);
    });
}

/* ===== 界面适配 ===== */

/**
 * 自适应缩放 A4 纸张预览
 */
function fitScale() {
    const paper = document.getElementById('a4Paper');
    const main = document.querySelector('.main');
    if (!main || !paper) return;

    /* A4在96dpi下的像素尺寸 */
    const pw = 210 * 3.7795275591;
    const ph = 297 * 3.7795275591;

    const availW = main.clientWidth - 60;
    const availH = main.clientHeight - 40;

    const scale = Math.min(availW / pw, availH / ph, 1);

    paper.style.transform = `scale(${scale})`;
    const wrapper = document.getElementById('previewWrapper');
    wrapper.style.width = (pw * scale) + 'px';
    wrapper.style.height = (ph * scale) + 'px';
}

/**
 * 自动隐藏浮动提示（6秒后）
 */
function autoHideHint() {
    const hint = document.getElementById('floatHint');
    setTimeout(() => {
        hint.style.transition = 'opacity 0.6s ease';
        hint.style.opacity = '0';
        setTimeout(() => { hint.style.display = 'none'; }, 600);
    }, 6000);
}

/* ===== 初始化 ===== */

document.addEventListener('DOMContentLoaded', () => {
    renderGrid();
    switchMonth(currentMonth);
    fitScale();
    autoHideHint();
});

window.addEventListener('resize', fitScale);
window.addEventListener('load', fitScale);

/* 双重保障：DOM就绪后立即缩放一次 */
requestAnimationFrame(fitScale);
