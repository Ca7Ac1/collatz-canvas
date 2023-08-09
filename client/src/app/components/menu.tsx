import React from 'react'

type MenuProps = {
  loadCallback: () => void
  displayCallback: (inputValue: Array<number>) => void
};

const delay = (ms: number) => new Promise(
  resolve => setTimeout(resolve, ms)
);

async function getData(inputValue: number): Promise<Array<number>> {
  return [inputValue];
}

export function Menu(props: MenuProps) {
  return (
    <div className="flex min-h-screen flex-col items-center justify-between">
      <div className="font-mo no ">
        <p style={{ fontSize: 40 }} className="fixed left-0 top-0 flex w-full justify-center pb-2 pt-2 dark:border-neutral-800 dark:bg-zinc-500/30">
          Collatz Canvas
        </p>
      </div>

      <div style={{ color: 'black', display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
        <p>
          Enter your starting Collatz Number: &nbsp;
        </p>
        <input type="number" pattern="[0-9]*" min="1" onKeyDown={async (event) => {
          if (event.key === "Enter") {
            const element = event.currentTarget as HTMLInputElement
            const inputValue = +element.value;

            if (element.value != "" && Number.isInteger(inputValue) && inputValue > 0) {
              props.loadCallback();

              await new Promise((r) => setTimeout(r, 1000));

              props.displayCallback(await getData(inputValue));
            }
          }
        }} />
      </div>
    </div>
  )
}