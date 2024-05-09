import React from "react";
import { Grid } from '@mui/material';

import './CommonTitle.css';

const CommonTitle = ({ title }) => {
    if(!title){
        return null;
    }
    return (
        <Grid container spacing={2} className="common-title" >
            <Grid item xs={12}  >
              <h5 className="common-title-h5">{title}</h5>
            </Grid>
        </Grid>
    )
}
export default CommonTitle;

// import React from "react";
// import { Grid } from '@mui/material';
// import './CommonTitle.css';

// const CommonTitle = ({ title }) => {
//   if (!title) {
//     return null;
//   }

//   const words = title.split(' ');
//   const animatedTitle = words.map((word, index) => (
//     <span key={index} style={{ '--i': index + 1 }}>
//       {word}
//     </span>
//   ));

//   return (
//     <Grid container spacing={2} className="common-title">
//       <Grid item xs={12} >
//         <div className="waviy">
//           {animatedTitle.map((word, index) => (
//             <React.Fragment key={index}>
//               {index > 0 && '\u00A0'} {/* Adds space between words */}
//               {word}
//             </React.Fragment>
//           ))}
//         </div>
//       </Grid>
//     </Grid>
//   );
// };

// export default CommonTitle;
