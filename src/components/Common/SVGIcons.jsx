// Import your SVG icons
import { LiaWalletSolid } from 'react-icons/lia';
import { LuPlusCircle } from 'react-icons/lu';
import { PiBankLight, PiBell, PiPaypalLogoDuotone } from 'react-icons/pi';
import { TfiWorld } from 'react-icons/tfi';
import { HiOutlineCurrencyDollar } from "react-icons/hi2";
import { RxDashboard } from 'react-icons/rx';
import { CgFileDocument, CgMenuLeft } from 'react-icons/cg';
import { BsBarChart } from 'react-icons/bs';
import { IoSettingsOutline, IoWallet } from 'react-icons/io5';
import { BiLogOut } from 'react-icons/bi';
import { GoBell } from 'react-icons/go';

// SVGs Components
const HandHoldingDollar = () => ( <svg width="46" height="46" viewBox="0 0 46 46" fill="none" xmlns="http://www.w3.org/2000/svg" > <path d="M42.9706 18.7572V18.7537L42.889 18.6793C41.9633 17.8359 40.7613 17.4238 39.5221 17.4646L39.5185 17.4648C38.271 17.5243 37.1188 18.0648 36.2786 18.9886L29.9843 25.9059C29.2773 24.0628 27.4886 22.7507 25.3974 22.7507H6.24893C3.67891 22.7507 1.59009 24.8411 1.59009 27.4089V39.7517C1.59009 42.3195 3.67891 44.4098 6.24893 44.4098H26.0446H26.1567L26.2313 44.3262L43.228 25.2515C44.9029 23.3767 44.7808 20.4868 42.9706 18.7572ZM41.5394 23.7442L41.726 23.9106L41.5393 23.7442L25.1407 42.1448H6.24893C4.92852 42.1448 3.85362 41.07 3.85362 39.7499V27.4071C3.85362 26.087 4.92852 25.0122 6.24893 25.0122H25.3956C26.8538 25.0122 28.0431 26.2001 28.0431 27.6575C28.0431 28.965 27.066 30.0912 25.7849 30.2751C25.7845 30.2752 25.784 30.2752 25.7835 30.2753L15.8032 31.5744L15.5553 31.6067L15.5876 31.8546L15.8151 33.602L15.8474 33.8499L16.0953 33.8176L26.091 32.5163L26.0941 32.5159C27.9739 32.2471 29.4902 30.9114 30.0627 29.1807L37.9552 20.51L37.9553 20.5099C38.3885 20.0336 38.9822 19.7543 39.6268 19.7239C40.2633 19.6953 40.8877 19.9159 41.3652 20.3518L41.3654 20.352C42.3379 21.2381 42.4166 22.7601 41.5394 23.7442ZM8.89423 13.9327H8.64423V14.1827V15.2494C8.64423 17.7169 10.6521 19.7224 13.1179 19.7224H13.9348V21.2357V21.4857H14.1848H15.9484H16.1984V21.2357V19.7224H17.0153C19.483 19.7224 21.489 17.7168 21.489 15.2494C21.489 13.0536 19.9157 11.1984 17.7513 10.838C17.7513 10.838 17.7512 10.838 17.7512 10.838L12.7534 10.004L12.7532 10.004C11.6835 9.8265 10.9078 8.91172 10.9078 7.82611C10.9078 6.60827 11.8998 5.61636 13.1179 5.61636H17.0171C18.2352 5.61636 19.2272 6.60827 19.2272 7.82611V8.89288V9.14288H19.4772H21.2407H21.4907V8.89288V7.82611C21.4907 5.35867 19.4829 3.3531 17.0171 3.3531H16.2001V1.83984V1.58984H15.9501H14.1866H13.9366V1.83984V3.3531H13.1197C10.652 3.3531 8.64599 5.35874 8.64599 7.82611C8.64599 10.022 10.2193 11.8771 12.3837 12.2375C12.3837 12.2375 12.3837 12.2375 12.3838 12.2375L17.3815 13.0715L17.3818 13.0716C18.4515 13.249 19.2272 14.1638 19.2272 15.2494C19.2272 16.4673 18.2352 17.4592 17.0171 17.4592H13.1179C11.8998 17.4592 10.9078 16.4673 10.9078 15.2494V14.1827V13.9327H10.6578H8.89423ZM36.0152 8.64288H24.7661H24.5161V8.89288V10.6561V10.9061H24.7661H35.9465L31.0544 15.7991L30.8776 15.9759L31.0544 16.1527L32.3012 17.3993L32.478 17.576L32.6548 17.3993L38.2663 11.7886C39.3957 10.6595 39.3957 8.82254 38.2663 7.6934L32.6548 2.08271L32.478 1.90597L32.3012 2.08271L31.0544 3.32933L30.8776 3.50612L31.0544 3.68291L36.0152 8.64288Z" fill="currentColor" stroke="currentColor" strokeWidth="0.5" /> </svg> );

const SVGIcons = {
  AddCircle: LuPlusCircle,
  LinedWallet: LiaWalletSolid,
  HandHoldingDollar: HandHoldingDollar,
  TfiWorld: TfiWorld,
  PiBankLight : PiBankLight,
  PiPaypalLogoDuotone : PiPaypalLogoDuotone,
  HiOutlineCurrencyDollar : HiOutlineCurrencyDollar,
  RxDashboard : RxDashboard,
  CgFileDocument: CgFileDocument,
  PiBell: PiBell,
  BsBarChart: BsBarChart,
  IoSettingsOutline: IoSettingsOutline,
  BiLogOut: BiLogOut,
  CgMenuLeft: CgMenuLeft,
  IoWallet: IoWallet,
  GoBell: GoBell,
};

export default SVGIcons;
