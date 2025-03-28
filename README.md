# Projekt-Dokumentation
## Portfolio Website

| Datum | Version | Zusammenfassung                                              |
| ----- | ------- | ------------------------------------------------------------ |
|28.03.2025| 0.0.1   | ✍️ Jedes Mal, wenn Sie an dem Projekt arbeiten, fügen Sie hier eine neue Zeile ein und beschreiben in *einem* Satz, was Sie erreicht haben. |
|       | ...     |                                                              |
|       | 1.0.0   |                                                              |

## 1 Informieren

### 1.1 Ihr Projekt

Mein Projekt besteht darin eine Portfolio Website für mich selber zu erstellen, diese Website hat den nutzen sie zu einem späteren Zeitpunkt meinen Praktikumsbewerbungen beizulegen. Die Website sollte mit React entwickelt werden.

### 1.2 User Stories

| US-№ | Priorität | Typ  | Beschreibung                       |
| ---- | --------------- | ---- | ---------------------------------- |
| 1    | Muss | Funktional | Als Besucher möchte ich, die Website mit einem Link aufrufen können. |
| 2    | Muss | Funktional | Als Besucher möchte ich auf der Website mindestens eine klare und sichtbare Möglichkeit finden, um mit der Person in Kontakt zu treten (Kontaktformular, E-Mail-Adresse). |
| 3    | Muss | Funktional | Als Besucher möchte ich eine klare und intuitive Navigation haben, die mir hilft, die gesuchten Informationen schnell zu finden. Die Navigation soll auf allen Seiten konsistent sein, logisch strukturiert und einfach zu bedienen sein. | 
| 4    | Kann | Funktional | Als Besucher möchte ich die Website in verschiedenen Sprachen anzeigen können. (Deutsch, Englisch) |
| 5    | Muss | Qualität | Als Besucher möchte ich, dass die Website auf allen gängigen Geräten (Desktop, Tablet, Smartphone) und Browsern korrekt und ansprechend dargestellt wird. |
| 6    | Soll | Inhalt | Als Besucher möchte ich, einen visuellen Überblick über die Fähigkeiten und Kenntnisse der Person bekommen. |
| 7    | Soll | Inhalt | Als Besucher möchte ich eine Auswahl von Projekten sehen, an denen die Person gearbeitet hat, mit Beschreibungen, Bildern/Videos und Informationen zu den verwendeten Technologien. |
| 8    | Soll | Inhalt | Als Besucher möchte ich, mehr über die Erfahrungen und die Persöhnlichkeit der Person erfahren. |
| 9   | Soll | Inhalt | Als Besucher möchte ich Links zu Social-Media-Profilen (LinkedIn, GitHub) haben. |
| 10   | Kann | Design | Als Besucher möchte ich, dass die Website ein professionelles, modernes und benutzerfreundliches Design hat, das die Kompetenz und Erfahrung der Person wiederspiegelt. |
| 12   | Kann | Design | Als Besucher möchte ich, dass die Website an den richtigen Stellen sanfte Animationen und Übergänge verwendet, um die Benutzerfreundlichkeit zu verbessern. |
| 12   | Kann | Barrierefreiheit | Als Besucher mit Einschränkungen (z.B. Sehbehinderung, motorische Einschränkung) möchte ich die Website problemlos nutzen können. Die Website soll die Richtlinien für Barrierefreiheit (WCAG 2.2) erfüllen. |



### 1.3 Testfälle

| TC-№ | Ausgangslage | Eingabe | Erwartete Ausgabe |
| ---- | ------------ | ------- | ----------------- |
| 1.1  | Browser geöffnet | Die URL der Website in die Adressleiste eingeben | Die Website wird korrekt geladen und angezeigt. |
| 2.1  | Website aufgerufen | Auf der Website nach Kontaktmöglichkeiten suchen. | Mindestens eine Kontaktmöglichkeit ist klar und sichtbar vorhanden: entweder ein Kontaktformular oder eine E-Mail-Adresse. |
| 2.2  | Kontaktformular gefunden | Kontaktformular ausfüllen und absenden. | Das Formular wird erfolgreich versendet und eine Bestätigungsmeldung wird angezeigt. |
| 2.3  | E-Mail-Adresse gefunden | Auf die E-Mail-Adresse klicken | Der Standard-E-Mail-Client des Nutzers öffnet sich mit einer neuen E-Mail, in der die E-Mail-Adresse des Empfängers bereits eingetragen ist. |
| 3.1  | Website aufgerufen | Durch die Navigation der Website klicken (Menüpunkte, Links) | Die Navigation ist auf allen Seiten konsistent, logisch strukturiert und einfach zu bedienen. Alle Menüpunkte und Links führen zu den korrekten Zielen. |
| 4.1  | Website aufgerufen | Die Sprachauswahl nutzen und "Deutsch" auswählen | Die Website wird korrekt in deutscher Sprache angezeigt. Alle Texte, Menüs und Bedienelemente sind in Deutsch. |
| 4.2  | Website aufgerufen | Die Sprachauswahl nutzen und "English" auswählen | Die Website wird korrekt in englisch angezeigt. Alle Texte, Menüs und Bedienelemente sind in Englisch. |
| 5.1  | - | Die Website auf verschiedenen Geräten und Browsern aufrufen | Die Website lädt schnell (innerhalb von 2 Sekunden) und wird auf allen Geräten und Browsern korrekt und ansprechend dargestellt. |
| 5.2  | Die Website auf verschiedenen Geräten und Browsern aufrufen | Durch die Website navigieren und verschiedene Aktionen ausführen. | Die Website funktioniert fehlerfrei und alle Funktionen sind einwandfrei nutzbar. |
| 6.1  | Website aufgerufen | Den Abschnitt "Skills" aufrufen. | Die wichtigsten Kenntnisse der Person werden visuell dargestellt. |
| 7.1  | Website aufgerufen | Den Abschnitt "Projekte" aufrufen. | Eine Auswahl von Projekten werden angezeigt. |
| 7.2  | Abschnitt Projekte wurde aufgerufen. | Ein einzelnes Projekt wurde ausgewählt. | Es kommt eine Detailansicht für das Projekt welche mehr Informationen anzeigt. |
| 8.1  | Website aufgerufen | Den Abschnitt "Über mich" aufrufen. | Informationen zur Person werden angezeigt. |
| 9.1  | Website aufgerufen | Nach Links zu Social-Media-Profilen oder anderen relevanten Websites suchen. | Links zu den entsprechenden Profilen oder Websites sind vorhanden und funktionieren. |
| 10.1 | - | Die Website auf verschiedenen Geräten und Browsern aufrufen. | Die Website hat ein ansprechendes, modernes und benutzerfreundliches Design, das die Kompetenz und Erfahrung der Person wiederspiegeln.|
| 10.2 | Website aufgerufen | Durch die Website navigieren und verschiedene Aktionen ausführen. | Das Design ist konsistent.|
| 11.1 | Website aufgerufen | Durch die Website navigieren und verschiedene Aktionen ausführen. | Sanfte Animationen und Übergänge verbessern die Benutzerfreundlichkeit. |
| 12.1 | Website aufgerufen | Die Website mit verschiedenen Hilfsmitteln (z.B. Screenreader, Tastaturnavigation) verwenden. | Die Website ist für Benutzer mit Einschränkungen problemlos nutzbar und erfüllt die Richtlinien für Barrierefreiheit. |



## 2 Planen

| AP-№ | Frist | Zuständig | Beschreibung | geplante Zeit |
| ---- | ----- | --------- | ------------ | ------------- |
| 1.A  |       |           |              |               |
| ...  |       |           |              |               |

Total: 

✍️ Die Nummer hat das Format `N.m`, wobei `N` die Nummer der User Story ist, auf die sich das Arbeitspaket bezieht, und `m` von `A` an nach oben buchstabiert. Beispiel: Das dritte Arbeitspaket, das die zweite User Story betrifft, hat also die Nummer `2.C`.

✍️ Ein Arbeitspaket sollte etwa 45' für eine Person in Anspruch nehmen. Die totale Anzahl Arbeitspakete sollte etwa Folgendem entsprechen: `Anzahl R-Sitzungen` ╳ `Anzahl Gruppenmitglieder` ╳ `4`. Wenn Sie also zu dritt an einem Projekt arbeiten, für welches zwei R-Sitzungen geplant sind, sollten Sie auf `2` ╳ `3` ╳`4` = `24` Arbeitspakete kommen. Sollten Sie merken, dass Sie hier nicht genügend Arbeitspakte haben, denken Sie sich weitere "Kann"-User Stories für Kapitel 1.2 aus.

## 3 Entscheiden

✍️ Dokumentieren Sie hier Ihre Entscheidungen und Annahmen, die Sie im Bezug auf Ihre User Stories und die Implementierung getroffen haben.

## 4 Realisieren

| AP-№ | Datum | Zuständig | geplante Zeit | tatsächliche Zeit |
| ---- | ----- | --------- | ------------- | ----------------- |
| 1.A  |       |           |               |                   |
| ...  |       |           |               |                   |

✍️ Tragen Sie jedes Mal, wenn Sie ein Arbeitspaket abschließen, hier ein, wie lang Sie effektiv dafür hatten.

## 5 Kontrollieren

### 5.1 Testprotokoll

| TC-№ | Datum | Resultat | Tester |
| ---- | ----- | -------- | ------ |
| 1.1  |       |          |        |
| ...  |       |          |        |

✍️ Vergessen Sie nicht, ein Fazit hinzuzufügen, welches das Test-Ergebnis einordnet.

### 5.2 Exploratives Testen

| BR-№ | Ausgangslage | Eingabe | Erwartete Ausgabe | Tatsächliche Ausgabe |
| ---- | ------------ | ------- | ----------------- | -------------------- |
| I    |              |         |                   |                      |
| ...  |              |         |                   |                      |

✍️ Verwenden Sie römische Ziffern für Ihre Bug Reports, also I, II, III, IV etc.

## 6 Auswerten

✍️ Fügen Sie hier eine Verknüpfung zu Ihrem Lern-Bericht ein.
