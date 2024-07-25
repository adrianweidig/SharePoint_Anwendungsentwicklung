using System;
using System.Collections.Generic;
using System.Web.UI.WebControls;
using Microsoft.SharePoint;
using System.Web.UI.WebControls.WebParts;
using System.ComponentModel;

namespace SharePoint2019_CSharp._01_Grundlagen.ListenBearbeitung_VisualWebPart
    {
    [ToolboxItemAttribute(false)]
    public partial class ListenBearbeitung_VisualWebPart : WebPart
        {

        // Achtung: Keine Elemente wie GridView, Buttons o.ä. hier global deklarieren da diese in der ascx.g.cs Datei
        // automatisch generiert wird. 
        // Bei Problemen die ascx.g.cs Datei löschen dann auf die .ascx Datei rechtsklicken und auf "Benutzerdefiniertes Tool"
        // ausführen klicken. Bei der .ascx Datei sollte SharePointWebPartCodeGenerator als Benutzerdefiniertes Tool deklariert sein.
        // ABER: Die .ascx.g.cs Datei benennt die Klassen meist falsch und hängt ...UserControls an den Klassennamen an wodurch die
        //       Dateien nicht mehr gefunden werden können. Dies muss in der ascx.g.cs Datei auf den Namen der .cs Datei geändert werden.
        //       (kurz: Namenskonflikt auflösen damit InitializeControl gefunden werden kann)

        protected override void OnInit(EventArgs e)
        {
            base.OnInit(e);
            // Initialisiert die Steuerelemente aus der .ascx-Datei
            // Sollte diese Funktion nicht gefunden wurde hat die ascx.g.cs Datei den Namen zu ...UserControls geändert.
            // dies muss dann entfernt werden.
            InitializeControl();
        }

        protected void Page_Load(object sender, EventArgs e)
        {
            if (!Page.IsPostBack)
            {
                try
                {
                    // Lädt die Mitarbeiterdaten und bindet sie an das GridView
                    LoadEmployeeData();
                }
                catch (Exception ex)
                {
                    LogError("Fehler beim Laden der Mitarbeiterdaten: " + ex.Message);
                }
            }
        }

        private void LoadEmployeeData()
        {
            try
            {
                SPWeb web = SPContext.Current.Web;
                SPList list = web.Lists.TryGetList("Mitarbeiter");

                if (list == null)
                {
                    // Wenn die Liste nicht existiert, verwende Beispieldaten
                    EmployeeGridView.DataSource = GetSampleData();
                }
                else
                {
                    List<Employee> employees = new List<Employee>();

                    foreach (SPListItem item in list.Items)
                    {
                        try
                        {
                            employees.Add(new Employee
                            {
                                Name = item["Name"]?.ToString() ?? string.Empty,
                                Position = item["Position"]?.ToString() ?? string.Empty,
                                Department = item["Department"]?.ToString() ?? string.Empty,
                                Email = item["Email"]?.ToString() ?? string.Empty
                            });
                        }
                        catch (Exception ex)
                        {
                            LogError("Fehler beim Verarbeiten eines Listenelements: " + ex.Message);
                        }
                    }

                    if (employees.Count == 0)
                    {
                        employees.Add(new Employee
                        {
                            Name = "Max Mustermann",
                            Position = "Beispielposition",
                            Department = "Beispielabteilung",
                            Email = "max.mustermann@example.com"
                        });
                    }

                    EmployeeGridView.DataSource = employees;
                }

                EmployeeGridView.DataBind();
            }
            catch (Exception ex)
            {
                LogError("Fehler beim Laden der Mitarbeiterdaten: " + ex.Message);
            }
        }

        private void AddEmployeeButton_Click(object sender, EventArgs e)
        {
            try
            {
                SPWeb web = SPContext.Current.Web;
                SPList list = web.Lists.TryGetList("Mitarbeiter");

                if (list != null)
                {
                    SPListItem newItem = list.Items.Add();
                    newItem["Name"] = "John Doe";
                    newItem["Position"] = "Developer";
                    newItem["Department"] = "IT";
                    newItem["Email"] = "john.doe@example.com";
                    newItem.Update(); // Speichert das neue Element in der Liste

                    LoadEmployeeData(); // Aktualisiert die Anzeige der Mitarbeiterdaten
                }
                else
                {
                    LogError("Die Liste 'Mitarbeiter' konnte nicht gefunden werden.");
                }
            }
            catch (Exception ex)
            {
                LogError("Fehler beim Hinzufügen eines neuen Mitarbeiters: " + ex.Message);
            }
        }

        private void LogError(string message)
        {
            // Gibt die Fehlermeldung in der SharePoint-Entwicklerkonsole aus
            System.Diagnostics.Debug.WriteLine(message);
        }

        private List<Employee> GetSampleData()
        {
            return new List<Employee>
            {
                new Employee
                {
                    Name = "Max Mustermann",
                    Position = "Beispielposition",
                    Department = "Beispielabteilung",
                    Email = "max.mustermann@example.com"
                }
            };
        }

        public class Employee
        {
            public string Name { get; set; }
            public string Position { get; set; }
            public string Department { get; set; }
            public string Email { get; set; }
        }
    }
}
