import * as React from "react";
import { emails } from "config";
import { SubscribeForm } from "./SubscribeForm";

export function CTASubscribe() {
  const [didSubscribe, setDidSubscribe] = React.useState<boolean>(false);

  return (
    <div className="relative mb-24 sm:mb-32 sm:py-16 overflow-hidden">
      <div aria-hidden="true" className="hidden sm:block">
        <div className="absolute inset-y-0 left-0 w-1/2 bg-blueGray-700 rounded-r-3xl"></div>
        <svg
          className="absolute top-8 left-1/2 -ml-3"
          width="404"
          height="392"
          fill="none"
          viewBox="0 0 404 392"
        >
          <defs>
            <pattern
              id="8228f071-bcee-4ec8-905a-2a059a2cc4fb"
              x="0"
              y="0"
              width="20"
              height="20"
              patternUnits="userSpaceOnUse"
            >
              <rect
                x="0"
                y="0"
                width="4"
                height="4"
                className="text-pink-300"
                fill="currentColor"
              />
            </pattern>
          </defs>
          <rect
            width="404"
            height="392"
            fill="url(#8228f071-bcee-4ec8-905a-2a059a2cc4fb)"
          />
        </svg>
      </div>
      <div className="mx-auto max-w-md px-4 sm:max-w-3xl sm:px-6 lg:max-w-7xl lg:px-8">
        <div className="relative rounded-2xl px-6 py-10 bg-pink-500 overflow-hidden shadow-xl sm:px-12 sm:py-20">
          <div
            aria-hidden="true"
            className="absolute inset-0 -mt-72 sm:-mt-32 md:mt-0"
          >
            <svg
              className="absolute inset-0 h-full w-full"
              preserveAspectRatio="xMidYMid slice"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 1463 360"
            >
              <path
                className="text-fuchsia-400 text-opacity-40"
                fill="currentColor"
                d="M-82.673 72l1761.849 472.086-134.327 501.315-1761.85-472.086z"
              />
              <path
                className="text-fuchsia-600 text-opacity-40"
                fill="currentColor"
                d="M-217.088 544.086L1544.761 72l134.327 501.316-1761.849 472.086z"
              />
            </svg>
          </div>
          {!didSubscribe && (
            <div className="relative">
              <div className="sm:text-center">
                <h2 className="text-3xl font-extrabold text-white tracking-tight sm:text-4xl">
                  Subscribe to our newsletter
                </h2>
                <p className="mt-6 mx-auto max-w-2xl text-lg text-rose-100">
                  The latest news, updates, and notifications sent to your
                  inbox. We promise not to spam you!
                </p>
              </div>
              <SubscribeForm
                onSubscribeSuccess={() => {
                  setDidSubscribe(true);
                }}
                onSubscribeError={() => {
                  setDidSubscribe(false);
                  // TODO(cody): error handling/notifications
                }}
                className="mt-12 sm:mx-auto sm:max-w-lg"
              />
            </div>
          )}
          {didSubscribe && (
            <div className="relative">
              <div className="sm:text-center">
                <h2 className="text-3xl font-extrabold text-white tracking-tight sm:text-4xl">
                  Thanks for subscribing!
                </h2>
                <p className="mt-6 mx-auto max-w-2xl text-xs sm:text-lg text-white">
                  Please check your email for a subscription confirmation from{" "}
                  <code className="text-gray-200 font-bold">
                    {emails.support}
                  </code>
                </p>
                <p className="text-9xl text-center mt-6">🥳</p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
