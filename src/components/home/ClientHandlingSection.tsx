"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Phone,
  PhoneCall,
  Inbox,
  MessageCircle,
  Clock,
  PhoneOff,
  Users,
  Calendar,
  TrendingUp,
  DollarSign,
  Target,
  FileText,
  Settings,
  Search,
  Bell,
  Plus,
  Filter,
  MoreHorizontal,
  Video,
  Mail,
  Star,
  Activity,
  BarChart3,
  PieChart,
  UserPlus,
  Building,
  MapPin,
  Tag,
  Briefcase,
  X,
} from "lucide-react";

const dashboardStats = [
  {
    label: "Total Clients",
    value: "2,847",
    change: "+12%",
    icon: Users,
    color: "text-blue-500",
  },
  {
    label: "Active Deals",
    value: "134",
    change: "+8%",
    icon: Target,
    color: "text-green-500",
  },
  {
    label: "Revenue",
    value: "$127K",
    change: "+24%",
    icon: DollarSign,
    color: "text-purple-500",
  },
  {
    label: "Conversion",
    value: "68%",
    change: "+5%",
    icon: TrendingUp,
    color: "text-orange-500",
  },
];

const pipelineData = [
  { stage: "Qualified", count: 24, value: "$240K" },
  { stage: "Proposal", count: 18, value: "$180K" },
  { stage: "Negotiation", count: 12, value: "$120K" },
  { stage: "Closed Won", count: 8, value: "$80K" },
];

const recentClients = [
  {
    name: "John Smith",
    company: "Tech Corp",
    status: "Hot Lead",
    avatar: "JS",
    time: "2 min ago",
  },
  {
    name: "Emma Wilson",
    company: "Design Studio",
    status: "In Progress",
    avatar: "EW",
    time: "15 min ago",
  },
  {
    name: "Michael Brown",
    company: "StartupXYZ",
    status: "Closed Won",
    avatar: "MB",
    time: "1h ago",
  },
  {
    name: "Sarah Davis",
    company: "Enterprise Ltd",
    status: "Negotiation",
    avatar: "SD",
    time: "2h ago",
  },
  {
    name: "David Chen",
    company: "Innovation Labs",
    status: "Hot Lead",
    avatar: "DC",
    time: "3h ago",
  },
  {
    name: "Lisa Parker",
    company: "Global Systems",
    status: "In Progress",
    avatar: "LP",
    time: "4h ago",
  },
];

const todayTasks = [
  { task: "Call John Smith", type: "Call", time: "2:00 PM", priority: "High" },
  {
    task: "Demo for Tech Corp",
    type: "Meeting",
    time: "3:30 PM",
    priority: "Medium",
  },
  {
    task: "Send proposal to Emma",
    type: "Email",
    time: "5:00 PM",
    priority: "High",
  },
  {
    task: "Follow up with leads",
    type: "Call",
    time: "Tomorrow",
    priority: "Low",
  },
  {
    task: "Review quarterly reports",
    type: "Task",
    time: "Tomorrow",
    priority: "Medium",
  },
];

// Call Timer Component
const CallTimer = () => {
  const [time, setTime] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setTime((prevTime) => prevTime + 1);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, "0")}:${secs
      .toString()
      .padStart(2, "0")}`;
  };

  return <span>{formatTime(time)}</span>;
};

// Three-dot Animation Component
const ThreeDotAnimation = () => {
  return (
    <div className="flex items-center gap-1 ml-1">
      <motion.div
        className="w-1 h-1 bg-white/60 rounded-full"
        animate={{ opacity: [0.3, 1, 0.3] }}
        transition={{ duration: 1.5, repeat: Infinity, delay: 0 }}
      />
      <motion.div
        className="w-1 h-1 bg-white/60 rounded-full"
        animate={{ opacity: [0.3, 1, 0.3] }}
        transition={{ duration: 1.5, repeat: Infinity, delay: 0.3 }}
      />
      <motion.div
        className="w-1 h-1 bg-white/60 rounded-full"
        animate={{ opacity: [0.3, 1, 0.3] }}
        transition={{ duration: 1.5, repeat: Infinity, delay: 0.6 }}
      />
    </div>
  );
};

// Enhanced Wave Animation Component - Voice Activity
const WaveAnimation = ({ isActive }: { isActive: boolean }) => {
  return (
    <div className="flex items-center justify-center h-20 w-full">
      <svg
        width="100%"
        height="80"
        viewBox="0 0 500 80"
        className="w-full h-full overflow-hidden"
      >
        {/* Primary flowing voice wave - seamless right to left with increased height */}
        <motion.path
          d="M-100,40 C-50,10 0,70 50,40 C100,10 150,70 200,40 C250,10 300,70 350,40 C400,10 450,70 500,40 C550,10 600,70 650,40"
          stroke="rgba(255, 255, 255, 0.8)"
          strokeWidth="2"
          fill="none"
          strokeLinecap="round"
          animate={
            isActive
              ? {
                  x: [100, -100],
                  d: [
                    "M-100,40 C-50,10 0,70 50,40 C100,10 150,70 200,40 C250,10 300,70 350,40 C400,10 450,70 500,40 C550,10 600,70 650,40",
                    "M-100,40 C-50,70 0,10 50,40 C100,70 150,10 200,40 C250,70 300,10 350,40 C400,70 450,10 500,40 C550,70 600,10 650,40",
                    "M-100,40 C-50,5 0,75 50,40 C100,5 150,75 200,40 C250,5 300,75 350,40 C400,5 450,75 500,40 C550,5 600,75 650,40",
                    "M-100,40 C-50,75 0,5 50,40 C100,75 150,5 200,40 C250,75 300,5 350,40 C400,75 450,5 500,40 C550,75 600,5 650,40",
                    "M-100,40 C-50,10 0,70 50,40 C100,10 150,70 200,40 C250,10 300,70 350,40 C400,10 450,70 500,40 C550,10 600,70 650,40",
                  ],
                }
              : {}
          }
          transition={{
            duration: 12,
            repeat: isActive ? Infinity : 0,
            ease: "linear",
            repeatType: "loop",
          }}
        />

        {/* Secondary flowing wave layer - seamless right to left with increased height */}
        <motion.path
          d="M-150,40 C-100,20 -50,60 0,40 C50,20 100,60 150,40 C200,20 250,60 300,40 C350,20 400,60 450,40 C500,20 550,60 600,40 C650,20 700,60 750,40"
          stroke="rgba(156, 163, 175, 0.6)"
          strokeWidth="1.5"
          fill="none"
          strokeLinecap="round"
          animate={
            isActive
              ? {
                  x: [80, -80],
                  d: [
                    "M-150,40 C-100,20 -50,60 0,40 C50,20 100,60 150,40 C200,20 250,60 300,40 C350,20 400,60 450,40 C500,20 550,60 600,40 C650,20 700,60 750,40",
                    "M-150,40 C-100,60 -50,20 0,40 C50,60 100,20 150,40 C200,60 250,20 300,40 C350,60 400,20 450,40 C500,60 550,20 600,40 C650,60 700,20 750,40",
                    "M-150,40 C-100,15 -50,65 0,40 C50,15 100,65 150,40 C200,15 250,65 300,40 C350,15 400,65 450,40 C500,15 550,65 600,40 C650,15 700,65 750,40",
                    "M-150,40 C-100,65 -50,15 0,40 C50,65 100,15 150,40 C200,65 250,15 300,40 C350,65 400,15 450,40 C500,65 550,15 600,40 C650,65 700,15 750,40",
                    "M-150,40 C-100,20 -50,60 0,40 C50,20 100,60 150,40 C200,20 250,60 300,40 C350,20 400,60 450,40 C500,20 550,60 600,40 C650,20 700,60 750,40",
                  ],
                }
              : {}
          }
          transition={{
            duration: 14,
            repeat: isActive ? Infinity : 0,
            ease: "linear",
            delay: 1.5,
            repeatType: "loop",
          }}
        />

        {/* Tertiary subtle flowing wave - seamless right to left with increased height */}
        <motion.path
          d="M-200,40 C-150,25 -100,55 -50,40 C0,25 50,55 100,40 C150,25 200,55 250,40 C300,25 350,55 400,40 C450,25 500,55 550,40 C600,25 650,55 700,40 C750,25 800,55 850,40"
          stroke="rgba(107, 114, 128, 0.4)"
          strokeWidth="1"
          fill="none"
          strokeLinecap="round"
          animate={
            isActive
              ? {
                  x: [60, -60],
                  d: [
                    "M-200,40 C-150,25 -100,55 -50,40 C0,25 50,55 100,40 C150,25 200,55 250,40 C300,25 350,55 400,40 C450,25 500,55 550,40 C600,25 650,55 700,40 C750,25 800,55 850,40",
                    "M-200,40 C-150,55 -100,25 -50,40 C0,55 50,25 100,40 C150,55 200,25 250,40 C300,55 350,25 400,40 C450,55 500,25 550,40 C600,55 650,25 700,40 C750,55 800,25 850,40",
                    "M-200,40 C-150,20 -100,60 -50,40 C0,20 50,60 100,40 C150,20 200,60 250,40 C300,20 350,60 400,40 C450,20 500,60 550,40 C600,20 650,60 700,40 C750,20 800,60 850,40",
                    "M-200,40 C-150,60 -100,20 -50,40 C0,60 50,20 100,40 C150,60 200,20 250,40 C300,60 350,20 400,40 C450,60 500,20 550,40 C600,60 650,20 700,40 C750,60 800,20 850,40",
                    "M-200,40 C-150,25 -100,55 -50,40 C0,25 50,55 100,40 C150,25 200,55 250,40 C300,25 350,55 400,40 C450,25 500,55 550,40 C600,25 650,55 700,40 C750,25 800,55 850,40",
                  ],
                }
              : {}
          }
          transition={{
            duration: 16,
            repeat: isActive ? Infinity : 0,
            ease: "linear",
            delay: 2.5,
            repeatType: "loop",
          }}
        />
      </svg>
    </div>
  );
};

// Inbox Dashboard Component - Matches Reference
function InboxDashboard() {
  const [selectedMessage, setSelectedMessage] = useState(0);

  const inboxMessages = [
    {
      id: 1,
      name: "Jane Doe",
      avatar: "J",
      avatarColor: "bg-purple-500",
      subject: "Request for a discount on the yearly p...",
      time: "11:49",
      isNew: true,
      hasChart: true,
    },
    {
      id: 2,
      name: "Trevor Amro",
      avatar: "T",
      avatarColor: "bg-pink-500",
      subject: "Wants to cancel the subscription for t...",
      time: "23:42",
      isNew: false,
      hasChart: false,
    },
    {
      id: 3,
      name: "Chloë Buis",
      avatar: "C",
      avatarColor: "bg-red-500",
      subject: "Called to ask for more information abo...",
      time: "23:12",
      isNew: false,
      hasChart: true,
    },
    {
      id: 4,
      name: "Juliet Manrho",
      avatar: "J",
      avatarColor: "bg-yellow-500",
      subject: "Inquiry for an enterprise solution that i...",
      time: "22:54",
      isNew: false,
      hasChart: false,
    },
    {
      id: 5,
      name: "Nelson McNeil",
      avatar: "N",
      avatarColor: "bg-green-500",
      subject: "Experienced a bug in the application th...",
      time: "22:53",
      isNew: false,
      hasChart: false,
    },
    {
      id: 6,
      name: "Emily Longsdale",
      avatar: "E",
      avatarColor: "bg-blue-500",
      subject: "Wants to learn more about the feature f...",
      time: "4h",
      isNew: false,
      hasChart: false,
    },
  ];

  return (
    <div className="w-full h-[500px] relative">
      {/* Main container with dark gradient background */}
      <div
        className="w-full h-full rounded-2xl border border-gray-700/30 shadow-2xl overflow-hidden"
        style={{
          background:
            "linear-gradient(180deg, rgba(13, 13, 18, 0.8) 0%, rgb(13, 13, 18) 14.9%, rgb(13, 13, 18) 100%)",
          transform:
            "perspective(5000px) scale(1.1) rotate(339deg) rotateX(24deg) rotateY(30deg)",
          transformOrigin: "0% 0% 0px",
          boxShadow:
            "rgb(0, 0, 0) 0px 0px 20px 0px, rgba(255, 255, 255, 0.14) 1px 1px 1px 0px inset",
        }}
      >
        {/* Sidebar */}
        <div className="absolute left-0 top-0 h-full w-16 bg-gradient-to-b from-gray-900/50 to-gray-900 border-r border-gray-700/20">
          <div className="p-4">
            <div className="w-8 h-8 bg-gray-700/50 rounded opacity-50"></div>
          </div>
        </div>

        {/* Main content */}
        <div className="pl-16 h-full flex flex-col">
          {/* Header */}
          <div className="flex items-center justify-between p-4 border-b border-gray-700/20">
            <div className="flex items-center gap-4">
              <h2 className="text-white/90 font-medium text-lg">Inbox</h2>
            </div>
            <div className="flex items-center gap-6">
              <div className="flex items-center gap-2">
                <Filter className="w-4 h-4 text-gray-400" />
                <span className="text-gray-400 text-sm">Filter</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-gray-400 text-sm">Sort</span>
                <svg
                  className="w-4 h-4 text-gray-400"
                  viewBox="0 0 16 16"
                  fill="currentColor"
                >
                  <path d="M2.502 1.75 C 2.502 1.336 2.838 1 3.252 1 C 3.666 1 4.002 1.336 4.002 1.75 L 4.002 9 L 5.719 9 C 5.869 9 6.006 9.084 6.075 9.218 C 6.143 9.352 6.131 9.512 6.043 9.634 L 3.576 13.048 C 3.501 13.152 3.38 13.213 3.252 13.213 C 3.124 13.213 3.003 13.152 2.928 13.048 L 0.46 9.634 C 0.372 9.512 0.36 9.352 0.428 9.218 C 0.497 9.084 0.634 9 0.784 9 L 2.502 9 Z" />
                </svg>
              </div>
            </div>
          </div>

          {/* Todo count */}
          <div className="p-4 border-b border-gray-700/20">
            <div className="flex items-center gap-2">
              <span className="text-gray-400 text-sm">16 Todo</span>
              <svg className="w-3 h-3 text-gray-500" viewBox="0 0 10 10">
                <path
                  d="M 2 4 L 5 7 L 8 4"
                  fill="transparent"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  strokeLinecap="round"
                />
              </svg>
            </div>
            <div className="text-gray-500 text-xs mt-1">1 New</div>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-hidden">
            {inboxMessages.map((message, index) => (
              <motion.div
                key={message.id}
                className={`flex items-center gap-3 p-4 border-b border-gray-700/10 hover:bg-gray-800/30 transition-colors cursor-pointer ${
                  message.isNew ? "bg-gray-800/20" : ""
                }`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                onClick={() => setSelectedMessage(message.id)}
              >
                {/* Avatar */}
                <div
                  className={`w-7 h-7 ${message.avatarColor} rounded-full flex items-center justify-center flex-shrink-0`}
                >
                  <span className="text-white font-semibold text-xs">
                    {message.avatar}
                  </span>
                </div>

                {/* Content */}
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2">
                    <span className="text-white/90 text-sm font-medium">
                      {message.name}
                    </span>
                    {message.isNew && (
                      <motion.div
                        className="w-2 h-2 bg-yellow-400 rounded-full"
                        animate={{ scale: [1, 1.2, 1] }}
                        transition={{ duration: 2, repeat: Infinity }}
                      />
                    )}
                  </div>
                  <p className="text-gray-400 text-xs truncate mt-1">
                    {message.subject}
                  </p>
                </div>

                {/* Time and chart */}
                <div className="flex items-center gap-2 flex-shrink-0">
                  {message.hasChart && (
                    <motion.div
                      className="w-4 h-4 text-gray-400"
                      animate={{ opacity: [0.5, 1, 0.5] }}
                      transition={{ duration: 2, repeat: Infinity }}
                    >
                      <svg viewBox="0 0 14 14" fill="currentColor">
                        <path d="M 0 9 C 0 8.448 0.448 8 1 8 L 2.5 8 C 3.052 8 3.5 8.448 3.5 9 L 3.5 13 C 3.5 13.552 3.052 14 2.5 14 L 1 14 C 0.448 14 0 13.552 0 13 Z" />
                        <path
                          d="M 5.25 5 C 5.25 4.448 5.698 4 6.25 4 L 7.75 4 C 8.302 4 8.75 4.448 8.75 5 L 8.75 13 C 8.75 13.552 8.302 14 7.75 14 L 6.25 14 C 5.698 14 5.25 13.552 5.25 13 Z"
                          opacity="0.2"
                        />
                        <path
                          d="M 10.5 1 C 10.5 0.448 10.948 0 11.5 0 L 13 0 C 13.552 0 14 0.448 14 1 L 14 13 C 14 13.552 13.552 14 13 14 L 11.5 14 C 10.948 14 10.5 13.552 10.5 13 Z"
                          opacity="0.25"
                        />
                      </svg>
                    </motion.div>
                  )}
                  <span className="text-gray-500 text-xs">{message.time}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Overlay gradient for depth */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/10 pointer-events-none" />
      </div>
    </div>
  );
}

export function ClientHandlingSection() {
  return (
    <section className="relative min-h-screen bg-black overflow-hidden">
      {/* Grid background pattern */}
      <div className="absolute inset-0 opacity-30">
        <div
          className="w-full h-full"
          style={{
            backgroundImage: `
              linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)
            `,
            backgroundSize: "50px 50px",
          }}
        />
      </div>

      <div className="relative z-10 container mx-auto px-6 py-20">
        <div className="grid lg:grid-cols-2 gap-12 min-h-[70vh] max-w-7xl mx-auto relative items-center">
          {/* Divider between columns */}
          <div className="absolute left-1/2 top-0 bottom-0 w-[0.5px] bg-gray-600 transform -translate-x-1/2 hidden lg:block"></div>

          {/* Left Column - Call Interface */}
          <motion.div
            className="relative flex flex-col justify-center"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            {/* Support headline */}
            <motion.div
              className="mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
            >
              <h3 className="text-lg lg:text-xl font-medium text-white/90 leading-tight pb-3 border-b border-gray-700/30 mb-2">
                Provide support
              </h3>
              <h4 className="text-lg lg:text-xl font-medium text-white/90 leading-tight">
                24/7—on demand,
              </h4>
              <h5 className="text-lg lg:text-xl font-medium text-white/60 leading-tight">
                to increase CSAT
              </h5>
              {/* Divider line that extends to center border */}
              <div className="w-full h-px bg-gray-600 mt-6 mr-[-1.5rem]"></div>
              
              </motion.div>

            {/* Call Interface */}
            <motion.div
              className="space-y-2"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.9 }}
            >
              {/* Call details */}
              <div className="pb-4 border-b border-gray-700/30">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-4 h-4 bg-green-400 rounded flex items-center justify-center">
                    <Phone className="w-2 h-2 text-black" />
                  </div>
                  <span className="text-white/80 text-sm">Jane Doe</span>
                  <button className="bg-gray-800/80 backdrop-blur-sm border border-gray-700/50 rounded-lg px-3 py-1 text-gray-400 hover:text-white hover:bg-gray-700/80 transition-all duration-200 shadow-lg hover:shadow-xl text-sm ml-auto">
                    Close
                  </button>
                </div>

                <div className="flex items-center gap-3 mb-3">
                  <span className="text-white/80 text-sm">+1 647-XXX-XXXX</span>
                  <span className="text-white/50 text-sm ml-auto">
                    Today at 09:30
                  </span>
                </div>
                <div className="text-white font-medium mb-2">
                  Discount not applied
                </div>
                <div className="text-white/80 text-sm leading-relaxed break-words">
                  Hi, I bought a yearly plan, but the 20% discount wasn't
                  applied. Could someone please take a look? Thank you!
                  <br />
                  <br />— Jane
                </div>
              </div>

              {/* Wave animation */}
              <div className="border-b border-gray-700/30">
                <WaveAnimation isActive={true} />
              </div>

              {/* Call status */}
              <div className="flex items-center justify-between pt-4">
                <div className="backdrop-blur-sm bg-white/10 border border-white/20 rounded-md px-2 py-1 shadow-lg">
                  <div className="text-sm font-mono text-white">
                    <CallTimer />
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-white/60 text-sm">Interacting</span>
                  <ThreeDotAnimation />
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Column - Compact Dashboard */}
          <motion.div
            className="relative flex flex-col justify-center"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
          >
            {/* Top notification */}
            <motion.div
              className="flex items-center gap-3 mb-8"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="w-5 h-5 bg-green-400 rounded flex items-center justify-center">
                <div className="w-2 h-2 bg-black rounded"></div>
              </div>
              <span className="text-white/80 text-sm">
                Leadflow 
              </span>
            </motion.div>

            {/* Main headline */}
            <motion.div
              className="mb-12"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <h1 className="text-lg lg:text-xl font-medium text-white/90 leading-tight pb-3 border-b border-gray-700/30 mb-4">
                Handle unlimited customer inbound,
              </h1>
              <h2 className="text-lg lg:text-xl font-medium text-white/60 leading-tight">
                without the need to increase headcount
              </h2>
            </motion.div>

            {/* Compact Inbox Dashboard Preview */}
            <motion.div
              className="relative -mr-8 -mt-4"
              initial={{ opacity: 0, scale: 0.6 }}
              animate={{ opacity: 1, scale: 0.8 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <InboxDashboard />
              {/* Overlay to make it look like a preview */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent pointer-events-none rounded-2xl" />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
