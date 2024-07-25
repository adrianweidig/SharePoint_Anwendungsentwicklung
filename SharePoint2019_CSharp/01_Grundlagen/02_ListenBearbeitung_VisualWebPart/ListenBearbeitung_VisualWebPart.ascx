<%@ Assembly Name="$SharePoint.Project.AssemblyFullName$" %>
<%-- Die obige Zeile gibt an, dass die Assembly des SharePoint-Projekts verwendet wird, die zur Laufzeit eingefügt wird. --%>

<%@ Assembly Name="Microsoft.Web.CommandUI, Version=16.0.0.0, Culture=neutral, PublicKeyToken=71e9bce111e9429c" %>
<%-- Bindet die Assembly "Microsoft.Web.CommandUI" ein, die für die Websteuerungsschnittstelle von SharePoint verwendet wird. --%>

<%@ Register Tagprefix="SharePoint" Namespace="Microsoft.SharePoint.WebControls" Assembly="Microsoft.SharePoint, Version=16.0.0.0, Culture=neutral, PublicKeyToken=71e9bce111e9429c" %>
<%-- Registriert die SharePoint-Websteuerungen mit dem Tagprefix "SharePoint". --%>

<%@ Register Tagprefix="Utilities" Namespace="Microsoft.SharePoint.Utilities" Assembly="Microsoft.SharePoint, Version=16.0.0.0, Culture=neutral, PublicKeyToken=71e9bce111e9429c" %>
<%-- Registriert die SharePoint-Dienstprogramme mit dem Tagprefix "Utilities". --%>

<%@ Register Tagprefix="asp" Namespace="System.Web.UI" Assembly="System.Web.Extensions, Version=4.0.0.0, Culture=neutral, PublicKeyToken=31bf3856ad364e35" %>
<%-- Registriert die ASP.NET-Steuerelemente mit dem Tagprefix "asp". --%>

<%@ Import Namespace="Microsoft.SharePoint" %>
<%-- Importiert den Namespace "Microsoft.SharePoint" für die Verwendung in diesem Kontrollcode. --%>

<%@ Register Tagprefix="WebPartPages" Namespace="Microsoft.SharePoint.WebPartPages" Assembly="Microsoft.SharePoint, Version=16.0.0.0, Culture=neutral, PublicKeyToken=71e9bce111e9429c" %>
<%-- Registriert die SharePoint-Webpartseiten mit dem Tagprefix "WebPartPages". --%>

<%@ Control Language="C#" AutoEventWireup="true" CodeBehind="ListenBearbeitung_VisualWebPart.ascx.cs" Inherits="SharePoint2019_CSharp._01_Grundlagen.ListenBearbeitung_VisualWebPart.ListenBearbeitung_VisualWebPartUserControl" %>
<%--
  Definiert das benutzerdefinierte Steuerelement. 
  Language="C#" gibt die verwendete Programmiersprache an. 
  AutoEventWireup="true" sorgt dafür, dass die Ereignisse automatisch an ihre Handler gebunden werden.
  CodeBehind gibt die Datei an, die den Code für das Steuerelement enthält.
  Inherits legt die Klasse fest, von der dieses Steuerelement erbt.
--%>

<asp:GridView ID="EmployeeGridView" runat="server" AutoGenerateColumns="False">
    <Columns>
        <asp:BoundField DataField="Name" HeaderText="Name" />
        <asp:BoundField DataField="Position" HeaderText="Position" />
        <asp:BoundField DataField="Department" HeaderText="Department" />
        <asp:BoundField DataField="Email" HeaderText="Email" />
    </Columns>
</asp:GridView>

<asp:Button ID="AddEmployeeButton" runat="server" Text="Mitarbeiter hinzufügen" OnClick="AddEmployeeButton_Click" CssClass="ms-Button" />
