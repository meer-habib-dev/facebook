import {
  ChevronDownIcon,
  ShoppingBagIcon,
  UserGroupIcon,
} from "@heroicons/react/outline";
import {
  CalculatorIcon,
  ClockIcon,
  DesktopComputerIcon,
  UserIcon,
} from "@heroicons/react/solid";
import SidebarRow from "./SidebarRow";
const Sidebar = () => {
  return (
    <div className="p-2 mt-5 max-w-[600px] xl:min-w-[300px]">
      <SidebarRow
        src="https://drive.google.com/file/d/1eMM1BH27lrWvg6Xc2yWVqmTTDrSWDLsq/view?usp=sharing"
        title={"Meer Habib"}
      />
      <SidebarRow Icon={UserIcon} title={"Frends"} />
      <SidebarRow Icon={UserGroupIcon} title={"Groups"} />
      <SidebarRow Icon={ShoppingBagIcon} title={"Marketplace"} />
      <SidebarRow Icon={DesktopComputerIcon} title={"Watch"} />
      <SidebarRow Icon={CalculatorIcon} title={"Events"} />
      <SidebarRow Icon={ClockIcon} title={"memories"} />
      <SidebarRow Icon={ChevronDownIcon} title={"See More"} />
    </div>
  );
};

export default Sidebar;
