export function PinInput() {
  return (
    <form className="mx-auto max-w-sm items-center justify-center">
      <div className="mb-2 flex items-center justify-center space-x-2 rtl:space-x-reverse">
        <div>
          <label for="code-1" className="sr-only">
            First code
          </label>
          <input
            type="text"
            maxlength="1"
            data-focus-input-init
            data-focus-input-next="code-2"
            id="code-1"
            class="focus:ring-primary-500 focus:border-primary-500 dark:focus:ring-primary-500 dark:focus:border-primary-500 block h-9 w-9 rounded-lg border border-gray-300 bg-white py-3 text-center text-sm font-extrabold text-gray-900 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400"
            required
          />
        </div>
        <div>
          <label for="code-2" class="sr-only">
            Second code
          </label>
          <input
            type="text"
            maxlength="1"
            data-focus-input-init
            data-focus-input-prev="code-1"
            data-focus-input-next="code-3"
            id="code-2"
            class="focus:ring-primary-500 focus:border-primary-500 dark:focus:ring-primary-500 dark:focus:border-primary-500 block h-9 w-9 rounded-lg border border-gray-300 bg-white py-3 text-center text-sm font-extrabold text-gray-900 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400"
            required
          />
        </div>
        <div>
          <label for="code-3" class="sr-only">
            Third code
          </label>
          <input
            type="text"
            maxlength="1"
            data-focus-input-init
            data-focus-input-prev="code-2"
            data-focus-input-next="code-4"
            id="code-3"
            class="focus:ring-primary-500 focus:border-primary-500 dark:focus:ring-primary-500 dark:focus:border-primary-500 block h-9 w-9 rounded-lg border border-gray-300 bg-white py-3 text-center text-sm font-extrabold text-gray-900 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400"
            required
          />
        </div>
        <div>
          <label for="code-4" class="sr-only">
            Fourth code
          </label>
          <input
            type="text"
            maxlength="1"
            data-focus-input-init
            data-focus-input-prev="code-3"
            data-focus-input-next="code-5"
            id="code-4"
            class="focus:ring-primary-500 focus:border-primary-500 dark:focus:ring-primary-500 dark:focus:border-primary-500 block h-9 w-9 rounded-lg border border-gray-300 bg-white py-3 text-center text-sm font-extrabold text-gray-900 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400"
            required
          />
        </div>
      </div>
      <p
        id="helper-text-explanation"
        class="mt-2	 text-center text-sm text-gray-500 dark:text-gray-400"
      >
        Please introduce the 4 digit code we sent via email.
      </p>
    </form>
  );
}
