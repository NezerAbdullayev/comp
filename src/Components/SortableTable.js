import Table from "./Table";
import { GoChevronUp, GoChevronDown } from "react-icons/go";
import useSort from "../hooks/use-sort";

function SortableTable(props) {
  const { config, data } = props;
  const { sortOrder, sortBy, setSortColumn, sortedData } = useSort(data,config);
  const updatedConfig = config.map((column) => {
    if (!column.sortValue) {
      return column;
    }
    return {
      ...column,
      header: () => (
        <th
          className="cursor-pointer hover:bg-gray-100 "
          onClick={() => setSortColumn(column.label)}
        >
          <div className="flex items-center">
            {getIcons(column.label, sortBy, sortOrder)} {column.label}
          </div>
        </th>
      ),
    };
  });

  return (
    <div>
      {sortOrder}-{sortBy}
      <Table {...props} data={sortedData} config={updatedConfig} />
    </div>
  );
}

function getIcons(label, sortBy, sortOrder) {
  if (label !== sortBy) {
    return (
      <>
        <GoChevronUp /> <GoChevronDown />
      </>
    );
  }
  if (sortOrder === null) {
    return (
      <>
        <GoChevronUp /> <GoChevronDown />
      </>
    );
  } else if (sortOrder === "asc") {
    return (
      <>
        <GoChevronUp />
      </>
    );
  } else if (sortOrder === "desc") {
    return (
      <>
        <GoChevronDown />
      </>
    );
  }
}

export default SortableTable;
