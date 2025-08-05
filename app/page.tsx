"use client"

import type React from "react"

import { useState } from "react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Bell,
  Eye,
  Settings,
  Globe,
  Edit3,
  BarChart3,
  ArrowDownLeft,
  ArrowUpRight,
  ChevronRight,
  Plus,
  Minus,
} from "lucide-react"

// Translation data
const translations = {
  en: {
    greeting: "Good evening!",
    name: "Elay",
    mobileSavings: "Mobile Savings",
    default: "Default",
    receive: "Receive",
    send: "Send",
    analytics: "Analytics",
    accounts: "Accounts",
    cards: "Cards",
    payments: "Payments",
    abaScan: "ABA Scan",
    favorites: "Favorites",
    transfers: "Transfers",
    giftZone: "Gift Zone",
    governmentServices: "Government Services",
    newsPromotions: "News & Promotions",
    exploreServices: "Explore Services",
    viewAll: "VIEW ALL",
    editHome: "Edit Home",
    language: "Language",
    fontSettings: "Font Settings",
    promoTitle: "OUR CUSTOMERS SELL THEIR PROPERTIES",
    promoPoint1: "OPEN FOR NEGOTIATION",
    promoPoint2: "SECURE THE BEST DEALS DIRECTLY WITH THE OWNER",
    // New services
    securedTransaction: "Secured Transaction",
    metfoneServices: "Metfone Services",
    cinemaTicket: "Cinema Ticket",
    vetExpress: "VET Express",
    starbucks: "Starbucks",
    foodDelivery: "Food Delivery",
    onlineShopping: "Online Shopping",
    travelBooking: "Travel Booking",
    // Government services
    nssfSelfEmployed: "NSSF Self-Employed",
    ppshvExpressway: "PPSHV Expressway",
    generalDepartment: "General Department",
    foreignAffairs: "Foreign Affairs",
    taxDepartment: "Tax Department",
    customsDepartment: "Customs Department",
    // Promotions
    vespaPromo: "WIN A VESPA",
    propertyPromo: "PROPERTY DEALS",
    cashbackPromo: "CASHBACK OFFERS",
    travelPromo: "TRAVEL DISCOUNTS",
  },
  km: {
    greeting: "សួស្តីល្ងាច!",
    name: "អេឡាយ",
    mobileSavings: "ចល័តសន្សំ",
    default: "លំនាំដើម",
    receive: "ទទួល",
    send: "ផ្ញើ",
    analytics: "វិភាគ",
    accounts: "គណនី",
    cards: "កាត",
    payments: "ការបង់ប្រាក់",
    abaScan: "ABA ស្កេន",
    favorites: "សំណព្វ",
    transfers: "ផ្ទេរ",
    giftZone: "តំបន់អំណោយ",
    governmentServices: "សេវាកម្មរដ្ឋាភិបាល",
    newsPromotions: "ព័ត៌មាន និងការផ្សព្វផ្សាយ",
    exploreServices: "រុករកសេវាកម្ម",
    viewAll: "មើលទាំងអស់",
    editHome: "កែសម្រួលទំព័រដើម",
    language: "ភាសា",
    fontSettings: "ការកំណត់ពុម្ពអក្សរ",
    promoTitle: "អតិថិជនរបស់យើងលក់អចលនទ្រព្យ",
    promoPoint1: "បើកសម្រាប់ការចរចា",
    promoPoint2: "ធានាការព្រមព្រៀងល្អបំផុតដោយផ្ទាល់ជាមួយម្ចាស់",
    // New services
    securedTransaction: "ប្រតិបត្តិការមានសុវត្ថិភាព",
    metfoneServices: "សេវាកម្ម Metfone",
    cinemaTicket: "សំបុត្រកុន",
    vetExpress: "VET Express",
    starbucks: "Starbucks",
    foodDelivery: "ការដឹកជញ្ជូនអាហារ",
    onlineShopping: "ការទិញទំនិញអនឡាញ",
    travelBooking: "ការកក់ទីកន្លែងធ្វើដំណើរ",
    // Government services
    nssfSelfEmployed: "NSSF ការងារឯករាជ្យ",
    ppshvExpressway: "ផ្លូវហាយវេ PPSHV",
    generalDepartment: "នាយកដ្ឋានទូទៅ",
    foreignAffairs: "កិច្ចការបរទេស",
    taxDepartment: "នាយកដ្ឋានពន្ធដារ",
    customsDepartment: "នាយកដ្ឋានគយ",
    // Promotions
    vespaPromo: "ឈ្នះ VESPA",
    propertyPromo: "ការព្រមព្រៀងអចលនទ្រព្យ",
    cashbackPromo: "ការផ្តល់ប្រាក់វិញ",
    travelPromo: "បញ្ចុះតម្លៃការធ្វើដំណើរ",
  },
  zh: {
    greeting: "晚上好!",
    name: "伊莱",
    mobileSavings: "手机储蓄",
    default: "默认",
    receive: "接收",
    send: "发送",
    analytics: "分析",
    accounts: "账户",
    cards: "卡片",
    payments: "付款",
    abaScan: "ABA扫描",
    favorites: "收藏",
    transfers: "转账",
    giftZone: "礼品区",
    governmentServices: "政府服务",
    newsPromotions: "新闻与促销",
    exploreServices: "探索服务",
    viewAll: "查看全部",
    editHome: "编辑主页",
    language: "语言",
    fontSettings: "字体设置",
    promoTitle: "我们的客户出售他们的房产",
    promoPoint1: "开放谈判",
    promoPoint2: "直接与业主获得最优惠的交易",
    // New services
    securedTransaction: "安全交易",
    metfoneServices: "Metfone服务",
    cinemaTicket: "电影票",
    vetExpress: "VET快递",
    starbucks: "星巴克",
    foodDelivery: "外卖配送",
    onlineShopping: "网上购物",
    travelBooking: "旅行预订",
    // Government services
    nssfSelfEmployed: "NSSF自雇",
    ppshvExpressway: "PPSHV高速公路",
    generalDepartment: "总部门",
    foreignAffairs: "外交事务",
    taxDepartment: "税务部门",
    customsDepartment: "海关部门",
    // Promotions
    vespaPromo: "赢取VESPA",
    propertyPromo: "房产优惠",
    cashbackPromo: "现金返还",
    travelPromo: "旅行折扣",
  },
}

export default function ABAMobileBanking() {
  const [showBalance, setShowBalance] = useState(true)
  const [language, setLanguage] = useState<"en" | "km" | "zh">("en")
  const [editMode, setEditMode] = useState(false)
  const [useKhmerFont, setUseKhmerFont] = useState(false)
  const [hiddenSections, setHiddenSections] = useState<string[]>([])
  const [draggedItem, setDraggedItem] = useState<string | null>(null)
  const [dragOverItem, setDragOverItem] = useState<string | null>(null)
  const [mainServicesOrder, setMainServicesOrder] = useState([
    "accounts",
    "cards",
    "payments",
    "abaScan",
    "favorites",
    "transfers",
  ])

  const t = translations[language]

  const exploreServices = [
    { key: "securedTransaction", icon: "🛡️", bg: "bg-white", label: t.securedTransaction },
    { key: "metfoneServices", icon: "📱", bg: "bg-red-500", label: t.metfoneServices },
    { key: "cinemaTicket", icon: "🎬", bg: "bg-purple-500", label: t.cinemaTicket },
    { key: "vetExpress", icon: "🏥", bg: "bg-orange-500", label: t.vetExpress },
    { key: "starbucks", icon: "☕", bg: "bg-green-600", label: t.starbucks },
    { key: "foodDelivery", icon: "🍔", bg: "bg-yellow-500", label: t.foodDelivery },
    { key: "onlineShopping", icon: "🛒", bg: "bg-blue-500", label: t.onlineShopping },
    { key: "travelBooking", icon: "✈️", bg: "bg-indigo-500", label: t.travelBooking },
  ]

  const governmentServices = [
    { key: "securedTransaction", icon: "🛡️", bg: "bg-white", label: t.securedTransaction },
    { key: "nssfSelfEmployed", icon: "👥", bg: "bg-blue-100", label: t.nssfSelfEmployed },
    { key: "ppshvExpressway", icon: "🛣️", bg: "bg-white", label: t.ppshvExpressway },
    { key: "generalDepartment", icon: "🏛️", bg: "bg-blue-500", label: t.generalDepartment },
    { key: "foreignAffairs", icon: "🌍", bg: "bg-white", label: t.foreignAffairs },
    { key: "taxDepartment", icon: "💰", bg: "bg-green-100", label: t.taxDepartment },
    { key: "customsDepartment", icon: "📋", bg: "bg-gray-100", label: t.customsDepartment },
  ]

  const promotions = [
    {
      key: "vespa",
      title: t.vespaPromo,
      subtitle: "USE ABA SERVICES AND",
      bg: "bg-gradient-to-r from-blue-400 to-blue-600",
      icon: "🛵",
      prize: "iPhone 15 Pro",
    },
    {
      key: "property",
      title: t.propertyPromo,
      subtitle: "SECURE THE BEST",
      bg: "bg-gradient-to-r from-blue-900 to-gray-800",
      icon: "🏢",
      prize: "Direct Owner",
    },
    {
      key: "cashback",
      title: t.cashbackPromo,
      subtitle: "UP TO 20%",
      bg: "bg-gradient-to-r from-green-500 to-green-700",
      icon: "💰",
      prize: "Every Transaction",
    },
    {
      key: "travel",
      title: t.travelPromo,
      subtitle: "BOOK NOW AND SAVE",
      bg: "bg-gradient-to-r from-purple-500 to-purple-700",
      icon: "✈️",
      prize: "50% Off",
    },
  ]

  const toggleLanguage = () => {
    const languages: ("en" | "km" | "zh")[] = ["en", "km", "zh"]
    const currentIndex = languages.indexOf(language)
    const nextIndex = (currentIndex + 1) % languages.length
    setLanguage(languages[nextIndex])
  }

  const toggleSection = (sectionKey: string) => {
    setHiddenSections((prev) =>
      prev.includes(sectionKey) ? prev.filter((key) => key !== sectionKey) : [...prev, sectionKey],
    )
  }

  const handleDragStart = (e: React.DragEvent, serviceKey: string) => {
    setDraggedItem(serviceKey)
    e.dataTransfer.effectAllowed = "move"
  }

  const handleDragOver = (e: React.DragEvent, serviceKey: string) => {
    e.preventDefault()
    setDragOverItem(serviceKey)
  }

  const handleDragLeave = () => {
    setDragOverItem(null)
  }

  const handleDrop = (e: React.DragEvent, targetKey: string) => {
    e.preventDefault()

    if (draggedItem && draggedItem !== targetKey) {
      const newOrder = [...mainServicesOrder]
      const draggedIndex = newOrder.indexOf(draggedItem)
      const targetIndex = newOrder.indexOf(targetKey)

      // Remove dragged item and insert at target position
      newOrder.splice(draggedIndex, 1)
      newOrder.splice(targetIndex, 0, draggedItem)

      setMainServicesOrder(newOrder)
    }

    setDraggedItem(null)
    setDragOverItem(null)
  }

  const handleDragEnd = () => {
    setDraggedItem(null)
    setDragOverItem(null)
  }

  const fontClass = useKhmerFont && language === "km" ? "font-khmer" : ""

  const getOrderedMainServices = () => {
    const serviceMap = {
      accounts: { key: "accounts", icon: "🏛️", bg: "bg-white", label: t.accounts },
      cards: { key: "cards", icon: "🎖️", bg: "bg-white", label: t.cards },
      payments: { key: "payments", icon: "👑", bg: "bg-white", label: t.payments },
      abaScan: { key: "abaScan", icon: "🦸", bg: "bg-white", label: t.abaScan },
      favorites: { key: "favorites", icon: "⭐", bg: "bg-white", label: t.favorites },
      transfers: { key: "transfers", icon: "🗺️", bg: "bg-white", label: t.transfers },
    }

    return mainServicesOrder.map((key) => serviceMap[key as keyof typeof serviceMap])
  }

  return (
    <div
      className={`min-h-screen bg-gradient-to-b from-sky-200 via-green-100 to-yellow-100 relative overflow-hidden ${fontClass}`}
    >
      {/* Add Khmer Font */}
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Noto+Sans+Khmer:wght@100;200;300;400;500;600;700;800;900&display=swap');
        .font-khmer {
          font-family: 'Noto Sans Khmer', sans-serif;
        }
      `}</style>

      {/* Decorative Background Elements */}
      <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-green-300 to-transparent opacity-60"></div>
      <div className="absolute top-10 left-4 w-16 h-16 bg-green-400 rounded-full opacity-30"></div>
      <div className="absolute top-20 right-8 w-12 h-12 bg-yellow-300 rounded-full opacity-40"></div>
      <div className="absolute top-40 left-12 w-8 h-8 bg-pink-300 rounded-full opacity-50"></div>

      {/* Decorative bunting flags */}
      <div className="absolute top-8 left-0 right-0 flex justify-center">
        <div className="flex gap-1">
          {["🟡", "🔴", "🟢", "🔵", "🟠"].map((color, i) => (
            <div key={i} className="w-4 h-6 opacity-70 text-xs">
              {color}
            </div>
          ))}
        </div>
      </div>

      {/* Status Bar */}
      <div className="flex items-center justify-between p-4 pt-12 text-gray-800 relative z-10">
        <div className="flex items-center gap-2">
          <span className="font-semibold text-lg">10:59</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="flex gap-1">
            <div className="w-1 h-3 bg-gray-800 rounded-full"></div>
            <div className="w-1 h-3 bg-gray-800 rounded-full"></div>
            <div className="w-1 h-3 bg-gray-800 rounded-full"></div>
            <div className="w-1 h-3 bg-gray-800 rounded-full"></div>
          </div>
          <span className="ml-2 text-sm font-medium">📶</span>
          <span className="text-sm font-medium">📶</span>
          <span className="text-sm font-medium">88%</span>
        </div>
      </div>

      {/* Top Icons Row */}
      <div className="flex items-center justify-between px-4 mb-6 relative z-10">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-gradient-to-br from-orange-400 to-orange-600 rounded-xl flex items-center justify-center shadow-lg">
            <div className="w-5 h-5 bg-white rounded-sm"></div>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <Button
            variant="ghost"
            size="icon"
            className="w-10 h-10 bg-green-600 hover:bg-green-700 text-white rounded-xl shadow-lg"
          >
            <span className="text-sm">💬</span>
          </Button>
          <Button
            variant="ghost"
            size="icon"
            className="w-10 h-10 bg-white/80 hover:bg-white text-gray-700 rounded-xl shadow-lg"
          >
            <Bell className="w-5 h-5" />
          </Button>
          <Button
            variant="ghost"
            size="icon"
            className="w-10 h-10 bg-red-500 hover:bg-red-600 text-white rounded-xl shadow-lg"
          >
            <span className="text-sm font-bold">@</span>
          </Button>
        </div>
      </div>

      {/* Language & Edit Controls */}
      <div className="flex items-center justify-between px-4 mb-4 relative z-10">
        <div className="flex gap-2">
          <Button
            onClick={toggleLanguage}
            variant="ghost"
            className="bg-white/80 text-gray-700 rounded-xl shadow-lg px-3 py-2 text-sm"
          >
            <Globe className="w-4 h-4 mr-2" />
            {language.toUpperCase()}
          </Button>
          {language === "km" && (
            <Button
              onClick={() => setUseKhmerFont(!useKhmerFont)}
              variant="ghost"
              className={`rounded-xl shadow-lg px-3 py-2 text-sm ${
                useKhmerFont ? "bg-green-500 text-white" : "bg-white/80 text-gray-700"
              }`}
            >
              ខ្មែរ
            </Button>
          )}
        </div>
        <Button
          onClick={() => setEditMode(!editMode)}
          variant="ghost"
          className={`rounded-xl shadow-lg px-3 py-2 text-sm ${
            editMode ? "bg-blue-500 text-white" : "bg-white/80 text-gray-700"
          }`}
        >
          <Edit3 className="w-4 h-4 mr-2" />
          {t.editHome}
        </Button>
      </div>

      {/* User Greeting & Account Card */}
      {!hiddenSections.includes("greeting") && (
        <div className="px-4 mb-6 relative z-10">
          {editMode && (
            <div className="flex justify-end mb-2">
              <Button
                onClick={() => toggleSection("greeting")}
                size="sm"
                variant="outline"
                className="bg-red-100 text-red-600 border-red-300"
              >
                <Minus className="w-3 h-3 mr-1" />
                Hide
              </Button>
            </div>
          )}
          {/* User Greeting */}
          <div className="flex items-center gap-3 mb-4">
            <Avatar className="w-16 h-16 border-3 border-white shadow-lg">
              <AvatarImage src="https://avatars.githubusercontent.com/u/110383694?v=4" />
              <AvatarFallback className="bg-blue-500 text-white text-lg">E</AvatarFallback>
            </Avatar>
            <div>
              <p className="text-gray-600 text-sm">{t.greeting}</p>
              <p className="text-gray-800 text-xl font-bold">{t.name}</p>
            </div>
          </div>

          {/* Account Card */}
          <Card className="bg-gradient-to-r from-amber-100 to-orange-100 border-none shadow-xl">
            <CardContent className="p-6">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-amber-200 rounded-xl flex items-center justify-center">
                    <Eye className="w-6 h-6 text-amber-700" />
                  </div>
                  <div>
                    <Badge variant="secondary" className="bg-amber-200 text-amber-800 mb-1">
                      {t.default}
                    </Badge>
                    <p className="font-semibold text-gray-800">{t.mobileSavings}</p>
                  </div>
                </div>
                <div className="flex gap-2">
                  <span className="text-2xl">👥</span>
                  <span className="text-2xl">⚔️</span>
                  <span className="text-2xl">🏰</span>
                </div>
              </div>

              <div className="grid grid-cols-3 gap-3">
                <Button className="bg-amber-200 hover:bg-amber-300 text-amber-800 rounded-xl h-12 flex items-center gap-2">
                  <ArrowDownLeft className="w-4 h-4" />
                  {t.receive}
                </Button>
                <Button className="bg-amber-200 hover:bg-amber-300 text-amber-800 rounded-xl h-12 flex items-center gap-2">
                  <ArrowUpRight className="w-4 h-4" />
                  {t.send}
                </Button>
                <Button className="bg-amber-200 hover:bg-amber-300 text-amber-800 rounded-xl h-12 flex items-center gap-2">
                  <BarChart3 className="w-4 h-4" />
                  {t.analytics}
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      )}

      {/* Main Services Grid */}
      {!hiddenSections.includes("mainServices") && (
        <div className="px-4 mb-6 relative z-10">
          {editMode && (
            <div className="flex justify-between items-center mb-2">
              <p className="text-sm text-gray-600">Drag to reorder services</p>
              <Button
                onClick={() => toggleSection("mainServices")}
                size="sm"
                variant="outline"
                className="bg-red-100 text-red-600 border-red-300"
              >
                <Minus className="w-3 h-3 mr-1" />
                Hide
              </Button>
            </div>
          )}
          <div className="grid grid-cols-3 gap-4">
            {getOrderedMainServices().map((service, index) => (
              <Card
                key={service.key}
                draggable={editMode}
                onDragStart={(e) => handleDragStart(e, service.key)}
                onDragOver={(e) => handleDragOver(e, service.key)}
                onDragLeave={handleDragLeave}
                onDrop={(e) => handleDrop(e, service.key)}
                onDragEnd={handleDragEnd}
                className={`bg-white/90 border-none shadow-lg hover:shadow-xl transition-all duration-200 cursor-pointer ${
                  editMode ? "ring-2 ring-blue-300 ring-dashed" : ""
                } ${draggedItem === service.key ? "opacity-50 scale-95" : ""} ${
                  dragOverItem === service.key && draggedItem !== service.key
                    ? "ring-2 ring-green-400 ring-solid scale-105"
                    : ""
                } ${editMode ? "hover:scale-105" : ""}`}
              >
                <CardContent className="p-4 flex flex-col items-center gap-3">
                  <div className="w-12 h-12 bg-gray-100 rounded-xl flex items-center justify-center">
                    <span className="text-2xl">{service.icon}</span>
                  </div>
                  <span className="text-sm font-medium text-gray-800 text-center">{service.label}</span>
                  {editMode && (
                    <div className="flex gap-1 w-full">
                      <Button size="sm" variant="outline" className="flex-1 text-xs bg-transparent">
                        <Settings className="w-3 h-3 mr-1" />
                        Edit
                      </Button>
                      <div className="w-6 h-6 bg-gray-200 rounded flex items-center justify-center cursor-grab active:cursor-grabbing">
                        <span className="text-xs">⋮⋮</span>
                      </div>
                    </div>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
          {editMode && (
            <div className="mt-4 p-3 bg-blue-50 rounded-lg border border-blue-200">
              <p className="text-sm text-blue-700 flex items-center gap-2">
                <span>💡</span>
                Drag and drop the service cards to rearrange them in your preferred order
              </p>
            </div>
          )}
        </div>
      )}

      {/* News & Promotions - Horizontal Scroll */}
      {!hiddenSections.includes("promotions") && (
        <div className="mb-6 relative z-10">
          <div className="flex items-center justify-between px-4 mb-4">
            <h3 className="text-xl font-bold text-gray-800">{t.newsPromotions}</h3>
            <div className="flex gap-2">
              {editMode && (
                <Button
                  onClick={() => toggleSection("promotions")}
                  size="sm"
                  variant="outline"
                  className="bg-red-100 text-red-600 border-red-300"
                >
                  <Minus className="w-3 h-3 mr-1" />
                  Hide
                </Button>
              )}
              <Button variant="ghost" className="text-gray-600 font-semibold p-0 h-auto hover:text-gray-800">
                {t.viewAll} <ChevronRight className="w-4 h-4 ml-1" />
              </Button>
            </div>
          </div>
          <div className="flex gap-4 overflow-x-auto px-4 pb-2 scrollbar-hide">
            {promotions.map((promo) => (
              <Card key={promo.key} className={`${promo.bg} border-none shadow-xl overflow-hidden flex-shrink-0 w-80`}>
                <CardContent className="p-0">
                  <div className="flex">
                    <div className="flex-1 p-6">
                      <p className="text-white text-sm mb-1">{promo.subtitle}</p>
                      <h4 className="text-white text-lg font-bold mb-3">{promo.title}</h4>
                      <Badge variant="secondary" className="bg-white/20 text-white border-white/30">
                        {promo.prize}
                      </Badge>
                    </div>
                    <div className="w-24 flex items-center justify-center">
                      <span className="text-4xl">{promo.icon}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      )}

      {/* Explore Services - Horizontal Scroll */}
      {!hiddenSections.includes("exploreServices") && (
        <div className="mb-6 relative z-10">
          <div className="flex items-center justify-between px-4 mb-4">
            <h3 className="text-xl font-bold text-gray-800">{t.exploreServices}</h3>
            <div className="flex gap-2">
              {editMode && (
                <Button
                  onClick={() => toggleSection("exploreServices")}
                  size="sm"
                  variant="outline"
                  className="bg-red-100 text-red-600 border-red-300"
                >
                  <Minus className="w-3 h-3 mr-1" />
                  Hide
                </Button>
              )}
              <Button variant="ghost" className="text-gray-600 font-semibold p-0 h-auto hover:text-gray-800">
                {t.viewAll} <ChevronRight className="w-4 h-4 ml-1" />
              </Button>
            </div>
          </div>
          <div className="flex gap-4 overflow-x-auto px-4 pb-2 scrollbar-hide">
            {exploreServices.map((service) => (
              <Card
                key={service.key}
                className="bg-white/90 border-none shadow-lg hover:shadow-xl transition-all duration-200 flex-shrink-0 w-32"
              >
                <CardContent className="p-4 flex flex-col items-center gap-3">
                  <div
                    className={`w-16 h-16 ${service.bg} rounded-2xl flex items-center justify-center shadow-lg border border-gray-200`}
                  >
                    <span className="text-2xl">{service.icon}</span>
                  </div>
                  <span className="text-xs text-gray-800 text-center leading-tight font-medium">{service.label}</span>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      )}

      {/* Government Services - Horizontal Scroll */}
      {!hiddenSections.includes("governmentServices") && (
        <div className="mb-6 relative z-10">
          <div className="flex items-center justify-between px-4 mb-4">
            <h3 className="text-xl font-bold text-gray-800">{t.governmentServices}</h3>
            <div className="flex gap-2">
              {editMode && (
                <Button
                  onClick={() => toggleSection("governmentServices")}
                  size="sm"
                  variant="outline"
                  className="bg-red-100 text-red-600 border-red-300"
                >
                  <Minus className="w-3 h-3 mr-1" />
                  Hide
                </Button>
              )}
              <Button variant="ghost" className="text-gray-600 font-semibold p-0 h-auto hover:text-gray-800">
                {t.viewAll} <ChevronRight className="w-4 h-4 ml-1" />
              </Button>
            </div>
          </div>
          <div className="flex gap-4 overflow-x-auto px-4 pb-2 scrollbar-hide">
            {governmentServices.map((service) => (
              <Card
                key={service.key}
                className="bg-white/90 border-none shadow-lg hover:shadow-xl transition-all duration-200 flex-shrink-0 w-32"
              >
                <CardContent className="p-4 flex flex-col items-center gap-3">
                  <div
                    className={`w-16 h-16 ${service.bg} rounded-2xl flex items-center justify-center shadow-lg border border-gray-200`}
                  >
                    <span className="text-2xl">{service.icon}</span>
                  </div>
                  <span className="text-xs text-gray-800 text-center leading-tight font-medium">{service.label}</span>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      )}

      {/* Hidden Sections Recovery */}
      {editMode && hiddenSections.length > 0 && (
        <div className="px-4 mb-6 relative z-10">
          <Card className="bg-gray-100 border-dashed border-2 border-gray-300">
            <CardContent className="p-4">
              <h4 className="font-semibold text-gray-700 mb-3">Hidden Sections</h4>
              <div className="flex flex-wrap gap-2">
                {hiddenSections.map((sectionKey) => (
                  <Button
                    key={sectionKey}
                    onClick={() => toggleSection(sectionKey)}
                    size="sm"
                    variant="outline"
                    className="bg-green-100 text-green-600 border-green-300"
                  >
                    <Plus className="w-3 h-3 mr-1" />
                    Show {sectionKey}
                  </Button>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      )}

      {/* Custom CSS for hiding scrollbar */}
      <style jsx>{`
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </div>
  )
}
