import * as Select from '@radix-ui/react-select'

export function SelectItem({ children, ...props }) {
  return (
    <Select.Item
      className="cursor-pointer text-sm font-medium text-[#3A3A3C] outline-none py-1 font-inter data-[highlighted]:bg-green-300 px-4 data-[highlighted]:text-gray-200 transition-colors duration-300"
      {...props}
    >
      <Select.ItemText>{children}</Select.ItemText>
    </Select.Item>
  )
}
