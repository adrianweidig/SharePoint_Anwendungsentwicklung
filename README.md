# Anwendungsentwicklung mit SharePoint 2019 (On-Premise und Online)

## Vergleich: SharePoint 2019 On-Premise vs. SharePoint Online

| **Inhalte / Themen**                                                            | **SharePoint 2019 On-Premise**                  | **SharePoint Online**                            |
|----------------------------------------------------------------------------------|-------------------------------------------------|-------------------------------------------------|
| **Vorstellung der Anwendungsgrundsätze für SharePoint 2019**                     | ✔️                                              | ✔️                                              |
| **Überblick über SharePoint APIs (REST/OData und CSOM/JASOM)**                    | ✔️ (REST/OData, CSOM)                           | ✔️ (REST/OData, CSOM)                           |
| **JavaScript Bibliotheken und Frameworks als Entwicklungsgrundlage**             | ✔️                                              | ✔️                                              |
| **Verwendung SharePoint Frameworks (SPFx) im Überblick**                          | ❌ (Nicht unterstützt)                         | ✔️                                              |
| **Umgang und Entwicklung mit Visual Studio oder ähnlicher Technologien**          | ✔️                                              | ✔️                                              |
| **Anpassung des Funktionsumfangs der SharePoint Umgebung über JavaScript Injektionen** | ✔️                                              | ✔️                                              |
| **Datenabfragen mit den unterschiedlichen Modellen**                              | ✔️ (REST/OData, CSOM)                           | ✔️ (REST/OData, CSOM)                           |
| **SharePoint Apps entwickeln und bereitstellen**                                 | ✔️                                              | ✔️                                              |
| **Webparts entwickeln und bereitstellen**                                        | ✔️                                              | ✔️                                              |
| **Workflows entwickeln und einbinden**                                           | ✔️ (SharePoint Designer, Visual Studio)         | ✔️ (Power Automate, Visual Studio)              |

**Legende:**
- ✔️: Unterstützt
- ❌: Nicht unterstützt

**Wichtige Aspekte:**

- **SharePoint Framework (SPFx):** SPFx ist offiziell nicht unterstützt in SharePoint 2019 On-Premise. Es ist jedoch möglich, SPFx-Komponenten mit **PnPjs** zu integrieren, was zusätzliche Konfigurationen und Anpassungen erfordert. Die Verwendung von SPFx in On-Premise-Umgebungen kann technische Herausforderungen mit sich bringen.

- **PnPjs:** Mit **PnPjs** können SPFx-Webparts in SharePoint 2019 On-Premise verwendet werden. Es wird empfohlen, diese Bibliothek für die Interaktion mit SharePoint-Daten zu nutzen. Weitere Informationen finden Sie in den folgenden Ressourcen:
   - [Guidance for using PnPjs with SPFx Web Parts](https://learn.microsoft.com/en-us/sharepoint/dev/spfx/web-parts/guidance/use-sp-pnp-js-with-spfx-web-parts)
   - [PnPjs für SPFx On-Premises](https://pnp.github.io/pnpjs/SPFx-on-premises/)
   - [Getting Started with PnPjs](https://pnp.github.io/pnpjs/getting-started/#getting-started-with-sharepoint-framework)

---

## Voraussetzungen

- Visual Studio muss auf dem SharePoint Server selbst installiert sein.
- SharePoint Server 2019 muss auf einem Windows Server installiert und konfiguriert sein, sodass eine erste Webseite verfügbar ist.

---

## Erstellen und Debuggen einer SharePoint WebPart / Features via Visual Studio

1. **Visual Studio als Administrator starten:**
   - Rechtsklick auf das Visual Studio-Symbol und "Als Administrator ausführen" wählen.

2. **Leeres SharePoint-Projekt erstellen:**
   - In Visual Studio: Datei > Neues Projekt > SharePoint-Lösungen > SharePoint 2019 leeres Projekt (C#) auswählen.
   - Einen Namen und Speicherort für das Projekt festlegen und auf "Erstellen" klicken.

3. **SharePoint-Verbindungsoptionen:**
   - Die URL Ihrer SharePoint-Entwicklerseite eingeben. Falls noch keine Entwicklerseite existiert, erstellen Sie eine neue Websitesammlung mit einer Entwicklerwebseite als Template.
   - "OK" klicken und das Projekt wird erstellt.

4. **Ordnerstruktur im Projekt:**
   - Erstellen Sie ggf. einen neuen Ordner im Projektmappen-Explorer, um Ihre Elemente zu organisieren.
   - Rechtsklick auf den Projektnamen > Hinzufügen > Neuer Ordner.

5. **Webpart hinzufügen:**
   - Rechtsklick auf den neu erstellten Ordner > Hinzufügen > Neues Element > Webpart auswählen (nur Webpart).
   - Falls "Visual Webpart" gewählt wird, wird eine HTML / ASCX Datei für die Oberfläche erstellt.

6. **Feature hinzufügen:**
   - Rechtsklick auf den Ordner "Features" > Hinzufügen > Neue Funktion.
   - In der Feature-Ansicht (Doppelklick auf das Feature) können Sie die Elemente aus der Projektmappe zum Feature hinzufügen.
   - **Wichtig:** Damit die aktuellen WebParts ersichtlich sind, muss beim Feature als Bereich "Site" ausgewählt werden (da WebParts hier ansässig sind).

---

## Visual Webpart Designer Ansicht

1. **Ansicht öffnen:**
   - Klicken Sie auf "Ansicht" > "Toolbox", um die Toolbox zu öffnen.

2. **Designer-Modus aktivieren:**
   - Rechtsklick auf die .ascx-Datei des Visual Webparts und "Ansicht-Designer" auswählen.
   - Dies ermöglicht eine grafische Bearbeitung und das Hinzufügen von Elementen aus der Toolbox per Drag & Drop.

3. **Toolbox verwenden:**
   - Ziehen Sie die gewünschten Elemente aus der Toolbox in den Designer und ordnen Sie diese nach Bedarf an.

---

## Erstellen und Debuggen einer SharePoint App (Add-In) via Visual Studio

1. **Visual Studio als Administrator starten:**
   - Rechtsklick auf das Visual Studio-Symbol und "Als Administrator ausführen" wählen.

2. **Neues SharePoint Add-In Projekt erstellen:**
   - In Visual Studio: Datei > Neues Projekt > SharePoint > SharePoint Add-in auswählen.
   - Einen Namen und Speicherort für das Projekt festlegen und auf "Erstellen" klicken.

3. **Add-In hinzufügen:**
   - Fügen Sie Add-In-spezifische Komponenten wie Webparts, Listen oder Seiten hinzu.
   - Dies kann über den "Add New Item"-Dialog in Visual Studio erfolgen.

4. **Add-In bereitstellen:**
   - Rechtsklick auf das Projekt im Projektmappen-Explorer > Bereitstellen > Add-In bereitstellen.
   - Visual Studio wird das Add-In auf die SharePoint-Website hochladen.

5. **Debugging:**
   - Setzen Sie Breakpoints in Ihrem Code.
   - Starten Sie das Debugging durch Drücken von F5.
   - Visual Studio wird das Add-In auf SharePoint bereitstellen und eine Debugging-Sitzung starten.

6. **Testen:**
   - Navigieren Sie zur SharePoint-Seite und testen Sie das neue Add-In.
   - Dazu: Seite bearbeiten > Einfügen > App > Ihre App auswählen.
   - Sobald es über Visual Studio bereitgestellt ist, kann das Add-In direkt auf der SharePoint-Seite verwendet werden.

   - **Achtung:** Es kann vorkommen, dass es zu Berechtigungsproblemen kommt oder das Add-In nicht korrekt geladen wird. Überprüfen Sie die Berechtigungen und stellen Sie sicher, dass das Add-In korrekt konfiguriert ist.

---

## Tipps und Tricks

- **Fehlerhafte Webparts:** Sollten fehlerhafte Webparts auf der Seite sein, bietet es sich an, den Quellcode-Editor der Seite zu öffnen und den entsprechenden Quellcode-Anteil zu löschen.

- **Dateinamenskonflikte:** Sollte die Funktion nicht gefunden werden, hat die `.ascx.g.cs` Datei möglicherweise den Namen `...UserControls` geändert. Dies muss entfernt werden.

- **Globale Deklarationen vermeiden:** Keine Elemente wie `GridView`, `Buttons` o.ä. global deklarieren, da diese in der `.ascx.g.cs` Datei automatisch generiert werden. Bei Problemen die `.ascx.g.cs` Datei löschen und auf die `.ascx` Datei rechtsklicken und auf "Benutzerdefiniertes Tool ausführen" klicken. Bei der `.ascx` Datei sollte `SharePointWebPartCodeGenerator` als benutzerdefiniertes Tool deklariert sein.

- **Namenskonflikte lösen:** Die `.ascx.g.cs` Datei benennt die Klassen meist falsch und hängt `...UserControls` an den Klassennamen an, wodurch die Dateien nicht mehr gefunden werden können. Dies muss in der `.ascx.g.cs` Datei auf den Namen der `.cs` Datei geändert werden. (Kurz: Namenskonflikte auflösen, damit `InitializeControl` gefunden werden kann.)

---

## Weiterführende Ressourcen

- [Microsoft SharePoint Dokumentation](https://docs.microsoft.com/de-de/sharepoint/dev/)
- [Visual Studio SharePoint Entwicklung](https://docs.microsoft.com/de-de/visualstudio/sharepoint/sharepoint-development-in-visual-studio)
- [SharePoint 2019 Entwicklungsguide](https://docs.microsoft.com/de-de/sharepoint/dev/general-development/sharepoint-2019-development-platform)
