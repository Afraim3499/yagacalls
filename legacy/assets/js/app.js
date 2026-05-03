(function(){
  function qs(s, el){ return (el||document).querySelector(s); }
  function loadPageModule(name){
    try {
      const url = new URL(`./pages/${name}.js`, import.meta.url);
      import(url).then(m => m && m.default && m.default());
    } catch(e) { /* ignore */ }
  }
  function route(){
    var page = document.body && document.body.getAttribute('data-page');
    if(!page){
      var path = location.pathname;
      if(path === '/' || path === '/index.html' || path === '/home') page = 'home';
      else if(path.indexOf('/about')===0) page = 'about';
      else if(path.indexOf('/proof')===0) page = 'proof';
      else if(path.indexOf('/method')===0) page = 'method';
      else if(path.indexOf('/pricing')===0) page = 'pricing';
      else if(path.indexOf('/market')===0) page = 'market';
      else if(path.indexOf('/regions/middle-east')===0) page = 'regions-middle-east';
      else if(path.indexOf('/regions/europe')===0) page = 'regions-europe';
      else if(path.indexOf('/regions/usa')===0) page = 'regions-usa';
      else if(path.indexOf('/blog')===0) page = 'blog';
      else if(path.indexOf('/analysis')===0) page = 'analysis';
      else if(path.indexOf('/news')===0) page = 'news';
      else if(path.indexOf('/resources')===0) page = 'resources';
      else if(path.indexOf('/press')===0) page = 'press';
      else if(path.indexOf('/academy')===0) page = 'academy';
      else if(path.indexOf('/contact')===0) page = 'contact';
      else if(path.indexOf('/disclaimer')===0 || path.indexOf('/terms')===0 || path.indexOf('/privacy')===0) page = 'legal';
      else page = 'home';
    }
    loadPageModule(page);
    // map blog post pages if needed via data-page="blog-post"
  }

  document.addEventListener('DOMContentLoaded', route);
  
  // Initialize performance monitoring globally on all pages
  document.addEventListener('DOMContentLoaded', function(){
    // Dynamically import and initialize performance monitoring
    import('./lib/performance-monitor.js').then(module => {
      if (module && module.initPerformanceMonitoring) {
        try {
          module.initPerformanceMonitoring();
        } catch(e) {
          console.error('Performance monitoring initialization error:', e);
        }
      }
    }).catch(err => {
      // Silently fail if module doesn't exist or fails to load
      console.warn('Performance monitoring module not available');
    });
  });

  // mobile menu toggle
  document.addEventListener('DOMContentLoaded', function(){
    var toggle = document.getElementById('menu-toggle');
    var nav = document.getElementById('primary-nav');
    if(toggle && nav){
      toggle.addEventListener('click', function(){
        if(nav.classList.contains('open')) nav.classList.remove('open');
        else nav.classList.add('open');
      });
    }
  });

  // Mobile bottom navigation functionality
  document.addEventListener('DOMContentLoaded', function(){
    var mobileMenuToggle = document.getElementById('mobile-menu-toggle');
    var mobileMenuOverlay = document.getElementById('mobile-menu-overlay');
    var mobileMenuClose = document.getElementById('mobile-menu-close');

    if (mobileMenuToggle && mobileMenuOverlay && mobileMenuClose) {
      // Open mobile menu
      mobileMenuToggle.addEventListener('click', function(){
        mobileMenuOverlay.classList.add('open');
        document.body.style.overflow = 'hidden';
      });

      // Close mobile menu
      mobileMenuClose.addEventListener('click', function(){
        mobileMenuOverlay.classList.remove('open');
        document.body.style.overflow = '';
      });

      // Close mobile menu when clicking overlay
      mobileMenuOverlay.addEventListener('click', function(e){
        if (e.target === mobileMenuOverlay) {
          mobileMenuOverlay.classList.remove('open');
          document.body.style.overflow = '';
        }
      });

      // Close mobile menu on escape key
      document.addEventListener('keydown', function(e){
        if (e.key === 'Escape' && mobileMenuOverlay.classList.contains('open')) {
          mobileMenuOverlay.classList.remove('open');
          document.body.style.overflow = '';
        }
      });
    }

    // Mobile bottom nav active state
    var currentPage = document.body.getAttribute('data-page');
    var mobileNavItems = document.querySelectorAll('.mobile-bottom-nav .nav-item');

    mobileNavItems.forEach(function(item){
      var page = item.getAttribute('data-page');
      if (page === currentPage) {
        item.classList.add('active');
      } else {
        item.classList.remove('active');
      }
    });
  });
})();


