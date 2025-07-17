export const collapseProps = {
  modelValue: {
    // 默认打开的item
    type: Array,
    default: [],
  },
  accordion: {
    // 是否开启手风琴模式
    type: Boolean,
    default: false,
  },
}

export const collapseItemProps = {
  name: {
    type: String,
    required: true,
  },
  title: {
    type: String,
  },
  disabled: {
    type: Boolean,
    default: false,
  },
}

// 作为privide和inject的key
export const collapseContextKey = Symbol('collapseContextKey')
