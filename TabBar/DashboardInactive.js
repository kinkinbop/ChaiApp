import React from 'react';
import Svg, { Path, Defs, ClipPath, G } from 'react-native-svg';

const DashboardInactive = (props) => {
  return (
    <Svg 
      width={24} 
      height={24} 
      viewBox="0 0 36 58" 
      {...props}
    >
      <Defs>
        <ClipPath id="clip2_119">
          <Path fill="#fff" d="M0 0H36V36H0z"></Path>
        </ClipPath>
      </Defs>
      <Path
        fill="#85898D"
        fillRule="evenodd"
        d="M13.356 46.434q1.137 1.613 3.106 3.101l-.832.867q-.914-.738-1.633-1.468-.719-.727-1.281-1.493-.59.786-1.39 1.52-.802.734-1.888 1.52l-.738-.895q1.153-.77 1.969-1.527.816-.762 1.375-1.625-.621-1.09-1-2.258-.375-1.168-.582-2.512-.129.227-.266.457-.133.23-.277.457L9.021 42q.449-.625.84-1.383.394-.761.702-1.558.313-.801.536-1.594.226-.793.355-1.465l1.121.273q-.129.575-.297 1.145-.168.566-.375 1.145h4.16v1.148h-1.09q-.097 1.09-.226 2.035-.125.941-.309 1.758-.183.816-.449 1.547-.265.726-.633 1.383zm-11.55-3.426q1.105-.543 1.968-1.223.864-.68 1.536-1.433H2.302v-.977h3.281v-3.277l1.07.062v3.215h2.88v.977h-2.88v2.976h-1.07V41.36q-.61.707-1.402 1.34-.793.63-1.801 1.172l-.574-.863zm7.535-6.145q-.11.258-.27.563-.16.304-.347.617-.184.309-.375.598-.192.289-.352.496l-.8-.45q.144-.19.32-.46.175-.274.343-.57.168-.298.32-.606.153-.313.266-.586l.895.398zm-5.438 2.258q-.082-.258-.203-.566-.117-.313-.262-.617-.144-.305-.289-.575-.144-.273-.253-.484l.847-.316q.11.175.254.449.145.27.29.582.144.312.269.633.129.316.226.59l-.879.304zm7.328 1.04q.176 1.519.512 2.776.336 1.254.926 2.376.527-1.153.8-2.504.274-1.352.434-3.098h-2.48l-.192.45zm-2.386 3.425q-.465-.563-.985-1.113-.52-.551-1.03-1l.64-.594q.414.32.972.875.563.55 1.043 1.094l-.64.738zm-.43 5.902q-.45-.273-.93-.52-.48-.245-.976-.503-.688.512-1.656.976-.97.465-2.375.926l-.56-1.008q1.2-.351 2.056-.695.855-.344 1.48-.727-1.234-.593-2.383-1.023.223-.371.446-.754.226-.383.433-.765H2.095v-.961H4.43q.144-.305.261-.582.121-.282.22-.54l1.023.336q-.082.207-.164.403l-.157.383h3.328v.91q-.32.672-.691 1.265-.367.59-.895 1.121.352.176.72.344.37.168.769.36l-.43 1.054zm-3.89-2.96q.433.175.878.363.45.183.946.406.48-.418.808-.879.328-.465.602-1.023h-2.61q-.144.3-.304.582-.16.28-.32.55zm18.095-3.376q-.3.145-.711.328-.406.184-.871.376v4.64q0 .496-.082.809-.078.312-.29.504-.206.191-.558.277-.351.09-.894.121l-.703.066-.305-1.09.785-.062q.285-.016.469-.066.187-.047.289-.145.105-.094.144-.27.04-.175.04-.449v-3.886q-.606.238-1.176.449-.567.207-.97.336l-.237-1.137q.433-.129 1.062-.36.633-.234 1.32-.503v-3.024h-1.855v-1.105h1.855v-2.895l1.106.032v2.863h1.504v1.105h-1.504v2.59q.414-.175.758-.336.347-.16.617-.289l.113.64.094.481zm5.906.29v1.773h2.496v5.203h-1.074v-.832H26.03v.848h-1.074v-5.22h2.48v-1.773H24.32q-.05 1.137-.18 2.059-.124.918-.351 1.727-.223.804-.559 1.543-.336.734-.816 1.52l-1.023-.61q.543-.91.894-1.735.356-.824.57-1.765.215-.946.301-2.106.09-1.16.09-2.73v-4.465h8.031v3.875H24.35v1.242q0 .246-.015.469h3.101V41.12l1.09.031v1.313h3.551v.976h-3.55zm-4.176-5.536v1.84h5.809v-1.84H24.35zm5.598 8.336H26.03v2.336h3.918v-2.336z"
      ></Path>
      <G fill="#85898D" fillRule="nonzero" clipPath="url(#clip2_119)">
        <Path d="M14.769 3.172h6.33V26.5h-6.33V3.172zM6.336 13.98h6.327V26.5H6.336V13.98zM23.204 9.797h6.33v16.706h-6.33V9.797zM2.25 28.71h31.5v4.117H2.25V28.71z"></Path>
        <Path d="M17.078 5.612h4.02v20.89h-4.02V5.613zM8.642 16.353h4.021v10.15h-4.02v-10.15zM25.513 12.004h4.02V26.5h-4.02V12.004zM4.327 30.785H33.75v2.043H4.327v-2.044z"></Path>
      </G>
    </Svg>
  );
};

export default DashboardInactive;