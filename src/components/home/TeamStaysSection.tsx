"use client";

import {
  Mail,
  ShoppingCart,
  Bug,
  Phone,
  FileEdit,
  Slack,
  Calendar,
  Users,
  MessageSquare,
} from "lucide-react";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Grid } from "swiper/modules";
import "swiper/css";
import "swiper/css/grid";
import clsx from "clsx";

type Card = {
  icon: React.ReactNode;
  title: string;
  actions: { icon: React.ReactNode; label: string }[];
};

const cards: Card[] = [
  {
    icon: <Users className="w-5 h-5 text-sky-400" />,
    title: "Lead Finder",
    actions: [
      { icon: <span>⚡</span>, label: "Enrich" },
      {
        icon: <Slack className="w-4 h-4 text-pink-400" />,
        label: "Send Message",
      },
    ],
  },
  {
    icon: <Bug className="w-5 h-5 text-purple-300" />,
    title: "Bug Report",
    actions: [
      { icon: <span>🐛</span>, label: "Create Issue" },
      { icon: <Mail className="w-4 h-4 text-red-400" />, label: "Send Email" },
    ],
  },
  {
    icon: <Mail className="w-5 h-5 text-purple-300" />,
    title: "SaaS Customer Support",
    actions: [
      { icon: <Mail className="w-4 h-4 text-red-400" />, label: "Send Email" },
      { icon: <span>✖</span>, label: "Cancel" },
      { icon: <span>♻️</span>, label: "Update" },
    ],
  },
  {
    icon: <ShoppingCart className="w-5 h-5 text-green-300" />,
    title: "Order Confirmation",
    actions: [
      { icon: <span>📦</span>, label: "Get Order" },
      { icon: <Mail className="w-4 h-4 text-red-400" />, label: "Send Email" },
    ],
  },
  {
    icon: <MessageSquare className="w-5 h-5 text-violet-400" />,
    title: "Tech Support",
    actions: [
      { icon: <span>🛠️</span>, label: "Create Issue" },
      { icon: <span>🪲</span>, label: "Get Issues" },
      { icon: <Mail className="w-4 h-4 text-red-400" />, label: "Send Email" },
    ],
  },
  {
    icon: <FileEdit className="w-5 h-5 text-yellow-300" />,
    title: "Email Draft",
    actions: [
      { icon: <Mail className="w-4 h-4 text-red-400" />, label: "Get Emails" },
      { icon: <span>📝</span>, label: "Create Draft" },
    ],
  },
  {
    icon: <Phone className="w-5 h-5 text-green-400" />,
    title: "Customer Intake",
    actions: [
      { icon: <span>📇</span>, label: "Create Contact" },
      {
        icon: <Calendar className="w-4 h-4 text-blue-400" />,
        label: "Book Event",
      },
    ],
  },
];

const Card = ({ icon, title, actions }: (typeof cards)[0]) => (
<div className="w-[300px] h-[130px] bg-zinc-800 hover:bg-zinc-700 transition rounded-xl p-4 flex flex-col justify-start items-start text-white shadow-2xl border border-zinc-700">
    <div className="mb-3">{icon}</div>
    <div className="text-sm font-medium mb-3">{title}</div>
    <div className="flex flex-nowrap overflow-hidden gap-2 w-full">
      {actions.map((action, i) => (
        <div
          key={i}
          className="flex items-center gap-1 text-xs text-gray-400 px-2 py-1 rounded-md bg-zinc-700/50 whitespace-nowrap"
        >
          {action.icon}
          <span>{action.label}</span>
        </div>
      ))}
    </div>
  </div>
);

export default function TeamStaysSection() {
  return (
    <section className="bg-black text-white py-20 px-6 min-h-screen">
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-6xl font-bold leading-tight">
          Keep Your Team in the Loop
        </h1>
        <p className="text-lg mt-4 text-gray-300">
          With seamless third-party integrations, your team can work efficiently
          and perform every task with ease
          <br />
          ensuring smooth operations and empowering you to scale your business
          with confidence.
        </p>
        <button className="mt-8 px-6 py-3 rounded-full bg-gradient-to-r from-purple-600 to-blue-500 text-white hover:scale-105 transition">
          Try For Free →
        </button>
      </div>

      <div className="relative">
        <div className="absolute left-0 top-0 h-full w-20 md:w-60 z-10 pointer-events-none bg-gradient-to-r from-zinc-950 to-transparent" />

        {/* Fade Right */}
        <div className="absolute right-0 top-0 h-full w-20 md:w-60 z-10 pointer-events-none bg-gradient-to-l from-zinc-950 to-transparent" />

        {/* Row 1 */}
        <Swiper
          modules={[Autoplay]}
          autoplay={{
            delay: 0,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          speed={5000}
          loop
          slidesPerView="auto"
          spaceBetween={20}
          className="overflow-visible"
        >
          {cards.map((card, i) => (
            <SwiperSlide key={`row1-${i}`} style={{ width: "auto" }}>
              <Card {...card} />
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Row 2 (reverse direction) */}
        <Swiper
          modules={[Autoplay]}
          autoplay={{
            delay: 0,
            disableOnInteraction: false,
            reverseDirection: true,
            pauseOnMouseEnter: true,
          }}
          speed={5000}
          loop
          slidesPerView="auto"
          spaceBetween={20}
          className="overflow-visible mt-10"
        >
          {cards.map((card, i) => (
            <SwiperSlide key={`row2-${i}`} style={{ width: "auto" }}>
              <Card {...card} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
