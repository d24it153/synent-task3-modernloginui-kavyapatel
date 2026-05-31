/**
 * Premium Login Page UI Controller
 * Features: Form validation, Password toggle, Loading states, Dynamic toast system
 */

document.addEventListener('DOMContentLoaded', () => {
  // --- DOM Selectors ---
  const loginForm = document.getElementById('loginForm');
  const emailInput = document.getElementById('email');
  const passwordInput = document.getElementById('password');
  const passwordToggle = document.getElementById('passwordToggle');
  const submitBtn = document.getElementById('submitBtn');
  const toastContainer = document.getElementById('toastContainer');
  
  const forgotPasswordLink = document.getElementById('forgotPassword');
  const signUpLink = document.getElementById('signUpLink');
  const googleBtn = document.getElementById('btnGoogle');
  const githubBtn = document.getElementById('btnGithub');

  // --- Password Visibility Toggle ---
  passwordToggle.addEventListener('click', () => {
    const isPassword = passwordInput.getAttribute('type') === 'password';
    passwordInput.setAttribute('type', isPassword ? 'text' : 'password');
    
    // Toggle icon classes
    if (isPassword) {
      passwordToggle.classList.remove('fa-eye-slash');
      passwordToggle.classList.add('fa-eye');
      passwordToggle.setAttribute('aria-label', 'Hide password');
    } else {
      passwordToggle.classList.remove('fa-eye');
      passwordToggle.classList.add('fa-eye-slash');
      passwordToggle.setAttribute('aria-label', 'Show password');
    }
    
    // Maintain input focus
    passwordInput.focus();
  });

  // --- Toast Notification System ---
  function showToast(message, type = 'success') {
    const toast = document.createElement('div');
    toast.className = `toast toast-${type}`;
    
    // Set appropriate icon based on type
    const iconClass = type === 'success' ? 'fa-circle-check' : 'fa-circle-exclamation';
    
    toast.innerHTML = `
      <i class="fa-solid ${iconClass}"></i>
      <div class="toast-message">${message}</div>
      <i class="fa-solid fa-xmark toast-close" role="button" aria-label="Close message"></i>
    `;
    
    toastContainer.appendChild(toast);
    
    // Add close button functionality
    const closeBtn = toast.querySelector('.toast-close');
    closeBtn.addEventListener('click', () => {
      dismissToast(toast);
    });
    
    // Auto-dismiss after 4.5 seconds
    setTimeout(() => {
      dismissToast(toast);
    }, 4500);
  }

  function dismissToast(toast) {
    toast.style.animation = 'fadeOut var(--transition-normal) both';
    toast.addEventListener('animationend', (e) => {
      if (e.animationName === 'fadeOut') {
        toast.remove();
      }
    });
  }

  // --- Regex Validation Helpers ---
  function isValidEmail(email) {
    const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return regex.test(email.trim());
  }

  // --- Submit Handler ---
  loginForm.addEventListener('submit', async (e) => {
    e.preventDefault();

    const email = emailInput.value.trim();
    const password = passwordInput.value;

    // Client-side Validation Checks
    if (!email) {
      showToast('Please enter your email address.', 'error');
      emailInput.focus();
      return;
    }

    if (!isValidEmail(email)) {
      showToast('Please enter a valid email address.', 'error');
      emailInput.focus();
      return;
    }

    if (!password) {
      showToast('Please enter your password.', 'error');
      passwordInput.focus();
      return;
    }

    if (password.length < 6) {
      showToast('Password must be at least 6 characters long.', 'error');
      passwordInput.focus();
      return;
    }

    // Simulate backend communication (loading state activation)
    setLoadingState(true);

    try {
      // Simulate network request
      await new Promise(resolve => setTimeout(resolve, 1800));
      
      // For demonstration: login success mock
      showToast('Authentication successful! Redirecting...', 'success');
      
      // Simulate storing session if checked
      const rememberMe = document.getElementById('rememberMe').checked;
      if (rememberMe) {
        localStorage.setItem('userEmail', email);
      } else {
        localStorage.removeItem('userEmail');
      }

    } catch (error) {
      showToast('An error occurred during authentication. Please try again.', 'error');
    } finally {
      setLoadingState(false);
    }
  });

  // Manage UI elements during async authentication calls
  function setLoadingState(isLoading) {
    if (isLoading) {
      submitBtn.classList.add('loading');
      submitBtn.disabled = true;
      emailInput.disabled = true;
      passwordInput.disabled = true;
    } else {
      submitBtn.classList.remove('loading');
      submitBtn.disabled = false;
      emailInput.disabled = false;
      passwordInput.disabled = false;
    }
  }

  // --- Extra Interactive Handlers ---
  forgotPasswordLink.addEventListener('click', (e) => {
    e.preventDefault();
    const emailVal = emailInput.value.trim();
    if (emailVal && isValidEmail(emailVal)) {
      showToast(`A secure recovery link has been sent to ${emailVal}.`, 'success');
    } else {
      showToast('Please type your email address first so we can send a recovery link.', 'error');
      emailInput.focus();
    }
  });

  signUpLink.addEventListener('click', (e) => {
    e.preventDefault();
    showToast('The signup system is currently in closed preview. Stay tuned!', 'error');
  });

  googleBtn.addEventListener('click', () => {
    showToast('Initiating secure Single Sign-On with Google...', 'success');
  });

  githubBtn.addEventListener('click', () => {
    showToast('Initiating secure Single Sign-On with GitHub...', 'success');
  });

  // Pre-fill email from localStorage if "Remember Me" was previously checked
  const savedEmail = localStorage.getItem('userEmail');
  if (savedEmail) {
    emailInput.value = savedEmail;
    // Manually trigger dynamic state styling
    emailInput.dispatchEvent(new Event('input'));
  }
});
