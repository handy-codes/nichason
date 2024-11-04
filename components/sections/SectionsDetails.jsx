// "use client";

// import {
//   Course,
//   MuxData,
//   Progress,
//   Purchase,
//   Resource,
//   Section,
// } from "@prisma/client";
// import toast from "react-hot-toast";
// import { useState } from "react";
// import axios from "axios";
// import { File, Loader2, Lock } from "lucide-react";

// import { Button } from "@/components/ui/button";
// import ReadText from "@/components/custom/ReadText";
// import MuxPlayer from "@mux/mux-player-react";
// import Link from "next/link";
// import ProgressButton from "./ProgressButton";
// import SectionMenu from "../layout/SectionMenu";
// import { useFlutterwave, closePaymentModal } from 'flutterwave-react-v3';

// interface SectionsDetailsProps {
//   course: Course & { sections: Section[] };
//   section: Section;
//   purchase: Purchase | null;
//   muxData: MuxData | null;
//   resources: Resource[] | [];
//   progress: Progress | null;
// }

// const SectionsDetails = ({
//   course,
//   section,
//   purchase,
//   muxData,
//   resources,
//   progress,
// }: SectionsDetailsProps) => {
//   const [isLoading, setIsLoading] = useState(false);
//   const isLocked = !purchase && !section.isFree;

//   // type config={
//   //     public_key: string;
//   //     tx_ref: number;
//   //     amount: number;
//   //     currency: string;
//   //     payment_options: string;
//   //     customer: {
//   //         email: string;
//   //         phone_number: string;
//   //         name: string;
//   //     };
//   //     customizations: {
//   //         title: string;
//   //         description: string;
//   //         logo: string;
//   //     };
//   // }

//   const config: {
//     public_key: string;
//     tx_ref: number;
//     amount: number;
//     currency: string;
//     payment_options: string;
//     customer: {
//         email: string;
//         phone_number: string;
//         name: string;
//     };
//     customizations: {
//         title: string;
//         description: string;
//         logo: string;
//     };
// }  = {
//     public_key: 'process.env.FW_PUBLIC_KEY',
//     tx_ref: Date.now(),
//     amount: Math.round(course.price! * 100),
//     currency: 'NGN',
//     payment_options: 'card,mobilemoney,ussd',
//     customer: {
//       email: 'user@gmail.com',
//        phone_number: '07012321232',
//       name: 'john doe',
//     },
//     customizations: {
//       title: 'my Payment Title',
//       description: 'Payment for items in cart',
//       logo: 'https://st2.depositphotos.com/4403291/7418/v/450/depositphotos_74189661-stock-illustration-online-shop-log.jpg',
//     },
//   };

//   const handleFlutterPayment = useFlutterwave(config);

//   const buyCourse = async () => {
//     try {
//       setIsLoading(true);
//       const response = await axios.post(`/api/courses/${course.id}/checkout`);
//       handleFlutterPayment({
//         callback: (response) => {
//            console.log(response);
//             closePaymentModal() // this will close the modal programmatically
//         },
//         onClose: () => {},
//       });
    
//       window.location.assign(response.data.url);
//     } catch (err) {
//       console.log("Failed to chechout course", err);
//       toast.error("Something went wrong!");
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   return (
//     <div className="px-6 py-4 flex flex-col gap-5">
//       <div className="flex flex-col md:flex-row md:justify-between md:items-center">
//         <h1 className="text-2xl font-bold max-md:mb-4">{section.title}</h1>

//         <div className="flex gap-4">
//           <SectionMenu course={course} />
//           {!purchase ? (
//             <Button onClick={buyCourse}>
//               {isLoading ? (
//                 <Loader2 className="h-4 w-4 animate-spin" />
//               ) : (
//                 <p>Buy this course</p>
//               )}
//             </Button>
//           ) : (
//             <ProgressButton
//               courseId={course.id}
//               sectionId={section.id}
//               isCompleted={!!progress?.isCompleted}
//             /> // !! converts falsy values to boolean false
//           )}
//         </div>
//       </div>

//       <ReadText value={section.description!} />

//       {isLocked ? (
//         <div className="px-10 flex flex-col gap-5 items-center bg-[#FFF8EB]">
//           <Lock className="h-8 w-8" />
//           <p className="text-sm font-bold">
//             Video for this section is locked!. Please buy the course to access
//           </p>
//         </div>
//       ) : (
//         <MuxPlayer
//           playbackId={muxData?.playbackId || ""}
//           className="md:max-w-[600px]"
//         />
//       )}

//       <div>
//         <h2 className="text-xl font-bold mb-5">Resources</h2>
//         {resources.map((resource) => (
//           <Link
//             key={resource.id}
//             href={resource.fileUrl}
//             target="_blank"
//             className="flex items-center bg-[#FFF8EB] rounded-lg text-sm font-medium p-3"
//           >
//             <File className="h-4 w-4 mr-4" />
//             {resource.name}
//           </Link>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default SectionsDetails;
