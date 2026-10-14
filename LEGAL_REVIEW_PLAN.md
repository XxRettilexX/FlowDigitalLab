# Piano di controllo legale del sito

Questo non è un parere legale. È la lista di cosa far verificare a un avvocato o a un consulente privacy, con i problemi che ho già trovato nel codice. I punti **[FIX]** si possono correggere subito. I punti **[AVV]** richiedono un professionista.

## Fase 0: dati che mancano (prima di tutto)

Nessuna pagina indica chi è il titolare del sito. Servono, nel footer e nelle pagine legali:

- Ragione sociale o nome e cognome del titolare, sede legale, P. IVA, codice fiscale, REA se società (obbligo informativo ex art. 7 D.Lgs. 70/2003).
- Indirizzo email e PEC.
- Forma giuridica: ditta individuale, freelance con P. IVA, società. Cambia il testo di privacy e termini.

**[YOU]** Mi servono questi dati per inserirli nel sito.

## Fase 1: privacy e GDPR

| # | Controllo | Stato nel codice |
|---|---|---|
| 1.1 | Informativa art. 13: titolare, finalità, base giuridica, tempi di conservazione, destinatari, diritto di reclamo al Garante | La [privacy policy](messages/it.json) non indica titolare, basi giuridiche, tempi di conservazione né il reclamo al Garante. **[FIX + AVV]** |
| 1.2 | Responsabili del trattamento | Il form invia i dati a Resend (USA) e alla casella Gmail indicata in [route.ts](src/app/api/contact/route.ts). Vanno citati, con la base per il trasferimento extra-UE (DPA e clausole contrattuali standard). **[AVV]** |
| 1.3 | Font di terze parti | Prima il CSS caricava Google Fonts da `fonts.googleapis.com`, che invia l'IP del visitatore a Google. **[FIX fatto]**: ora i font sono self-hosted con `next/font`. |
| 1.4 | Cookie e tracker | Nel codice non ci sono analytics né cookie di profilazione. `next-themes` salva il tema nel localStorage (tecnico). Se aggiungi Analytics, Meta Pixel o simili serve un banner di consenso. **[AVV]** conferma se per ora basta l'informativa. |
| 1.5 | Testo della privacy | Dice "cookie tecnici" per i dati di navigazione e "comunicazioni sui servizi (solo con consenso)". Il sito non raccoglie consenso marketing né iscrizioni newsletter. Va allineato a ciò che succede davvero. **[FIX]** |
| 1.6 | Checkbox privacy nel form | Presente, obbligatoria e non pre-spuntata. Nessuna azione. |
| 1.7 | Registro dei trattamenti e diritti degli interessati | Serve una procedura interna per rispondere entro 30 giorni. **[AVV]** |

## Fase 2: contenuti e promesse commerciali

| # | Controllo | Stato |
|---|---|---|
| 2.1 | Tempi di risposta coerenti | Il sito promette "entro 24 ore". L'email automatica in [route.ts](src/app/api/contact/route.ts) dice "24-48 ore lavorative". **[FIX]** allineare, sul valore che rispetti davvero. |
| 2.2 | Portfolio | **[FIX fatto]** I sei progetti d'esempio (Nova Studio, Radice Bio e gli altri) non erano lavori reali. Presentarli come clienti veri sarebbe una pratica commerciale scorretta (Codice del Consumo, artt. 20-23). Li ho rimossi: la pagina Progetti dice che il portfolio è in costruzione. Il testo proposto per privacy, cookie e termini è in [LEGAL_PROPOSAL.md](LEGAL_PROPOSAL.md). |
| 2.3 | Immagini | Verificare la licenza di ogni immagine (Unsplash e simili) e conservare le prove. Controllare `public/blog`. |
| 2.4 | Claim non provati | "Audit gratuito in 30 minuti", "preventivo gratuito": confermare che li offri davvero e a quali condizioni. |
| 2.5 | Blog | Fonti e diritti dei testi e delle immagini. Se usi testi generati con l'IA, controlla l'accuratezza. |
| 2.6 | Social | Il footer puntava a `linkedin.com` e `github.com` generici. **[FIX fatto]**: LinkedIn rimosso, GitHub punta a `github.com/flowdigitallab`. Aggiungi LinkedIn solo se hai una pagina. |

## Fase 3: termini e condizioni

| # | Controllo |
|---|---|
| 3.1 | Clienti consumatori o solo aziende? Se anche consumatori valgono recesso (14 giorni, art. 52 Codice del Consumo) e garanzie. I termini attuali non li citano. **[AVV]** |
| 3.2 | Clausole onerose (limitazione di responsabilità, foro, penali): ex art. 1341 c.c. richiedono approvazione specifica scritta. Oggi sono solo testo nel sito. **[AVV]** |
| 3.3 | Acconto 50% / saldo 50%, revisioni "2-3 round": coerenti con il sito (che dice 2) e con il preventivo-tipo. **[FIX]** |
| 3.4 | Proprietà intellettuale: cessione dopo il saldo, uso nel portfolio, componenti open source o di terzi nei deliverable. **[AVV]** |
| 3.5 | Foro competente: oggi "foro del domicilio di Flow Digital Lab" senza indicare la città. **[FIX]** |
| 3.6 | Contratto di servizio e preventivo-tipo firmabili (NDA, DPA se tratti dati dei clienti). **[AVV]** |

## Fase 4: obblighi tecnici e accessibilità

- Accessibilità: l'European Accessibility Act (in vigore dal 28 giugno 2025) riguarda e-commerce e servizi digitali, con esenzione per le microimprese di servizi. Verificare se il sito rientra. Intanto si può fare un audit WCAG 2.2 AA (contrasti, focus, tastiera, `aria`). **[AVV + tecnico]**
- Sicurezza: HTTPS, header di sicurezza, rate limit sull'API `/api/contact`, gestione della chiave `RESEND_API_KEY`. Oggi il fallback dell'email destinatario è un indirizzo Gmail personale scritto nel codice. **[FIX]** spostarlo in variabile d'ambiente obbligatoria.
- Telefono e WhatsApp: il numero compare nei dati strutturati e nel pulsante. Va citato nell'informativa se tratti i messaggi WhatsApp (Meta come responsabile o titolare autonomo).

## Ordine di lavoro

1. **Tu:** mi dai i dati della Fase 0 e confermi i punti 2.1, 2.2 e 2.4.
2. **Io:** inserisco i dati nel footer e nelle pagine legali, correggo i punti [FIX] (2.1, 1.5, 3.3, 3.5, sicurezza della route).
3. **Avvocato o consulente privacy:** rivede privacy, termini e punti [AVV], con questo documento come lista.
4. **Io:** applico le correzioni dell'avvocato e aggiorno la data "ultimo aggiornamento".
5. **Ogni 6 mesi o a ogni nuovo servizio, tracker o fornitore:** riverifica.
