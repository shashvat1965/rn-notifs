import * as React from "react";
import Svg, { Rect, G, Path, Defs, ClipPath } from "react-native-svg";
const SearchSVGComponent = (props) => (
    <Svg
        width={50}
        height={50}
        viewBox="0 0 50 50"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
    >
        <Rect width={50} height={50} rx={15} fill="#3B3B3B" />
        <G clipPath="url(#clip0_16_65)">
            <Path
                d="M28.4999 27H27.7099L27.4299 26.73C28.6299 25.33 29.2499 23.42 28.9099 21.39C28.4399 18.61 26.1199 16.39 23.3199 16.05C19.0899 15.53 15.5299 19.09 16.0499 23.32C16.3899 26.12 18.6099 28.44 21.3899 28.91C23.4199 29.25 25.3299 28.63 26.7299 27.43L26.9999 27.71V28.5L31.2499 32.75C31.6599 33.16 32.3299 33.16 32.7399 32.75C33.1499 32.34 33.1499 31.67 32.7399 31.26L28.4999 27ZM22.4999 27C20.0099 27 17.9999 24.99 17.9999 22.5C17.9999 20.01 20.0099 18 22.4999 18C24.9899 18 26.9999 20.01 26.9999 22.5C26.9999 24.99 24.9899 27 22.4999 27Z"
                fill="white"
            />
        </G>
        <Defs>
            <ClipPath id="clip0_16_65">
                <Rect
                    width={24}
                    height={24}
                    fill="white"
                    transform="translate(13 13)"
                />
            </ClipPath>
        </Defs>
    </Svg>
);
export default SearchSVGComponent;
