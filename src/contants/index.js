import imgUser from "../assets/images/user.webp";
import iconArrow from "../assets/images/arrow.svg";

import { asset_notif, asset_profile } from "../assets/images";

export const dataCarousel = [
  {
    imgUrl: imgUser,
    name: "Ana Riswati",
    day: "Senin",
    date: "30 Mei 2022",
    text1:
      "Kalimat 1 Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officiis sequi quia maiores? In doloribus voluptas saepe eius voluptatibus consectetur praesentium.",
    text2:
      "Kalimat 2 Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officiis sequi quia maiores? In doloribus voluptas saepe eius voluptatibus consectetur praesentium.",
    text3:
      "Kalimat 3 Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officiis sequi quia maiores? In doloribus voluptas saepe eius voluptatibus consectetur praesentium.",
    text4:
      "Kalimat 4 Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officiis sequi quia maiores? In doloribus voluptas saepe eius voluptatibus consectetur praesentium.",
  },
  {
    imgUrl: imgUser,
    name: "John Smith",
    day: "Rabu",
    date: "30 Juni 2023",
    text1:
      "Kalimat 1 Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officiis sequi quia maiores? In doloribus voluptas saepe eius voluptatibus consectetur praesentium.",
    text2:
      "Kalimat 2 Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officiis sequi quia maiores? In doloribus voluptas saepe eius voluptatibus consectetur praesentium.",
    text3:
      "Kalimat 3 Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officiis sequi quia maiores? In doloribus voluptas saepe eius voluptatibus consectetur praesentium.",
    text4:
      "Kalimat 4 Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officiis sequi quia maiores? In doloribus voluptas saepe eius voluptatibus consectetur praesentium.",
  },
  {
    imgUrl: imgUser,
    name: "Van Rosum",
    day: "Minggu",
    date: "30 Mei 2023",
    text1:
      "Kalimat 1 Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officiis sequi quia maiores? In doloribus voluptas saepe eius voluptatibus consectetur praesentium.",
    text2:
      "Kalimat 2 Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officiis sequi quia maiores? In doloribus voluptas saepe eius voluptatibus consectetur praesentium.",
    text3:
      "Kalimat 3 Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officiis sequi quia maiores? In doloribus voluptas saepe eius voluptatibus consectetur praesentium.",
    text4:
      "Kalimat 4 Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officiis sequi quia maiores? In doloribus voluptas saepe eius voluptatibus consectetur praesentium.",
  },
];

export const dataPerson = [
  {
    imgUrl: asset_profile.profile_1,
    name: "Jefril",
    position: "BSD",
  },
  {
    imgUrl: asset_profile.profile_2,
    name: "Zasami",
    position: "BSD",
  },
  {
    imgUrl: asset_profile.profile_3,
    name: "Sam",
    position: "BSD",
  },
  {
    imgUrl: asset_profile.profile_4,
    name: "Aldo",
    position: "BSD",
  },
  {
    imgUrl: asset_profile.profile_5,
    name: "Erwin",
    position: "BSD",
  },
  {
    imgUrl: asset_profile.profile_6,
    name: "Arya",
    position: "BSD",
  },
  {
    imgUrl: asset_profile.profile_3,
    name: "Johan",
    position: "BSD",
  },
  {
    imgUrl: asset_profile.profile_2,
    name: "Rivan",
    position: "WFH",
  },

  {
    imgUrl: asset_profile.profile_1,
    name: "",
    position: "",
  },
];

export const dataNotification = [
  {
    title: "Notification",
    notif: [
      {
        imgUrl: asset_notif.cointCheck,
        bgColor: "#d7e5ff",
        icon: iconArrow,
        date: "Today",
        title: "Sickness",
        desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis, inventore.",
      },
      {
        imgUrl: asset_notif.cointClose,
        bgColor: "#fff",
        icon: iconArrow,
        date: "Yesterday",
        title: "Sickness",
        desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis, inventore.",
      },
      {
        imgUrl: asset_notif.cointArrow,
        bgColor: "#d7e5ff",
        icon: iconArrow,
        date: "2022-10-06",
        title: "Sickness",
        desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis, inventore.",
      },
      {
        imgUrl: asset_notif.pillCheck,
        bgColor: "#d7e5ff",
        icon: iconArrow,
        date: "2022-10-06",
        title: "Sickness",
        desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis, inventore.",
      },
      {
        imgUrl: asset_notif.pillClose,
        bgColor: "#fff",
        icon: iconArrow,
        date: "2022-10-06",
        title: "Sickness",
        desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis, inventore.",
      },
      {
        imgUrl: asset_notif.pillArrow,
        bgColor: "#fff",
        icon: iconArrow,
        date: "2022-10-06",
        title: "Sickness",
        desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis, inventore.",
      },
      {
        imgUrl: asset_notif.watchCheck,
        bgColor: "#d7e5ff",
        icon: iconArrow,
        date: "2022-10-06",
        title: "Sickness",
        desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis, inventore.",
      },
      {
        imgUrl: asset_notif.watchClose,
        bgColor: "#fff",
        icon: iconArrow,
        date: "2022-10-06",
        title: "Sickness",
        desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis, inventore.",
      },
      {
        imgUrl: asset_notif.watchArrow,
        bgColor: "#fff",
        icon: iconArrow,
        date: "2022-10-06",
        title: "Sickness",
        desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis, inventore.",
      },
    ],
  },
];
