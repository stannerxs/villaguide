document.addEventListener('DOMContentLoaded', function() {
    const darkModeSwitch = document.getElementById('darkModeSwitch');
    if (!darkModeSwitch) return;
    
    // Check if user had a saved preference
    const savedMode = localStorage.getItem('avfc_dark_mode');
    if (savedMode === 'enabled') {
      document.body.classList.add('dark-mode');
      darkModeSwitch.checked = true;
    }
  
    darkModeSwitch.addEventListener('change', function() {
      if (darkModeSwitch.checked) {
        document.body.classList.add('dark-mode');
        localStorage.setItem('avfc_dark_mode', 'enabled');
      } else {
        document.body.classList.remove('dark-mode');
        localStorage.setItem('avfc_dark_mode', 'disabled');
      }
    });
  });
  