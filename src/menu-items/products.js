// third-party
import { FormattedMessage } from "react-intl";

// assets
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

const products = {
  id: "products",
  type: "group",
  children: [
    {
      id: "products",
      title: <FormattedMessage id="Dashboard" />,
      type: "item",
      url: "/products",
      icon: icons.ChromeOutlined,
    },
  ],
};

export default products;
