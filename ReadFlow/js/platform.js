window.RF = window.RF || {};

RF.platform = {
    isSmallScreen: function () {
        return window.matchMedia('(max-width: 900px)').matches;
    },
    supportsFullscreen: function () {
        return !!document.documentElement.requestFullscreen;
    },
    supportsPopupPrint: function () {
        return !RF.platform.isSmallScreen() && typeof window.open === 'function' && typeof window.print === 'function';
    },
    registerServiceWorker: function () {
        var isLocalDev = window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1';
        if (!('serviceWorker' in navigator) || isLocalDev) return;

        window.addEventListener('load', function () {
            navigator.serviceWorker.register('./sw.js')
                .then(function (reg) { console.log('Service Worker registrado!', reg); })
                .catch(function (err) { console.log('Falha ao registrar Service Worker:', err); });
        });
    }
};

RF.platform.registerServiceWorker();
