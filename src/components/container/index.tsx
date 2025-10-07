import { createEffect, For, onCleanup } from 'solid-js';
import store from '../../store';
import { SingleUnit } from '../single-unit';
import { refresh } from '../../utils/time';
import { TimeSection } from '../time-section';

const names = ['H', 'M', 'S'] as const;

export const Container = () => {
  const timeSectionsStore = store.useTimeSections()

  createEffect(() => {
    refresh();

    const timer = setInterval(refresh, 1000);

    store.setTimer(timer);

    onCleanup(() => {
      clearInterval(store.getTimer());
    });
  });

  return (
    <div class="flex h-full w-full flex-col items-center justify-center gap-12">
      <div class="hidden w-8/12 justify-between text-3xl font-bold md:flex lg:w-5/12 lg:max-w-6/12 lg:min-w-4/12">
        <For each={timeSectionsStore()}>
          {(times, idx) => {
            return (
              <div class="space-y-10">
                <div class="grid grid-cols-2 gap-4">
                  <SingleUnit item="1" value={names[idx()]} />
                  <SingleUnit item="0" value={names[idx()]} />
                </div>
                <div class="flex gap-4">
                  <For each={times}>
                    {(time) => {
                      return <TimeSection value={time} />;
                    }}
                  </For>
                </div>
              </div>
            );
          }}
        </For>
      </div>
      <p class="visible p-2 text-center text-2xl text-amber-400 md:hidden">
        You have to use a larger screen to see the time.
      </p>

      <p class="text-4xl font-extrabold text-blue-500">Binary clock</p>
    </div>
  );
};
