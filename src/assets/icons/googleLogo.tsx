import Svg, { Path } from "react-native-svg";

export const GoogleLogo = (props: any) => {
  return (
    <Svg
      width={32}
      height={32}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M31.36 16.363c0-1.134-.102-2.225-.291-3.273h-15.07v6.19h8.611c-.37 2-1.498 3.694-3.192 4.828v4.015h5.17c3.026-2.786 4.771-6.887 4.771-11.76Z"
        fill="#4285F4"
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M16 31.999c4.32 0 7.941-1.433 10.588-3.876l-5.17-4.015c-1.433.96-3.266 1.527-5.418 1.527-4.168 0-7.695-2.814-8.953-6.596H1.702v4.146C4.334 28.414 9.745 31.999 16 31.999Z"
        fill="#34A853"
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M7.047 19.04A9.618 9.618 0 0 1 6.545 16c0-1.055.182-2.08.502-3.04V8.814H1.702A15.994 15.994 0 0 0 0 16c0 2.582.618 5.025 1.702 7.185l5.345-4.145Z"
        fill="#FBBC05"
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M16 6.363c2.349 0 4.458.808 6.116 2.393l4.589-4.589C23.934 1.585 20.312 0 16 0 9.745 0 4.334 3.585 1.702 8.814l5.345 4.146C8.305 9.178 11.832 6.363 16 6.363Z"
        fill="#EA4335"
      />
    </Svg>
  );
};
