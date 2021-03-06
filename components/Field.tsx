import * as Formik from "formik";
import cx from "classnames";
import { ExclamationCircle20 } from "./icons/ExclamationCircleIcon";

interface Props extends Formik.FieldAttributes<any> {
  name: string;
  className?: string;
  invalid?: boolean;
}

export const fieldClassName = (invalid?: boolean) =>
  cx(
    "mt-1 px-3 py-2 bg-gray-500 text-white placeholder-gray-300 border border-gray-600 block w-full shadow-sm sm:text-sm rounded-md outline-none",
    "focus:outline-none focus:ring-1 focus:ring-pink-500 focus:border-pink-500",
    invalid &&
      "border-red-300 text-red-300 placeholder-red-300 focus:outline-none focus:ring-red-500 focus:border-red-500"
  );

export function Field({ name, className, invalid, ...rest }: Props) {
  return (
    <>
      <div className={cx("mt-1 z-20 relative rounded-md shadow-sm", className)}>
        <Formik.Field
          {...rest}
          name={name}
          className={fieldClassName(invalid)}
        />
        <Formik.ErrorMessage name={name}>
          {() => (
            <div className="absolute z-30 inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
              <ExclamationCircle20 className="h-5 w-5 text-red-300" />
            </div>
          )}
        </Formik.ErrorMessage>
      </div>
      <Formik.ErrorMessage
        name={name}
        className="mt-2 text-sm text-red-300"
        component="p"
      />
    </>
  );
}
