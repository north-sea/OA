import { Enum } from "@nsea/tools";
import {getTypes} from "@/api/type";

export const GenderEnum = Enum.query(
    () => getTypes( { key: "gender" } ),
    {
      queryOnce: true,
      textField:'label',
      valueField:'key'
    }
  );

export const PositionEnum = Enum.query(
    () => getTypes( { key: "position" } ),
    {
      queryOnce: true,
      textField:'label',
      valueField:'key'
    }
  );

export const DepartmentEnum = Enum.query(
    () => getTypes( { key: "department" } ),
    {
      queryOnce: true,
      textField:'label',
      valueField:'key'
    }
  );