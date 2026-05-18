# Guia de Configuració de l'Automatització del Blog

Aquest projecte ara inclou un sistema automàtic per generar esborranys d'articles cada dilluns a les 09:00 AM. 

Perquè funcioni, has de configurar els següents **Secrets** al teu repositori de GitHub:

## Com afegir els Secrets a GitHub
1. Ves al teu repositori a GitHub.
2. Clica a **Settings** -> **Secrets and variables** -> **Actions**.
3. Clica a **New repository secret** per a cada un dels següents:

### 1. `GEMINI_API_KEY`
*   **Què és**: La clau per utilitzar la IA de Google (gratuïta).
*   **Com aconseguir-la**: Ves a [Google AI Studio](https://aistudio.google.com/app/apikey) i crea una API Key.

### 2. `SANITY_AUTH_TOKEN`
*   **Què és**: El permís perquè l'script pugui crear documents a Sanity.
*   **Com aconseguir-lo**: 
    1. Ves a [manage.sanity.io](https://manage.sanity.io/).
    2. Selecciona el teu projecte.
    3. Ves a **API** -> **Tokens**.
    4. Clica **Add new token**, posa-li un nom (ex: "GitHub Action") i selecciona el rol **Editor**.

### 3. `TELEGRAM_BOT_TOKEN`
*   **Què és**: El codi del teu bot de Telegram.
*   **Com aconseguir-lo**: 
    1. Busca `@BotFather` a Telegram.
    2. Envia `/newbot` i segueix les instruccions.
    3. Et donarà un token tipus `123456:ABC-DEF...`.

### 4. `TELEGRAM_CHAT_ID`
*   **Què és**: El teu ID d'usuari per rebre la notificació.
*   **Com aconseguir-lo**: 
    1. Busca `@userinfobot` a Telegram.
    2. Envia-li qualsevol cosa i et respondrà amb el teu `Id` (sol ser un número de 9-10 xifres).

---

## Verificació Manual
Si vols provar si funciona abans del dilluns:
1. Ves a la pestanya **Actions** del teu repositori a GitHub.
2. Selecciona **Weekly Automated Blog Draft** a la columna de l'esquerra.
3. Clica el botó desplegable **Run workflow** i després el botó verd **Run workflow**.

Això forçarà la creació d'un esborrany immediatament.
