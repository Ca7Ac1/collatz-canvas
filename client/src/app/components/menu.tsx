import React from 'react'

type MenuProps = {
  textCallback: Function
};

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
        <input type="text" id='collatzNumber' onKeyDown={(event) => {
          if (event.key === "Enter") {
            props.textCallback(document.getElementById("collatzNumber"));
          }
        }} />
      </div>
    </div>
  )
}