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

# Anleitung zur Entwicklung mit SharePoint Framework (SPFx) 2019

Diese Anleitung führt Sie durch die Installation der benötigten Tools und die Konfiguration Ihrer Entwicklungsumgebung für SharePoint Framework (SPFx) 2019.

## Vorbereitung der IDE für die SPFx-Entwicklung

1. **Visual Studio Code installieren:**
   - Laden Sie Visual Studio Code von der offiziellen Website herunter: [Visual Studio Code](https://code.visualstudio.com/).
   - Installieren Sie Visual Studio Code auf Ihrem System.

2. **Node.js und NVM installieren:**
   - **NVM für Windows herunterladen:**
      - Laden Sie die [nvm-noinstall.zip](https://github.com/coreybutler/nvm-windows/releases) herunter und entpacken Sie sie in ein Verzeichnis Ihrer Wahl.
      - Öffnen Sie eine Administrator-Powershell und navigieren Sie zu diesem Verzeichnis.
      - Führen Sie `nvm-setup.exe` aus, um `nvm` zu installieren.
   - **Node.js Version 14.17.1 installieren:**
      - Öffnen Sie eine Administrator-Powershell und führen Sie die folgenden Befehle aus:

        ```bash
        nvm install 14.17.1
        nvm use 14.17.1
        ```

      - Überprüfen Sie die Node.js-Version:

        ```bash
        node -v
        ```

   **Hinweis:** NVM sollte immer über eine Administrator-Powershell gestartet werden, um Probleme bei der Pfadfindung und Berechtigungen zu vermeiden.

3. **Globale npm-Tools installieren:**
   - Öffnen Sie ein Terminal oder eine Eingabeaufforderung.
   - Führen Sie die folgenden Befehle aus, um die benötigten Tools zu installieren:

     ```bash
     npm install gulp-cli@2.3.0 --global --force
     npm install yo@2.0.6 --global --force
     npm install @microsoft/generator-sharepoint@1.10.0 --global --force
     ```

   **Warnhinweis:** Die Verwendung des Flags `--force` bei der Installation von npm-Paketen überschreibt möglicherweise bereits vorhandene Versionen der Bibliotheken. Dies kann zu Konflikten führen, wenn andere Projekte unterschiedliche Versionen dieser Pakete benötigen. Aktualisieren Sie bei Projektwechsel die Pakete entsprechend.

4. **Visual Studio Code Erweiterungen installieren:**
   - Öffnen Sie Visual Studio Code.
   - Installieren Sie die folgenden empfohlenen Erweiterungen:
      - **ESLint:** Sucht nach Fehlern in Ihrem JavaScript-Code.
      - **Prettier - Code formatter:** Formatiert Ihren Code automatisch.
      - **SPFx Snippets:** Bietet nützliche Code-Snippets für SPFx.
      - **npm:** Unterstützt die Arbeit mit npm-Paketen.
      - **Debugger for Chrome:** Ermöglicht das Debuggen von JavaScript-Code in Google Chrome.

## Erstellen eines neuen SPFx-Projekts

1. **Erstellen eines Projektverzeichnisses:**
   - Öffnen Sie ein Terminal oder eine Eingabeaufforderung.
   - Erstellen Sie ein neues Verzeichnis und navigieren Sie in dieses:

     ```bash
     mkdir spfx-webpart
     cd spfx-webpart
     ```

2. **Yeoman Generator ausführen:**
   - Führen Sie den SharePoint Framework Yeoman Generator aus:

     ```bash
     yo @microsoft/sharepoint
     ```

   - Beantworten Sie die folgenden Fragen des Generators:

     ```
     ? What is your solution name? 04-sp-fx-share-point-framework
     ? Which baseline packages do you want to target for your component(s)? SharePoint 2019 onwards, including SharePoint Online
     ? Where do you want to place the files? Use the current folder
     Found npm version 6.14.13
     ? Do you want to allow the tenant admin the choice of being able to deploy the solution to all sites immediately without running any feature deployment or adding apps in sites? Yes
     ? Which type of client-side component to create? WebPart
     Add new Web part to solution 04-sp-fx-share-point-framework.
     ? What is your Web part name? 01_FirstSPFxWebPart
     ? What is your Web part description? Erstes SPFx_WebPart
     ? Which framework would you like to use? React
     ```

3. **Projektabhängigkeiten installieren:**
   - Nachdem der Generator abgeschlossen ist, installieren Sie die Projektabhängigkeiten:

     ```bash
     npm install
     ```

## Entwickeln eines SPFx Webparts

1. **Starten der Entwicklungsumgebung:**
   - Starten Sie die lokale Entwicklungsumgebung:

     ```bash
     gulp serve
     ```

   - Dies öffnet ein neues Browserfenster mit der SharePoint Workbench, wo Sie Ihr Webpart in Echtzeit testen können.

2. **Bearbeiten des Webparts:**
   - Öffnen Sie Visual Studio Code und laden Sie Ihr Projektverzeichnis.
   - Bearbeiten Sie die Datei `src/webparts/01_FirstSPFxWebPart/01_FirstSPFxWebPart.ts` und passen Sie das Webpart nach Ihren Anforderungen an.

3. **Verwenden von Umgebungsvariablen:**
   - Erstellen Sie eine `.env`-Datei im Stammverzeichnis Ihres Projekts, um Umgebungsvariablen zu verwalten.
   - Beispiel für den Inhalt der `.env`-Datei:

     ```env
     REACT_APP_API_URL=https://api.example.com
     ```

## Debuggen und Bereitstellen des SPFx Webparts

1. **Debuggen in Visual Studio Code:**
   - Setzen Sie Breakpoints in Ihrem Code.
   - Verwenden Sie die "Debugger for Chrome" Erweiterung, um Ihren Code in Google Chrome zu debuggen.
   - Konfigurieren Sie die Debugger-Einstellungen in der Datei `.vscode/launch.json`.

2. **Build und Bereitstellung:**
   - Erstellen Sie eine Produktionsversion Ihres Webparts:

     ```bash
     gulp bundle --ship
     gulp package-solution --ship
     ```

   - Laden Sie das generierte `.sppkg`-Paket aus dem `sharepoint/solution`-Ordner in den App-Katalog Ihrer SharePoint-Umgebung hoch.
   - Aktivieren Sie das Webpart in Ihrer SharePoint-Seite.

## Weitere Hinweise

- **NVM für Windows:** Verwenden Sie immer eine Administrator-Powershell, um NVM zu starten, um sicherzustellen, dass alle Pfad- und Berechtigungsprobleme vermieden werden.
- **Node.js-Versionen:** Verwenden Sie `nvm use <version>`, um zwischen verschiedenen Node.js-Versionen zu wechseln, wenn Sie unterschiedliche Projekte unterstützen müssen.

Für weitere Informationen und Unterstützung, besuchen Sie die [offizielle Dokumentation für SPFx](https://docs.microsoft.com/en-us/sharepoint/dev/spfx/sharepoint-framework-overview).

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

## Workflows erstellen (Visual Studio 2022) und einbinden

1. **Neues Element hinzufügen:**
   - Rechtsklick auf das Projekt im `Projektmappen-Explorer`.
   - Wählen Sie `Hinzufügen` > `Neues Element` > `Workflow` und geben Sie einen Namen ein.
   - Wählen Sie `List Workflow` und die entsprechende SharePoint-Liste.
   - Aktivieren Sie die gewünschten Optionen:
      - `Workflow nur manuell gestartet`
      - `Workflow automatisch beim Erstellen eines neuen Elements starten`
      - `Workflow automatisch bei Änderung eines Elements starten`
   - Klicken Sie auf `Weiter`.

2. **Workflow-Logik implementieren:**
   - Doppelklicken Sie auf die Workflow-Datei, um den Designer zu öffnen.
   - Ziehen Sie Aktivitäten aus der Toolbox in den Designer:
      - Beispiele: `Send an Email`, `Create List Item`, `Update List Item`
   - Konfigurieren Sie die Aktivitäten gemäß den Anforderungen.

3. **Workflow-Parameter konfigurieren:**
   - Rechtsklick auf den Workflow im Designer und `Properties` wählen.
   - Fügen Sie benötigte Parameter hinzu, z.B. Empfänger-E-Mail-Adressen.

4. **Bereitstellung und Testen:**
   - Erstellen Sie das Projekt (`Erstellen` > `Projektmappe erstellen`).
   - Rechtsklick auf das Projekt > `Bereitstellen`.
   - Aktivieren Sie das Workflow-Feature in SharePoint (`Websiteeinstellungen` > `Websitefeatures`).
   - Testen Sie den Workflow, indem Sie ihn manuell starten oder auslösende Aktionen durchführen.

---

## Erstellen und Debuggen einer SharePoint App (Add-In) via Visual Studio

**KLARE EMPFEHLUNG:** KEINE Add-ins mehr benutzen. Erstens verlieren sie ihren Support, werden durch die Community fast nicht mehr unterstützt und sind kompliziert zu implementieren mit vielen Fehlerquellen, die oft das Design zerstören.

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
