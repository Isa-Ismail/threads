//app/page.tsx
'use client';

import { sequence } from "@/constant";
import React from "react";

export default function Home() {
  
  const [s, setS] = React.useState("'A'")

function findRanges(arr:string[]) {
    let ranges = [];
    let start = null;
    let end = null;

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === s) {
            if (start === null) {
                start = i + 1;
            }
            end = i + 1;
        } else if (start !== null) {
            ranges.push(`${start}:${end}`);
            start = null;
            end = null;
        }
    }

    if (start !== null) {
        ranges.push(`${start}:${end}`);
    }

    return ranges.join(', '); 
}

const sequenceArray = sequence.trim().split('\n').map(item => item.trim());

const ranges = findRanges(sequenceArray);



  return (
    <div>
      <button className="bg-white p-4 rounded-md" onClick={()=> s==="'A'"?setS("'N'"):setS("'A'")}>toggle</button>
      <p className="text-white">{s==="'A'"?'Apnea':'Non Apnea' }<br/>{ranges}</p>
    </div>
  )
}