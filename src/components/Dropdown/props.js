import tooltipProps from '../Tooltip/props'
export default {
  ...tooltipProps, // 继承tooltip的props
  // 下拉列表数组
  menuOptions: {
    type: Array,
    required: true,
  },
  hideAfterClick: {
    type: Boolean,
    default: false,
  },
}
