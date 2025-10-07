type TProps = {
  item: string;
  value: number | string;
};

export const SingleUnit = (props: TProps) => {
  const { item, value } = props;

  return (
    <div
      class={`grid aspect-square w-fit place-items-center rounded-full p-2
        ${item === '0' && 'text-blue-500'}
        ${item === '1' && 'text-white'}
        ${item === '1' && 'bg-blue-700'}
        ${item === '0' && 'bg-gray-700'}
      `}
    >
      {value}
    </div>
  );
};
