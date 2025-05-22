# Esenler GSHM Web Otomasyon Sistemi

Bu depo, Esenler Belediyesi Gençlik ve Spor Hizmetleri Müdürlüğü icin gelistirilecek web otomasyon sisteminin temel iskeletini içerir.

## Klasörler

- **backend/** – Node.js + Express + TypeScript backend (örnek REST API).
- **frontend/** – React + TypeScript tabanlı basit bir arayüz.
- **prisma/** – Prisma veritabanı şeması.

## Kurulum

Ağ erişimi kapalı olduğundan bağımlılıklar yüklenmemiştir. Gerekli paketleri kendiniz indirip `npm install` komutlarını çalıştırmalısınız.

```bash
cd backend && npm install
cd ../frontend && npm install
```

## Çalıştırma

```bash
# Backend
cd backend && npm start

# Frontend
cd ../frontend && npm start
```

Bu sadece başlangıç niteliğinde bir iskelettir. Modüller ve işlevler henüz tam olarak uygulanmamıştır.
