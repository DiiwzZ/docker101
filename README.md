# Lootbox App

เว็บแอปพลิเคชันเครื่องคิดเลขอย่างง่ายสร้างด้วย Flask ที่สามารถทำการคำนวณพื้นฐานได้ เช่น บวก ลบ คูณ หาร แอปพลิเคชันจะแสดงข้อความ "phanuruj 1650703554" บนหน้าเว็บด้วย

## โครงสร้างโปรเจกต์

```
Lootbox-app
├── .github
│   └── workflows
│       └── deploy-to-azure.yml
├── src
│   ├── app.py
├── static
│   ├── index.html
│   └── script.js
├── Dockerfile
├── requirements.txt
├── startup.sh
└── README.md
```

## ความต้องการระบบ

* Python 3.x
* Flask

## การติดตั้ง

1. โคลนรีโพสิทอรี่:  
```  
git clone https://github.com/yourusername/calculator-app.git  
cd calculator-app  
```
2. ติดตั้งไลบรารีที่จำเป็น:  
```  
pip install -r requirements.txt  
```

## การรันแอปพลิเคชันในเครื่องโลคอล

รันคำสั่งต่อไปนี้เพื่อเริ่มต้นแอปพลิเคชันในเครื่องโลคอล:

```
python src/app.py
```

แอปพลิเคชันจะทำงานที่ `http://127.0.0.1:8000`

## การ Deploy ด้วย GitHub Actions ไปยัง Azure App Service

1. สร้าง Azure App Service ใน Azure Portal

2. รับ Publish Profile จาก Azure Portal:
   - ไปที่ Azure App Service ของคุณ
   - คลิกที่ "Get publish profile" เพื่อดาวน์โหลดไฟล์ publish profile

3. เพิ่ม Secret ใน GitHub repository:
   - ไปที่ repository ของคุณบน GitHub
   - ไปที่ Settings > Secrets > Actions
   - คลิกที่ "New repository secret"
   - ตั้งชื่อ secret เป็น `AZURE_WEBAPP_PUBLISH_PROFILE`
   - ใส่เนื้อหาจากไฟล์ publish profile ที่ดาวน์โหลดมา
   - คลิก "Add secret"

4. ปรับแต่งไฟล์ `.github/workflows/deploy-to-azure.yml` (ถ้าจำเป็น):
   - แก้ไขชื่อ `AZURE_WEBAPP_NAME` ให้ตรงกับชื่อของ App Service ของคุณ

5. Push โค้ดไปที่ branch main:
   ```
   git add .
   git commit -m "Set up GitHub Actions deployment"
   git push
   ```

6. GitHub Actions จะเริ่มทำงานโดยอัตโนมัติและ deploy แอปพลิเคชันไปยัง Azure App Service

7. หลังจาก deploy สำเร็จ คุณสามารถเข้าถึงแอปพลิเคชันได้ที่ URL ของ Azure App Service ของคุณ
