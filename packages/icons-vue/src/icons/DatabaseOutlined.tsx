// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import DatabaseOutlinedSvg from '@ant-design/icons-svg/lib/asn/DatabaseOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const DatabaseOutlined = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={DatabaseOutlinedSvg}></AntdIcon>;
};

DatabaseOutlined.displayName = 'DatabaseOutlined';
DatabaseOutlined.inheritAttrs = false;
export default DatabaseOutlined;