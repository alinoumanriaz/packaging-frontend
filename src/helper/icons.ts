// icons.ts
import * as FaIcons from "react-icons/fa";
import * as BsIcons from "react-icons/bs";
import * as io5Icons from "react-icons/io5";
import * as giIcons from "react-icons/gi";
import * as ImdIcons from "react-icons/md";

const icons: Record<string, React.ElementType> = {
  ...FaIcons,
  ...BsIcons,
  ...io5Icons,
  ...giIcons,
  ...ImdIcons,
};

export default icons;
