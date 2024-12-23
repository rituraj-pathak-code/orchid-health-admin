import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { UserService } from "@/services/userServices";
import { CountriesType } from "@/types/userTypes";
import { CircularProgress } from "@mui/material";
import { useQuery } from "@tanstack/react-query";
import { useEffect } from "react";
import { toast } from "react-toastify";

type SelectCountryProps = {
  handleCountrySelect: (country: string | null) => void;
};

const SelectCountry: React.FC<SelectCountryProps> = ({
  handleCountrySelect,
}) => {
  const token = localStorage.getItem("token");

  const {
    data: countries,
    isLoading,
    isError,
    isSuccess,
    error,
  } = useQuery<CountriesType>({
    queryKey: ["countries", token],
    queryFn: () => UserService.getAllCountries(token),
    staleTime: 5000,
    retry: 2,
  });

  const onCountryChange = (country: string) => {
    if (country == "ALL") {
      handleCountrySelect(null);
    } else {
      handleCountrySelect(country);
    }
  };

  useEffect(() => {
  if(isError && error instanceof Error) {
      console.log(error);
      toast.error("An unexpected error occurred fetching countries", {
        toastId: "countryfetch-failed",
      });
    }
  }, [isError, error]);

  return (
    <div className="w-[250px]">
      <h3 className="font-bold mb-2 text-sm">Select Country</h3>
      <Select onValueChange={onCountryChange}>
        <SelectTrigger>
          <SelectValue placeholder="Select Country" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="ALL">ALL</SelectItem>
          {isLoading && <CircularProgress size={10}/>}
          {isSuccess && countries.map((item) => (
            <SelectItem value={item?.country_code}>
              {item.country_name}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
};

export default SelectCountry;
