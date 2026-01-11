/**
 * @file main.js
 * @description Core logic for the Retro OS Portfolio, handling window management,
 * component loading, and interactions.
 */

document.addEventListener('DOMContentLoaded', () => {
    // =========================================
    // 1. CONFIGURATION
    // =========================================
    const CONFIG = {
        maxZIndex: 10,
        cascade: {
            step: 50,
            offsetX: 15,
            offsetY: 35
        },
        selectors: {
            windows: '.window',
            icons: '.desktop-icon',
            desktop: '#desktop',
            genericViewer: 'generic-image-viewer'
        }
    };

    // Mapping for internal component windows (fetch content)
    const COMPONENT_MAP = {
        'about-me-window': 'components/about.html',
        'skills-window': 'components/skills.html',
        'work-window': 'components/projects.html',
        'contact-window': 'components/contact.html',
        'courses-window': 'components/certificates.html',
        'project-anomalyze-window': 'components/project-anomalyze.html',
        'project-solar-swing-window': 'components/project-solar-swing.html',
        'project-eligify-window': 'components/project-eligify.html',
        'badges-window': 'components/badges.html'
    };

    // Mapping for external links (open in new tab)
    const EXTERNAL_LINKS = {
        'github-icon': 'https://github.com/anandtejaswi',
        'hobby-icon': 'https://design.thisistejaswi.in'
    };

    // State
    let currentState = {
        zIndex: CONFIG.maxZIndex,
        cascadeX: CONFIG.cascade.offsetX,
        cascadeY: CONFIG.cascade.offsetY
    };

    // URL Routing Map (Window ID -> Path)
    // Using Hash Routing for refresh compatibility
    const ROUTE_MAP = {
        'about-me-window': '/aboutme',
        'skills-window': '/skills',
        'work-window': '/projects',
        'contact-window': '/contact',
        'courses-window': '/certificates',
        'resume-window': '/resume',
        'project-eligify-window': '/projects/eligify',
        'project-anomalyze-window': '/projects/anomalyze',
        'project-solar-swing-window': '/projects/solarswing',
        'badges-window': '/badges'
    };

    // Reverse Map for Lookup (Path -> Window ID)
    const PATH_MAP = Object.entries(ROUTE_MAP).reduce((acc, [id, path]) => {
        acc[path] = id;
        return acc;
    }, {});

    // =========================================
    // 2. WINDOW MANGEMENT UTILS
    // =========================================



    /**
     * Updates the browser URL hash.
     * @param {string} windowId 
     */
    const updateRoute = (windowId) => {
        const path = ROUTE_MAP[windowId];
        if (path) {
            // Set hash (e.g., #/aboutme)
            if (window.location.hash !== `#${path}`) {
                window.location.hash = path;
            }
        }
    };

    /**
     * Handles initial load and hash changes.
     */
    const handleRouter = () => {
        // Strip the '#' from the hash to get the path
        const hash = window.location.hash.slice(1);
        const windowId = PATH_MAP[hash];

        if (windowId) {
            openWindow(windowId, false); // false = don't update route again
        }
    };

    /**
     * Loads HTML content into a window if not already loaded.
     * @param {string} windowId 
     * @param {string} componentPath 
     */
    const loadComponent = async (windowId, componentPath) => {
        const windowEl = document.getElementById(windowId);
        if (!windowEl) return;

        const body = windowEl.querySelector('.window-body');
        if (!body) return;

        // Prevent reloading if content exists (heuristic: length > 50)
        if (body.innerHTML.trim().length > 50) return;

        try {
            const response = await fetch(componentPath);
            if (!response.ok) throw new Error(`HTTP ${response.status}`);
            const html = await response.text();
            body.innerHTML = html;
        } catch (e) {
            console.error(`Failed to load ${componentPath}`, e);
            if (window.location.protocol === 'file:') {
                body.innerHTML = `<div style="padding: 20px; color: var(--btn-close);">
                    <p><strong>Error: Local File Protocol Blocked</strong></p>
                    <p>Browser security prevents loading files via file://. Please use a local server (e.g., Live Server).</p>
                </div>`;
            }
        }
    };

    /**
     * Opens a window, bringing it to front.
     * @param {string} windowId 
     * @param {boolean} updateHistory - Whether to push new history state
     */
    const openWindow = (windowId, updateHistory = true) => {
        const windowEl = document.getElementById(windowId);
        if (!windowEl) return;

        // Load content if needed
        if (COMPONENT_MAP[windowId]) {
            loadComponent(windowId, COMPONENT_MAP[windowId]);
        }

        const isVisible = windowEl.style.display === 'flex';

        // Reset state
        windowEl.style.display = 'flex';
        windowEl.classList.remove('closing');

        // Bring to front
        currentState.zIndex++;
        windowEl.style.zIndex = currentState.zIndex;

        // Cascade positioning if opening for the first time in this session
        if (!isVisible && !windowEl.dataset.hasOpened) {
            windowEl.style.top = `${currentState.cascadeY}px`;
            windowEl.style.left = `${currentState.cascadeX}px`;
            windowEl.dataset.hasOpened = "true";

            // Update cascade for next window
            currentState.cascadeX += CONFIG.cascade.step;
            const desktopRect = document.querySelector(CONFIG.selectors.desktop).getBoundingClientRect();

            // Reset if out of bounds
            if (currentState.cascadeX + windowEl.offsetWidth > desktopRect.width) {
                currentState.cascadeX = CONFIG.cascade.offsetX;
            }
        }

        // Routing Update
        if (updateHistory) {
            updateRoute(windowId);
        }
    };

    /**
     * Closes a window with animation.
     * @param {string} windowId 
     */
    const closeWindow = (windowId) => {
        const windowEl = document.getElementById(windowId);
        if (!windowEl) return;

        windowEl.classList.add('closing');

        // Wait for animation
        setTimeout(() => {
            windowEl.style.display = 'none';
            windowEl.classList.remove('closing'); // Ready for next open

            // Reset state if needed
            if (windowEl.classList.contains('maximized')) {
                toggleMaximize(windowId);
            }
            if (windowId === CONFIG.selectors.genericViewer) {
                const img = windowEl.querySelector('img');
                if (img) img.src = '';
            }

            // If closing the active routed window, revert to root?
            // This is tricky in a desktop OS metaphor. 
            // For simple SPA behavior: if URL matches this window, go back to /
            // If closing the active routed window, revert to root/desktop
            const currentHash = window.location.hash.slice(1);
            if (ROUTE_MAP[windowId] === currentHash) {
                // Clear hash without adding to history stack if possible, or just set to empty
                history.replaceState(null, null, ' ');
            }

        }, 300);
    };

    /**
     * Toggles maximize state of a window.
     * @param {string} windowId 
     */
    const toggleMaximize = (windowId) => {
        const windowEl = document.getElementById(windowId);
        if (!windowEl) return;

        if (windowEl.classList.contains('maximized')) {
            // Restore
            windowEl.classList.remove('maximized');
            windowEl.style.top = windowEl.dataset.originalTop || '35px';
            windowEl.style.left = windowEl.dataset.originalLeft || '15px';
            windowEl.style.width = windowEl.dataset.originalWidth || '';
            windowEl.style.height = windowEl.dataset.originalHeight || '';
        } else {
            // Maximize
            // Save state
            windowEl.dataset.originalTop = windowEl.style.top;
            windowEl.dataset.originalLeft = windowEl.style.left;
            windowEl.dataset.originalWidth = windowEl.style.width;
            windowEl.dataset.originalHeight = windowEl.style.height;
            windowEl.classList.add('maximized');
        }
    };

    // =========================================
    // 3. PUBLIC API (Global)
    // =========================================

    window.openWindow = openWindow;

    window.openImageViewer = (src, alt) => {
        const viewer = document.getElementById(CONFIG.selectors.genericViewer);
        if (!viewer) return;

        const img = viewer.querySelector('img');
        const title = viewer.querySelector('.title-bar-text');

        if (img) {
            img.src = src;
            img.alt = alt || 'Image Viewer';
        }
        if (title) {
            title.textContent = alt || 'Image Viewer';
        }

        openWindow(CONFIG.selectors.genericViewer);
    };

    // =========================================
    // 4. EVENT LISTENERS
    // =========================================

    // Browser Navigation (Back/Forward)
    // Listen for Hash Changes (Back/Forward or Manual URL change)
    window.addEventListener('hashchange', () => {
        const hash = window.location.hash.slice(1);
        const targetId = PATH_MAP[hash];

        // Close all windows EXCEPT the target one
        document.querySelectorAll('.window').forEach(w => {
            // Exception: If we are opening a specific PROJECT window,
            // DO NOT close the main PROJECTS list (work-window).
            // This allows them to overlap as requested.
            const isTargetProjectDetail = targetId && targetId.startsWith('project-');
            const isWorkWindow = w.id === 'work-window';

            if (isTargetProjectDetail && isWorkWindow) {
                return; // Keep Work Window open
            }

            if (w.id !== targetId && w.style.display === 'flex') {
                w.style.display = 'none';
            }
        });

        handleRouter();
    });

    // Initialize Router on Load
    handleRouter();

    // Desktop Icon Clicks
    const icons = document.querySelectorAll(CONFIG.selectors.icons);
    icons.forEach(icon => {
        const windowId = icon.dataset.window;
        const externalId = icon.id; // e.g., 'github-icon'

        // Internal Windows
        if (windowId) {
            const handleOpen = () => {
                const windowEl = document.getElementById(windowId);
                // Toggle logic
                if (windowEl && windowEl.style.display === 'flex' && windowEl.style.zIndex == currentState.zIndex) {
                    closeWindow(windowId);
                } else {
                    openWindow(windowId);
                }
            };

            icon.addEventListener('click', handleOpen);
            icon.addEventListener('keydown', (e) => {
                if (e.key === 'Enter') handleOpen();
            });
        }

        // External Links
        else if (EXTERNAL_LINKS[externalId]) {
            const url = EXTERNAL_LINKS[externalId];
            const handleLink = () => window.open(url, '_blank');

            icon.addEventListener('click', handleLink);
            icon.addEventListener('keydown', (e) => {
                if (e.key === 'Enter') handleLink();
            });
        }
    });

    // Global Event Delegation (Window Controls, Cards, etc.)
    document.body.addEventListener('click', (e) => {
        const target = e.target;

        // Window Controls: Close
        const closeBtn = target.closest('.close-btn');
        if (closeBtn && closeBtn.dataset.window) {
            closeWindow(closeBtn.dataset.window);
            return;
        }

        // Window Controls: Maximize
        const maxBtn = target.closest('.maximize-btn');
        if (maxBtn && maxBtn.dataset.window) {
            toggleMaximize(maxBtn.dataset.window);
            return;
        }

        // Project/Cert Cards (opening details windows)
        const nameCard = target.closest('[data-project], [data-cert]');
        if (nameCard) {
            const type = nameCard.dataset.project ? 'project' : 'cert';
            const name = nameCard.dataset.project || nameCard.dataset.cert;
            openWindow(`${type}-${name}-window`);
            return;
        }

        // Viewer ID (Legacy/Specific Profile)
        const viewerEl = target.closest('[data-viewer-id]');
        if (viewerEl) {
            e.stopPropagation();
            if (viewerEl.dataset.viewerId === 'profile-pic-viewer') {
                openWindow('profile-pic-viewer');
            }
            return;
        }
    });

    // Window Activation (Bring to Front)
    const windows = document.querySelectorAll(CONFIG.selectors.windows);
    windows.forEach(win => {
        win.addEventListener('mousedown', () => {
            // Only bump if not already top
            if (win.style.zIndex != currentState.zIndex) {
                currentState.zIndex++;
                win.style.zIndex = currentState.zIndex;
            }
        });

        // Initialize Drag
        enableDrag(win);
    });

    // =========================================
    // 5. DRAG LOGIC
    // =========================================
    function enableDrag(element) {
        let pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
        const titleBar = element.querySelector(".title-bar");

        if (titleBar) {
            titleBar.addEventListener('mousedown', dragMouseDown);
        }

        function dragMouseDown(e) {
            if (element.classList.contains('maximized')) return;
            if (e.target.closest('.control-btn')) return;

            e.preventDefault();
            pos3 = e.clientX;
            pos4 = e.clientY;

            document.addEventListener('mouseup', closeDragElement);
            document.addEventListener('mousemove', elementDrag);
        }

        function elementDrag(e) {
            e.preventDefault();
            // Calculate new cursor position
            pos1 = pos3 - e.clientX;
            pos2 = pos4 - e.clientY;
            pos3 = e.clientX;
            pos4 = e.clientY;

            // Set new position
            let newTop = element.offsetTop - pos2;
            let newLeft = element.offsetLeft - pos1;

            // Constraints
            if (newTop < 30) newTop = 30; // Below top bar
            if (newLeft < 0) newLeft = 0; // Left bound

            element.style.top = newTop + "px";
            element.style.left = newLeft + "px";
        }

        function closeDragElement() {
            document.removeEventListener('mouseup', closeDragElement);
            document.removeEventListener('mousemove', elementDrag);
        }
    }
});
// --- Loading Components ---

