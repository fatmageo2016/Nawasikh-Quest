import streamlit as st
import streamlit.components.v1 as components
import os

# إعداد الصفحة لتكون واسعة وتأخذ مساحة الشاشة
st.set_page_config(page_title="مغامرة النواسخ", layout="wide")

# جلب مسار المجلد الحالي
current_dir = os.path.dirname(os.path.abspath(__file__))

# مسارات الملفات
html_path = os.path.join(current_dir, "index.html")
css_path = os.path.join(current_dir, "style.css")
js_path = os.path.join(current_dir, "script.js")

if os.path.exists(html_path) and os.path.exists(css_path) and os.path.exists(js_path):
    # قراءة محتويات الملفات البرمجية
    with open(html_path, "r", encoding="utf-8") as f:
        html_code = f.read()
    with open(css_path, "r", encoding="utf-8") as f:
        css_code = f.read()
    with open(js_path, "r", encoding="utf-8") as f:
        js_code = f.read()

    # دمج ملفات CSS و JS داخل ملف الـ HTML كأكواد داخلية (Inline) 
    # لضمان عملها بسلاسة داخل iFrame الخاص بـ Streamlit وبدون مشاكل الامتدادات
    final_html = html_code.replace(
        '<link rel="stylesheet" href="style.css">',
        f'<style>{css_code}</style>'
    ).replace(
        '<script src="script.js"></script>',
        f'<script>{js_code}</script>'
    )

    # عرض اللعبة بملء الشاشة تقريباً
    components.html(final_html, height=850, scrolling=True)

else:
    st.error("❌ هناك ملفات ناقصة! تأكدي من وجود: index.html و style.css و script.js في نفس المجلد.")
