// Importiere die notwendigen Namespaces für die Verwendung von SharePoint, WebControls und WebParts
using Microsoft.SharePoint;
using Microsoft.SharePoint.WebControls;
using System;
using System.ComponentModel;
using System.Web.UI;
using System.Web.UI.WebControls;
using System.Web.UI.WebControls.WebParts;

namespace SharePoint2019_CSharp._01_Grundlagen.Rechner_WebPart
{
    // Die ToolboxItemAttribute(false) Anweisung verhindert, dass dieses WebPart im Visual Studio-Toolbox angezeigt wird.
    [ToolboxItemAttribute(false)]
    public class Rechner_WebPart : WebPart
    {
        // Deklariere die Steuerelemente, die im WebPart verwendet werden.
        private TextBox txtNumber1; // Textbox für die Eingabe der ersten Zahl
        private TextBox txtNumber2; // Textbox für die Eingabe der zweiten Zahl
        private Label lblResult; // Label zur Anzeige des Ergebnisses
        private Button btnAdd; // Button für die Addition
        private Button btnSubtract; // Button für die Subtraktion
        private Button btnMultiply; // Button für die Multiplikation
        private Button btnDivide; // Button für die Division

        // Die CreateChildControls-Methode wird überschrieben, um benutzerdefinierte Steuerelemente hinzuzufügen.
        protected override void CreateChildControls()
        {
            // Initialisiere die Steuerelemente mit IDs und Text.
            txtNumber1 = new TextBox { ID = "txtNumber1" };
            txtNumber2 = new TextBox { ID = "txtNumber2" };
            lblResult = new Label { ID = "lblResult", Text = "Result will be displayed here." };
            btnAdd = new Button { ID = "btnAdd", Text = "Add" };
            btnSubtract = new Button { ID = "btnSubtract", Text = "Subtract" };
            btnMultiply = new Button { ID = "btnMultiply", Text = "Multiply" };
            btnDivide = new Button { ID = "btnDivide", Text = "Divide" };

            // Füge den Buttons Event-Handler hinzu, die auf Klicks reagieren.
            btnAdd.Click += new EventHandler(BtnAdd_Click);
            btnSubtract.Click += new EventHandler(BtnSubtract_Click);
            btnMultiply.Click += new EventHandler(BtnMultiply_Click);
            btnDivide.Click += new EventHandler(BtnDivide_Click);

            // Füge die Steuerelemente zum WebPart hinzu.
            Controls.Add(new LiteralControl("<div>Number 1: </div>"));
            Controls.Add(txtNumber1);
            Controls.Add(new LiteralControl("<div>Number 2: </div>"));
            Controls.Add(txtNumber2);
            Controls.Add(new LiteralControl("<br />"));
            Controls.Add(btnAdd);
            Controls.Add(btnSubtract);
            Controls.Add(btnMultiply);
            Controls.Add(btnDivide);
            Controls.Add(new LiteralControl("<br />"));
            Controls.Add(lblResult);
        }

        // Event-Handler für den Add-Button.
        private void BtnAdd_Click(object sender, EventArgs e)
        {
            // Berechne die Addition der beiden Zahlen.
            PerformCalculation((a, b) => a + b);
        }

        // Event-Handler für den Subtract-Button.
        private void BtnSubtract_Click(object sender, EventArgs e)
        {
            // Berechne die Subtraktion der beiden Zahlen.
            PerformCalculation((a, b) => a - b);
        }

        // Event-Handler für den Multiply-Button.
        private void BtnMultiply_Click(object sender, EventArgs e)
        {
            // Berechne die Multiplikation der beiden Zahlen.
            PerformCalculation((a, b) => a * b);
        }

        // Event-Handler für den Divide-Button.
        private void BtnDivide_Click(object sender, EventArgs e)
        {
            // Berechne die Division der beiden Zahlen und prüfe auf Division durch Null.
            double number1, number2;
            if (double.TryParse(txtNumber1.Text, out number1) && double.TryParse(txtNumber2.Text, out number2))
            {
                if (number2 == 0)
                {
                    // Zeige eine Fehlermeldung an, wenn der Divisor null ist.
                    lblResult.Text = "Cannot divide by zero.";
                }
                else
                {
                    // Berechne die Division, wenn der Divisor nicht null ist.
                    PerformCalculation((a, b) => a / b);
                }
            }
            else
            {
                // Zeige eine Fehlermeldung an, wenn die Eingaben keine gültigen Zahlen sind.
                lblResult.Text = "Please enter valid numbers.";
            }
        }

        // Methode zur Durchführung der Berechnungen.
        private void PerformCalculation(Func<double, double, double> operation)
        {
            double number1, number2;
            // Prüfe, ob die Texteingaben in gültige Zahlen umgewandelt werden können.
            if (double.TryParse(txtNumber1.Text, out number1) && double.TryParse(txtNumber2.Text, out number2))
            {
                // Führe die Berechnung mit der angegebenen Operation durch und zeige das Ergebnis an.
                double result = operation(number1, number2);
                lblResult.Text = "Result: " + result.ToString();
            }
            else
            {
                // Zeige eine Fehlermeldung an, wenn die Eingaben keine gültigen Zahlen sind.
                lblResult.Text = "Please enter valid numbers.";
            }
        }
    }
}



