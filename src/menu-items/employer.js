import {
  BorderOutlined,
  BoxPlotOutlined,
  ChromeOutlined,
  DeploymentUnitOutlined,
  GatewayOutlined,
  MenuUnfoldOutlined,
  QuestionOutlined,
  SmileOutlined,
  StopOutlined,
} from "@ant-design/icons";

// icons
const icons = {
  ChromeOutlined,
  MenuUnfoldOutlined,
  BoxPlotOutlined,
  StopOutlined,
  BorderOutlined,
  SmileOutlined,
  GatewayOutlined,
  QuestionOutlined,
  DeploymentUnitOutlined,
};

// ==============================|| MENU ITEMS - SUPPORT ||============================== //

const employer = {
  id: "employer",
  type: "group",
  children: [
    {
      id: "dashboard",
      title: "Dashboard",
      type: "item",
      url: "/dashboard",
      icon: icons.ChromeOutlined,
    },
    {
      id: "employer",
      title: "JOBS",
      type: "item",
      url: "/employer",
      icon: icons.ChromeOutlined,
    },
  ],
};

export default employer;
