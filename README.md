# Test Futur3

## Esercizio per Futur3 come da richieste PDF

É stato svolgo il livello base:
- Visualizzazione degli album fotografici
- Visualizzazionde delle foto contenute in esso
- Visualizzazione di una specifica foto
- Logica lato client

Sono presenti inoltre implementazioni come:
- Caching di 2 minuti
- Possibile cancellazione della cache tramite API
- Test
- API esposte
- Heroku

## Requisiti

Per la corretta esecuzione del software sono necessari:
- timed-cache (per la gestione della cache)
- http (per le richieste di dati)
- express (per la gestione del server)
- body-parser
- node-mocks-http
- jest (per i test)

Inoltre le pagine sono scritte con codice PHP quindi sarà necessario un web server.

## Funzionamento
Per motivi di tempo (mi sembra di aver capito che siate di fretta) non è stato implemtato totalmente heroku causa Cross-Origins.

Al primo avvio servirà più tempo affinchè Heroku si risvegli.

Per eseguire l'applicazione è necessario dare il comando <code>npm install</code> seguito da <code>npm start</code> e recarsi successivamente nella rispettiva pagina web definita dal proprio server installato.

Repo GitHub: https://github.com/iAndrea/futur3.git

App heroku: http://futur3test.herokuapp.com/

GitHub Pages: https://iandrea.github.io/futur3/index.html (non funzionare per CORS)

Per poter vedere con occhio il funzionamento del caching ho provveduto ad attuare una pratica che fa rallentare il caricamento della pagina degli album. Ad ogni album eseguo una richiesta al sito, in questo modo al primo avvio si noterà un caricamento di circa 8 album al secondo (molto lento), ma le volte successive troveremo i primi dati già precaricati, mentre proseguiranno le richieste per gli album più in basso.

## API esposte

Direttamente grazie ad Heroku è possibile testare 5 API:
- <code>multiGallery</code> per ottenere la lista di tutti gli album
- <code>gallery?id= X</code> per ottenere un singolo album
- <code>multiPhoto</code> per ottenere la lista di tutte le foto
- <code>photo?id= X</code> per ottenere una singola foto
- <code>cache</code> per pulire la cache

## Test

A scopo dimostrativo sono stati creati anche un paio di test tramite jest.
