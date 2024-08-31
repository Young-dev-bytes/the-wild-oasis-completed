import { useSearchParams } from "react-router-dom";
import Select from "./Select";

function SortBy({ ...props }) {
  const { options } = props;
  const [searchParams, setSearchParams] = useSearchParams();
  const sortBy = searchParams.get("sortBy") || "";

  return (
    <Select
      options={options}
      value={sortBy}
      type="white"
      onChange={(e) => {
        searchParams.set("sortBy", e.target.value);
        setSearchParams(searchParams);
      }}
    />
  );
}

export default SortBy;
