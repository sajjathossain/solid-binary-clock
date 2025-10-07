import { For, Show } from 'solid-js';
import { SingleUnit } from '../single-unit';

type TProps = {
  value: string | undefined;
};

export const TimeSection = (prop: TProps) => {
  const { value = '' } = prop;

  const items = value.split('');

  return (
    <Show when={value}>
      <div class="flex flex-col gap-6">
        <div class="grid gap-4">
          <For each={items}>
            {(item, _idx) => {
              const value = Math.pow(2, Math.abs(_idx() - 3));
              return <SingleUnit item={item} value={value} />;
            }}
          </For>
        </div>
        <div class="grid aspect-square w-full place-items-center rounded-full p-2">
          {parseInt(value, 2)}
        </div>
      </div>
    </Show>
  );
};
