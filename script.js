
document.addEventListener("DOMContentLoaded", () => {
  const hamburger = document.querySelector(".hamburger");
  const sidebar = document.getElementById("sidebar");
  const closeBtn = document.querySelector(".close-btn");

  hamburger.addEventListener("click", () => {
    sidebar.classList.toggle("active");
  });

  closeBtn.addEventListener("click", () => {
    sidebar.classList.remove("active");
  });

  document.addEventListener("click", (e) => {
    if (!sidebar.contains(e.target) && !hamburger.contains(e.target)) {
      sidebar.classList.remove("active");
    }
  });
});

/*News section*/
document.querySelectorAll('[data-modal]').forEach(btn => {
    btn.addEventListener('click', () => {
      const modalId = btn.getAttribute('data-modal');
      document.getElementById(modalId).style.display = 'block';
    });
  });

  document.querySelectorAll('.modal-close, .modal').forEach(el => {
    el.addEventListener('click', (e) => {
      if (e.target === el || el.classList.contains('modal-close')) {
        el.closest('.modal').style.display = 'none';
      }
    });
  });

  window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      document.querySelectorAll('.modal').forEach(m => m.style.display = 'none');
    }
  });

  // Tab Switching for services section
  /* document.querySelectorAll('.tab-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const tabId = btn.getAttribute('data-tab');

      // Remove active from all
      document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
      document.querySelectorAll('.tab-pane').forEach(p => p.classList.remove('active'));

      // Add active to clicked
      btn.classList.add('active');
      document.getElementById(tabId).classList.add('active');
    });
  }); */

  // 9 Individual Service Tabs
  document.querySelectorAll('.tab-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const serviceId = btn.getAttribute('data-service');

      // Update active tab
      document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      // Show content
      document.querySelectorAll('.service-pane').forEach(pane => {
        pane.classList.remove('active');
      });
      document.getElementById(serviceId).classList.add('active');
    });
  });

  // Auto-open first tab
  document.querySelector('.tab-btn').click();