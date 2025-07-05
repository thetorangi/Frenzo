# Backend Setup Instructions

Follow these steps to install the required dependencies for this project:

## 1. Create a Virtual Environment

```bash
python -m venv venv
source venv/bin/activate  # On Windows use: venv\Scripts\activate
```

## 2. Install Dependencies

```bash
pip install django djangorestframework djangorestframework-simplejwt pillow django-cors-headers
```

## 3. Verify Installation

```bash
python -m django --version
pip show djangorestframework
pip show djangorestframework-simplejwt
pip show pillow
```

You're now ready to start developing with Django and the required packages!