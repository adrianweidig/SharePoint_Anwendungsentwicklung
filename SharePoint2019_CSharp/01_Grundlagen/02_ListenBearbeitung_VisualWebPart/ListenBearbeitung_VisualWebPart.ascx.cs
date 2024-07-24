using System;
using System.Collections.Generic;
using System.Web.UI.WebControls;
using System.Web.UI.WebControls.WebParts;
using Microsoft.SharePoint;

namespace SharePoint2019_CSharp._01_Grundlagen.ListenBearbeitung_VisualWebPart
{
    public class ListenBearbeitung_VisualWebPart : WebPart
    {
        private GridView EmployeeGridView; // Das GridView-Steuerelement zur Anzeige der Mitarbeiterdaten

        protected override void CreateChildControls()
        {
            base.CreateChildControls(); // Ruft die Basisimplementierung auf, um sicherzustellen, dass alle übergeordneten Steuerelemente erstellt werden

            // Erzeugt das GridView-Steuerelement
            EmployeeGridView = new GridView
            {
                AutoGenerateColumns = false, // Spalten werden manuell definiert
                CssClass = "ms-WPContent" // Optionale CSS-Klasse zur Formatierung
            };

            // Definiert die Spalten für das GridView
            EmployeeGridView.Columns.Add(new BoundField { DataField = "Name", HeaderText = "Name" });
            EmployeeGridView.Columns.Add(new BoundField { DataField = "Position", HeaderText = "Position" });
            EmployeeGridView.Columns.Add(new BoundField { DataField = "Department", HeaderText = "Department" });
            EmployeeGridView.Columns.Add(new BoundField { DataField = "Email", HeaderText = "Email" });

            // Fügt das GridView dem WebPart hinzu
            Controls.Add(EmployeeGridView);

            // Lädt die Mitarbeiterdaten und bindet sie an das GridView
            LoadEmployeeData();
        }

        private void LoadEmployeeData()
        {
            try
            {
                // Verwendet SPContext.Current.Web anstelle von SPSite
                SPWeb web = SPContext.Current.Web;

                // Überprüft, ob die Liste "Mitarbeiter" existiert
                // Beachte, dass die Liste die Spalten Name, Position, Department, Email besitzen muss
                // Eine sinnlos befüllte Vorlagendatei liegt unter Ressourcen/Vorlagendateien/Liste_Mitarbeiter.stp
                SPList list = web.Lists.TryGetList("Mitarbeiter");
                if (list == null)
                {
                    // Liste existiert nicht, zeigt eine Beispielzeile an
                    EmployeeGridView.DataSource = GetSampleData();
                }
                else
                {
                    List<Employee> employees = new List<Employee>();

                    foreach (SPListItem item in list.Items)
                    {
                        // Sucht speziell nach den Spalten die hier gelistet sind
                        employees.Add(new Employee
                        {
                            Name = item["Name"] != null ? item["Name"].ToString() : string.Empty,
                            Position = item["Position"] != null ? item["Position"].ToString() : string.Empty,
                            Department = item["Department"] != null ? item["Department"].ToString() : string.Empty,
                            Email = item["Email"] != null ? item["Email"].ToString() : string.Empty
                        });
                    }

                    if (employees.Count == 0)
                    {
                        // Wenn keine Mitarbeiterdaten vorhanden sind, füge eine Beispielzeile hinzu
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

                // Bindet die Daten an das GridView
                EmployeeGridView.DataBind();
            }
            catch (Exception ex)
            {
                // Fehlerbehandlung
                EmployeeGridView.DataSource = new List<Employee>(); // Leeres Dataset im Fehlerfall
                EmployeeGridView.DataBind();
                // Protokolliert den Fehler (Optional)
                Console.WriteLine("Fehler beim Laden der Mitarbeiterdaten: " + ex.Message);
            }
        }

        // Gibt eine Liste mit Beispiel-Mitarbeiterdaten zurück
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

        // Definiert eine Klasse für Mitarbeiterdaten
        public class Employee
        {
            public string Name { get; set; }
            public string Position { get; set; }
            public string Department { get; set; }
            public string Email { get; set; }
        }
    }
}
