import React from 'react';
import Svg, { Path, Defs, ClipPath, G  } from 'react-native-svg';

const UserActive = (props) => {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width="45"
      height="45"
      fill="none"
      viewBox="0 0 36 58"
    >
      <Defs>
        <ClipPath id="clip2_104">
          <Path fill="#fff" d="M0 0H36V36H0z"></Path>
        </ClipPath>
      </Defs>
      <Path
        fill="#FE9300"
        fillRule="evenodd"
        d="M10.93 41.934q.097 1.152.215 2.082.12.925.28 1.695 1.65-1.406 2.77-3.2l.926.61q-.719 1.07-1.543 2.016-.824.941-1.832 1.789.305.898.766 1.617.304.45.558.625.258.176.516.176.273 0 .422-.121.152-.121.328-.535.176-.419.273-.856.098-.441.176-.953l1.008.64q-.129.544-.273 1.008-.141.465-.415 1.07-.222.497-.617.77-.39.274-.902.274-.578 0-1.106-.364-.527-.359-.992-1.156-.175-.305-.343-.664-.168-.363-.313-.809-1.504 1.102-3.39 2.047l-.704-1.09q2.16-.972 3.742-2.14-.222-.883-.398-2-.176-1.121-.305-2.531H6.402v2.496q.703-.14 1.336-.293.633-.153 1.145-.282l.078.59.047.496q-.512.13-1.184.29-.672.16-1.422.335v3.09q0 .496-.097.817-.094.32-.344.527-.246.207-.664.316-.414.114-1.04.18l-.831.094-.352-1.168 1.04-.094q.398-.031.628-.098.235-.062.348-.175.113-.114.137-.297.023-.184.023-.453v-2.496q-.816.175-1.57.32-.75.14-1.36.223l-.304-1.121q.675-.094 1.515-.239.84-.144 1.719-.32v-2.738H2v-1.086h3.25v-2.145q-.688.113-1.36.195-.671.079-1.265.125l-.078-1.039q.687-.066 1.469-.168.785-.105 1.57-.242.785-.136 1.504-.293.719-.16 1.262-.34L8.547 38q-.434.129-.988.258-.551.125-1.157.238v2.352H9.7q-.02-.305-.035-.625l-.031-.641-.13-3.215 1.138.031q0 .368.03 1.2.036.832.099 1.922.03.351.039.68.007.327.039.648h4.992v1.086h-4.91zm3.086-1.645q-.207-.305-.528-.687-.32-.387-.672-.762-.351-.375-.703-.703-.351-.328-.61-.54l.74-.75q.253.208.612.528.364.32.723.68.36.36.688.715.328.351.55.605l-.8.914zm17.072-1.441q-.032 1.968-.078 3.793-.016.78-.04 1.597-.023.817-.05 1.602-.024.785-.047 1.472-.024.688-.055 1.215-.031.512-.129.848-.097.336-.312.55-.215.22-.559.321-.344.106-.87.152l-1.38.114-.383-1.215 1.551-.098q.402-.031.61-.222.207-.192.257-.817.047-.847.086-1.96.04-1.114.07-2.255.036-1.144.051-2.191.016-1.05.032-1.77L26.193 40q-.222.527-.465 1.04-.238.51-.511 1.023l-1.086-.575q.703-1.183 1.27-2.633.57-1.449.921-2.855l1.168.238q-.191.672-.402 1.32-.207.649-.446 1.29h4.446zm-8.926-2.434q-.129.527-.305 1.16-.175.633-.414 1.305h2.477v11.266h-5.453V38.879h1.648q.238-.64.414-1.328.176-.688.336-1.407l1.297.27zm.64 3.617h-3.218v3.793h3.219v-3.793zm4.735 6.32q-.559-1.152-1.16-2.136-.598-.985-1.063-1.656l.942-.641q.547.723 1.16 1.707.617.98 1.144 2.04l-1.023.687zm-4.734 2.672v-4.03h-3.22v4.03h3.22z"
      ></Path>
      <G clipPath="url(#clip2_104)">
        <Path
          fill="#FE9300"
          fillRule="nonzero"
          d="M18 19.8c-4.5 0-8.1-4.052-8.1-9s3.6-9 8.1-9 8.1 4.052 8.1 9-3.6 9-8.1 9zm0-1.8c3.454 0 6.3-3.201 6.3-7.2S21.454 3.6 18 3.6c-3.454 0-6.3 3.201-6.3 7.2S14.546 18 18 18zM4.5 27.9c0-.836.16-1.64.48-2.412a6.24 6.24 0 011.367-2.045 6.24 6.24 0 012.046-1.365 6.241 6.241 0 012.413-.478h14.388a6.307 6.307 0 016.306 6.3c0 .836-.16 1.64-.48 2.412a6.238 6.238 0 01-1.367 2.045 6.24 6.24 0 01-2.046 1.365 6.239 6.239 0 01-2.413.478H10.806A6.307 6.307 0 014.5 27.9zm1.8 0c0 2.481 2.02 4.5 4.506 4.5h14.388a4.46 4.46 0 001.724-.34 4.456 4.456 0 001.462-.976c.422-.422.748-.909.977-1.46A4.458 4.458 0 0029.7 27.9c0-2.481-2.02-4.5-4.506-4.5H10.806c-.597 0-1.172.113-1.724.34a4.457 4.457 0 00-1.462.976 4.456 4.456 0 00-.977 1.46A4.457 4.457 0 006.3 27.9z"
        ></Path>
      </G>
    </Svg>
  );
};

export default UserActive;