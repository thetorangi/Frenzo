# 🧠 Frenzo Backend — Powered by Django REST Framework

Welcome to the **backend** of **Frenzo** — a modern social media platform built with **Django 4.2** and **Django REST Framework**.

This API serves everything from authentication and user accounts to chat, posts, search, notifications, and more. Fully ready for frontend integration using JWT authentication.

---

## 🚀 Key Features

✅ JWT Authentication with SimpleJWT  
✅ Modular apps: `account`, `post`, `chat`, `notification`, `search`  
✅ Secure, CORS-ready for frontend (localhost:5173)  
✅ Media upload support  
✅ Console-based email backend  
✅ SQLite for development, PostgreSQL-ready  
✅ Tailored for Vue frontend with REST endpoints

---

## 📦 Tech Stack

- **Python 3.10+**
- **Django 4.2**
- **Django REST Framework**
- **SimpleJWT** (JWT auth)
- **Pillow** (image handling)
- **CORS headers**
- **SQLite** (default)

---

## 📁 Project Structure

```
backend/
├── account/             # Custom user model & authentication
├── post/                # Posts, likes, comments
├── chat/                # Messaging system
├── notification/        # Notifications for activity
├── search/              # Search functionality
├── backend/             # Django project settings
├── media/               # Uploaded media files
├── manage.py
└── requirements.txt

```
---

## ⚙️ Installation & Setup

1. **Clone the repo**
```bash
git clone https://github.com/yourusername/frenzo.git
cd frenzo/backend


2. **Create a virtual environment**

python -m venv venv
source venv/bin/activate   # On Windows: venv\Scripts\activate

3. **Install dependencies**

pip install -r requirements.txt

4. **Apply migrations**

python manage.py migrate

5. **Create a superuser**

python manage.py createsuperuser

6. **Run the development server**

python manage.py runserver

Server runs at: http://127.0.0.1:8000
```
## 🔑 API Authentication

Frenzo uses **JWT (JSON Web Tokens)** for API authentication via `djangorestframework-simplejwt`.

### Endpoints

| Endpoint | Method | Description |
| :----------------- | :----- | :-------------------------- |
| `/api/token/` | `POST` | Get access and refresh tokens |
| `/api/token/refresh/` | `POST` | Refresh access token |

### Header Format

Include your access token in the `Authorization` header for protected routes:

### JWT Configuration


The JWT tokens are configured for long-lived sessions:

```python
SIMPLE_JWT = {
    'ACCESS_TOKEN_LIFETIME': timedelta(days=30),
    'REFRESH_TOKEN_LIFETIME': timedelta(days=180),
}
```

### 🌐 CORS Configuration

CORS_ALLOWED_ORIGINS = [
    "http://localhost:5173",
]
CORS_ALLOW_CREDENTIALS = True

CSRF_TRUSTED_ORIGINS = [
    "http://localhost:5173",
]

### 🖼 **Media & Static Files**

Media uploads handled using Pillow:

MEDIA_URL = 'media/'
MEDIA_ROOT = BASE_DIR / 'media'

Files are served from /media/ during development.
🛠 Settings Summary

DEBUG = True
ALLOWED_HOSTS = []
AUTH_USER_MODEL = 'account.User'
EMAIL_BACKEND = "django.core.mail.backends.console.EmailBackend"
TIME_ZONE = 'Asia/Kolkata'

### 📦 requirements.txt

asgiref==3.6.0
Django==4.2
django-cors-headers==3.14.0
djangorestframework==3.14.0
djangorestframework-simplejwt==5.2.2
Pillow==9.5.0
PyJWT==2.6.0
pytz==2023.3
sqlparse==0.4.3

### 🔐 **Security Notes**

⚠️ SECRET_KEY is hardcoded — move it to .env in production.
⚠️ DEBUG=True — switch to False when deploying.
✅ No sensitive keys exposed — safe for public GitHub.
📌 TODO / Improvements

Add automated tests

Switch to PostgreSQL in production

Enable file storage (S3/GCS)

Set up CI/CD (GitHub Actions)

    Document API with Swagger or Postman

### 👨‍💻 **Author**

Made with ❤️ by Karma 