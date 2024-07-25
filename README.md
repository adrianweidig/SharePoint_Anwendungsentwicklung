# Anleitung zur Einrichtung einer SharePoint 2019 Visual Studio Entwicklungsumgebung

## Voraussetzungen

- Visual Studio muss auf dem SharePoint Server selbst installiert sein.
- SharePoint Server 2019 muss auf einem Windows Server installiert und konfiguriert sein, sodass eine erste Webseite verfügbar ist.

## Verbindung mit Visual Studio und Erzeugung eines leeren SharePoint 2019 Projekts

1. **Visual Studio als Administrator starten:**
    - Rechtsklick auf das Visual Studio Symbol und "Als Administrator ausführen" wählen.

2. **Neues Projekt erstellen:**
    - Datei > Neues Projekt > SharePoint-Lösungen > SharePoint 2019 leeres Projekt (C#) auswählen.
    - Einen Namen und Speicherort für das Projekt festlegen und auf "Erstellen" klicken.

3. **SharePoint Verbindungsoptionen:**
    - Die URL Ihrer SharePoint Entwicklerseite eingeben. Falls noch keine Entwicklerseite existiert, erstellen Sie eine neue Websitesammlung mit einer Entwicklerwebseite als Template.
    - "OK" klicken und das Projekt wird erstellt.

## Erstellen und Debuggen einer SharePoint App / Features via Visual Studio

1. **Leeres SharePoint Projekt erstellen:**
    - In Visual Studio: Datei > Neues Projekt > SharePoint-Lösungen > SharePoint 2019 leeres Projekt (C#)

2. **Ordnerstruktur im Projekt:**
    - Erstellen Sie ggf. einen neuen Ordner im Projektmappen-Explorer, um Ihre Elemente zu organisieren.
    - Rechtsklick auf den Projektnamen > Hinzufügen > Neuer Ordner.

3. **Webpart hinzufügen:**
    - Rechtsklick auf den neu erstellten Ordner > Hinzufügen > Neues Element > Webpart auswählen (nur Webpart).
    - Falls "Visual Webpart" gewählt wird, wird eine HTML / ASCX Datei für die Oberfläche erstellt.

4. **Feature hinzufügen:**
    - Rechtsklick auf den Ordner "Features" > Hinzufügen > Neue Funktion.
    - In der Feature-Ansicht (Doppelklick auf das Feature) können Sie die Elemente aus der Projektmappe zum Feature hinzufügen.
    - **Wichtig:** Damit die aktuellen WebParts ersichtlich sind, muss beim Feature als Bereich "Site" ausgewählt werden (da WebParts hier ansässig sind).

## Visual Webpart Designer Ansicht

1. **Ansicht öffnen:**
    - Klicken Sie auf "Ansicht" > "Toolbox", um die Toolbox zu öffnen.

2. **Designer-Modus aktivieren:**
    - Rechtsklick auf die .ascx Datei des Visual Webparts und "Ansicht-Designer" auswählen.
    - Dies ermöglicht eine grafische Bearbeitung und das Hinzufügen von Elementen aus der Toolbox per Drag & Drop.

3. **Toolbox verwenden:**
    - Ziehen Sie die gewünschten Elemente aus der Toolbox in den Designer und ordnen Sie diese nach Bedarf an.

## Bereitstellung und Debugging

1. **Projekt bereitstellen:**
    - Rechtsklick auf das Projekt im Projektmappen-Explorer > Bereitstellen > Lösung bereitstellen.
    - oder einfach über den "Play" Button das Projekt starten
    - Visual Studio wird das Projekt kompilieren und auf den SharePoint Server hochladen.

2. **Debugging:**
    - Setzen Sie Breakpoints in Ihrem Code.
    - Starten Sie das Debugging durch Drücken von F5.
    - Visual Studio wird das Projekt auf SharePoint bereitstellen und die Debugging-Sitzung starten.

3. **Testen:**
    - Navigieren Sie zur SharePoint Seite und testen Sie das neue Webpart oder Feature.
    - Dazu Seite bearbeiten > Einfügen > WebPart > Custom
    - Sobald es über Visual Studio bereitgestellt ist kann auch von extern mit entsprechenden Zugriffsrechten auf der Entwicklerseite auf die WebParts zugegriffen werden.

    - ACHTUNG: Es kann vorkommen, dass der Fehler kommt "... wird bereits von einem anderen Prozess verwendet" sobald man den Debugger startet. In diesem Fall das Fenster schließen bzw. das Projekt stoppen und neu starten. (Kann auch mehrmals hintereinander passieren)

## Tipps und Tricks

- **Fehlerhafte Webparts:** Sollten fehlerhafte Webparts auf der Seite sein, bietet es sich an, den Quellcode-Editor der Seite zu öffnen und den entsprechenden Quellcode-Anteil zu löschen.

- **Dateinamenskonflikte:** Sollte die Funktion nicht gefunden werden, hat die `.ascx.g.cs` Datei möglicherweise den Namen `...UserControls` geändert. Dies muss entfernt werden.

- **Globale Deklarationen vermeiden:** Keine Elemente wie `GridView`, `Buttons` o.ä. global deklarieren, da diese in der `.ascx.g.cs` Datei automatisch generiert werden. Bei Problemen die `.ascx.g.cs` Datei löschen und auf die `.ascx` Datei rechtsklicken und auf "Benutzerdefiniertes Tool ausführen" klicken. Bei der `.ascx` Datei sollte `SharePointWebPartCodeGenerator` als benutzerdefiniertes Tool deklariert sein.

- **Namenskonflikte lösen:** Die `.ascx.g.cs` Datei benennt die Klassen meist falsch und hängt `...UserControls` an den Klassennamen an, wodurch die Dateien nicht mehr gefunden werden können. Dies muss in der `.ascx.g.cs` Datei auf den Namen der `.cs` Datei geändert werden. (Kurz: Namenskonflikte auflösen, damit `InitializeControl` gefunden werden kann.)


## Weiterführende Ressourcen

- [Microsoft SharePoint Dokumentation](https://docs.microsoft.com/de-de/sharepoint/dev/)
- [Visual Studio SharePoint Entwicklung](https://docs.microsoft.com/de-de/visualstudio/sharepoint/sharepoint-development-in-visual-studio)
- [SharePoint 2019 Entwicklungsguide](https://docs.microsoft.com/de-de/sharepoint/dev/general-development/sharepoint-2019-development-platform)

