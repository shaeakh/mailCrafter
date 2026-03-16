const emailVerificationHtml = `<div class="min-h-screen bg-gray-100 flex items-center justify-center p-6">
  <div class="bg-white max-w-lg w-full rounded-2xl shadow-lg overflow-hidden">
    <div class="bg-blue-600 px-8 py-10 text-center">
      <div class="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-4">
        <i data-lucide="mail" class="text-blue-600 w-8 h-8"></i>
      </div>
      <h1 class="text-white text-3xl font-bold tracking-tight">Verify your email</h1>
      <p class="text-blue-200 mt-2 text-sm">One click and you're in</p>
    </div>
    <div class="px-8 py-8">
      <p class="text-gray-700 text-base">Hi <span class="font-semibold text-blue-600">Sarah</span>,</p>
      <p class="text-gray-600 mt-4 text-sm leading-relaxed">Thanks for signing up! Please verify your email address to activate your account and get started.</p>
      <div class="mt-8 text-center">
        <a href="#" class="inline-block bg-blue-600 text-white text-sm font-semibold px-10 py-3 rounded-full hover:bg-blue-700 transition-colors">Verify Email Address</a>
      </div>
      <p class="text-center text-gray-400 text-xs mt-4">This link expires in 24 hours</p>
      <hr class="my-6 border-gray-100" />
      <p class="text-gray-500 text-xs text-center">If you didn't create an account, you can safely ignore this email.</p>
    </div>
    <div class="bg-gray-50 px-8 py-5 text-center border-t border-gray-100">
      <p class="text-gray-400 text-xs">© 2026 MyApp Inc. · <span class="text-blue-400">Unsubscribe</span></p>
    </div>
  </div>
</div>`;
const otpVerificationHtml = `<div class="min-h-screen bg-gray-100 flex items-center justify-center p-6">
  <div class="bg-white max-w-lg w-full rounded-2xl shadow-lg overflow-hidden">
    <div class="bg-violet-600 px-8 py-10 text-center">
      <div class="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-4">
        <i data-lucide="shield-check" class="text-violet-600 w-8 h-8"></i>
      </div>
      <h1 class="text-white text-3xl font-bold tracking-tight">Your OTP Code</h1>
      <p class="text-violet-200 mt-2 text-sm">Use this code to complete verification</p>
    </div>
    <div class="px-8 py-8 text-center">
      <p class="text-gray-700 text-base">Hi <span class="font-semibold text-violet-600">Sarah</span>,</p>
      <p class="text-gray-600 mt-3 text-sm">Use the code below to verify your identity. Do not share this with anyone.</p>
      <div class="my-8 bg-violet-50 rounded-2xl py-6 px-4">
        <p class="text-5xl font-bold tracking-[0.5em] text-violet-700">482916</p>
      </div>
      <div class="flex items-center justify-center gap-2 text-gray-400 text-xs">
        <i data-lucide="clock" class="w-3 h-3"></i>
        <span>Expires in <span class="font-semibold text-gray-600">10 minutes</span></span>
      </div>
      <hr class="my-6 border-gray-100" />
      <p class="text-gray-500 text-xs">If you didn't request this code, please secure your account immediately.</p>
    </div>
    <div class="bg-gray-50 px-8 py-5 text-center border-t border-gray-100">
      <p class="text-gray-400 text-xs">© 2026 MyApp Inc. · <span class="text-violet-400">Unsubscribe</span></p>
    </div>
  </div>
</div>`;
const passwordResetHtml = `<div class="min-h-screen bg-gray-100 flex items-center justify-center p-6">
  <div class="bg-white max-w-lg w-full rounded-2xl shadow-lg overflow-hidden">
    <div class="bg-rose-600 px-8 py-10 text-center">
      <div class="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-4">
        <i data-lucide="lock-keyhole" class="text-rose-600 w-8 h-8"></i>
      </div>
      <h1 class="text-white text-3xl font-bold tracking-tight">Reset your password</h1>
      <p class="text-rose-200 mt-2 text-sm">We got your request</p>
    </div>
    <div class="px-8 py-8">
      <p class="text-gray-700 text-base">Hi <span class="font-semibold text-rose-600">Sarah</span>,</p>
      <p class="text-gray-600 mt-4 text-sm leading-relaxed">We received a request to reset the password for your account. Click the button below to choose a new password.</p>
      <div class="mt-8 text-center">
        <a href="#" class="inline-block bg-rose-600 text-white text-sm font-semibold px-10 py-3 rounded-full hover:bg-rose-700 transition-colors">Reset Password</a>
      </div>
      <p class="text-center text-gray-400 text-xs mt-4">This link expires in 1 hour</p>
      <hr class="my-6 border-gray-100" />
      <div class="bg-rose-50 rounded-xl p-4 flex gap-3">
        <i data-lucide="triangle-alert" class="text-rose-400 w-4 h-4 mt-0.5 shrink-0"></i>
        <p class="text-rose-600 text-xs">If you didn't request a password reset, please contact support immediately as your account may be compromised.</p>
      </div>
    </div>
    <div class="bg-gray-50 px-8 py-5 text-center border-t border-gray-100">
      <p class="text-gray-400 text-xs">© 2026 MyApp Inc. · <span class="text-rose-400">Unsubscribe</span></p>
    </div>
  </div>
</div>`;
const welcomeHtml = `<div class="min-h-screen bg-gray-100 flex items-center justify-center p-6">
  <div class="bg-white max-w-lg w-full rounded-2xl shadow-lg overflow-hidden">
    <div class="bg-indigo-600 px-8 py-10 text-center">
      <h1 class="text-white text-3xl font-bold tracking-tight">Welcome aboard! </h1>
      <p class="text-indigo-200 mt-2 text-sm">We're thrilled to have you with us</p>
    </div>
    <div class="px-8 py-8">
      <p class="text-gray-700 text-base leading-relaxed">Hi <span class="font-semibold text-indigo-600">Sarah</span>,</p>
      <p class="text-gray-600 mt-4 text-sm leading-relaxed">Your account has been successfully created. You now have full access to everything we offer.</p>
      <div class="mt-8 text-center">
        <a href="#" class="inline-block bg-indigo-600 text-white text-sm font-semibold px-8 py-3 rounded-full hover:bg-indigo-700 transition-colors">Get Started →</a>
      </div>
      <hr class="my-8 border-gray-100" />
      <p class="text-gray-500 text-xs font-semibold uppercase tracking-widest mb-4">What you can do</p>
      <div class="space-y-3">
        <div class="flex items-start gap-3">
          <i data-lucide="layout-dashboard" class="text-indigo-500 w-4 h-4 mt-0.5 shrink-0"></i>
          <p class="text-gray-600 text-sm">Manage your projects from one clean dashboard</p>
        </div>
        <div class="flex items-start gap-3">
          <i data-lucide="users" class="text-indigo-500 w-4 h-4 mt-0.5 shrink-0"></i>
          <p class="text-gray-600 text-sm">Collaborate with your team in real time</p>
        </div>
        <div class="flex items-start gap-3">
          <i data-lucide="bar-chart-2" class="text-indigo-500 w-4 h-4 mt-0.5 shrink-0"></i>
          <p class="text-gray-600 text-sm">Track progress with detailed analytics</p>
        </div>
      </div>
    </div>
    <div class="bg-gray-50 px-8 py-5 text-center border-t border-gray-100">
      <p class="text-gray-400 text-xs">© 2026 MyApp Inc. · <span class="text-indigo-400">Unsubscribe</span></p>
    </div>
  </div>
</div>`;
const orderConfirmationHtml = `<div class="min-h-screen bg-gray-100 flex items-center justify-center p-6">
  <div class="bg-white max-w-lg w-full rounded-2xl shadow-lg overflow-hidden">
    <div class="bg-emerald-600 px-8 py-10 text-center">
      <div class="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-4">
        <i data-lucide="package-check" class="text-emerald-600 w-8 h-8"></i>
      </div>
      <h1 class="text-white text-3xl font-bold tracking-tight">Order Confirmed!</h1>
      <p class="text-emerald-200 mt-2 text-sm">Order #ORD-20261503</p>
    </div>
    <div class="px-8 py-8">
      <p class="text-gray-700 text-base">Hi <span class="font-semibold text-emerald-600">Sarah</span>,</p>
      <p class="text-gray-600 mt-3 text-sm">Thank you for your purchase! Here's a summary of your order.</p>
      <div class="mt-6 border border-gray-100 rounded-xl overflow-hidden">
        <div class="flex justify-between items-center px-4 py-3 bg-gray-50 border-b border-gray-100">
          <span class="text-gray-500 text-xs font-semibold uppercase tracking-widest">Item</span>
          <span class="text-gray-500 text-xs font-semibold uppercase tracking-widest">Price</span>
        </div>
        <div class="flex justify-between items-center px-4 py-3 border-b border-gray-100">
          <span class="text-gray-700 text-sm">Pro Plan — Annual</span>
          <span class="text-gray-700 text-sm font-semibold">$99.00</span>
        </div>
        <div class="flex justify-between items-center px-4 py-3 border-b border-gray-100">
          <span class="text-gray-700 text-sm">Add-on: Extra Storage</span>
          <span class="text-gray-700 text-sm font-semibold">$19.00</span>
        </div>
        <div class="flex justify-between items-center px-4 py-3 bg-emerald-50">
          <span class="text-emerald-700 text-sm font-bold">Total</span>
          <span class="text-emerald-700 text-sm font-bold">$118.00</span>
        </div>
      </div>
      <div class="mt-6 text-center">
        <a href="#" class="inline-block bg-emerald-600 text-white text-sm font-semibold px-8 py-3 rounded-full hover:bg-emerald-700 transition-colors">View Order Details</a>
      </div>
    </div>
    <div class="bg-gray-50 px-8 py-5 text-center border-t border-gray-100">
      <p class="text-gray-400 text-xs">© 2026 MyApp Inc. · <span class="text-emerald-400">Unsubscribe</span></p>
    </div>
  </div>
</div>`;
const paymentReceiptHtml = `<div class="min-h-screen bg-gray-100 flex items-center justify-center p-6">
  <div class="bg-white max-w-lg w-full rounded-2xl shadow-lg overflow-hidden">
    <div class="bg-teal-600 px-8 py-10 text-center">
      <div class="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-4">
        <i data-lucide="receipt" class="text-teal-600 w-8 h-8"></i>
      </div>
      <h1 class="text-white text-3xl font-bold tracking-tight">Payment Received</h1>
      <p class="text-teal-200 mt-2 text-sm">Your subscription is active</p>
    </div>
    <div class="px-8 py-8">
      <p class="text-gray-700 text-base">Hi <span class="font-semibold text-teal-600">Sarah</span>,</p>
      <p class="text-gray-600 mt-3 text-sm">We've successfully processed your payment. Your receipt is below.</p>
      <div class="mt-6 bg-teal-50 rounded-xl p-5 space-y-3">
        <div class="flex justify-between text-sm">
          <span class="text-gray-500">Plan</span>
          <span class="text-gray-700 font-semibold">Pro — Monthly</span>
        </div>
        <div class="flex justify-between text-sm">
          <span class="text-gray-500">Amount</span>
          <span class="text-gray-700 font-semibold">$12.00</span>
        </div>
        <div class="flex justify-between text-sm">
          <span class="text-gray-500">Date</span>
          <span class="text-gray-700 font-semibold">March 15, 2026</span>
        </div>
        <div class="flex justify-between text-sm">
          <span class="text-gray-500">Next billing</span>
          <span class="text-gray-700 font-semibold">April 15, 2026</span>
        </div>
        <hr class="border-teal-100" />
        <div class="flex justify-between text-sm">
          <span class="text-gray-500">Payment method</span>
          <div class="flex items-center gap-2">
            <i data-lucide="credit-card" class="w-4 h-4 text-teal-500"></i>
            <span class="text-gray-700 font-semibold">Visa •••• 4242</span>
          </div>
        </div>
      </div>
      <div class="mt-6 text-center">
        <a href="#" class="inline-block bg-teal-600 text-white text-sm font-semibold px-8 py-3 rounded-full hover:bg-teal-700 transition-colors">Download Invoice</a>
      </div>
    </div>
    <div class="bg-gray-50 px-8 py-5 text-center border-t border-gray-100">
      <p class="text-gray-400 text-xs">© 2026 MyApp Inc. · <span class="text-teal-400">Unsubscribe</span></p>
    </div>
  </div>
</div>`;
const securityAlertHtml = `<div class="min-h-screen bg-gray-100 flex items-center justify-center p-6">
  <div class="bg-white max-w-lg w-full rounded-2xl shadow-lg overflow-hidden">
    <div class="bg-amber-500 px-8 py-10 text-center">
      <div class="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-4">
        <i data-lucide="shield-alert" class="text-amber-500 w-8 h-8"></i>
      </div>
      <h1 class="text-white text-3xl font-bold tracking-tight">Security Alert</h1>
      <p class="text-amber-100 mt-2 text-sm">New sign-in detected on your account</p>
    </div>
    <div class="px-8 py-8">
      <p class="text-gray-700 text-base">Hi <span class="font-semibold text-amber-600">Sarah</span>,</p>
      <p class="text-gray-600 mt-3 text-sm">We noticed a new sign-in to your account. If this was you, no action is needed. If not, secure your account immediately.</p>
      <div class="mt-6 bg-amber-50 rounded-xl p-5 space-y-3">
        <div class="flex justify-between text-sm">
          <span class="text-gray-500">Time</span>
          <span class="text-gray-700 font-semibold">March 15, 2026 · 3:42 PM</span>
        </div>
        <div class="flex justify-between text-sm">
          <span class="text-gray-500">Location</span>
          <span class="text-gray-700 font-semibold">Dhaka, Bangladesh</span>
        </div>
        <div class="flex justify-between text-sm">
          <span class="text-gray-500">Device</span>
          <span class="text-gray-700 font-semibold">Chrome on Windows</span>
        </div>
        <div class="flex justify-between text-sm">
          <span class="text-gray-500">IP Address</span>
          <span class="text-gray-700 font-semibold">103.x.x.x</span>
        </div>
      </div>
      <div class="mt-6 flex gap-3">
        <a href="#" class="flex-1 text-center bg-amber-500 text-white text-sm font-semibold px-4 py-3 rounded-full hover:bg-amber-600 transition-colors">This was me</a>
        <a href="#" class="flex-1 text-center bg-red-100 text-red-600 text-sm font-semibold px-4 py-3 rounded-full hover:bg-red-200 transition-colors">Not me — Secure account</a>
      </div>
    </div>
    <div class="bg-gray-50 px-8 py-5 text-center border-t border-gray-100">
      <p class="text-gray-400 text-xs">© 2026 MyApp Inc. · <span class="text-amber-400">Unsubscribe</span></p>
    </div>
  </div>
</div>`;
const newsletterHtml = `<div class="min-h-screen bg-gray-100 flex items-center justify-center p-6">
  <div class="bg-white max-w-lg w-full rounded-2xl shadow-lg overflow-hidden">
    <div class="bg-sky-600 px-8 py-10 text-center">
      <p class="text-sky-200 text-xs font-semibold uppercase tracking-widest mb-3">March 2026 · Monthly Update</p>
      <h1 class="text-white text-3xl font-bold tracking-tight">What's new at MyApp</h1>
      <p class="text-sky-200 mt-2 text-sm">Your monthly product digest</p>
    </div>
    <div class="px-8 py-8 space-y-6">
      <div class="flex gap-4">
        <div class="w-10 h-10 bg-sky-100 rounded-xl flex items-center justify-center shrink-0">
          <i data-lucide="zap" class="text-sky-600 w-5 h-5"></i>
        </div>
        <div>
          <p class="text-gray-800 text-sm font-semibold">2x faster dashboard</p>
          <p class="text-gray-500 text-sm mt-1">We've completely rebuilt the dashboard engine. Load times are now under 200ms.</p>
        </div>
      </div>
      <div class="flex gap-4">
        <div class="w-10 h-10 bg-sky-100 rounded-xl flex items-center justify-center shrink-0">
          <i data-lucide="palette" class="text-sky-600 w-5 h-5"></i>
        </div>
        <div>
          <p class="text-gray-800 text-sm font-semibold">New theme customization</p>
          <p class="text-gray-500 text-sm mt-1">Pick from 12 new color themes or build your own with our new theme editor.</p>
        </div>
      </div>
      <div class="flex gap-4">
        <div class="w-10 h-10 bg-sky-100 rounded-xl flex items-center justify-center shrink-0">
          <i data-lucide="webhook" class="text-sky-600 w-5 h-5"></i>
        </div>
        <div>
          <p class="text-gray-800 text-sm font-semibold">Webhooks are here</p>
          <p class="text-gray-500 text-sm mt-1">Trigger real-time events to your own systems. Supports Slack, Discord, and custom URLs.</p>
        </div>
      </div>
      <div class="text-center pt-2">
        <a href="#" class="inline-block bg-sky-600 text-white text-sm font-semibold px-8 py-3 rounded-full hover:bg-sky-700 transition-colors">Read Full Changelog</a>
      </div>
    </div>
    <div class="bg-gray-50 px-8 py-5 text-center border-t border-gray-100">
      <p class="text-gray-400 text-xs">© 2026 MyApp Inc. · <span class="text-sky-400">Unsubscribe</span></p>
    </div>
  </div>
</div>`;
const renewalReminderHtml = `<div class="min-h-screen bg-gray-100 flex items-center justify-center p-6">
  <div class="bg-white max-w-lg w-full rounded-2xl shadow-lg overflow-hidden">
    <div class="bg-orange-500 px-8 py-10 text-center">
      <div class="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-4">
        <i data-lucide="calendar-clock" class="text-orange-500 w-8 h-8"></i>
      </div>
      <h1 class="text-white text-3xl font-bold tracking-tight">Your plan expires soon</h1>
      <p class="text-orange-100 mt-2 text-sm">Renew to keep your access uninterrupted</p>
    </div>
    <div class="px-8 py-8">
      <p class="text-gray-700 text-base">Hi <span class="font-semibold text-orange-600">Sarah</span>,</p>
      <p class="text-gray-600 mt-3 text-sm leading-relaxed">Your <span class="font-semibold">Pro Plan</span> subscription expires in <span class="font-semibold text-orange-600">7 days</span> on March 22, 2026. Renew now to avoid any interruption to your workflow.</p>
      <div class="mt-6 bg-orange-50 rounded-xl p-5 space-y-2">
        <div class="flex justify-between text-sm">
          <span class="text-gray-500">Current plan</span>
          <span class="text-gray-700 font-semibold">Pro — Annual</span>
        </div>
        <div class="flex justify-between text-sm">
          <span class="text-gray-500">Expiry date</span>
          <span class="text-orange-600 font-semibold">March 22, 2026</span>
        </div>
        <div class="flex justify-between text-sm">
          <span class="text-gray-500">Renewal price</span>
          <span class="text-gray-700 font-semibold">$99.00 / year</span>
        </div>
      </div>
      <div class="mt-6 text-center">
        <a href="#" class="inline-block bg-orange-500 text-white text-sm font-semibold px-8 py-3 rounded-full hover:bg-orange-600 transition-colors">Renew Now</a>
      </div>
    </div>
    <div class="bg-gray-50 px-8 py-5 text-center border-t border-gray-100">
      <p class="text-gray-400 text-xs">© 2026 MyApp Inc. · <span class="text-orange-400">Unsubscribe</span></p>
    </div>
  </div>
</div>`;
const accountDeletionHtml = `<div class="min-h-screen bg-gray-100 flex items-center justify-center p-6">
  <div class="bg-white max-w-lg w-full rounded-2xl shadow-lg overflow-hidden">
    <div class="bg-gray-700 px-8 py-10 text-center">
      <div class="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-4">
        <i data-lucide="user-x" class="text-gray-700 w-8 h-8"></i>
      </div>
      <h1 class="text-white text-3xl font-bold tracking-tight">Account Deleted</h1>
      <p class="text-gray-300 mt-2 text-sm">We're sad to see you go</p>
    </div>
    <div class="px-8 py-8">
      <p class="text-gray-700 text-base">Hi <span class="font-semibold text-gray-700">Sarah</span>,</p>
      <p class="text-gray-600 mt-3 text-sm leading-relaxed">Your account and all associated data have been permanently deleted as requested. This action cannot be undone.</p>
      <div class="mt-6 bg-gray-50 rounded-xl p-5 space-y-2">
        <div class="flex items-start gap-3">
          <i data-lucide="check-circle" class="text-gray-400 w-4 h-4 mt-0.5 shrink-0"></i>
          <p class="text-gray-500 text-sm">All personal data removed</p>
        </div>
        <div class="flex items-start gap-3">
          <i data-lucide="check-circle" class="text-gray-400 w-4 h-4 mt-0.5 shrink-0"></i>
          <p class="text-gray-500 text-sm">Subscription cancelled, no future charges</p>
        </div>
        <div class="flex items-start gap-3">
          <i data-lucide="check-circle" class="text-gray-400 w-4 h-4 mt-0.5 shrink-0"></i>
          <p class="text-gray-500 text-sm">All active sessions terminated</p>
        </div>
      </div>
      <p class="text-gray-500 text-sm mt-5 text-center">Changed your mind? You can create a new account anytime.</p>
      <div class="mt-4 text-center">
        <a href="#" class="inline-block border border-gray-300 text-gray-600 text-sm font-semibold px-8 py-3 rounded-full hover:bg-gray-50 transition-colors">Create New Account</a>
      </div>
    </div>
    <div class="bg-gray-50 px-8 py-5 text-center border-t border-gray-100">
      <p class="text-gray-400 text-xs">© 2026 MyApp Inc. — Thank you for being with us.</p>
    </div>
  </div>
</div>`;
const templates = [
  { id: "welcome", label: "Welcome", html: welcomeHtml },
  {
    id: "email-verification",
    label: "Email Verification",
    html: emailVerificationHtml,
  },
  { id: "otp", label: "OTP Verification", html: otpVerificationHtml },
  { id: "password-reset", label: "Password Reset", html: passwordResetHtml },
  {
    id: "order-confirmation",
    label: "Order Confirmation",
    html: orderConfirmationHtml,
  },
  { id: "payment-receipt", label: "Payment Receipt", html: paymentReceiptHtml },
  { id: "security-alert", label: "Security Alert", html: securityAlertHtml },
  { id: "newsletter", label: "Newsletter", html: newsletterHtml },
  {
    id: "renewal-reminder",
    label: "Renewal Reminder",
    html: renewalReminderHtml,
  },
  {
    id: "account-deletion",
    label: "Account Deleted",
    html: accountDeletionHtml,
  },
];
export default templates;
