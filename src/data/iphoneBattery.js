// iphoneBattery.js — প্রজেক্ট ৬: iPhone Battery Health (Tauri v2 + React + Rust + idevice)
// ফরম্যাট বাকি প্রজেক্টের মতোই; widget: "filemap" হওয়ায় ল্যাব ট্যাবে FileMap দেখায়।
const project = {
  slug: "iphone-battery-health",
  no: 6,
  title: "iPhone Battery Health — USB থেকে ব্যাটারি হেলথ",
  level: "মধ্যম → উন্নত",
  stack: ["Tauri v2", "React (Vite)", "Rust (tokio)", "idevice 0.1.60", "usbmuxd"],
  widget: "filemap",
  intro:
    "USB-তে লাগানো iPhone এর ব্যাটারি হেলথ দেখানোর ডেস্কটপ অ্যাপ, একই কোডবেস থেকে Windows ও Linux এ চলে। libimobiledevice এর বদলে pure-Rust idevice crate, তাই DLL বান্ডেল লাগে না। ফোন লাগালে বা খুললে কার্ড নিজে আপডেট হয়, আর ব্যাটারি প্রতি ৫ সেকেন্ডে রিফ্রেশ হয়।",
  steps: [
    { title: "পরিবেশ প্রস্তুতি", desc: "Node.js LTS, Rust (rustup), C++ build tools। Windows এ Apple Mobile Device Service (iTunes বা Apple Devices অ্যাপ), Linux এ usbmuxd প্যাকেজ। ফোনে Trust।" },
    { title: "প্রজেক্ট তৈরি", desc: "npm create tauri-app@latest, নাম iphone-battery, React + JavaScript। তারপর src/ এ components, hooks, utils ফোল্ডার বানাও।" },
    { title: "Cargo.toml", desc: "idevice =0.1.60 পিন করে ফিচার: rustls, ring, usbmuxd, diagnostics_relay। cargo check দিয়ে যাচাই।" },
    { title: "device.rs", desc: "usbmuxd দিয়ে ফোন খোঁজা, lockdown থেকে নাম, মডেল, iOS ভার্সন।" },
    { title: "battery.rs", desc: "AppleSmartBattery পড়ে হেলথ, সাইকেল, রানটাইম, চার্জ-সময়, অ্যাডাপ্টার পাওয়ারের সূত্র।" },
    { title: "lib.rs", desc: "কমান্ড রেজিস্টার ও ২ সেকেন্ডের পর্যবেক্ষণ থ্রেড (devices-changed ইভেন্ট)।" },
    { title: "React ফাইল", desc: "format.js, দুটো hook, BatteryCard, App.jsx, App.css।" },
    { title: "চালাও ও পরীক্ষা", desc: "npm run tauri dev; ফোন আনলক করে Trust দাও। কার্ড না এলে সমস্যার তালিকা দেখো।" },
    { title: "Build", desc: "Windows এ npm run tauri build; Windows + Linux দুটোর জন্য GitHub Actions। যা যাচাই হয়নি: rated_cycles() একটা অনুমান, Debian 12+ ধারণা, Linux এ ফোনসহ বাস্তব পরীক্ষা বাকি।" },
  ],
  setupCommands: [
    "# Linux এ আগে একবার (Windows এ iTunes বা Apple Devices অ্যাপ ইনস্টল থাকলেই হয়)",
    "sudo apt install -y build-essential curl wget file libwebkit2gtk-4.1-dev libssl-dev libxdo-dev libayatana-appindicator3-dev librsvg2-dev usbmuxd",
    "sudo systemctl enable --now usbmuxd",
    "",
    "npm create tauri-app@latest   # name: iphone-battery, React, JavaScript, npm",
    "cd iphone-battery",
    "mkdir -p src/components src/hooks src/utils",
    "npm install",
    "cd src-tauri && cargo check && cd ..   # Cargo.toml বদলের পর",
    "npm run tauri dev",
  ],
  // files = লেখার ক্রম (n)। edit=false মানে সাধারণত হাত দেওয়া লাগে না
  files: [
    {
      n: 1,
      path: "src-tauri/Cargo.toml",
      lang: "toml",
      side: "Config",
      edit: true,
      role: "[dependencies] অংশ বদলাও: idevice crate ও তার ফিচার। [package] ও [lib] যেমন আছে তেমন থাকবে।",
      why: "idevice ঠিকমতো কম্পাইল করতে তিনটা সিদ্ধান্ত লাগে: কোন ফিচার, কোন TLS/crypto backend, কোন ভার্সন। ভুল হলে প্রথম cargo check-ই ব্যর্থ হয়। ring নেওয়া হয়েছে কারণ ডিফল্ট aws-lc Windows-এ cmake ও nasm চায়। প্রতি point release-এ API ভাঙে, তাই =0.1.60 পিন করা।",
      when: "cargo check / cargo build / npm run tauri dev এর সময় Cargo এটা পড়ে।",
      calls: ["নতুন crate নামায়: idevice, plist, tokio, serde"],
      code: `[dependencies]
tauri = { version = "2", features = [] }
tauri-plugin-opener = "2"
serde = { version = "1", features = ["derive"] }
serde_json = "1"
plist = "1"
tokio = { version = "1", features = ["rt", "net", "time", "macros"] }
# ভার্সন পিন করা: এই crate-এ প্রতি point release-এ API ভাঙে
idevice = { version = "=0.1.60", default-features = false, features = ["rustls", "ring", "usbmuxd", "diagnostics_relay"] }`,
    },
    {
      n: 2,
      path: "src-tauri/src/device.rs",
      lang: "rust",
      side: "Rust",
      edit: true,
      role: "নতুন ফাইল। usbmuxd-তে কানেক্ট করে ফোনের তালিকা আনে, provider বানায়, lockdown থেকে নাম, মডেল (ProductType) ও iOS ভার্সন পড়ে।",
      why: "আগে ডিভাইস শনাক্ত না হলে ব্যাটারি পড়া যায় না। make_provider() একবার বানালে পরে lockdown ও diagnostics দুটোতেই লাগে; idevice-এর API বদলালে শুধু এখানে ঠিক করবে।",
      when: "lib.rs-এর পর্যবেক্ষণ থ্রেড প্রতি ২ সেকেন্ডে list_udids() চালায়; React শুরুতে list_devices ডাকে; get_battery-ও find_device ও make_provider ব্যবহার করে।",
      calls: ["usbmuxd: UsbmuxdConnection::default()", "lockdown: LockdownClient::connect(&provider)", "React থেকে invoke(\"list_devices\")"],
      code: `use idevice::{
    lockdown::LockdownClient,
    provider::UsbmuxdProvider,
    usbmuxd::{UsbmuxdAddr, UsbmuxdConnection, UsbmuxdDevice},
    IdeviceService,
};
use serde::Serialize;

#[derive(Serialize, Clone, Debug)]
#[serde(rename_all = "camelCase")]
pub struct DeviceInfo {
    pub udid: String,
    pub name: String,
    pub product_type: String,
    pub ios_version: String,
}

fn err<E: std::fmt::Debug>(e: E) -> String {
    format!("{e:?}")
}

/// প্রতিবার নতুন usbmuxd কানেকশন খোলা হয়, সহজ ও নিরাপদ।
pub async fn connect_mux() -> Result<UsbmuxdConnection, String> {
    UsbmuxdConnection::default().await.map_err(err)
}

/// to_provider-এর আর্গুমেন্ট কোনো ভার্সনে বদলালে শুধু এখানে ঠিক করবেন।
pub fn make_provider(dev: &UsbmuxdDevice) -> Result<UsbmuxdProvider, String> {
    let addr = UsbmuxdAddr::from_env_var().map_err(err)?;
    Ok(dev.to_provider(addr, "iphone-battery"))
}

pub async fn find_device(udid: &str) -> Result<UsbmuxdDevice, String> {
    let mut mux = connect_mux().await?;
    let devs = mux.get_devices().await.map_err(err)?;
    devs.into_iter()
        .find(|d| d.udid == udid)
        .ok_or_else(|| format!("ডিভাইস পাওয়া যায়নি: {udid}"))
}

async fn lockdown_string(lockdown: &mut LockdownClient, key: &str) -> String {
    match lockdown.get_value(Some(key), None).await {
        Ok(v) => v.as_string().unwrap_or_default().to_string(),
        Err(_) => String::new(),
    }
}

async fn read_info(dev: &UsbmuxdDevice) -> Result<DeviceInfo, String> {
    let provider = make_provider(dev)?;
    let mut lockdown = LockdownClient::connect(&provider).await.map_err(err)?;
    Ok(DeviceInfo {
        udid: dev.udid.clone(),
        name: lockdown_string(&mut lockdown, "DeviceName").await,
        product_type: lockdown_string(&mut lockdown, "ProductType").await,
        ios_version: lockdown_string(&mut lockdown, "ProductVersion").await,
    })
}

/// শুধু UDID তালিকা, হালকা: পর্যবেক্ষণ থ্রেড প্রতি ২ সেকেন্ডে এটা চালায়।
pub async fn list_udids() -> Result<Vec<String>, String> {
    let mut mux = connect_mux().await?;
    let devs = mux.get_devices().await.map_err(err)?;
    let mut ids: Vec<String> = devs.iter().map(|d| d.udid.clone()).collect();
    ids.sort();
    Ok(ids)
}

/// Trust না দেওয়া ডিভাইস বাদ যায়, পুরো লিস্ট ফেল করে না।
pub async fn list_all() -> Result<Vec<DeviceInfo>, String> {
    let mut mux = connect_mux().await?;
    let devs = mux.get_devices().await.map_err(err)?;
    let mut out = Vec::new();
    for d in &devs {
        if let Ok(info) = read_info(d).await {
            out.push(info);
        }
    }
    Ok(out)
}

#[tauri::command]
pub async fn list_devices() -> Result<Vec<DeviceInfo>, String> {
    list_all().await
}`,
    },
    {
      n: 3,
      path: "src-tauri/src/battery.rs",
      lang: "rust",
      side: "Rust",
      edit: true,
      role: "নতুন ফাইল। AppleSmartBattery এন্ট্রি পড়ে সূত্র দিয়ে হেলথ, সাইকেল ব্যবহার, রানটাইম, চার্জ হওয়ার সময় ও অ্যাডাপ্টার পাওয়ার হিসাব করে BatteryReport ফেরত দেয়।",
      why: "এটাই অ্যাপের মূল কাজ। সব মান Option, কারণ কিছু iOS/মডেলে কিছু key থাকে না; None হলে UI-তে — দেখায়, ক্র্যাশ করে না। rated_cycles() মডেল দেখে ৫০০/১০০০ ধরে, এটা অনুমান, Apple-এর পেজ থেকে মিলিয়ে নিও।",
      when: "React প্রতি ৫ সেকেন্ডে invoke(\"get_battery\") ডাকলে চলে।",
      calls: ["device::find_device ও make_provider", "DiagnosticsRelayClient::connect (এখানেই Trust-এর pairing record লাগে)", "ioregistry(...) → AppleSmartBattery plist"],
      code: `use crate::device::{find_device, make_provider};
use idevice::{services::diagnostics_relay::DiagnosticsRelayClient, IdeviceService};
use plist::{Dictionary, Value};
use serde::Serialize;

#[derive(Serialize, Default)]
#[serde(rename_all = "camelCase")]
pub struct BatteryReport {
    pub design_capacity: Option<i64>,
    pub nominal_capacity: Option<i64>,
    pub full_charge_capacity: Option<i64>,
    pub remaining_capacity: Option<i64>,
    pub charge_percent: Option<i64>,
    pub cycle_count: Option<i64>,
    pub rated_cycles: u32,
    pub amperage: Option<i64>,
    pub is_charging: bool,
    pub health_nominal: Option<f64>, // H_N
    pub health_full: Option<f64>,    // H_F
    pub capacity_diff: Option<i64>,  // ΔC
    pub cycle_usage: Option<f64>,    // CU%
    pub runtime_h: Option<f64>,
    pub time_to_full_h: Option<f64>,
    pub adapter_watts: Option<f64>,
}

// ধারণা-ভিত্তিক: iPhone15,4 ও তার পরের মডেলে ১০০০, আগেরগুলোতে ৫০০।
// Apple-এর অফিসিয়াল পেজ থেকে মিলিয়ে নেবেন।
fn rated_cycles(product_type: &str) -> u32 {
    let nums: Vec<u32> = product_type
        .trim_start_matches("iPhone")
        .split(',')
        .filter_map(|s| s.parse().ok())
        .collect();
    match nums.as_slice() {
        [major, minor] if *major >= 16 || (*major == 15 && *minor >= 4) => 1000,
        _ => 500,
    }
}

// plist যত গভীরেই থাকুক, key খুঁজে বের করে
fn find<'a>(v: &'a Value, key: &str) -> Option<&'a Value> {
    match v {
        Value::Dictionary(d) => d.get(key).or_else(|| d.values().find_map(|x| find(x, key))),
        Value::Array(a) => a.iter().find_map(|x| find(x, key)),
        _ => None,
    }
}

fn int(v: &Value, key: &str) -> Option<i64> {
    match find(v, key)? {
        Value::Integer(i) => i.as_signed().or_else(|| i.as_unsigned().map(|u| u as i64)),
        Value::Real(r) => Some(*r as i64),
        _ => None,
    }
}

fn flag(v: &Value, key: &str) -> bool {
    matches!(find(v, key), Some(Value::Boolean(true)))
}

/// \`idevicediagnostics ioregentry AppleSmartBattery\`-এর সমতুল্য।
/// CLI আর্গুমেন্টটা class না name হিসেবে পাঠায় তা নিশ্চিত নই, তাই দুটোই চেষ্টা করা হয়।
async fn read_battery_dict(client: &mut DiagnosticsRelayClient) -> Result<Dictionary, String> {
    if let Ok(Some(d)) = client.ioregistry(None, None, Some("AppleSmartBattery")).await {
        return Ok(d);
    }
    match client.ioregistry(None, Some("AppleSmartBattery"), None).await {
        Ok(Some(d)) => Ok(d),
        Ok(None) => Err("AppleSmartBattery এন্ট্রি খালি এসেছে".into()),
        Err(e) => Err(format!("{e:?}")),
    }
}

#[tauri::command]
pub async fn get_battery(udid: String, product_type: String) -> Result<BatteryReport, String> {
    let dev = find_device(&udid).await?;
    let provider = make_provider(&dev)?;
    let mut client = DiagnosticsRelayClient::connect(&provider)
        .await
        .map_err(|e| format!("{e:?}"))?;

    let root = Value::Dictionary(read_battery_dict(&mut client).await?);

    let design = int(&root, "DesignCapacity");
    let nominal = int(&root, "NominalChargeCapacity");
    let full = int(&root, "FullChargeCapacity");
    // কিছু মডেলে RemainingCapacity শতাংশ আসে; ১০০ বা কমকে mAh ধরা হয় না
    let remaining = int(&root, "RemainingCapacity").filter(|r| *r > 100);
    let cycles = int(&root, "CycleCount");
    let amp = int(&root, "Amperage");
    let is_charging = flag(&root, "IsCharging");
    let rated = rated_cycles(&product_type);

    // H_N = Nominal / Design × 100
    let health_nominal = nominal
        .zip(design)
        .filter(|(_, d)| *d > 0)
        .map(|(n, d)| n as f64 / d as f64 * 100.0);
    // H_F = FullCharge / Design × 100
    let health_full = full
        .zip(design)
        .filter(|(_, d)| *d > 0)
        .map(|(f, d)| f as f64 / d as f64 * 100.0);
    // ΔC = FullCharge − Nominal
    let capacity_diff = full.zip(nominal).map(|(f, n)| f - n);
    // CU% = Cycle / Rated × 100
    let cycle_usage = cycles.map(|c| c as f64 / rated as f64 * 100.0);

    // Runtime = Remaining / |I| (শুধু ডিসচার্জের সময়)
    let runtime_h = match (remaining, amp) {
        (Some(r), Some(i)) if i < 0 => Some(r as f64 / i.abs() as f64),
        _ => None,
    };
    // T_full = (N − R) / I_charge (শুধু চার্জের সময়)
    let time_to_full_h = match (nominal, remaining, amp) {
        (Some(n), Some(r), Some(i)) if is_charging && i > 0 && n > r => {
            Some((n - r) as f64 / i as f64)
        }
        _ => None,
    };
    // P (W) = AdapterVoltage(mV) × Current(mA) / 10^6
    let adapter = find(&root, "AdapterDetails").unwrap_or(&root);
    let adapter_watts = int(adapter, "AdapterVoltage")
        .zip(int(adapter, "Current"))
        .map(|(v, i)| v as f64 * i as f64 / 1_000_000.0);

    Ok(BatteryReport {
        design_capacity: design,
        nominal_capacity: nominal,
        full_charge_capacity: full,
        remaining_capacity: remaining,
        charge_percent: int(&root, "CurrentCapacity"),
        cycle_count: cycles,
        rated_cycles: rated,
        amperage: amp,
        is_charging,
        health_nominal,
        health_full,
        capacity_diff,
        cycle_usage,
        runtime_h,
        time_to_full_h,
        adapter_watts,
    })
}`,
    },
    {
      n: 4,
      path: "src-tauri/src/lib.rs",
      lang: "rust",
      side: "Rust",
      edit: true,
      role: "স্ক্যাফোল্ডের ফাইল বদলাও। mod যোগ, দুটো কমান্ড রেজিস্টার (generate_handler!), আর ব্যাকগ্রাউন্ড থ্রেডে প্রতি ২ সেকেন্ডে ফোন লাগানো/খোলা দেখে devices-changed ইভেন্ট পাঠানো।",
      why: "React-এর invoke(\"...\")-এর নাম এখানকার generate_handler! তালিকার সাথে হুবহু মিলতে হয়; সবচেয়ে বেশি ভুল এখানেই হয়। main.rs ছোঁবে না।",
      when: "অ্যাপ চালু হলে setup() একবার চলে ও থ্রেড শুরু করে; থ্রেড অ্যাপ বন্ধ না হওয়া পর্যন্ত লুপে চলে।",
      calls: ["device::list_udids() হালকা, প্রতি চক্রে", "device::list_all() ভারী, শুধু তালিকা বদলালে বা আগের তথ্য অসম্পূর্ণ থাকলে", "handle.emit(\"devices-changed\", &list) → React"],
      code: `mod battery;
mod device;

use std::time::Duration;
use tauri::Emitter;

#[cfg_attr(mobile, tauri::mobile_entry_point)]
pub fn run() {
    tauri::Builder::default()
        .plugin(tauri_plugin_opener::init())
        .setup(|app| {
            let handle = app.handle().clone();
            tauri::async_runtime::spawn(async move {
                let mut last: Vec<String> = Vec::new();
                // সব ডিভাইসের তথ্য পড়া গেছে কিনা (Trust না দিলে অসম্পূর্ণ থাকে)
                let mut complete = true;
                loop {
                    if let Ok(ids) = device::list_udids().await {
                        if ids != last || !complete {
                            if let Ok(list) = device::list_all().await {
                                complete = list.len() == ids.len();
                                let _ = handle.emit("devices-changed", &list);
                            }
                            last = ids;
                        }
                    }
                    tokio::time::sleep(Duration::from_secs(2)).await;
                }
            });
            Ok(())
        })
        .invoke_handler(tauri::generate_handler![
            device::list_devices,
            battery::get_battery
        ])
        .run(tauri::generate_context!())
        .expect("error while running tauri application");
}`,
    },
    {
      n: 5,
      path: "src-tauri/capabilities/default.json",
      lang: "json",
      side: "Config",
      edit: false,
      role: "স্ক্যাফোল্ডেরটাই রাখো, বদলানো লাগে না। এটা শুধু বোঝার জন্য সাধারণ উদাহরণ; তোমার ফাইল আলাদা হলে তোমারটাই রাখো।",
      why: "idevice সরাসরি Rust থেকে চলে, তাই shell বা অন্য প্লাগইনের অনুমতি লাগে না।",
      when: "Build/run এর সময় Tauri পড়ে; অনুমতি না থাকলে JS থেকে plugin বা API ব্লক হয়।",
      calls: [],
      code: `{
  "$schema": "../gen/schemas/desktop-schema.json",
  "identifier": "default",
  "windows": ["main"],
  "permissions": ["core:default", "opener:default"]
}`,
    },
    {
      n: 6,
      path: "src/utils/format.js",
      lang: "js",
      side: "React",
      edit: true,
      role: "নতুন ফাইল। শতাংশ ও সময়ের ফরম্যাট, আর Trust-না-দেওয়া এররকে বাংলা বার্তায় বদলানো।",
      why: "UI-তে null হলে — দেখানো ও raw Rust এরর ফেলে না রেখে বোঝার মতো বাংলা বার্তা দেখানো এক জায়গায় রাখলে কম্পোনেন্ট পরিষ্কার থাকে।",
      when: "BatteryCard রেন্ডারের সময় pct(), hm(), friendlyError() ডাকে।",
      calls: [],
      code: `export const pct = (v) => (v == null ? "—" : \`\${v.toFixed(2)}%\`);

export const hm = (h) => {
  if (h == null) return "—";
  const m = Math.round(h * 60);
  return \`\${Math.floor(m / 60)} h \${m % 60} min\`;
};

export const friendlyError = (e) =>
  String(e).includes("PairRecordData")
    ? "ফোনে Trust দেওয়া নেই। ফোন আনলক করে 'Trust This Computer' চাপুন।"
    : String(e);`,
    },
    {
      n: 7,
      path: "src/hooks/useDevices.js",
      lang: "js",
      side: "React ↔ Rust",
      edit: true,
      role: "নতুন ফাইল। শুরুতে একবার list_devices ডাকে, তারপর Rust-এর devices-changed ইভেন্ট শোনে। React-এ পলিং লাগে না।",
      why: "পর্যবেক্ষণ Rust-এ চলে, তাই ফোন লাগালে/খুললে Rust নিজে জানায়। listen() একটা Promise দেয়; কম্পোনেন্ট সরলে unlisten.then(fn => fn()) না চালালে শ্রোতা জমে।",
      when: "App কম্পোনেন্ট মাউন্ট হলে একবার।",
      calls: ["invoke(\"list_devices\")", "listen(\"devices-changed\")"],
      code: `import { useEffect, useState } from "react";
import { invoke } from "@tauri-apps/api/core";
import { listen } from "@tauri-apps/api/event";

export default function useDevices() {
  const [devices, setDevices] = useState([]);

  useEffect(() => {
    invoke("list_devices").then(setDevices).catch(() => setDevices([]));
    const unlisten = listen("devices-changed", (e) => setDevices(e.payload));
    return () => { unlisten.then((fn) => fn()); };
  }, []);

  return devices;
}`,
    },
    {
      n: 8,
      path: "src/hooks/useBattery.js",
      lang: "js",
      side: "React ↔ Rust",
      edit: true,
      role: "নতুন ফাইল। নির্দিষ্ট ডিভাইসের জন্য প্রতি ৫ সেকেন্ডে invoke(\"get_battery\") ডাকে।",
      why: "alive ফ্ল্যাগ কম্পোনেন্ট সরে গেলে পুরনো রেসপন্স ফেলে দেয়। Rust-এর Err এখানে catch-এ আসে।",
      when: "BatteryCard মাউন্ট থাকা পর্যন্ত প্রতি ৫ সেকেন্ডে।",
      calls: ["invoke(\"get_battery\", { udid, productType })"],
      code: `import { useEffect, useState } from "react";
import { invoke } from "@tauri-apps/api/core";

export default function useBattery(udid, productType, intervalMs = 5000) {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!udid) return;
    let alive = true;

    const tick = async () => {
      try {
        const r = await invoke("get_battery", { udid, productType });
        if (alive) { setData(r); setError(null); }
      } catch (e) {
        if (alive) setError(e);
      }
    };

    tick();
    const id = setInterval(tick, intervalMs);
    return () => { alive = false; clearInterval(id); };
  }, [udid, productType, intervalMs]);

  return { data, error };
}`,
    },
    {
      n: 9,
      path: "src/components/BatteryCard.jsx",
      lang: "jsx",
      side: "React",
      edit: true,
      role: "নতুন ফাইল। ডিভাইস কার্ড, রঙিন হেলথ বার (৮০%+ সবুজ, ৭০–৮০% হলুদ, নিচে লাল) ও ফলাফলের টেবিল।",
      why: "রঙের সীমা আমার বেছে নেওয়া, Apple-এর মানদণ্ড নয়; নিজের পছন্দে বদলাতে পারো। JSON-এর camelCase নাম (healthNominal, timeToFullH) এখানেই ব্যবহার হয়।",
      when: "useDevices থেকে প্রতিটা ডিভাইসের জন্য একটা কার্ড রেন্ডার হয়।",
      calls: ["useBattery(device.udid, device.productType)"],
      code: `import useBattery from "../hooks/useBattery";
import { pct, hm, friendlyError } from "../utils/format";

export default function BatteryCard({ device }) {
  const { data: b, error } = useBattery(device.udid, device.productType);

  if (error && !b) return <div className="card err">{friendlyError(error)}</div>;
  if (!b) return <div className="card">লোড হচ্ছে…</div>;

  const health = b.healthNominal ?? b.healthFull;
  const barClass = health == null ? "" : health >= 80 ? "good" : health >= 70 ? "warn" : "bad";

  const rows = [
    ["Battery Health (Nominal)", pct(b.healthNominal)],
    ["Health Estimate (Full Charge)", pct(b.healthFull)],
    ["Capacity Difference", b.capacityDiff == null ? "—" : \`\${b.capacityDiff} mAh\`],
    ["Design / Nominal", \`\${b.designCapacity ?? "—"} / \${b.nominalCapacity ?? "—"} mAh\`],
    ["Cycle Usage", \`\${b.cycleCount ?? "—"} / \${b.ratedCycles} (\${pct(b.cycleUsage)})\`],
    ["Runtime", hm(b.runtimeH)],
    ["Time to Full", hm(b.timeToFullH)],
    ["Adapter Power", b.adapterWatts == null ? "—" : \`\${b.adapterWatts.toFixed(1)} W\`],
  ];

  return (
    <div className="card">
      <div className="head">
        <div>
          <h3>{device.name}</h3>
          <small>{device.productType} · iOS {device.iosVersion}</small>
        </div>
        <div className="charge">
          {b.chargePercent ?? "—"}% {b.isCharging ? "⚡" : ""}
        </div>
      </div>

      <div className="bar">
        <div className={\`fill \${barClass}\`} style={{ width: \`\${Math.min(health ?? 0, 100)}%\` }} />
      </div>
      <p className="big">{pct(health)} <small>Battery Health</small></p>

      <table>
        <tbody>
          {rows.map(([k, v]) => (
            <tr key={k}>
              <td>{k}</td>
              <td><b>{v}</b></td>
            </tr>
          ))}
        </tbody>
      </table>

      {error && <p className="err">{friendlyError(error)}</p>}
    </div>
  );
}`,
    },
    {
      n: 10,
      path: "src/App.jsx",
      lang: "jsx",
      side: "React",
      edit: true,
      role: "স্ক্যাফোল্ডের App.jsx পুরো বদলাও। ডিভাইস না থাকলে বাংলা হিন্ট, থাকলে প্রতিটার জন্য BatteryCard।",
      why: "পেজ কাঠামো এক জায়গায়, বাকি যুক্তি hook ও component-এ।",
      when: "main.jsx এটাকে render করে।",
      calls: ["useDevices()", "BatteryCard"],
      code: `import useDevices from "./hooks/useDevices";
import BatteryCard from "./components/BatteryCard";
import "./App.css";

export default function App() {
  const devices = useDevices();

  return (
    <main>
      <h1>iPhone Battery Health</h1>
      {devices.length === 0 && (
        <p className="hint">
          কোনো ডিভাইস পাওয়া যায়নি। USB ক্যাবল লাগান, ফোন আনলক করে "Trust" দিন।
          Windows-এ Apple Mobile Device Service, Linux-এ usbmuxd চালু থাকতে হবে।
        </p>
      )}
      {devices.map((d) => (
        <BatteryCard key={d.udid} device={d} />
      ))}
    </main>
  );
}`,
    },
    {
      n: 11,
      path: "src/App.css",
      lang: "css",
      side: "React",
      edit: true,
      role: "স্ক্যাফোল্ডের App.css পুরো বদলাও। আলো ও অন্ধকার দুই থিমেই চলে (prefers-color-scheme)।",
      why: "কোনো নতুন npm প্যাকেজ লাগে না; @tauri-apps/api স্ক্যাফোল্ডেই আছে।",
      when: "App.jsx এ import \"./App.css\" থাকায় লোড হয়।",
      calls: [],
      code: `:root { font-family: system-ui, sans-serif; color: #1b1f24; background: #f6f7f9; }
body { margin: 0; }
main { max-width: 640px; margin: 0 auto; padding: 24px; }
h1 { margin-top: 0; }
.hint { color: #5b6470; }

.card { background: #fff; border: 1px solid #dde1e6; border-radius: 12px; padding: 18px; margin-top: 16px; }
.card h3 { margin: 0; }
.head { display: flex; justify-content: space-between; align-items: center; }
.charge { font-size: 1.4rem; font-weight: 700; }

.bar { height: 10px; background: #e8ebef; border-radius: 6px; overflow: hidden; margin-top: 14px; }
.fill { height: 100%; background: #9aa3ad; transition: width .4s; }
.fill.good { background: #2e9e5b; }
.fill.warn { background: #e0a100; }
.fill.bad  { background: #d64545; }

.big { font-size: 1.8rem; font-weight: 700; margin: 8px 0 12px; }
.big small { font-size: .9rem; font-weight: 400; color: #5b6470; }

table { width: 100%; border-collapse: collapse; }
td { padding: 6px 0; border-top: 1px solid #eef0f3; }
td:last-child { text-align: right; }

.err { color: #b3261e; }

@media (prefers-color-scheme: dark) {
  :root { color: #e6e9ed; background: #14171a; }
  .card { background: #1d2126; border-color: #2d333a; }
  .bar { background: #2d333a; }
  td { border-color: #2a3036; }
}`,
    },
    {
      n: 12,
      path: "src-tauri/tauri.conf.json",
      lang: "json",
      side: "Config",
      edit: true,
      role: "বিল্ডের আগে productName, identifier ও window-এর মাপ দেখে নাও। নিচেরটা শুধু বদলানোর ফিল্ডগুলোর অংশ, পুরো ফাইল নয়।",
      why: "ইনস্টলারের নাম ও আইকন এখান থেকে আসে। নিজের আইকন চাইলে: npm run tauri icon path/to/your-icon.png (1024×1024 PNG)।",
      when: "npm run tauri dev ও build দুই সময়ই পড়া হয়।",
      calls: ["beforeDevCommand এ Vite চালু করে"],
      code: `{
  "productName": "iPhone Battery Health",
  "version": "0.1.0",
  "identifier": "com.mugdho.iphonebattery",
  "app": {
    "windows": [
      { "title": "iPhone Battery Health", "width": 760, "height": 820 }
    ]
  },
  "bundle": {
    "active": true,
    "targets": "all",
    "icon": [
      "icons/32x32.png",
      "icons/128x128.png",
      "icons/128x128@2x.png",
      "icons/icon.icns",
      "icons/icon.ico"
    ]
  }
}`,
    },
    {
      n: 13,
      path: ".github/workflows/build.yml",
      lang: "yaml",
      side: "Config",
      edit: true,
      role: "নতুন ফাইল। এক workflow-তে Windows (MSI, NSIS) ও Linux (.deb, .AppImage) ইনস্টলার বানায়।",
      why: "প্রতিটা OS-এর ইনস্টলার সেই OS-এই বানাতে হয়। ubuntu-22.04 নেওয়া হয়েছে কারণ পুরনো Ubuntu-তে বানালে ইনস্টলার বেশি ডিস্ট্রোতে চলে। npm ci চলতে package-lock.json কমিট করা থাকতে হবে।",
      when: "GitHub → Actions → Build installers → Run workflow, অথবা v* ট্যাগ push করলে।",
      calls: ["Artifacts: run-এর Summary পেজের একদম নিচে"],
      code: `name: Build installers

on:
  workflow_dispatch:
  push:
    tags: ["v*"]

jobs:
  build:
    strategy:
      fail-fast: false
      matrix:
        os: [windows-latest, ubuntu-22.04]
    runs-on: \${{ matrix.os }}

    steps:
      - uses: actions/checkout@v4

      - name: Linux dependencies
        if: matrix.os == 'ubuntu-22.04'
        run: |
          sudo apt-get update
          sudo apt-get install -y libwebkit2gtk-4.1-dev build-essential curl wget file \\
            libssl-dev libxdo-dev libayatana-appindicator3-dev librsvg2-dev

      - uses: actions/setup-node@v4
        with:
          node-version: lts/*
          cache: npm

      - uses: dtolnay/rust-toolchain@stable

      - uses: Swatinem/rust-cache@v2
        with:
          workspaces: "./src-tauri -> target"

      - run: npm ci

      - run: npm run tauri build

      - uses: actions/upload-artifact@v4
        with:
          name: installer-\${{ matrix.os }}
          path: |
            src-tauri/target/release/bundle/msi/*.msi
            src-tauri/target/release/bundle/nsis/*.exe
            src-tauri/target/release/bundle/deb/*.deb
            src-tauri/target/release/bundle/appimage/*.AppImage`,
    },
  ],
  connection: {
    explain: [
      "invoke(\"get_battery\", { udid, productType }) ↔ Rust এর get_battery(udid: String, product_type: String): command এর নাম হুবহু এক, আর productType ↔ product_type Tauri নিজে রূপান্তর করে।",
      "generate_handler![device::list_devices, battery::get_battery] এ নাম না থাকলে invoke কাজ করে না; কম্পাইল এরর আসে না, শুধু রানটাইমে ব্যর্থ হয়।",
      "Rust struct এ #[serde(rename_all = \"camelCase\")] থাকায় JSON এ healthNominal, timeToFullH আসে; তাই JS এ b.healthNominal লিখতে হয়।",
      "Err(String) JS এ rejected Promise, তাই invoke সবসময় try/catch এ। Trust ছাড়া PairRecordData এরর friendlyError() বাংলা বার্তায় বদলায়।",
      "devices-changed: Rust emit করে, React listen করে। listen() এর ফল (unlisten) দিয়ে কম্পোনেন্ট সরলে শ্রোতা বন্ধ না করলে একই ইভেন্টে একাধিক শ্রোতা জমে।",
    ],
    rustTitle: "Rust (battery.rs ও lib.rs)",
    rust: `#[tauri::command]
pub async fn get_battery(udid: String, product_type: String) -> Result<BatteryReport, String> { /* ... */ }

// BatteryReport এ #[serde(rename_all = "camelCase")]
.invoke_handler(tauri::generate_handler![device::list_devices, battery::get_battery])

// Rust → React: নিজে থেকে জানানো
handle.emit("devices-changed", &list)`,
    reactTitle: "React (hooks)",
    react: `// React → Rust (productType ↔ product_type নিজে রূপান্তর হয়)
const b = await invoke("get_battery", { udid, productType });
// b.healthNominal, b.timeToFullH  (camelCase)

// Rust → React
const unlisten = listen("devices-changed", (e) => setDevices(e.payload));
return () => { unlisten.then((fn) => fn()); };`,
  },
  example: {
    title: "পূর্ণ উদাহরণ: ফোন লাগানো থেকে কার্ড পর্যন্ত",
    flow: [
      "১) ফোন আনলক করে USB-তে লাগাও, ফোনে Trust চাপো ও পাসকোড দাও",
      "২) lib.rs এর থ্রেড ২ সেকেন্ডের চক্রে list_udids() চালিয়ে নতুন UDID দেখে",
      "৩) list_all() ফোনের নাম, মডেল (iPhone13,2) ও iOS ভার্সন পড়ে এবং emit(\"devices-changed\") পাঠায়",
      "৪) useDevices এর listen ইভেন্ট ধরে setDevices করে, App প্রতিটা ডিভাইসের জন্য BatteryCard রেন্ডার করে",
      "৫) useBattery প্রতি ৫ সেকেন্ডে invoke(\"get_battery\", { udid, productType }) ডাকে",
      "৬) Rust diagnostics_relay দিয়ে AppleSmartBattery পড়ে সূত্র চালায়: যেমন 2322 ÷ 2798 × 100 ≈ 83.0%, 2369 ÷ 2798 × 100 ≈ 84.67%, (2322 − 1313) ÷ 450 ≈ 2.24 ঘণ্টা (এগুলো উদাহরণ সংখ্যা)",
      "৭) BatteryReport JSON হয়ে ফেরে, কার্ডে রঙিন হেলথ বার ও টেবিল দেখায়; ক্যাবল খুলে আবার লাগালে ২-৪ সেকেন্ডে কার্ড ফিরে আসে",
    ],
    runCommands: [
      "npm run tauri dev",
      "npm run tauri build   # Windows: src-tauri/target/release/bundle/msi, nsis · Linux: deb, appimage",
      "# দুই OS একসাথে: GitHub repo → Actions → Build installers → Run workflow",
    ],
    output: "একটা ডেস্কটপ উইন্ডোতে iPhone এর কার্ড। Apple এর Maximum Capacity এর সাথে হুবহু না-ও মিলতে পারে, কয়েক শতাংশ ফারাক স্বাভাবিক ধরো ও নিজের ফোনে মিলিয়ে দেখো।",
  },
  troubleshoot: [
    ["unresolved import ...PairingFile (cargo check)", "idevice এর features এ \"rustls\" যোগ করো"],
    ["No crypto backend was selected!", "features এ \"ring\" যোগ করো (aws-lc Windows এ cmake/nasm চায়)"],
    ["E0432 LockdowndClient", "নামটা LockdownClient (d ছাড়া)"],
    ["E0061 get_value takes 2 arguments", "get_value(Some(key), None) লেখো"],
    ["Cannot read properties of undefined (reading 'invoke')", "ব্রাউজারে নয়; npm run tauri dev এর নেটিভ উইন্ডোতে চালাও"],
    ["missing PairRecordData in pair record response", "ফোনে \"Trust This Computer\" চাপো ও পাসকোড দাও"],
    ["Blocking waiting for file lock on build directory", "আরেকটা cargo (চলমান tauri dev বা rust-analyzer) শেষ হওয়া পর্যন্ত অপেক্ষা করো"],
    ["Linux এ ডিভাইস দেখা যায় না", "sudo systemctl restart usbmuxd, তারপর ক্যাবল খুলে আবার লাগাও"],
    ["Trust প্রম্পট আসে না", "iPhone → Settings → General → Transfer or Reset iPhone → Reset → Reset Location & Privacy"],
    ["Actions এ Artifacts পাচ্ছি না", "শেষ হওয়া run এর Summary পেজের একদম নিচে দেখো"],
  ],
  quiz: [
    { q: "idevice এ default-features = false দিলে rustls এর সাথে আর কী আলাদা করে দিতে হয়?", options: ["একটা crypto backend ফিচার (ring)", "tokio এর rt-multi-thread", "serde এর derive"], answer: 0 },
    { q: "Rust এর product_type প্যারামিটার JS থেকে কী নামে পাঠাতে হয়?", options: ["product_type", "productType", "ProductType"], answer: 1 },
    { q: "Trust না দিলে ব্যাটারির ডেটা কেন আসে না?", options: ["diagnostics_relay সুরক্ষিত সেশন চায়, তাই Trust করা pairing record লাগে", "USB ক্যাবলে সমস্যা", "Node এর ভার্সন পুরনো"], answer: 0 },
    { q: "Windows এ iPhone এর সাথে USB যোগাযোগের জন্য কোনটা চালু থাকতে হয়?", options: ["Apple Mobile Device Service", "WSL", "Docker"], answer: 0 },
    { q: "idevice কেন =0.1.60 এ পিন করা হয়েছে?", options: ["0.1.x এ প্রতি point release এ API ভাঙে", "এটা সবচেয়ে দ্রুত কম্পাইল হয়", "Windows এ DLL লাগে"], answer: 0 },
    { q: "Battery Health (Nominal) এর সূত্র কোনটা?", options: ["NominalChargeCapacity ÷ DesignCapacity × 100", "RemainingCapacity ÷ FullChargeCapacity × 100", "CycleCount ÷ DesignCapacity × 100"], answer: 0 },
  ],
};

export default project;
