// import React, { useState } from 'react';
// import { DateRange, DayPicker } from 'react-day-picker';
// import {format} from 'date-fns'
// import { addDays } from 'date-fns/esm';
// const pastMonth = new Date(2020, 10, 15);
// const AppoinmentsBanner = () => {
//     // const D =  {DateRange()
//     //     from : pastMonth , 
//     //     to : addDays(pastMonth , 4)

//     // }
//     // defaultSelected
//     // const [selected, setSelected] = useState(new Date())
//     const [range , setRange] = useState(DateRange())

//     return (
//         <div>
//             <DayPicker
//                 mode="range"
//                 min = {1}
//                 selected={range}
//                 onSelect={setRange}

//             />
//             {format(range.from , 'PPP')} - {format(range.to , 'PPP')}
//         </div>
//     );
// };

// export default AppoinmentsBanner;