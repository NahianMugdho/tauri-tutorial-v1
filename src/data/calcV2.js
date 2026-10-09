// প্রজেক্ট ১ — PDF ১: Tauri v2 + React(TS) Calculator (iPhone স্টাইল)
const project = {
  slug: "calculator-v2",
  no: 1,
  title: "Calculator (iPhone স্টাইল)",
  level: "শুরু",
  stack: ["Tauri v2", "React + TypeScript", "Rust"],
  widget: "calc-f64",
  intro:
    "এই প্রজেক্টে React শুধু UI দেখায়, আর হিসাবটা করে Rust। দুইটার মাঝে invoke() হলো সেতু। এটা বুঝলে যেকোনো Tauri অ্যাপ বানাতে পারবে।",
  steps: [
    { title: "Prerequisites ইনস্টল", desc: "Node.js LTS, Rust (rustup), Windows এ VS C++ Build Tools + WebView2। চেক: node -v, rustc --version" },
    { title: "প্রজেক্ট তৈরি", desc: "npx create-tauri-app দিয়ে react-ts টেমপ্লেট। vanilla-ts নয়, React এর জন্য react-ts লাগবে।" },
    { title: "ফাইল স্ট্রাকচার বোঝা", desc: "src/ = React (যা দেখা যায়), src-tauri/src/ = Rust (যা দেখা যায় না)।" },
    { title: "Rust Backend লেখা", desc: "lib.rs এ calculate command বানাও এবং invoke_handler এ register করো।" },
    { title: "React Frontend লেখা", desc: "Display.tsx, Calculator.tsx, App.tsx — এই ক্রমে।" },
    { title: "CSS", desc: "App.css এ calculator এর বাটন ও layout স্টাইল।" },
    { title: "চালাও ও Build", desc: "npm run tauri dev, তারপর npm run tauri build দিয়ে .exe।" },
    { title: "App এর নাম/সাইজ বদলানো", desc: "tauri.conf.json এ title, width, height।" },
  ],
  setupCommands: [
    "node -v   # v18+ হলে ঠিক",
    "rustc --version && cargo --version",
    "npx create-tauri-app tauri-calculator -m npm -t react-ts -y",
    "cd tauri-calculator",
    "npm install",
    "npm run tauri dev",
  ],
  files: [
    {
      n: 1,
      path: "src-tauri/src/lib.rs",
      lang: "rust",
      side: "Rust",
      role: "Rust এর সব command এখানে। React এখান থেকেই হিসাব করিয়ে নেয়।",
      why: "আগে backend লিখি, কারণ React যে নামে invoke করবে সেই নামটা এখানে ঠিক হয়ে যায়।",
      code: `// lib.rs — এখানে সব Tauri commands থাকবে

// #[tauri::command] মানে এই function টা React থেকে ডাকা যাবে
#[tauri::command]
fn calculate(a: f64, operator: String, b: f64) -> Result<f64, String> {
    // match মানে switch-case এর মতো
    match operator.as_str() {
        "+" => Ok(a + b),
        "-" => Ok(a - b),
        "*" => Ok(a * b),
        "/" => {
            if b == 0.0 {
                // Err পাঠালে React এ catch ব্লকে ধরা পড়বে
                Err(String::from("শূন্য দিয়ে ভাগ করা যায় না!"))
            } else {
                Ok(a / b)
            }
        }
        _ => Err(format!("অজানা অপারেটর: {}", operator)),
    }
}

// App চালু হলে এই function run হয় (main.rs এটাকে ডাকে)
#[cfg_attr(mobile, tauri::mobile_entry_point)]
pub fn run() {
    tauri::Builder::default()
        .plugin(tauri_plugin_opener::init())
        // নতুন command বানালে এখানে যোগ করতেই হবে, নইলে "invoke failed"
        .invoke_handler(tauri::generate_handler![calculate])
        .run(tauri::generate_context!())
        .expect("Tauri app চালু করতে সমস্যা হয়েছে");
}

// ---- Rust এর মূল ধারণা ----
// f64 = decimal number (64-bit float)
// String = text
// Result<f64, String> = হয় f64 দেবে (Ok), নাহয় String error দেবে (Err)
// match = switch-case এর মতো, কিন্তু আরও powerful`,
    },
    {
      n: 2,
      path: "src/components/Display.tsx",
      lang: "tsx",
      side: "React",
      role: "Calculator এর স্ক্রিন। শুধু দেখায়, নিজে কিছু হিসাব করে না।",
      why: "ছোট component দিয়ে শুরু করলে props এর ধারণা সহজে বোঝা যায়। আগে mkdir src/components।",
      code: `// Display.tsx — Calculator এর screen অংশ
// props: বাইরে (Calculator) থেকে যা পাঠানো হবে তার type

interface DisplayProps {
  value: string;      // বড় করে যেটা দেখাবে
  expression: string; // উপরের ছোট লেখা, যেমন "12 + 5 ="
}

export default function Display({ value, expression }: DisplayProps) {
  return (
    <div className="display">
      <div className="expression">{expression}</div>
      <div className="value">{value}</div>
    </div>
  );
}`,
    },
    {
      n: 3,
      path: "src/components/Calculator.tsx",
      lang: "tsx",
      side: "React ↔ Rust",
      role: "মূল component। এখানেই invoke() দিয়ে Rust কে ডাকা হয়।",
      why: "Display ও Rust command দুইটাই তৈরি, এখন এদের জোড়া লাগাও।",
      code: `// Calculator.tsx — মূল component

import { useState } from "react";
import { invoke } from "@tauri-apps/api/core"; // ← এটা দিয়েই Rust ডাকি
import Display from "./Display";

export default function Calculator() {
  // useState: এই মানগুলো বদলালে screen নিজে আপডেট হবে
  const [display, setDisplay] = useState("0");        // screen এ যা দেখায়
  const [firstNum, setFirstNum] = useState("");        // প্রথম সংখ্যা
  const [operator, setOperator] = useState("");        // + - * /
  const [expression, setExpression] = useState("");    // উপরে যা দেখায়
  const [waitingForSecond, setWaitingForSecond] = useState(false); // অপারেটর চাপার পর

  // সংখ্যার বোতাম চাপলে
  function handleNumber(num: string) {
    if (waitingForSecond) {
      setDisplay(num);              // দ্বিতীয় সংখ্যা নতুন করে শুরু
      setWaitingForSecond(false);
    } else {
      setDisplay(display === "0" ? num : display + num);
    }
  }

  // দশমিক বোতাম চাপলে (একটার বেশি . হবে না)
  function handleDecimal() {
    if (!display.includes(".")) setDisplay(display + ".");
  }

  // অপারেটর বোতাম চাপলে (+, -, *, /)
  function handleOperator(op: string) {
    setFirstNum(display);
    setOperator(op);
    setExpression(display + " " + op);
    setWaitingForSecond(true);
  }

  // = বোতাম চাপলে Rust কে ডাকো
  async function handleEquals() {
    if (!firstNum || !operator) return;
    setExpression(firstNum + " " + operator + " " + display + " =");

    try {
      // ★ এখানেই Rust function ডাকা হচ্ছে ★
      // invoke("rust_function_name", { arguments })
      // JS এর অবজেক্টের key (a, operator, b) = Rust এর parameter এর নাম
      const result = await invoke<number>("calculate", {
        a: parseFloat(firstNum),
        operator: operator,
        b: parseFloat(display),
      });

      setDisplay(String(result)); // Rust এর Ok(value) এখানে আসে
      setFirstNum("");
      setOperator("");
      setWaitingForSecond(true);
    } catch (error) {
      setDisplay(String(error)); // Rust এর Err(msg) এখানে আসে
    }
  }

  // C (Clear)
  function handleClear() {
    setDisplay("0");
    setFirstNum("");
    setOperator("");
    setExpression("");
    setWaitingForSecond(false);
  }

  // +/- বোতাম
  function handleToggleSign() {
    setDisplay(String(parseFloat(display) * -1));
  }

  // % বোতাম
  function handlePercent() {
    setDisplay(String(parseFloat(display) / 100));
  }

  // বোতামের layout (iPhone calculator এর মতো)
  const buttons = [
    ["C", "+/-", "%", "÷"],
    ["7", "8", "9", "×"],
    ["4", "5", "6", "−"],
    ["1", "2", "3", "+"],
    ["0", ".", "="],
  ];

  // কোন বোতাম চাপলে কোন function চলবে
  function handleButton(btn: string) {
    if ("0123456789".includes(btn)) handleNumber(btn);
    else if (btn === ".") handleDecimal();
    else if (btn === "C") handleClear();
    else if (btn === "+/-") handleToggleSign();
    else if (btn === "%") handlePercent();
    else if (btn === "=") handleEquals();
    else if (btn === "÷") handleOperator("/"); // UI চিহ্ন → Rust এর চিহ্ন
    else if (btn === "×") handleOperator("*");
    else if (btn === "−") handleOperator("-");
    else if (btn === "+") handleOperator("+");
  }

  // বোতামের ধরন (রঙের জন্য)
  function getButtonClass(btn: string) {
    if (btn === "C" || btn === "+/-" || btn === "%") return "btn btn-gray";
    if (["÷", "×", "−", "+", "="].includes(btn)) return "btn btn-orange";
    if (btn === "0") return "btn btn-dark btn-wide";
    return "btn btn-dark";
  }

  return (
    <div className="calculator">
      <Display value={display} expression={expression} />
      <div className="buttons">
        {buttons.map((row, rowIndex) => (
          <div key={rowIndex} className="row">
            {row.map((btn) => (
              <button key={btn} className={getButtonClass(btn)} onClick={() => handleButton(btn)}>
                {btn}
              </button>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}`,
    },
    {
      n: 4,
      path: "src/App.tsx",
      lang: "tsx",
      side: "React",
      role: "Root component। Calculator কে এখানে বসানো হয়।",
      why: "সব component তৈরি হলে শেষে root এ জোড়া দাও।",
      code: `// App.tsx — Root component, Calculator কে এখানে রাখি
import Calculator from "./components/Calculator";
import "./App.css";

function App() {
  return (
    <div className="app">
      <Calculator />
    </div>
  );
}

export default App;`,
    },
    {
      n: 5,
      path: "src/App.css",
      lang: "css",
      side: "React",
      role: "সব স্টাইল। পুরোটা মুছে নতুন করে লেখো।",
      why: "লজিক ঠিক চললে শেষে সাজাও। PDF এর CSS এ calculator এর বাটন ক্লাস ছিল না, তাই নিচে যোগ করে দেওয়া হলো।",
      code: `/* App.css — পুরোটা মুছে এটা লেখো */
:root {
  font-family: "Inter", system-ui, -apple-system, BlinkMacSystemFont, sans-serif;
  font-size: 16px;
  color: #f5f5f5;
  background-color: #1e1e1e;
}
body { margin: 0; }
.app { display: flex; justify-content: center; padding-top: 8px; }

/* Calculator */
.calculator { width: 340px; background: #000; border-radius: 16px; padding: 12px; }
.display { text-align: right; padding: 12px 8px; min-height: 96px; }
.expression { color: #9a9a9a; font-size: 14px; min-height: 20px; }
.value { font-size: 44px; font-weight: 300; word-break: break-all; }
.buttons { display: flex; flex-direction: column; gap: 10px; }
.row { display: flex; gap: 10px; }
.btn {
  flex: 1; height: 64px; border-radius: 32px; border: none;
  font-size: 24px; cursor: pointer; transition: filter 0.15s;
}
.btn:active { filter: brightness(1.4); }
.btn-gray { background: #a5a5a5; color: #000; }
.btn-orange { background: #ff9f0a; color: #fff; }
.btn-dark { background: #333; color: #fff; }
.btn-wide { flex: 2.15; text-align: left; padding-left: 28px; }`,
    },
    {
      n: 6,
      path: "src-tauri/tauri.conf.json",
      lang: "json",
      side: "Config",
      role: "অ্যাপের নাম, window এর সাইজ, identifier — সব config।",
      why: "অ্যাপ চলার পর শেষে নাম ও সাইজ ঠিক করো। (এই অংশটুকু বদলাও, বাকি ফাইল যেমন আছে থাকবে)",
      code: `{
  "app": {
    "windows": [
      {
        "title": "আমার Calculator",
        "width": 360,
        "height": 620,
        "resizable": false
      }
    ]
  },
  "bundle": {
    "identifier": "com.yourname.calculator",
    "productName": "Calculator"
  }
}`,
    },
  ],
  connection: {
    explain: [
      "React আর Rust আলাদা ভাষা, আলাদা process। তাই দুইটা সরাসরি কথা বলতে পারে না।",
      "React invoke(\"calculate\", {...}) পাঠায় → Tauri IPC bridge → Rust এর calculate() চলে।",
      "Rust এর Ok(value) হয় JS এর await এর result, আর Err(msg) হয় catch(error)।",
      "নামের নিয়ম: command এর নাম হুবহু মিলতে হবে; Rust এ snake_case parameter থাকলে JS এ camelCase key (first_num → firstNum)।",
      "command টা generate_handler![...] এ না থাকলে 'invoke failed' আসবে।",
    ],
    rustTitle: "Rust (lib.rs)",
    rust: `#[tauri::command]
fn calculate(a: f64, operator: String, b: f64) -> Result<f64, String> { /* ... */ }

// register:
.invoke_handler(tauri::generate_handler![calculate])`,
    reactTitle: "React (Calculator.tsx)",
    react: `import { invoke } from "@tauri-apps/api/core";

try {
  const result = await invoke<number>("calculate", { a: 12, operator: "+", b: 5 });
  // result = 17
} catch (error) {
  // Rust Err("...") এখানে আসে
}`,
  },
  example: {
    title: "পূর্ণ উদাহরণ: 12 ÷ 0 চাপলে কী ঘটে",
    flow: [
      "১) তুমি 1, 2, ÷, 0, = চাপো → state এ firstNum=12, operator=/, display=0",
      "২) handleEquals() invoke(\"calculate\", {a:12, operator:\"/\", b:0}) ডাকে",
      "৩) Rust এ match \"/\" → b == 0.0 → Err(\"শূন্য দিয়ে ভাগ করা যায় না!\")",
      "৪) JS এর catch ব্লকে error আসে → setDisplay(String(error))",
      "৫) স্ক্রিনে বাংলা error message দেখায়",
    ],
    runCommands: ["npm run tauri dev   # ডেভেলপমেন্ট", "npm run tauri build # .exe + installer"],
    output: "src-tauri/target/release/tauri-calculator.exe এবং .../release/bundle/ এ installer",
  },
  troubleshoot: [
    ["cargo not found", "Rust ইনস্টল হয়নি, rustup.rs থেকে ইনস্টল করো"],
    ["WebView2 error", "Windows এ WebView2 ইনস্টল করো"],
    ["invoke failed", "lib.rs এ generate_handler! এ command আছে কিনা দেখো"],
    ["Rust build error", "terminal এর error message পড়ো, line number দেখাবে"],
  ],
  quiz: [
    { q: "Rust command কোথায় register করতে হয়?", options: ["App.tsx", "generate_handler![...]", "package.json"], answer: 1 },
    { q: "Rust এর Err(msg) React এ কোথায় আসে?", options: ["then এর ভেতরে", "catch ব্লকে", "console এ"], answer: 1 },
    { q: "src-tauri/src/ ফোল্ডারে কী থাকে?", options: ["React UI", "Rust backend", "CSS"], answer: 1 },
  ],
};

export default project;
