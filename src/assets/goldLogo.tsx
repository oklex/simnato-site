import React, { FC } from "react";
import styled, { css } from "styled-components";

interface ResizableSVGProps {
  scale?: string | number;
  center?: boolean;
  padding?: string;
}

export const GoldBrandLogo: FC<ResizableSVGProps> = ({
  scale = "100%",
  center,
  padding,
}) => {
  return (
    <Wrapper center={center} padding={padding}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={scale}
        height={scale}
        viewBox="0 0 507 507"
        fill="none"
      >
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M494.245 238.858C502.559 246.05 506.847 253.684 506.996 261.552C507.298 277.653 489.845 293.646 457.855 306.574C422.695 320.781 371.599 330.861 310.085 335.72C291.397 337.127 272.359 337.839 253.498 337.839C234.637 337.839 215.599 337.127 196.915 335.72C135.401 330.861 84.3008 320.781 49.1452 306.574C17.1553 293.646 -0.297832 277.657 0.00384642 261.552C0.156697 253.688 4.44455 246.054 12.7668 238.858C21.2742 231.497 33.7918 224.796 49.9658 218.943C85.1374 206.213 136.31 198.051 197.969 195.328C203.514 188.88 209.072 182.439 214.622 176.008L214.632 175.997L215.836 174.601C216.853 173.423 217.87 172.244 218.887 171.067C221.409 168.144 223.929 165.223 226.443 162.305C205.857 140.412 169.681 137.781 140.587 135.665L140.586 135.665L140.52 135.66C132.798 135.099 125.501 134.569 119.416 133.702L116.5 133.288L119.42 132.91C140.139 130.239 153.988 128.381 171.546 125.171C187.917 122.07 201.07 117.122 211.762 110.055C221.339 103.724 228.748 95.7837 234.424 85.7842C245.032 67.0898 247.873 44.1664 250.881 19.8995L250.883 19.8783C251.571 14.3195 252.283 8.57158 253.096 2.88401L253.506 0L253.916 2.88401C254.729 8.56756 255.441 14.3155 256.129 19.8743L256.131 19.8959L256.131 19.8965C259.139 44.163 261.98 67.0861 272.588 85.7802C278.264 95.7797 285.677 103.72 295.25 110.051C305.942 117.122 319.099 122.066 335.47 125.171C353.024 128.381 366.873 130.235 387.592 132.91L390.512 133.288L387.596 133.702C381.49 134.567 374.173 135.102 366.426 135.665L366.425 135.665C337.331 137.781 301.155 140.412 280.569 162.305C282.532 164.582 284.498 166.861 286.465 169.14L286.546 169.234C288.058 170.986 289.57 172.739 291.083 174.493C297.068 181.427 303.062 188.374 309.043 195.328C370.702 198.051 421.875 206.217 457.046 218.943C473.22 224.796 485.738 231.497 494.245 238.858ZM112.228 294.615L112.695 294.076H112.719C140.948 261.379 167.166 230.998 192.845 201.229C146.901 205.171 98.1538 211.281 52.5039 228.79C24.9908 240.197 11.8457 251.52 13.4506 262.437C16.9179 286.036 88.0939 302.157 122.023 306.268C165.034 312.024 209.248 314.944 253.426 314.944H253.623C297.804 314.944 342.014 312.024 385.022 306.268H385.026C418.954 302.157 490.13 286.036 493.598 262.437C495.202 251.52 482.061 240.197 454.536 228.786C408.898 211.281 360.151 205.167 314.208 201.229C339.887 231.002 366.104 261.379 394.333 294.076L394.8 294.615L394.08 294.728C391.281 295.159 388.65 295.552 386.076 295.937L385.874 295.967C383.722 296.289 381.607 296.606 379.467 296.932L379.217 296.973L379.068 296.775C366.687 280.644 354.318 264.539 341.943 248.427L333.587 237.547C327.91 230.154 322.229 222.757 316.544 215.354L314.876 213.182L305.149 200.517L301.232 200.316L298.093 200.155L298.091 200.155C292.695 199.877 287.253 199.598 281.659 199.318L323.745 302.447L323.182 302.487L322.562 302.533L321.338 302.622L321.333 302.623L320.193 302.706C319.724 302.741 319.261 302.775 318.801 302.809C316.931 302.946 315.121 303.078 313.25 303.211L312.929 303.235L312.494 302.008C300.604 268.277 288.312 233.4 276.289 199.23C271.418 199.077 267.122 198.924 262.83 198.759C258.659 213.911 259.017 229.9 259.367 245.366L259.37 245.503C259.409 247.251 259.448 248.991 259.479 250.732C259.475 258.725 259.699 266.85 259.915 274.713L259.915 274.716L259.915 274.727L259.918 274.805C260.187 284.507 260.465 294.535 260.316 304.402L260.308 304.796H246.72L246.712 304.402C246.567 294.535 246.841 284.503 247.11 274.801L247.112 274.737L247.112 274.734V274.734V274.733V274.732C247.329 266.866 247.553 258.733 247.549 250.74C247.581 248.969 247.62 247.202 247.66 245.431L247.662 245.362C248.011 229.9 248.369 213.911 244.198 198.759C239.906 198.928 235.615 199.077 230.739 199.23C218.716 233.4 206.424 268.277 194.534 302.008L194.1 303.235L193.778 303.211C191.976 303.083 190.231 302.955 188.437 302.824L188.388 302.82L188.231 302.809L187.353 302.744L187.352 302.744C186.219 302.659 185.059 302.573 183.847 302.487L183.283 302.447L225.37 199.318C219.618 199.606 214.025 199.893 208.482 200.178L208.454 200.179L205.797 200.316L201.879 200.517L198.742 204.602C190.174 215.762 181.616 226.906 173.063 238.041C158.023 257.618 143.003 277.179 127.964 296.775L127.815 296.973L127.565 296.932C125.748 296.653 123.955 296.385 122.14 296.114L122.136 296.113L122.135 296.113L122.135 296.113L121.158 295.967L120.949 295.936C118.377 295.552 115.748 295.159 112.948 294.728L112.228 294.615ZM287.647 194.733H287.647H287.648L287.655 194.733C288.899 194.757 290.144 194.781 291.393 194.805L291.389 194.809L292.671 194.834C295.384 194.886 298.118 194.939 300.894 194.994L293.448 185.301C288.255 178.547 283.079 171.81 277.777 164.895C276.701 166.52 275.683 168.058 274.7 169.545L274.684 169.57L274.002 170.6L273.381 171.54L271.462 174.44L271.759 175.167L271.839 175.361C274.496 181.851 277.069 188.135 279.708 194.576C282.367 194.631 285.005 194.682 287.647 194.733ZM269.302 179.424C266.961 184.484 265.461 189.339 264.037 194.258H264.041H274.487C273.316 190.94 272.174 187.662 270.987 184.255C270.584 183.101 270.177 181.933 269.762 180.743L269.302 179.424ZM235.088 186.907C234.225 189.38 233.378 191.808 232.513 194.258H242.959C241.539 189.339 240.035 184.484 237.698 179.424C237.566 179.802 237.434 180.178 237.304 180.552L237.039 181.311L236.659 182.402L236.449 183.005L236.229 183.637L235.972 184.371L235.804 184.854C235.599 185.44 235.397 186.022 235.194 186.601L235.106 186.855L235.088 186.907ZM213.544 185.301L206.098 194.994C208.875 194.939 211.609 194.886 214.322 194.834L215.603 194.809C219.505 194.737 223.374 194.661 227.288 194.58C230.056 187.839 232.747 181.266 235.534 174.444L233.696 171.665C232.28 169.521 230.812 167.305 229.215 164.895C224.543 170.985 219.965 176.944 215.392 182.895L213.544 185.301ZM243.997 168.898C248.39 177.208 251.583 187.042 253.498 198.16V198.164C255.413 187.042 258.606 177.212 262.999 168.902C268.65 158.218 276.329 150.001 285.83 144.47C295.339 138.642 305.439 135.561 314.3 133.388C283.437 128.139 260.388 108.164 253.498 80.6879C246.608 108.164 223.559 128.139 192.696 133.388C201.557 135.556 211.653 138.638 221.17 144.47C230.667 149.997 238.35 158.214 243.997 168.898ZM261.627 348.214C262.773 379.737 263.401 411.803 264.004 442.815H264.012C264.342 459.878 264.688 477.52 265.118 494.868V495.033L265.001 495.154L253.51 507L241.905 495.033V494.868C242.316 478.149 242.649 461.156 242.971 444.676L242.971 444.669L243.007 442.832L243.009 442.751L243.009 442.744C243.612 411.755 244.235 379.712 245.385 348.214L245.397 347.828H261.615L261.627 348.214ZM340.393 343.356L340.276 343.07L334.834 343.658L333.64 343.787C331.764 343.989 329.88 344.193 327.932 344.402L327.417 344.458L327.582 344.929C331.597 356.314 335.594 367.672 339.584 379.01L339.678 379.277L339.701 379.341L339.708 379.362L341.692 384.999C344.814 393.872 347.935 402.738 351.056 411.599L351.273 412.218L363.533 400.03L363.437 399.789C355.758 380.973 348.088 362.188 340.389 343.356H340.393ZM423.504 327.961L423.673 328.154H423.681C426.227 331.106 428.781 334.063 431.351 337.039L431.625 337.357L418.066 347.614L417.812 347.284C415.742 344.59 413.67 341.892 411.589 339.182L411.336 338.853C409.757 336.797 408.173 334.734 406.582 332.663L406.212 332.184L406.811 332.04C412.43 330.676 417.607 329.409 423.09 328.061L423.504 327.961ZM172.165 343.658L166.727 343.07L166.61 343.356C158.912 362.184 151.241 380.973 143.562 399.789L143.466 400.03L155.726 412.218L155.943 411.599C158.18 405.251 160.415 398.9 162.651 392.545C163.503 390.125 164.355 387.705 165.206 385.285C169.929 371.862 174.663 358.415 179.417 344.929L179.582 344.458L179.067 344.402C177.539 344.238 176.052 344.077 174.575 343.918C173.77 343.831 172.968 343.744 172.165 343.658ZM83.4989 327.953L83.8368 328.038C89.3433 329.389 94.5482 330.664 100.196 332.032L100.795 332.177L100.425 332.655L98.2029 335.547C95.1828 339.479 92.1835 343.383 89.1945 347.276L88.9411 347.606L75.3818 337.349L75.6554 337.032C78.2277 334.061 80.776 331.107 83.3243 328.153L83.33 328.146L83.4989 327.953Z"
          fill="url(#paint0_linear_203_10)"
        />
        <defs>
          <linearGradient
            id="paint0_linear_203_10"
            x1="497.136"
            y1="1.93676e-05"
            x2="20.3765"
            y2="494.075"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#9F7622" />
            <stop offset="0.468132" stop-color="#D4C5A6" />
            <stop offset="0.555" stop-color="#F2EBDD" />
            <stop offset="0.63558" stop-color="#D4C5A6" />
            <stop offset="1" stop-color="#9F7622" />
          </linearGradient>
        </defs>
      </svg>
    </Wrapper>
  );
};

const Wrapper = styled.div<{ center?: boolean; padding?: string }>`
  ${({ center }) =>
    center &&
    css`
      display: flex;
      justify-content: center;
    `}
  ${({ padding }) =>
    padding &&
    css`
      padding: ${padding};
    `}
`;
