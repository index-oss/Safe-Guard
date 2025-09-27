# 🔒 Protected Hello (Password-Locked HTML Page)

This project is a **single HTML file** that shows a hidden message (`Hello World`) only after unlocking it with a password.  
It is designed to protect content from being easily copied or reused without permission.  
No server is required — everything works offline in the browser.

---

## 🚀 Features
- **Password Protection** – The page requires a password to unlock the hidden content.
- **First-Time Setup** – On first open, you create a password to encrypt the content.
- **Device Remember Option** – You can check "Remember this device" to skip the password next time on the same device.
- **AES-GCM Encryption** – Uses the browser’s built-in Web Crypto API (secure modern cryptography).
- **No Eval or Hidden Tricks** – Content is stored safely as encrypted text and only displayed after decryption.
- **Offline & Portable** – Works completely offline. Just share or open the HTML file.

---

## 📖 How It Works
1. Open `protected_hello.html` in your browser (works on phone or PC).
2. The page will ask you to **create a password** (first time only).
3. The message `Hello World` is encrypted and locked behind that password.
4. On the next visit, you must enter the password to unlock it.
5. If you checked **"Remember this device"**, the page will auto-unlock on that device.

---

## 🛡️ Security Notes
- This system protects against **casual copy-paste** and makes the code unreadable without the password.
- **It does not stop advanced attackers** with developer tools — for that you would need server-side license checks.
- Passwords are **never stored in plain text**. A secure key is derived using PBKDF2 (200,000 iterations with SHA-256).
- The message is encrypted with **AES-GCM 256-bit**.
- If you forget the password, the content is permanently inaccessible (no backdoor exists).

---

## 📝 Customization
- By default, the protected message is `Hello World`.  
  To change it, edit this line in the HTML:

  ```js
  const APP_CONTENT = "Hello World";

You can replace "Hello World" with your own secret text, instructions, or even small code snippets.



---

📂 Files

protected_hello.html – The complete password-protected HTML page.
Open it directly in a browser to use.



---

⚠️ Disclaimer

This project is meant as a lightweight protection tool for non-programmers.
It adds a real password lock but cannot guarantee full protection if someone has deep technical skills.
For professional licensing or commercial apps, use a server-based license system.

---
