# Proposta di modifica: Privacy, Cookie, Termini e Condizioni

Bozza non applicata al sito. Non è un parere legale: va fatta rivedere da un avvocato o da un consulente privacy prima della pubblicazione. Descrive solo ciò che il sito fa oggi. Se aggiungi analytics, newsletter, pixel o altri fornitori, i testi vanno aggiornati.

Segnaposto da compilare: **[TITOLARE]** nome e cognome o ragione sociale, **[SEDE]** indirizzo, **[PIVA]** partita IVA, **[CF]** codice fiscale, **[PEC]**, **[HOSTING]** fornitore di hosting, **[CITTÀ]** foro competente.

## Cosa fa il sito oggi (base dei testi)

| Elemento | Fatto verificato nel codice |
|---|---|
| Form di contatto | Raccoglie nome, email e messaggio, più il consenso alla privacy (checkbox non pre-spuntata). I dati vanno via email al titolare tramite Resend e partono due messaggi: uno al titolare, uno di conferma al visitatore. |
| Dati tecnici | Il fornitore di hosting registra indirizzo IP e richieste nei log di server. Fornitore da indicare **[HOSTING]**. |
| Tema chiaro/scuro | `next-themes` salva la scelta nel `localStorage` del browser. Non esce dal dispositivo. |
| Lingua | Il middleware `next-intl` può salvare la lingua scelta in un cookie di preferenza (`NEXT_LOCALE`). **Da verificare nel browser** prima di dichiararlo. |
| Font | Self-hosted. Nessuna chiamata a Google Fonts. |
| Analytics, pixel, pubblicità | Nessuno. |
| Link esterni | WhatsApp (`wa.me`), Instagram, GitHub. Il trattamento avviene solo se il visitatore clicca. |
| Portfolio | Nessun lavoro pubblicato. I progetti inventati sono stati rimossi. |

## 1. Privacy Policy (testo proposto)

**Titolare del trattamento.** [TITOLARE], [SEDE], P. IVA [PIVA], C.F. [CF]. Contatti: info@flowdigitallab.it, PEC [PEC].

**Quali dati trattiamo e perché**

| Dati | Finalità | Base giuridica | Conservazione |
|---|---|---|---|
| Nome, email, testo del messaggio (form di contatto) | Rispondere alla tua richiesta e preparare un preventivo | Misure precontrattuali richieste da te (art. 6.1.b GDPR) | **[N mesi]** dall'ultimo contatto se non nasce un contratto. Se nasce un contratto, per la sua durata e poi 10 anni per obblighi fiscali. |
| Indirizzo IP e dati tecnici di navigazione (log di server) | Sicurezza e funzionamento del sito | Legittimo interesse (art. 6.1.f) | **[N giorni]**, secondo il fornitore di hosting |
| Numero di telefono e messaggi WhatsApp, se ci scrivi | Rispondere alla tua richiesta | Misure precontrattuali (art. 6.1.b) | Come per i messaggi del form |

Il conferimento dei dati del form è facoltativo. Senza nome, email e messaggio non possiamo risponderti.

**Con chi condividiamo i dati.** Con fornitori che trattano i dati per nostro conto: Resend (invio email), [HOSTING] (hosting del sito) e Meta/WhatsApp se ci scrivi lì. Non vendiamo i tuoi dati e non li usiamo per pubblicità.

**Trasferimento fuori dall'UE.** Alcuni fornitori hanno sede negli Stati Uniti. Il trasferimento avviene con le clausole contrattuali standard della Commissione europea o con la certificazione EU-US Data Privacy Framework, secondo il fornitore **[AVV: verificare per ogni fornitore]**.

**I tuoi diritti.** Puoi chiedere accesso, rettifica, cancellazione, limitazione, portabilità e opporti al trattamento scrivendo a info@flowdigitallab.it. Rispondiamo entro 30 giorni. Puoi anche proporre reclamo al Garante per la protezione dei dati personali (garanteprivacy.it).

**Modifiche.** Aggiorniamo questa pagina quando cambia il trattamento e indichiamo la data dell'ultimo aggiornamento.

**Cosa togliere dal testo attuale:** "comunicazioni relative ai nostri servizi (solo con il tuo consenso)", "migliorare l'esperienza di navigazione" e "backup regolari e sistemi di protezione aggiornati". Descrivono trattamenti o misure che il sito non ha o non documenta.

## 2. Cookie Policy (pagina nuova)

Il sito non usa cookie di profilazione né cookie di terze parti, quindi oggi non serve un banner di consenso. Serve però un'informativa breve, che si può inglobare nella privacy o tenere in una pagina `/cookie`.

> **Cookie e tecnologie simili.** Questo sito usa solo strumenti tecnici, necessari al funzionamento o richiesti da te. Non richiedono consenso (art. 122 Codice Privacy).
>
> | Nome | Cosa fa | Durata |
> |---|---|---|
> | Preferenza di tema (`theme`, localStorage) | Ricorda se preferisci tema chiaro o scuro | Finché non la cancelli dal browser |
> | `NEXT_LOCALE` (cookie) **[verificare]** | Ricorda la lingua scelta | **[durata effettiva]** |
>
> Non usiamo analytics, pixel pubblicitari né cookie di profilazione. Se in futuro li aggiungeremo, ti chiederemo il consenso prima di attivarli.
>
> Cliccando i link a WhatsApp, Instagram o GitHub lasci questo sito: da quel momento valgono le informative di quei servizi.

Quando aggiungi Google Analytics, Meta Pixel o simili: serve un banner con "Accetta", "Rifiuta" e "Personalizza" con pari evidenza, e nessuno script attivo prima del consenso **[AVV]**.

## 3. Termini e Condizioni (modifiche proposte)

| Sezione | Problema oggi | Proposta |
|---|---|---|
| Identificazione | Nessun dato del titolare | Aggiungere [TITOLARE], [SEDE], [PIVA], [PEC] in apertura. |
| 1. Accettazione | "ti preghiamo di non utilizzare i servizi" | Spiegare che il sito è informativo e che il contratto nasce con l'accettazione scritta del preventivo. |
| Clienti | Non distingue consumatori e imprese | Dichiarare che i servizi sono rivolti a professionisti e imprese **[YOU: confermi?]**. Se accetti anche consumatori, aggiungere recesso di 14 giorni e garanzie di legge **[AVV]**. |
| 2. Servizi | Elenca "Web Design & Development, Branding, Digital Strategy" | Allineare ai nomi del sito: siti web, brand identity, strategia digitale. |
| 3. Pagamenti | 50% acconto, 50% alla consegna | Va bene. Aggiungere i giorni di pagamento della fattura e gli interessi di mora (D.Lgs. 231/2002) **[AVV]**. |
| 4. Revisioni | "2-3 round" | Scrivere "due round di revisioni, come indicato nel preventivo". Il sito promette 2. |
| 5. Proprietà intellettuale | Portfolio: "ci riserviamo il diritto di usare i lavori nel portfolio" | Va bene, ma si applica solo dopo la pubblicazione del primo lavoro e con consenso del cliente per nome e logo. Aggiungere la licenza dei componenti di terzi e open source. |
| 6. Responsabilità | Limite al totale pagato | Mantenere. Le clausole che limitano la responsabilità e fissano il foro vanno approvate specificamente per iscritto (art. 1341 c.c.), quindi vanno spostate nel preventivo firmato **[AVV]**. |
| 7. Legge e foro | "Foro di competenza del domicilio" senza città | Scrivere "Foro di [CITTÀ]". Se il cliente è consumatore il foro è il suo e questa clausola non vale. |

## 4. Altre correzioni collegate

1. **Portfolio inventato: già tolto.** I sei progetti d'esempio sono stati rimossi. La pagina Progetti ora dice che il portfolio è in costruzione. I Termini devono dire "completati" solo quando esistono lavori veri.
2. **Tempo di risposta.** Il sito dice "entro 24 ore", l'email automatica dice "24-48 ore lavorative". Scegli il valore che rispetti.
3. **Email destinatario.** Il fallback nel codice è un indirizzo Gmail personale. Va sostituito con una variabile d'ambiente obbligatoria.
4. **Footer.** Aggiungere riga con [TITOLARE], P. IVA [PIVA], sede e link a Privacy, Cookie e Termini.
5. **Open source.** La sezione "Il nostro codice è su GitHub" richiede che l'organizzazione `github.com/flowdigitallab` esista e abbia repository pubblici **[YOU: confermi?]**. Altrimenti va tolta.

## Prossimi passi

1. Compili i segnaposto ([TITOLARE], [SEDE], [PIVA], [CF], [PEC], [HOSTING], [CITTÀ]) e rispondi alle conferme [YOU].
2. Verifico nel browser quali cookie e voci di storage il sito imposta davvero, e completo la tabella cookie.
3. Un avvocato o consulente privacy rivede questo documento e i punti [AVV].
4. Applico i testi approvati in italiano e inglese ([messages/it.json](messages/it.json), [messages/en.json](messages/en.json)) e aggiungo la pagina Cookie.
