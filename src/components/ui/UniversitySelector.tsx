
import React from 'react';
import { 
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface UniversitySelectorProps {
  onChange: (value: string) => void;
  value?: string;
  placeholder?: string;
  className?: string;
}

const UniversitySelector: React.FC<UniversitySelectorProps> = ({
  onChange,
  value,
  placeholder = "Select a university",
  className,
}) => {
  const universities = [
    "University of Cape Town",
    "University of Witwatersrand",
    "University of Johannesburg",
    "Stellenbosch University",
    "University of Pretoria",
    "Rhodes University",
    "University of KwaZulu-Natal",
    "Nelson Mandela University",
    "North-West University",
    "University of the Free State",
    "University of the Western Cape",
    "Cape Peninsula University of Technology",
    "Tshwane University of Technology",
    "Durban University of Technology",
    "Vaal University of Technology",
    "University of Limpopo",
    "University of Venda",
    "Walter Sisulu University",
    "University of Zululand",
    "University of Fort Hare",
    "Central University of Technology",
    "Mangosuthu University of Technology",
    "Sefako Makgatho Health Sciences University",
    "Sol Plaatje University",
    "University of Mpumalanga",
    "Other"
  ];

  return (
    <Select value={value} onValueChange={onChange}>
      <SelectTrigger className={className}>
        <SelectValue placeholder={placeholder} />
      </SelectTrigger>
      <SelectContent>
        {universities.map((uni) => (
          <SelectItem key={uni} value={uni}>
            {uni}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
};

export default UniversitySelector;
