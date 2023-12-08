import { useEffect, useState } from "react";
import { departments } from "../departments";
import { userInput } from "../interfaces";
import { Typography, Box } from "@mui/material";
import {
  Remove,
  Add,
  CheckBoxOutlineBlank,
  CheckBoxOutlined,
} from "@mui/icons-material";
const Departments = () => {
  const [selected, setSelected] = useState<userInput[]>([]);

  const toggleDepartments = (oldVal: boolean, index: number) => {
    const newVal: boolean = !oldVal;
    const arr = [...selected];
    arr[index].isExpanded = newVal;
    setSelected(arr);
  };
  const toggleSubDepartment = (
    oldVal: boolean,
    index: number,
    subIndex: number
  ) => {
    const newVal: boolean = !oldVal;
    const arr = [...selected];
    arr[index].selected[subIndex] = newVal;
    setSelected(arr);
  };

  const toggleSelected = (index: number) => {
    const isAllSelected =
      selected[index].selected.filter((value) => value === true).length ===
      selected[index].selected.length;
    if (isAllSelected) {
      const arr = [...selected];
      const sel = arr[index].selected.map(() => false);
      arr[index].selected = [...sel];
      setSelected(arr);
    } else {
      const arr = [...selected];
      const sel = arr[index].selected.map(() => true);
      arr[index].selected = [...sel];
      setSelected(arr);
    }
  };

  useEffect(() => {
    const arr: userInput[] = [];
    departments.forEach((dept) => {
      const data: userInput = {
        dept: dept.department,
        isExpanded: false,
        sub_departments: [...dept.sub_departments],
        selected: Array(dept.sub_departments.length).fill(false),
      };
      arr.push(data);
    });
    setSelected(arr);
  }, []);

  return (
    <div style={{ padding: "24px" }}>
      <Typography variant="h4" sx={{ mb: 2 }}>
        Departments
      </Typography>
      {selected.map((dept, index) => {
        return (
          <div key={index}>
            <Box
              sx={{
                mb: 2,
                border: "1px solid #f1efed",
              }}
            >
              <div className="expBox">
                <Box
                  className="deptBox"
                  onClick={() => {
                    toggleDepartments(dept.isExpanded, index);
                  }}
                >
                  {dept.isExpanded ? <Remove /> : <Add />}
                </Box>
                <Box
                  className="deptCheck"
                  onClick={() => {
                    toggleSelected(index);
                  }}
                >
                  {dept.selected.filter((value) => value === true).length ===
                  dept.selected.length ? (
                    <CheckBoxOutlined />
                  ) : (
                    <CheckBoxOutlineBlank />
                  )}
                </Box>
                <p style={{ paddingLeft: "12px" }}>{dept.dept}</p>
              </div>
              <div style={{ paddingLeft: "48px" }}>
                <Box
                  sx={{
                    p: dept.isExpanded ? 2 : 0,
                  }}
                >
                  {dept.isExpanded &&
                    dept.sub_departments.map((subDept, i) => {
                      return (
                        <Box
                          className="subBox"
                          key={i}
                          onClick={() => {
                            toggleSubDepartment(dept.selected[i], index, i);
                          }}
                        >
                          <span className="subCheck">
                            {dept.selected[i] ? (
                              <CheckBoxOutlined />
                            ) : (
                              <CheckBoxOutlineBlank />
                            )}
                          </span>
                          <p>{subDept}</p>
                        </Box>
                      );
                    })}
                </Box>
              </div>
            </Box>
          </div>
        );
      })}
    </div>
  );
};

export default Departments;
