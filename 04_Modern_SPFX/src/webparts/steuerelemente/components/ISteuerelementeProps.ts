export interface ISteuerelementeProps {
  description: string;
  textValue: string;
  checkboxValue: boolean;
  selectedOption: string;
  onTextChange: (newValue: string) => void;
  onCheckboxChange: (checked: boolean) => void;
  onSelectChange: (selected: string) => void;
  onButtonClick: () => void;
}
