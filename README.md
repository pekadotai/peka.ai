<a href="http://peka-ai.herokuapp.com/">
    <img src="https://res.cloudinary.com/di02ey9t7/image/upload/v1605545369/PEKA_AI_1_vxfhtp.png" alt="Aimeos logo" title="Aimeos" align="right" height="80" width="100"/>
</a>

Peka.ai
======================
[![License](https://poser.pugx.org/aimeos/aimeos-typo3/license.svg)](https://packagist.org/packages/aimeos/aimeos-typo3)

[Peka.ai](http://peka-ai.herokuapp.com/) adalah sebuah web interaktif yang dapat membantu kamu dalam mengetahui informasi tentang kanker payudara mulai dari penyebab, gejala, diagnosa, hingga mitos seputar kanker payudara. Fitur utama Peka.AI adalah chatbot yang dapat mengukur tingkat risiko terkena kanker payudara dan memberikan rekomendasi sesuai hasil pemeriksaan melalui chatbot tersebut.

[![Aimeos TYPO3 demo](https://aimeos.org/fileadmin/user_upload/typo3-demo.jpg)](http://typo3.demo.aimeos.org/)

## Table of content

- [Website](#website)
    - [Pages](#pages)
    - [Go to Chatbot](#go-to-chatbot)
- [Peka Chatbot](#peka-chatbot)
    - [How to use](#demo)
        - [1. Welcome](#1.-welcome)
        - [2. Usia](#2.-usia)
        - [3. Berat](#3.-berat)
    - [BOT Materials](#bot-materials)
        - [Yaml](#yaml)
        - [Flows](#flows)
        - [States](#states)
        - [Intents](#intents)
        - [NLU-s](#nlu-s)
        - [Methods](#methods)
        - [Handlers](#handlers)
        
- [License](#license)
- [Links](#links)

## Website

Hal pertama yang harus kamu lakukan adalah mengakses website [Peka.ai](http://peka-ai.herokuapp.com/) dan selanjutnya kamu akan diarahkan ke home page.

<gambar landing page>

### Contents

Pada website Peka, kamu juga dapat mengakses info-info penting seputar Kanker Payudara karena salah satu tujuan kami adalah mengedukasi masyarakat atau pengguna aplikasi akan pentingnya penyakit Kanker Payudara ini.

Konten-konten yang tersedia:
* Tentang Peka.AI
* Gejala-gejala Kanker Payudara
* Tips Pencegahan  
* Diagnosa
* Tingkatan
* Tipe-tipe
* Mitos
* FAQs


### Go to Chatbot

Selanjutnya, kamu bisa melakukan pengecekan risiko kanker payudara melalui Peka.Bot dengan mengklik Chatbot pada home page dan akan diarahkan ke channel yang tersedia (Telegram dan Line)


## Peka Chatbot

Setelah berhasil masuk ke dalam chatbot, kamu akan disapa Peka Chatbot dan memulai proses pengecekan risiko kanker. 

Sekarang, kamu sudah bisa melakukan pengecekan dengan Peka Bot dan Alur penggunaan chatbot Peka bisa kamu lihat secara detil melalui infografis BOT Journey dibawah ini:

<div style="text-align:center">
    <img src="https://res.cloudinary.com/di02ey9t7/image/upload/v1605630719/Katahack__Bot_journey_hbpgo5.png" alt="Peka AI Journey" title="Peka.AI"/>
</div>

## How to use

Jika dirasa perlu, kamu juga bisa mengikuti *step-by-step* penggunaan Peka.ai Chat Bot seperti dibawah ini:



### 1. Welcome

Saat pertama kali mengakses chatbot kamu akan disapa dan secara otomatis memulai pengecekan kanker.
Kamu juga bisa melakukan cancel/pembatalan pengecekan kanker dengan mengetik "cancel" dan tidak terbatas hanya pada fase pertanyaan tertentu saja



### 2. Usia

Pertanyaan pertama adalah mengenai berapa usia kamu saat ini, kamu bisa memasukkan nilai angka 1-200.



[![usia-demo](https://res.cloudinary.com/di02ey9t7/image/upload/v1605639099/welcome_yglwal.png)]



### 3. Berat

Selanjutnya, kamu akan ditanya berapa berat badan kamu, kamu bisa memasukkan nilai angka 1-200.



[![berat-demo](https://res.cloudinary.com/di02ey9t7/image/upload/v1605639594/berat_kmbqaz.png)]



### 4. Tinggi

Masukan tinggi badanmu dalam cm, kamu bisa memasukkan nilai angka 1-200.



[![tinggi-demo](https://res.cloudinary.com/di02ey9t7/image/upload/v1605639813/tinggi_pflbhk.png)]



### 5. Usia Pertama Menstruasi

Masukan usia saat pertama menstruasi. Untuk pria atau perempuan yang belum menstruasi dapat mengetik "belum/tidak"



[![mens-demo](https://res.cloudinary.com/di02ey9t7/image/upload/v1605640987/menstruasi_adu4qv.png)]



### 6. Usia Pertama Melahirkan

Lalu, usia saat pertama melahirkan. Untuk pria atau perempuan yang belum menstruasi dapat mengetik "belum/tidak"



[![melahirkan-demo](https://res.cloudinary.com/di02ey9t7/image/upload/v1605640993/melahirkan_mtlap4.png)]




### 7. Usia Pertama Menopause

Untuk pengguna yang sudah menopause dapat memasukkan usia saat menopause. Untuk pria atau perempuan yang belum menstruasi dapat mengetik "belum/tidak"



[![menopause-demo](https://res.cloudinary.com/di02ey9t7/image/upload/v1605640999/menopause_ersrxy.png)]




### 8. Terapi Penggantian Hormon

Selanjutnya, pengecekan apakah pernah melakukan terapi penggantian hormon? Kamu dapat menjawab "iya/pernah" atau "tidak/tidak pernah"



[![terapi-demo](https://res.cloudinary.com/di02ey9t7/image/upload/v1605641006/terapihormon_xh9pwm.png)]




### 9. Tes Genetik

Fase ini mengecek apakah pernah melakukan tes genetik BRCA dan hasilnya positif. Kamu bisa menjawab "iya" atau "tidak" 



[![tes-genetik-demo](https://res.cloudinary.com/di02ey9t7/image/upload/v1605641012/tesgenetik_owkow8.png)]




### 10. Kanker Ovarium

Lalu, pengecekan apakah pengguna mengidap penyakit kanker ovarium. Kamu bisa menjawab "iya" atau "tidak"



[![kanker-ovarium-demo](https://res.cloudinary.com/di02ey9t7/image/upload/v1605641020/kankerovarium_yelyus.png)]




### 11. Riwayat Keluarga

Perlu dilakukan juga pengecekan riwayat keluarga yang mengidap kanker payudara. Kamu bisa menjawab "ayah/ibu/kakak/adik/paman/bibi"



[![keluarga-demo](https://res.cloudinary.com/di02ey9t7/image/upload/v1605641024/keluarga_eckb6l.png)]




### 12. Personal Breast Disease

Dan yang terakhir adalah pengecekan untuk *personal breast disease* dalam empat kategori sesuai yang ada di chat. Jika tidak terjangkit, kamu bisa menjawab "tidak" atau jika mengidap penyakit tersebut, kamu dapat menjawab "biopsi atypia/biopsi/alh/adh/dcis/lcis/payudara padat"



[![pbd-demo](https://res.cloudinary.com/di02ey9t7/image/upload/v1605641030/pbd_jyyab7.png)]




### 13. Hasil Asesmen dan Rekomendasi

Setelah selesai, kamu akan mendapatkan laporan apakah kamu mempunyai risiko TINGGI, SEDANG, atau RENDAH untuk terjangkit Kanker Payudara beserta rekomendasi yang sesuai dengan tingkat risiko dan usia kamu. Kamu juga bisa melakukan pengecekan kembali dengan mengetik "cek" sesuai instruksi di chatbot.



[![hasil-demo](https://res.cloudinary.com/di02ey9t7/image/upload/v1605641035/hasil_uj0zmc.png)]
[![rekomendasi-demo](https://res.cloudinary.com/di02ey9t7/image/upload/v1605641040/rekomendasi_akvo5o.png)]


## BOT Materials

Ini adalah daftar material yang digunakan untuk Peka.ai Chatbot di Kata.ai platform

### Yaml
Script yaml untuk PekaBot

### Flows

* Default
* Risk Assessment

### States

* Initial
* Usia
* Berat
* Tinggi
* Usia Menstruasi
* Usia Pertama Melahirkan
* Usia Menopause
* Terapi Penggantian Hormon
* Tes Genetik
* Kanker Ovarium
* Riwayat Keluarga
* Personal Breast Disease
* End

### Intents

* Default (Fallback)
* Cek Kanker (Initial)
* Reenter (command)
* Cancel (Float)
* Usia Berat Tinggi
* Iya
* Tidak
* Belum
* Cancel
* Keluarga Satu
* Keluarga Dua
* Keluarga Tiga
* Biopsy Atypia
* BiopsyNonAtypia
* ADH
* LCIS
* DCIS
* Breast Density

### NlU-s

* Cek Kanker
* Usia Berat Tinggi
* Tes Berat
* Iya Tidak
* Keluarga Satu
* Keluarga Dua
* Keluarga Tiga
* Biopsy Atypia
* Biopsy Non Atypia
* ADH
* LCIS
* DCIS
* Breast Density
* Check NLU
* Cancel

### NL Studio

* Check
* Intent
* Personal Breast

### Methods

* GantiRR Usia
* Hitung BMI
* GantiRR Usia Menstruasi
* GantiRR BMI
* GantiRR Usia Melahirkan
* GantiRR Usia Menopause
* GantiRR Penggantian Hormon
* GantiRR Tes Genetik
* GantiRR Kanker Ovarium
* GantiRR Keluarga
* GantiRR Personal Breast
* DCIS
* Breast Density
* Check NLU
* Cancel

### Handlers

* Cancel Cek Kanker
* Re-check Kanker
* Re-enter Command

## License

The template is licensed under the terms of the GPL Open Source
license and is available for free.

## Links

* [Web site](https://aimeos.org/integrations/typo3-shop-extension/)
* [BOT Yaml](https://aimeos.org/docs/TYPO3)
