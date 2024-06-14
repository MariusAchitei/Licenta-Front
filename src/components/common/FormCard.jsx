export function FormCard(props) {
  return (
    <div class="mb-5 w-11/12 overflow-x-auto rounded-3xl bg-white p-5 shadow-lg dark:bg-gray-800 dark:text-white lg:w-9/12 lg:p-10">
      {props.children}
    </div>
  );
}
