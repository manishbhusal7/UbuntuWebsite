
// import React from 'react';

// export function Settings({ currBgImgName, changeBackgroundImage }) {
//   const wallpapers = {
//     "wall-1": "./images/wallpapers/wall-1.webp",
//     "wall-2": "./images/wallpapers/wall-2.webp",
//     "wall-3": "./images/wallpapers/wall-3.webp",
//     "wall-4": "./images/wallpapers/wall-4.webp",
//     "wall-5": "./images/wallpapers/wall-5.webp",
//     "wall-6": "./images/wallpapers/wall-6.webp",
//     "wall-7": "./images/wallpapers/wall-7.webp",
//     "wall-8": "./images/wallpapers/wall-8.webp",
//   };

//   const handleChange = (wallKey) => {
//     changeBackgroundImage(wallKey);
//   };

//   return (
//     <div className="w-full h-full flex flex-col bg-ub-cool-grey select-none windowMainScreen overflow-y-auto">
//       {/* Preview Section */}
//       <div className="w-full md:w-2/5 h-60 m-auto my-6 rounded-xl shadow-lg border border-gray-700 overflow-hidden" style={{
//         backgroundImage: `url(${wallpapers[currBgImgName]})`,
//         backgroundSize: 'cover',
//         backgroundPosition: 'center center',
//       }}></div>

//       {/* Wallpaper Options Grid */}
//       <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 p-4">
//         {Object.entries(wallpapers).map(([key, path], index) => (
//           <button
//             key={index}
//             onClick={() => handleChange(key)}
//             className={`h-28 rounded-lg border-4 overflow-hidden shadow-md focus:outline-none transition-all ${
//               key === currBgImgName ? 'border-yellow-600 scale-105' : 'border-transparent hover:border-gray-400'
//             }`}
//             style={{
//               backgroundImage: `url(${path})`,
//               backgroundSize: 'cover',
//               backgroundPosition: 'center',
//             }}
//             aria-label={`Select ${key}`}
//           />
//         ))}
//       </div>
//     </div>
//   );
// }

// export default Settings;

// export const displaySettings = () => {
//   return <Settings />;
// };

import React, { useState } from 'react';

// Navigation items
const navItems = [
  { id: 'wifi', icon: '📶', label: 'Wi-Fi' },
  { id: 'bluetooth', icon: '🔵', label: 'Bluetooth' },
  { id: 'appearance', icon: '🎨', label: 'Appearance' },
  { id: 'privacy', icon: '🔒', label: 'Privacy' },
  { id: 'network', icon: '🌐', label: 'Network' },
  { id: 'display', icon: '🖥️', label: 'Displays' },
  { id: 'sound', icon: '🔊', label: 'Sound' },
  { id: 'datetime', icon: '⏰', label: 'Date & Time' },
  { id: 'users', icon: '🧑‍💻', label: 'Users' },
  { id: 'about', icon: '⚙️', label: 'About' }
];

// Reusable content section
function Section({ title, items }) {
  return (
    <>
      <h2 className="text-xl font-semibold mb-3">{title}</h2>
      <ul className="list-disc list-inside text-sm text-gray-300 space-y-1">
        {items.map((text, i) => (
          <li key={i}>{text}</li>
        ))}
      </ul>
    </>
  );
}

// Settings content mapped per tab
const contentMap = {
  wifi: <Section title="Wi-Fi" items={["Connected to: Manish iphone", "Signal Strength: Excellent", "Security: WPA2", "IP: 192.168.0.24"]} />,
  bluetooth: <Section title="Bluetooth" items={["Status: Enabled", "Nearby: AirPods, Ubuntu Speaker", "Paired: None"]} />,
  appearance: <Section title="Appearance" items={["Theme: Dark", "Accent Color: Orange", "Icon Pack: Yaru"]} />,
  privacy: <Section title="Privacy" items={["Location: Off", "Data Sharing: Disabled", "Screen Lock: 5 mins"]} />,
  network: <Section title="Network" items={["Wi-Fi: Connected", "VPN: Not configured", "Proxy: Manual"]} />,
  display: <Section title="Displays" items={["Resolution: 1920x1080", "Refresh Rate: 60Hz", "Night Light: On"]} />,
  sound: <Section title="Sound" items={["Output: Speakers", "Input: Mic", "Volume: 75%"]} />,
  datetime: <Section title="Date & Time" items={["Time Zone: America/New_York", "Format: 12-hour", "Auto Sync: Enabled"]} />,
  users: <Section title="Users" items={["Username: manish", "Account Type: Admin", "Login: Password Protected"]} />,
  about: <Section title="About" items={["Device: manish-laptop", "OS: Ubuntu 22.04", "Memory: 16GB", "Processor: Intel i7"]} />
};

// Main Settings Component
export function Settings() {
  const [activeTab, setActiveTab] = useState('wifi');

  return (
    <div className="w-full h-full flex bg-ub-grey text-white select-none cursor-default">
      {/* Sidebar Navigation */}
      <div className="w-1/3 md:w-1/5 bg-ub-cool-grey border-r border-black p-2 pt-4 overflow-y-auto">
        {navItems.map((item) => (
          <button
            key={item.id}
            type="button"
            onClick={() => setActiveTab(item.id)}
            className={`flex items-center gap-3 w-full text-left px-4 py-2 rounded-md mb-1 transition cursor-pointer ${
              activeTab === item.id
                ? 'bg-orange-600 text-white'
                : 'hover:bg-white hover:bg-opacity-10 text-gray-200'
            }`}
          >
            <span className="text-lg">{item.icon}</span>
            <span className="text-sm font-medium">{item.label}</span>
          </button>
        ))}
      </div>

      {/* Content Display */}
      <div className="w-2/3 md:w-4/5 p-6 overflow-y-auto">
        {contentMap[activeTab]}
      </div>
    </div>
  );
}

export default Settings;

export const displaySettings = () => <Settings />;
