import * as React from "react";
import Buttons from "./Pages/Buttons";
import LoadingButtonGroup from "./Pages/Button2";
import ToggleButtonSizes from "./Pages/ToogleButtonGroup";
import ShowZeroBadge from "./Pages/Badges";
import DataTable from "./Pages/Table";

export default function SvgIconsColor() {
  return <div className="container py-5">
    <Buttons/>
    <LoadingButtonGroup/>
    <ToggleButtonSizes/>
    <ShowZeroBadge/>
    <DataTable/>
  </div>;
}
