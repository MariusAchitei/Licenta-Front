export function PageTitle({ subtitle, title, description }) {
  return (
    <div className="container mx-auto">
      <div className="-mx-4 flex flex-wrap">
        <div className="w-full px-4">
          <div className="mx-auto mb-[60px] max-w-[520px] text-center lg:mb-20">
            <span className="text-primary mb-2 block text-lg font-semibold dark:text-white">
              {subtitle}
            </span>
            <h2 className="text-dark mb-4 text-3xl font-bold dark:text-white sm:text-[40px]/[48px]">
              {title}
            </h2>
            <p className="text-body-color dark:text-dark-6 text-base dark:text-white">
              {description}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
