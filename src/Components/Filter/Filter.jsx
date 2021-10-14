import { useSelector, useDispatch } from "react-redux";
import { filter as filterAction } from "../../Redux/filterSlice";
import { FilterInput, Label } from "./Filter.styled";
import { getFilter } from "../../Redux/selectors";

export default function Filter() {
  const dispatch = useDispatch();
  const filter = useSelector(getFilter);
  const filterChange = (e) => dispatch(filterAction(e.target.value));
  return (
    <Label>
      Find contact by name
      <FilterInput
        type="text"
        value={filter}
        onChange={filterChange}
        name="filter"
        placeholder="Enter contact name"
      />
    </Label>
  );
}
