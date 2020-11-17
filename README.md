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

Selanjutnya, kamu bisa melakukan pengecekan risiko kanker payudara melalui Peka.Bot dengan mengklik Chatbot pada home page dan akan diarahkan ke channel yang tersedia


## Peka Chatbot

Setelah berhasil masuk ke dalam chatbot, kamu bisa mulai dengan menyapa bot tersebut atau memulai proses pengecekan risiko kanker. 

#### Ketik *"Hi" atau "Cek"*

Sekarang, kamu sudah bisa melakukan pengecekan dengan Peka Bot dan Alur penggunaan chatbot Peka bisa kamu lihat secara detil melalui infografis BOT Journey dibawah ini:

<div style="text-align:center">
    <img src="https://res.cloudinary.com/di02ey9t7/image/upload/v1605630719/Katahack__Bot_journey_hbpgo5.png" alt="Peka AI Journey" title="Peka.AI"/>
</div>

## How to use

Kamu juga bisa 


## BOT Materials

Ini adalah daftar material yang digunakan untuk Peka.ai Chatbot di Kata.ai platform

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

### NlUs

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
