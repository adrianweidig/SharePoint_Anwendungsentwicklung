<%@ Page Inherits="Microsoft.SharePoint.WebPartPages.WebPartPage, Microsoft.SharePoint, Version=16.0.0.0, Culture=neutral, PublicKeyToken=71e9bce111e9429c" MasterPageFile="~masterurl/default.master" Language="C#" %>
<%@ Register TagPrefix="Utilities" Namespace="Microsoft.SharePoint.Utilities" Assembly="Microsoft.SharePoint, Version=16.0.0.0, Culture=neutral, PublicKeyToken=71e9bce111e9429c" %>
<%@ Register TagPrefix="WebPartPages" Namespace="Microsoft.SharePoint.WebPartPages" Assembly="Microsoft.SharePoint, Version=16.0.0.0, Culture=neutral, PublicKeyToken=71e9bce111e9429c" %>
<%@ Register TagPrefix="SharePoint" Namespace="Microsoft.SharePoint.WebControls" Assembly="Microsoft.SharePoint, Version=16.0.0.0, Culture=neutral, PublicKeyToken=71e9bce111e9429c" %>

<asp:Content ContentPlaceHolderID="PlaceHolderAdditionalPageHead" runat="server">
    <!-- Einbinden von jQuery, einer JavaScript-Bibliothek, die DOM-Manipulation und Event-Handling vereinfacht -->
    <script type="text/javascript" src="../Scripts/jquery-3.6.0.min.js"></script>
    <!-- Einbinden von SharePoint JavaScript-Bibliotheken für SharePoint-spezifische Funktionen -->
    <script type="text/javascript" src="/_layouts/15/sp.runtime.js"></script>
    <script type="text/javascript" src="/_layouts/15/sp.js"></script>
    <!-- Einbinden der benutzerdefinierten CSS-Datei -->
    <link rel="stylesheet" type="text/css" href="../Content/App.css" />
    <!-- Einbinden der benutzerdefinierten JavaScript-Datei -->
    <script type="text/javascript" src="../Scripts/App.js"></script>
</asp:Content>

<asp:Content ContentPlaceHolderID="PlaceHolderPageTitleInTitleArea" runat="server">
    <!-- Titel der Seite -->
    <h1>SharePoint Datenanzeige</h1>
</asp:Content>

<asp:Content ContentPlaceHolderID="PlaceHolderMain" runat="server">
    <div>
        <h2>Benutzerinformationen</h2>
        <!-- Bereich zur Anzeige der Benutzerdaten -->
        <div id="userInfo"></div>
    </div>

    <div>
        <h2>SharePoint Listeneinträge</h2>
        <!-- Bereich zur Anzeige der Listeneinträge -->
        <div id="listItems"></div>
    </div>
</asp:Content>
