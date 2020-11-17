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
    - [How to Use](#how-to-use)
    - [Demo](#demo)
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

Hal yang pertama dilakukan adalah mengakses website [Peka.ai](https://typo3.org/extensions/repository/view/aimeos) dan akan diarahkan ke landing page.

<gambar landing page>

### Pages

If you want to install Aimeos into your existing TYPO3 installation, the [Aimeos extension from the TER](https://typo3.org/extensions/repository/view/aimeos) is recommended. You can download and install it directly from the Extension Manager of your TYPO3 instance.

For new TYPO3 installations, there's a 1-click [Aimeos distribution](https://typo3.org/extensions/repository/view/aimeos_dist) available too. Choose the Aimeos distribution from the list of available distributions in the Extension Manager and you will get a completely set up shop system including demo data for a quick start.

### Go to Chatbot

The latest version can be installed via composer too. This is especially useful if you want to create new TYPO3 installations automatically or play with the latest code. You need to install the composer package first if it isn't already available:

`php -r "readfile('https://getcomposer.org/installer');" | php -- --filename=composer`

In order to tell install TYPO3, you have to execute

`composer create-project typo3/cms-base-distribution myshop`

This will install TYPO3 into the ''./myshop/'' directory. Afterwards, you have to edit the composer.json file and add the ''post-install-cmd'' and ''post-update-cmd'' scripts:

```
    "scripts": {
        "post-install-cmd": [
            "Aimeos\\Aimeos\\Custom\\Composer::install"
        ],
        "post-update-cmd": [
            "Aimeos\\Aimeos\\Custom\\Composer::install"
        ]
    }
```

Then, install the Aimeos extension for TYPO3 with:

`composer req aimeos/aimeos-typo3:~20.10`

This will install TYPO3 9.5 and the latest Aimeos TYPO3 extension. The Aimeos composer script will be executed automatically, which copies some required files and adds a link to the Aimeos extensions placed in the ./ext/ directory.

## TYPO3 setup

### Database setup

If you use MySQL < 5.7.8, you have to use `utf8` and `utf8_unicode_ci` instead because those MySQL versions can't handle the long indexes created by `utf8mb4` (up to four bytes per character) and you will get errors like

```
1071 Specified key was too long; max key length is 767 bytes
```

To avoid that, change your database settings in your `./typo3conf/LocalConfiguration.php` to:

```
'DB' => [
    'Connections' => [
        'Default' => [
            'tableoptions' => [
                'charset' => 'utf8',
                'collate' => 'utf8_unicode_ci',
            ],
            // ...
        ],
    ],
],
```

### Security

Since **TYPO3 9.5.14+** implements **SameSite cookie handling** and restricts when browsers send cookies to your site. This is a problem when customers are redirected from external payment provider domain. Then, there's no session available on the confirmation page. To circumvent that problem, you need to set the configuration option `cookieSameSite` to `none` in your `./typo3conf/LocalConfiguration.php`:

```
    'FE' => [
        'cookieSameSite' => 'none'
    ]
```

### Extension

* Log into the TYPO3 back end
* Click on ''Admin Tools::Extension Manager'' in the left navigation
* Click the icon with the little plus sign left from the Aimeos list entry (looks like a lego brick)

![Install Aimeos TYPO3 extension]()

### Database

Afterwards, you have to execute the update script of the extension to create the required database structure:

![Execute update script](https://aimeos.org/docs/images/Aimeos-typo3-extmngr-update-7.x.png)

## Peka Chatbot

Alur penggunaan chatbot Peka untuk mendeteksi risiko terkena kanker payudara 
dapat dilihat secara detil melalui infografis dibawah ini:

<img src="https://res.cloudinary.com/di02ey9t7/image/upload/v1605630719/Katahack__Bot_journey_hbpgo5.png" alt="Peka AI Journey" title="Peka.AI" margin="0 auto"/>


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
