# 🍽️ Meals App

Una moderna app React Native per esplorare ricette deliziose organizzate per categoria.

## 📱 Descrizione

Meals App è un'applicazione React Native che consente agli utenti di navigare attraverso una vasta collezione di ricette organizzate in diverse categorie culinarie. L'app fornisce un'interfaccia intuitiva per scoprire nuove ricette, visualizzare ingredienti e istruzioni dettagliate, e filtrare le ricette in base alle preferenze alimentari.

## ✨ Caratteristiche

### 🗂️ Categorie di Ricette
- **Italiana** - Classici della cucina italiana
- **Quick & Easy** - Ricette veloci e semplici
- **Hamburgers** - Varie tipologie di hamburger
- **Tedesca** - Specialità della cucina tedesca
- **Light & Lovely** - Piatti leggeri e salutari
- **Esotica** - Sapori dal mondo
- **Colazione** - Idee per iniziare la giornata
- **Asiatica** - Cucina orientale
- **Francese** - Raffinatezza francese
- **Estiva** - Piatti freschi per l'estate

### 🍕 Ricette Incluse
L'app include 10 ricette complete con:
- **Spaghetti with Tomato Sauce** - Classico italiano semplice e veloce
- **Toast Hawaii** - Toast gourmet con ananas
- **Classic Hamburger** - Il perfetto hamburger americano
- **Wiener Schnitzel** - Specialità austriaca/tedesca
- **Salad with Smoked Salmon** - Insalata raffinata con salmone
- **Delicious Orange Mousse** - Dessert cremoso all'arancia
- **Pancakes** - Perfetti per la colazione
- **Creamy Indian Chicken Curry** - Curry piccante e cremoso
- **Chocolate Souffle** - Dessert francese sofisticato
- **Asparagus Salad with Cherry Tomatoes** - Insalata primaverile

### 📊 Informazioni Dettagliate
Ogni ricetta include:
- ⏱️ **Tempo di preparazione**
- 💰 **Livello di prezzo** (economico, costoso, lussuoso)
- 👨‍🍳 **Difficoltà** (semplice, medio, difficile)
- 🥗 **Filtri alimentari**:
  - Senza glutine
  - Vegano
  - Vegetariano
  - Senza lattosio
- 📝 **Lista ingredienti completa**
- 📋 **Istruzioni passo-passo**
- 🖼️ **Immagini delle ricette**

## 🚀 Installazione e Avvio

### Prerequisiti
- Node.js (versione 18 o superiore)
- Expo CLI
- Un dispositivo fisico o emulatore per iOS/Android

### Installazione
```bash
# Clona il repository
git clone <repository-url>
cd meals-app

# Installa le dipendenze
npm install

# Avvia l'app
npm start
```

### Comandi Disponibili
```bash
npm start          # Avvia Expo DevTools
npm run android    # Avvia su emulatore/dispositivo Android
npm run ios        # Avvia su simulatore/dispositivo iOS
npm run web        # Avvia versione web
```

## 🏗️ Struttura del Progetto

```
meals-app/
├── assets/                 # Risorse grafiche
│   ├── icon.png
│   ├── splash-icon.png
│   ├── favicon.png
│   └── adaptive-icon.png
├── data/
│   └── dummy-data.ts       # Dati delle categorie e ricette
├── models/
│   ├── category.ts         # Modello per le categorie
│   └── meal.ts            # Modello per le ricette
├── App.tsx                # Componente principale
├── app.json              # Configurazione Expo
├── package.json          # Dipendenze del progetto
└── tsconfig.json         # Configurazione TypeScript
```

## 🛠️ Tecnologie Utilizzate

- **React Native** (0.79.5) - Framework per app mobile
- **Expo** (~53.0.20) - Piattaforma di sviluppo
- **TypeScript** (~5.8.3) - Linguaggio di programmazione tipizzato
- **React** (19.0.0) - Libreria UI

## 📱 Compatibilità

- ✅ **iOS** - Supporta iPhone e iPad
- ✅ **Android** - Compatibile con Android 5.0+
- ✅ **Web** - Versione web responsive
- ✅ **Edge-to-Edge** - Design moderno su Android

## 🎨 Caratteristiche UI/UX

- **Interfaccia intuitiva** con navigazione semplice
- **Colori categorizzati** per una facile identificazione
- **Design responsive** per tutti i dispositivi
- **Immagini ad alta qualità** per ogni ricetta
- **Filtri intelligenti** per preferenze alimentari

## 🔄 Prossimi Sviluppi

- [ ] Implementazione della navigazione tra schermate
- [ ] Schermata dettaglio ricetta
- [ ] Funzionalità di ricerca
- [ ] Filtri avanzati
- [ ] Ricette preferite
- [ ] Lista della spesa
- [ ] Modalità dark/light
- [ ] Condivisione ricette

## 📄 Licenza

Questo progetto è privato e destinato solo a scopi di sviluppo.

## 🤝 Contributi

Per contribuire al progetto:
1. Fork del repository
2. Crea un branch per la tua feature
3. Commit delle modifiche
4. Push del branch
5. Apri una Pull Request

---

**Developed with ❤️ using React Native & Expo**