import clsx from "clsx";

export default function RecipePageIndexPage() {
  return (
    <div
      className={clsx(
        "grid min-h-screen grid-cols-1 grid-rows-[10rem_auto_10rem]",
      )}
      data-theme="recipe-page"
    >
      <header className={clsx("col-[1] row-[1] bg-red-300")}></header>
      <main className={clsx("col-[1] row-[2] bg-[var(--test)]")}>
        <h1 className={clsx("text-[5rem]")}>Index Page</h1>
      </main>
      <footer className={clsx("col-[1] row-[3] bg-red-300")}></footer>
    </div>
  );
}
