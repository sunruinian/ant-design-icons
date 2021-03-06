// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import SendOutlinedSvg from '@ant-design/icons-svg/lib/asn/SendOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const SendOutlined = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={SendOutlinedSvg}></AntdIcon>;
};

SendOutlined.displayName = 'SendOutlined';
SendOutlined.inheritAttrs = false;
export default SendOutlined;