import TipCalculator from "./components/TipCalculator";

export default function App() {
  return (
    <div>
      <TipCalculator />
    </div>
  );
}

// function TipCalculator() {
//   const [bill, setBill] = useState("");
//   const [percentage1, setPercentage1] = useState(0);
//   const [percentage2, setPercentage2] = useState(0);

//   const tip = bill * ((percentage1 + percentage2) / 2 / 100);

//   function handleReset() {
//     setBill("");
//     setPercentage1(0);
//     setPercentage2(0);
//   }

//   return (
//     <div>
//       <BillInput bill={bill} onSetBill={setBill} />
//       <ServiceInput percentage={percentage1} onSelect={setPercentage1}>
//         How did you like the service
//       </ServiceInput>
//       <ServiceInput percentage={percentage2} onSelect={setPercentage2}>
//         How did your friend like the service
//       </ServiceInput>
//       {bill > 0 && (
//         <>
//           <FinalResult bill={bill} tip={tip} />
//           <ResetButton onReset={handleReset} />
//         </>
//       )}
//     </div>
//   );
// }

// function BillInput({ bill, onSetBill }) {
//   return (
//     <div>
//       <label>How much was the bill?</label>
//       <input
//         type="text"
//         placeholder="Bill value"
//         value={bill}
//         onChange={(e) => onSetBill(Number(e.target.value))}
//       />
//     </div>
//   );
// }
// function ServiceInput({ percentage, onSelect, children }) {
//   return (
//     <div>
//       <label>{children}</label>
//       <select
//         value={percentage}
//         onChange={(e) => onSelect(Number(e.target.value))}
//       >
//         <option value="10">It was good 10%</option>
//         <option value="0">Dissatified 0%</option>
//         <option value="5">It was ok 5%</option>
//         <option value="15">It was amazing 15%</option>
//       </select>
//     </div>
//   );
// }
// function FinalResult({ bill, tip }) {
//   return (
//     <div>
//       <h3>
//         You pay ${bill + tip} (${bill} + ${tip} tip)
//       </h3>
//     </div>
//   );
// }
// function ResetButton({ onReset }) {
//   return (
//     <div>
//       <button onClick={onReset}>Reset</button>
//     </div>
//   );
// }
