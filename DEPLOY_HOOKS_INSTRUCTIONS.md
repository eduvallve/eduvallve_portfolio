# Automatització de Deployments (Sanity + Vercel)

Aquestes instruccions t'ajudaran a configurar el sistema perquè el teu **sitemap.xml** es regeneri automàticament cada cop que publiquis un nou article al blog.

## 1. Configurar el Deploy Hook a Vercel
Primer hem de crear una URL especial a Vercel que, quan rebi una petició, iniciï un nou desplegament (build).

1. Entra al teu panell de **Vercel**.
2. Ves a **Settings** -> **Git**.
3. Baixa fins a la secció **Deploy Hooks**.
4. Posa-li un nom (per exemple: `Sanity Content Update`).
5. Tria la branca `main` (o la que tinguis per a producció).
6. Fes clic a **Create**.
7. **Copia la URL** que t'ha generat (serà una cosa tipus `https://api.vercel.com/v1/integrations/deploy/prj_...`).

## 2. Configurar el Webhook a Sanity
Ara hem de dir-li a Sanity que cridi aquesta URL quan publiquis contingut.

1. Entra al teu projecte a [sanity.io/manage](https://www.sanity.io/manage).
2. Ves a la pestanya **API** -> **Webhooks**.
3. Fes clic a **Create new webhook**.
4. Omple les dades:
   - **Name**: `Vercel Deploy Hook`.
   - **URL**: Enganxa la URL que has copiat de Vercel.
   - **Dataset**: `production`.
   - **Trigger on**: Tria `Create`, `Update` i `Delete`.
   - **Filter**: `_type == "post"` (així només es farà un deploy quan canviï el blog, no per qualsevol canvi menor).
   - **Projection**: Pots deixar-ho buit o posar `{_id}`.
   - **Status**: `Enabled`.
5. Fes clic a **Save**.

## 3. Comprovar que funciona
1. Ves al teu Sanity Studio.
2. Publica un nou article (o edita'n un d'existent).
3. Ves a Vercel: hauries de veure que s'ha iniciat un nou **Deployment** automàticament amb el missatge "Deploy Hook".
4. Un cop acabi el build, el teu `sitemap.xml` estarà actualitzat amb el nou contingut.

---
**Nota:** Aquest procés triga el que trigui el teu build de Vercel (normalment entre 1 i 3 minuts). Durant aquest temps, el web seguirà funcionant amb la versió anterior.
