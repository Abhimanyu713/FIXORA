// // import React, { useState } from 'react';
// // import { Plus, X, GraduationCap } from 'lucide-react';

// // const MentorForm = ({ onSubmit }) => {
// //   const [formData, setFormData] = useState({
// //     name: '',
// //     age: '',
// //     education: '',
// //     college: '',
// //     stream: '',
// //     yearsOfExperience: '',
// //     areasOfProficiency: []
// //   });

// //   const [newSkill, setNewSkill] = useState('');

// //   const handleInputChange = (e) => {
// //     const { name, value } = e.target;
// //     setFormData(prev => ({
// //       ...prev,
// //       [name]: value
// //     }));
// //   };

// //   const addSkill = () => {
// //     if (newSkill.trim() && !formData.areasOfProficiency.includes(newSkill.trim())) {
// //       setFormData(prev => ({
// //         ...prev,
// //         areasOfProficiency: [...prev.areasOfProficiency, newSkill.trim()]
// //       }));
// //       setNewSkill('');
// //     }
// //   };

// //   const removeSkill = (skillToRemove) => {
// //     setFormData(prev => ({
// //       ...prev,
// //       areasOfProficiency: prev.areasOfProficiency.filter(skill => skill !== skillToRemove)
// //     }));
// //   };

// //   const handleSubmit = (e) => {
// //     e.preventDefault();
    
// //     if (formData.areasOfProficiency.length === 0) {
// //       alert('Please add at least one area of proficiency');
// //       return;
// //     }

// //     onSubmit({
// //       ...formData,
// //       age: parseInt(formData.age),
// //       yearsOfExperience: parseInt(formData.yearsOfExperience)
// //     });
// //   };

// //   const isFormValid = formData.name && formData.age && formData.education && 
// //                      formData.college && formData.stream &&
// //                      formData.yearsOfExperience && formData.areasOfProficiency.length > 0;

// //   return (
// //     <div className="card">
// //       <div className="text-center mb-8">
// //         <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
// //           <GraduationCap className="w-8 h-8 text-primary-600" />
// //         </div>
// //         <h2 className="text-3xl font-bold text-gray-900">Mentor Registration</h2>
// //         <p className="text-gray-600 mt-2">Share your expertise and help others grow</p>
// //       </div>

// //       <form onSubmit={handleSubmit} className="space-y-6">
// //         {/* Name */}
// //         <div>
// //           <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
// //             Full Name *
// //           </label>
// //           <input
// //             type="text"
// //             id="name"
// //             name="name"
// //             value={formData.name}
// //             onChange={handleInputChange}
// //             className="input-field"
// //             placeholder="Enter your full name"
// //             required
// //           />
// //         </div>

// //         {/* Age */}
// //         <div>
// //           <label htmlFor="age" className="block text-sm font-medium text-gray-700 mb-2">
// //             Age *
// //           </label>
// //           <input
// //             type="number"
// //             id="age"
// //             name="age"
// //             value={formData.age}
// //             onChange={handleInputChange}
// //             className="input-field"
// //             placeholder="Enter your age"
// //             min="18"
// //             max="100"
// //             required
// //           />
// //         </div>

// //         {/* Education */}
// //         <div>
// //           <label htmlFor="education" className="block text-sm font-medium text-gray-700 mb-2">
// //             Highest Education Level *
// //           </label>
// //           <select
// //             id="education"
// //             name="education"
// //             value={formData.education}
// //             onChange={handleInputChange}
// //             className="input-field"
// //             required
// //           >
// //             <option value="">Select education level</option>
// //             <option value="graduation">Graduation</option>
// //             <option value="post-graduation">Post-Graduation</option>
// //             <option value="phd">PhD</option>
// //             <option value="other">Other</option>
// //           </select>
// //         </div>

// //         {/* College */}
// //         <div>
// //           <label htmlFor="college" className="block text-sm font-medium text-gray-700 mb-2">
// //             College/University *
// //           </label>
// //           <input
// //             type="text"
// //             id="college"
// //             name="college"
// //             value={formData.college}
// //             onChange={handleInputChange}
// //             className="input-field"
// //             placeholder="Enter your college/university name"
// //             required
// //           />
// //         </div>

// //         {/* Stream */}
// //         <div>
// //           <label htmlFor="stream" className="block text-sm font-medium text-gray-700 mb-2">
// //             Field of Study *
// //           </label>
// //           <input
// //             type="text"
// //             id="stream"
// //             name="stream"
// //             value={formData.stream}
// //             onChange={handleInputChange}
// //             className="input-field"
// //             placeholder="e.g., Computer Science, Data Science, Engineering"
// //             required
// //           />
// //         </div>

// //         {/* Years of Experience */}
// //         <div>
// //           <label htmlFor="yearsOfExperience" className="block text-sm font-medium text-gray-700 mb-2">
// //             Years of Industry Experience *
// //           </label>
// //           <input
// //             type="number"
// //             id="yearsOfExperience"
// //             name="yearsOfExperience"
// //             value={formData.yearsOfExperience}
// //             onChange={handleInputChange}
// //             className="input-field"
// //             placeholder="Enter number of years"
// //             min="0"
// //             max="50"
// //             required
// //           />
// //         </div>

// //         {/* Areas of Proficiency */}
// //         <div>
// //           <label className="block text-sm font-medium text-gray-700 mb-2">
// //             Areas of Proficiency *
// //           </label>
// //           <div className="flex gap-2 mb-3">
// //             <input
// //               type="text"
// //               value={newSkill}
// //               onChange={(e) => setNewSkill(e.target.value)}
// //               className="input-field flex-1"
// //               placeholder="e.g., Python, Machine Learning, Data Analysis"
// //               onKeyPress={(e) => e.key === 'Enter' && (e.preventDefault(), addSkill())}
// //             />
// //             <button
// //               type="button"
// //               onClick={addSkill}
// //               className="btn-primary px-4 py-2"
// //             >
// //               <Plus className="w-4 h-4" />
// //             </button>
// //           </div>
          
// //           {formData.areasOfProficiency.length > 0 && (
// //             <div className="flex flex-wrap gap-2">
// //               {formData.areasOfProficiency.map((skill, index) => (
// //                 <span
// //                   key={index}
// //                   className="inline-flex items-center gap-2 bg-primary-100 text-primary-800 px-3 py-1 rounded-full text-sm"
// //                 >
// //                   {skill}
// //                   <button
// //                     type="button"
// //                     onClick={() => removeSkill(skill)}
// //                     className="text-primary-600 hover:text-primary-800"
// //                   >
// //                     <X className="w-3 h-3" />
// //                   </button>
// //                 </span>
// //               ))}
// //             </div>
// //           )}
// //           <p className="text-sm text-gray-500 mt-1">
// //             Add at least one area of proficiency
// //           </p>
// //         </div>

// //         {/* Submit Button */}
// //         <button
// //           type="submit"
// //           disabled={!isFormValid}
// //           className={`w-full py-3 px-4 rounded-lg font-medium transition-colors duration-200 ${
// //             isFormValid
// //               ? 'bg-primary-600 hover:bg-primary-700 text-white'
// //               : 'bg-gray-300 text-gray-500 cursor-not-allowed'
// //           }`}
// //         >
// //           Complete Registration
// //         </button>
// //       </form>
// //     </div>
// //   );
// // };

// // export default MentorForm;



// import React, { useState } from "react";
// import { Plus, X, GraduationCap } from "lucide-react";

// const MentorForm = ({ onSubmit }) => {
//   const [step, setStep] = useState(1);
//   const totalSteps = 4;

//   const [formData, setFormData] = useState({
//     name: "",
//     age: "",
//     gender: "",
//     education: "",
//     college: "",
//     stream: "",
//     yearsOfExperience: "",
//     areasOfProficiency: [],
//   });

//   const [newSkill, setNewSkill] = useState("");

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prev) => ({
//       ...prev,
//       [name]: value,
//     }));
//   };

//   const addSkill = () => {
//     if (
//       newSkill.trim() &&
//       !formData.areasOfProficiency.includes(newSkill.trim())
//     ) {
//       setFormData((prev) => ({
//         ...prev,
//         areasOfProficiency: [...prev.areasOfProficiency, newSkill.trim()],
//       }));
//       setNewSkill("");
//     }
//   };

//   const removeSkill = (skillToRemove) => {
//     setFormData((prev) => ({
//       ...prev,
//       areasOfProficiency: prev.areasOfProficiency.filter(
//         (skill) => skill !== skillToRemove
//       ),
//     }));
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     onSubmit({
//       ...formData,
//       age: parseInt(formData.age),
//       yearsOfExperience: parseInt(formData.yearsOfExperience),
//     });
//   };

//   const nextStep = () => setStep((prev) => Math.min(prev + 1, totalSteps));
//   const prevStep = () => setStep((prev) => Math.max(prev - 1, 1));

//   // progress percentage
//   const progress = (step / totalSteps) * 100;

//   return (
//     <div className="card max-w-2xl mx-auto">
//       {/* Progress Bar */}
//       <div className="w-full bg-gray-200 rounded-full h-2 mb-6">
//         <div
//           className="bg-primary-600 h-2 rounded-full transition-all duration-300"
//           style={{ width: `${progress}%` }}
//         />
//       </div>

//       <div className="text-center mb-6">
//         <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
//           <GraduationCap className="w-8 h-8 text-primary-600" />
//         </div>
//         <h2 className="text-2xl font-bold text-gray-900">
//           Mentor Registration
//         </h2>
//         <p className="text-gray-600 mt-2">
//           Step {step} of {totalSteps}
//         </p>
//       </div>

//       <form onSubmit={handleSubmit} className="space-y-6">
//         {/* STEP 1: Personal Info */}
//         {step === 1 && (
//           <div className="space-y-4">
//             <div>
//               <label className="block text-sm font-medium text-gray-700 mb-2">
//                 Full Name *
//               </label>
//               <input
//                 type="text"
//                 name="name"
//                 value={formData.name}
//                 onChange={handleInputChange}
//                 className="input-field"
//                 placeholder="Enter your full name"
//                 required
//               />
//             </div>

//             <div>
//               <label className="block text-sm font-medium text-gray-700 mb-2">
//                 Age *
//               </label>
//               <input
//                 type="number"
//                 name="age"
//                 value={formData.age}
//                 onChange={handleInputChange}
//                 className="input-field"
//                 placeholder="Enter your age"
//                 min="18"
//                 max="100"
//                 required
//               />
//             </div>

//             <div>
//               <label className="block text-sm font-medium text-gray-700 mb-2">
//                 Gender *
//               </label>
//               <select
//                 name="gender"
//                 value={formData.gender}
//                 onChange={handleInputChange}
//                 className="input-field"
//                 required
//               >
//                 <option value="">Select gender</option>
//                 <option value="male">Male</option>
//                 <option value="female">Female</option>
//                 <option value="other">Other</option>
//               </select>
//             </div>
//           </div>
//         )}

//         {/* STEP 2: Education */}
//         {step === 2 && (
//           <div className="space-y-4">
//             <div>
//               <label className="block text-sm font-medium text-gray-700 mb-2">
//                 Highest Education Level *
//               </label>
//               <select
//                 name="education"
//                 value={formData.education}
//                 onChange={handleInputChange}
//                 className="input-field"
//                 required
//               >
//                 <option value="">Select education level</option>
//                 <option value="graduation">Graduation</option>
//                 <option value="post-graduation">Post-Graduation</option>
//                 <option value="phd">PhD</option>
//                 <option value="other">Other</option>
//               </select>
//             </div>

//             <div>
//               <label className="block text-sm font-medium text-gray-700 mb-2">
//                 College/University *
//               </label>
//               <input
//                 type="text"
//                 name="college"
//                 value={formData.college}
//                 onChange={handleInputChange}
//                 className="input-field"
//                 placeholder="Enter your college/university"
//                 required
//               />
//             </div>

//             <div>
//               <label className="block text-sm font-medium text-gray-700 mb-2">
//                 Field of Study *
//               </label>
//               <input
//                 type="text"
//                 name="stream"
//                 value={formData.stream}
//                 onChange={handleInputChange}
//                 className="input-field"
//                 placeholder="e.g., Computer Science, Engineering"
//                 required
//               />
//             </div>
//           </div>
//         )}

//         {/* STEP 3: Experience */}
//         {step === 3 && (
//           <div className="space-y-4">
//             <div>
//               <label className="block text-sm font-medium text-gray-700 mb-2">
//                 Years of Industry Experience *
//               </label>
//               <input
//                 type="number"
//                 name="yearsOfExperience"
//                 value={formData.yearsOfExperience}
//                 onChange={handleInputChange}
//                 className="input-field"
//                 placeholder="Enter years of experience"
//                 min="0"
//                 max="50"
//                 required
//               />
//             </div>

//             <div>
//               <label className="block text-sm font-medium text-gray-700 mb-2">
//                 Areas of Proficiency *
//               </label>
//               <div className="flex gap-2 mb-3">
//                 <input
//                   type="text"
//                   value={newSkill}
//                   onChange={(e) => setNewSkill(e.target.value)}
//                   className="input-field flex-1"
//                   placeholder="e.g., Python, Machine Learning"
//                   onKeyPress={(e) =>
//                     e.key === "Enter" && (e.preventDefault(), addSkill())
//                   }
//                 />
//                 <button
//                   type="button"
//                   onClick={addSkill}
//                   className="btn-primary px-4 py-2"
//                 >
//                   <Plus className="w-4 h-4" />
//                 </button>
//               </div>
//               {formData.areasOfProficiency.length > 0 && (
//                 <div className="flex flex-wrap gap-2">
//                   {formData.areasOfProficiency.map((skill, index) => (
//                     <span
//                       key={index}
//                       className="inline-flex items-center gap-2 bg-primary-100 text-primary-800 px-3 py-1 rounded-full text-sm"
//                     >
//                       {skill}
//                       <button
//                         type="button"
//                         onClick={() => removeSkill(skill)}
//                         className="text-primary-600 hover:text-primary-800"
//                       >
//                         <X className="w-3 h-3" />
//                       </button>
//                     </span>
//                   ))}
//                 </div>
//               )}
//             </div>
//           </div>
//         )}

//         {/* STEP 4: Review & Submit */}
//         {step === 4 && (
//           <div className="space-y-4">
//             <h3 className="text-lg font-semibold mb-2">Review Your Details</h3>
//             <ul className="list-disc pl-5 text-gray-700 space-y-1">
//               <li>Name: {formData.name}</li>
//               <li>Age: {formData.age}</li>
//               <li>Gender: {formData.gender}</li>
//               <li>Education: {formData.education}</li>
//               <li>College: {formData.college}</li>
//               <li>Stream: {formData.stream}</li>
//               <li>Experience: {formData.yearsOfExperience} years</li>
//               <li>
//                 Skills: {formData.areasOfProficiency.join(", ") || "None"}
//               </li>
//             </ul>
//           </div>
//         )}

//         {/* Navigation Buttons */}
//         <div className="flex justify-between pt-4">
//           {step > 1 ? (
//             <button
//               type="button"
//               onClick={prevStep}
//               className="px-4 py-2 rounded-lg bg-gray-200 text-gray-700 hover:bg-gray-300"
//             >
//               Back
//             </button>
//           ) : (
//             <div />
//           )}

//           {step < totalSteps ? (
//             <button
//               type="button"
//               onClick={nextStep}
//               className="px-4 py-2 rounded-lg bg-primary-600 text-white hover:bg-primary-700"
//             >
//               Next
//             </button>
//           ) : (
//             <button
//               type="submit"
//               className="px-6 py-2 rounded-lg bg-green-600 text-white hover:bg-green-700"
//             >
//               Submit
//             </button>
//           )}
//         </div>
//       </form>
//     </div>
//   );
// };

// export default MentorForm;




import React, { useState } from "react";
import { Plus, X, GraduationCap , MapPin , User , Calendar , Users, Award} from "lucide-react";

const styles = {
  card: {
    maxWidth: "700px",
    margin: "0 auto",
    padding: "24px",
    borderRadius: "16px",
    boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
    backgroundColor: "#fff",
  },
  progressContainer: {
    width: "100%",
    backgroundColor: "#e5e7eb",
    borderRadius: "9999px",
    height: "8px",
    marginBottom: "24px",
  },
  progressBar: (progress) => ({
    width: `${progress}%`,
    backgroundColor: "#2563eb",
    height: "8px",
    borderRadius: "9999px",
    transition: "width 0.3s ease",
  }),
  centerText: { textAlign: "center", marginBottom: "24px" },
  iconCircle: {
    width: "64px",
    height: "64px",
    borderRadius: "50%",
    backgroundColor: "#dbeafe",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    margin: "0 auto 16px",
  },
  title: { fontSize: "24px", fontWeight: "bold", color: "#111827" },
  subtitle: { color: "#4b5563", marginTop: "8px" },
  label: {
    display: "block",
    fontSize: "14px",
    fontWeight: "500",
    color: "#374151",
    marginBottom: "8px",
  },
  input: {
    width: "100%",
    padding: "10px 12px",
    borderRadius: "8px",
    border: "1px solid #d1d5db",
    outline: "none",
    marginBottom: "16px",
  },
  select: {
    width: "100%",
    padding: "10px 12px",
    borderRadius: "8px",
    border: "1px solid #d1d5db",
    outline: "none",
    marginBottom: "16px",
  },
  btnPrimary: {
    backgroundColor: "#2563eb",
    color: "white",
    border: "none",
    padding: "10px 16px",
    borderRadius: "8px",
    cursor: "pointer",
  },
  btnSecondary: {
    backgroundColor: "#e5e7eb",
    color: "#374151",
    border: "none",
    padding: "10px 16px",
    borderRadius: "8px",
    cursor: "pointer",
  },
  btnSubmit: {
    backgroundColor: "#16a34a",
    color: "white",
    border: "none",
    padding: "10px 20px",
    borderRadius: "8px",
    cursor: "pointer",
  },
  skillInputWrapper: { display: "flex", gap: "8px", marginBottom: "12px" },
  skillInput: {
    flex: 1,
    padding: "10px 12px",
    borderRadius: "8px",
    border: "1px solid #d1d5db",
    outline: "none",
  },
  skillTagContainer: { display: "flex", flexWrap: "wrap", gap: "8px" },
  skillTag: {
    display: "inline-flex",
    alignItems: "center",
    gap: "6px",
    backgroundColor: "#dbeafe",
    color: "#1e3a8a",
    padding: "6px 12px",
    borderRadius: "9999px",
    fontSize: "14px",
  },
  navContainer: {
    display: "flex",
    justifyContent: "space-between",
    marginTop: "20px",
  },
  addressWrapper: {
    display: "flex",
    alignItems: "center",
    border: "1px solid #d1d5db",
    borderRadius: "10px",
    padding: "10px 12px",
    backgroundColor: "#f9fafb",
    marginBottom: "16px",
  },
  addressIcon: {
    marginRight: "8px",
    color: "#2563eb",
    flexShrink: 0,
  },
  addressInput: {
    flex: 1,
    border: "none",
    outline: "none",
    fontSize: "14px",
    background: "transparent",
  },
  fieldWrapper: {
    display: "flex",
    alignItems: "center",
    border: "1px solid #d1d5db",
    borderRadius: "10px",
    padding: "10px 12px",
    backgroundColor: "#f9fafb",
    marginBottom: "16px",
  },
  fieldIcon: {
    marginRight: "8px",
    color: "#2563eb",
    flexShrink: 0,
  },
  fieldInput: {
    flex: 1,
    border: "none",
    outline: "none",
    fontSize: "14px",
    background: "transparent",
  },
  fieldSelect: {
    flex: 1,
    border: "none",
    outline: "none",
    fontSize: "14px",
    background: "transparent",
  },

  sectionTitle: {
    fontSize: "18px",
    fontWeight: "600",
    marginBottom: "16px",
    color: "#111827",
  },
  weekdayContainer: {
    display: "flex",
    gap: "12px",
    flexWrap: "wrap",
    marginBottom: "16px",
  },
  checkboxLabel: {
    display: "flex",
    alignItems: "center",
    gap: "6px",
    fontSize: "14px",
    color: "#374151",
  },
  timeInput: {
    flex: "1",
    padding: "8px",
    borderRadius: "6px",
    border: "1px solid #d1d5db",
    fontSize: "14px",
    outline: "none",
  },


  
};

const MentorForm = ({ onSubmit }) => {
  const [step, setStep] = useState(1);
  const totalSteps = 4;

  const [formData, setFormData] = useState({
    name: "",
    dob: "",
    gender: "",
    education: "",
    college: "",
    stream: "",
    address:"",
    weekdays: [],
    timeSlots: [],
    certifications: [],
    yearsOfExperience: "",
    areasOfProficiency: [],
  });

  const [newSkill, setNewSkill] = useState("");
  const [newCertification, setNewCertification] = useState("");
// state
const [newSlot, setNewSlot] = useState({ start: "", end: "" });


// handlers
const addTimeSlot = () => {
  if (newSlot.start && newSlot.end) {
    setFormData((prev) => ({
      ...prev,
      timeSlots: [...prev.timeSlots, { ...newSlot }],
    }));
    setNewSlot({ start: "", end: "" });
  }
};

const removeTimeSlot = (index) => {
  setFormData((prev) => ({
    ...prev,
    timeSlots: prev.timeSlots.filter((_, i) => i !== index),
  }));
};

  
  // functions
  const addCertification = () => {
    if (
      newCertification.trim() &&
      !formData.certifications.includes(newCertification.trim())
    ) {
      setFormData((prev) => ({
        ...prev,
        certifications: [...prev.certifications, newCertification.trim()],
      }));
      setNewCertification("");
    }
  };
  
  const removeCertification = (certToRemove) => {
    setFormData((prev) => ({
      ...prev,
      certifications: prev.certifications.filter((c) => c !== certToRemove),
    }));
  };
  
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const addSkill = () => {
    if (
      newSkill.trim() &&
      !formData.areasOfProficiency.includes(newSkill.trim())
    ) {
      setFormData((prev) => ({
        ...prev,
        areasOfProficiency: [...prev.areasOfProficiency, newSkill.trim()],
      }));
      setNewSkill("");
    }
  };

  const removeSkill = (skillToRemove) => {
    setFormData((prev) => ({
      ...prev,
      areasOfProficiency: prev.areasOfProficiency.filter(
        (skill) => skill !== skillToRemove
      ),
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({
      ...formData,
      age: parseInt(formData.age),
      yearsOfExperience: parseInt(formData.yearsOfExperience),
    });
  };

  const nextStep = () => setStep((prev) => Math.min(prev + 1, totalSteps));
  const prevStep = () => setStep((prev) => Math.max(prev - 1, 1));

  const progress = (step / totalSteps) * 100;

  return (
    <div style={styles.card}>
      {/* Progress Bar */}
      <div style={styles.progressContainer}>
        <div style={styles.progressBar(progress)} />
      </div>

      <div style={styles.centerText}>
        <div style={styles.iconCircle}>
          <GraduationCap size={32} color="#2563eb" />
        </div>
        <h2 style={styles.title}>Mentor Registration</h2>
        <p style={styles.subtitle}>
          Step {step} of {totalSteps}
        </p>
      </div>

      <form onSubmit={handleSubmit}>
        {/* STEP 1: Personal Info */}
        {step === 1 && (
          <>
         
{/* Name Field  */}
<label style={styles.label}>Full Name *</label>
<div style={styles.fieldWrapper}>
  <User size={18} style={styles.fieldIcon} />
  <input
    type="text"
    name="name"
    value={formData.name}
    onChange={handleInputChange}
    style={styles.fieldInput}
    placeholder="Enter your full name"
    required
  />
</div>


{/* DOB Field  */}
<label style={styles.label}>Date of Birth *</label>
<div style={styles.fieldWrapper}>
  <input
    type="date"
    name="dob"
    value={formData.dob}
    onChange={handleInputChange}
    style={styles.fieldInput}
    required
    placeholder="DD/MM/YYYY"
  />
</div>



{/* gender Field  */}
<label style={styles.label}>Gender *</label>
<div style={styles.fieldWrapper}>
  <Users size={18} style={styles.fieldIcon} />
  <select
    name="gender"
    value={formData.gender}
    onChange={handleInputChange}
    style={styles.fieldSelect}
    required
  >
    <option value="">Select gender</option>
    <option value="male">Male</option>
    <option value="female">Female</option>
    <option value="other">Other</option>
  </select>
</div>


{/* Address Field  */}
            <label style={styles.label}>Address *</label>
<div style={styles.addressWrapper}>
  <MapPin size={18} style={styles.addressIcon} />
  <input
    type="text"
    name="address"
    value={formData.address}
    onChange={handleInputChange}
    style={styles.addressInput}
    placeholder="Vaishali, Uttar Pradesh, 201010"
    required
  />
</div>
          </>
        )}

        {/* STEP 2: Education */}
        {step === 2 && (
          <>
            <label style={styles.label}>Highest Education Level *</label>
            <select
              name="education"
              value={formData.education}
              onChange={handleInputChange}
              style={styles.select}
              required
            >
              <option value="">Select education level</option>
              <option value="graduation">Graduation</option>
              <option value="post-graduation">Post-Graduation</option>
              <option value="phd">PhD</option>
              <option value="other">Other</option>
            </select>

            <label style={styles.label}>College/University *</label>
            <input
              type="text"
              name="college"
              value={formData.college}
              onChange={handleInputChange}
              style={styles.input}
              required
            />

            <label style={styles.label}>Field of Study *</label>
            <input
              type="text"
              name="stream"
              value={formData.stream}
              onChange={handleInputChange}
              style={styles.input}
              required
            />

<label style={styles.label}>Certifications *</label>
<div style={styles.skillInputWrapper}>
  <input
    type="text"
    value={newCertification}
    onChange={(e) => setNewCertification(e.target.value)}
    style={styles.skillInput}
    placeholder="e.g., AWS Certified, Data Science Certificate"
    onKeyPress={(e) =>
      e.key === "Enter" && (e.preventDefault(), addCertification())
    }
  />
  <button type="button" onClick={addCertification} style={styles.btnPrimary}>
    <Plus size={16} />
  </button>
</div>

{formData.certifications.length > 0 && (
  <div style={styles.skillTagContainer}>
    {formData.certifications.map((cert, index) => (
      <span key={index} style={styles.skillTag}>
        {cert}
        <button
          type="button"
          onClick={() => removeCertification(cert)}
          style={{
            background: "transparent",
            border: "none",
            cursor: "pointer",
            color: "#2563eb",
          }}
        >
          <X size={12} />
        </button>
      </span>
    ))}
  </div>
)}

          </>
        )}

        {/* STEP 3: Experience */}
        {step === 3 && (
          <>
            <label style={styles.label}>Years of Industry Experience *</label>
            <input
              type="number"
              name="yearsOfExperience"
              value={formData.yearsOfExperience}
              onChange={handleInputChange}
              style={styles.input}
              min="0"
              max="50"
              required
            />

            <label style={styles.label}>Areas of Proficiency *</label>
            <div style={styles.skillInputWrapper}>
              <input
                type="text"
                value={newSkill}
                onChange={(e) => setNewSkill(e.target.value)}
                style={styles.skillInput}
                placeholder="e.g., Python, Machine Learning"
                onKeyPress={(e) =>
                  e.key === "Enter" && (e.preventDefault(), addSkill())
                }
              />
              <button type="button" onClick={addSkill} style={styles.btnPrimary}>
                <Plus size={16} />
              </button>
            </div>

            {formData.areasOfProficiency.length > 0 && (
              <div style={styles.skillTagContainer}>
                {formData.areasOfProficiency.map((skill, index) => (
                  <span key={index} style={styles.skillTag}>
                    {skill}
                    <button
                      type="button"
                      onClick={() => removeSkill(skill)}
                      style={{
                        background: "transparent",
                        border: "none",
                        cursor: "pointer",
                        color: "#2563eb",
                      }}
                    >
                      <X size={12} />
                    </button>
                  </span>
                ))}
              </div>
            )}
          </>
        )}

        {/* STEP 4: Review */}
        {/* {step === 4 && (
          <>
            <h3 style={{ fontSize: "18px", fontWeight: "600", marginBottom: "12px" }}>
              Review Your Details
            </h3>
            <ul style={{ paddingLeft: "20px", color: "#374151", lineHeight: "1.6" }}>
              <li>Name: {formData.name}</li>
              <li>Age: {formData.age}</li>
              <li>Gender: {formData.gender}</li>
              <li>Education: {formData.education}</li>
              <li>College: {formData.college}</li>
              <li>Stream: {formData.stream}</li>
              <li>Experience: {formData.yearsOfExperience} years</li>
              <li>
                Skills: {formData.areasOfProficiency.join(", ") || "None"}
              </li>
            </ul>
          </>
        )} */}
        {/* STEP 4: Availability */}
{step === 4 && (
  <>
    <h3 style={styles.sectionTitle }>Availability</h3>

    {/* Weekdays */}
    <label style={styles.label}>Weekdays *</label>
    <div style={styles.weekdayContainer}>
      {["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"].map((day) => (
        <label key={day} style={styles.checkboxLabel}>
          <input
            type="checkbox"
            value={day}
            checked={formData.weekdays.includes(day)}
            onChange={(e) => {
              const { value, checked } = e.target;
              setFormData((prev) => ({
                ...prev,
                weekdays: checked
                  ? [...prev.weekdays, value]
                  : prev.weekdays.filter((d) => d !== value),
              }));
            }}
          />
          {day}
        </label>
      ))}
    </div>

    {/* Time Slots */}
    <label style={styles.label}>Time Slots *</label>
    <div style={styles.skillInputWrapper}>
      <input
        type="time"
        value={newSlot.start}
        onChange={(e) =>
          setNewSlot((prev) => ({ ...prev, start: e.target.value }))
        }
        style={styles.timeInput}
        required
      />
      <span style={{ alignSelf: "center" }}>to</span>
      <input
        type="time"
        value={newSlot.end}
        onChange={(e) =>
          setNewSlot((prev) => ({ ...prev, end: e.target.value }))
        }
        style={styles.timeInput}
        required
      />
      <button
        type="button"
        onClick={addTimeSlot}
        style={styles.btnPrimary}
      >
        <Plus size={16} />
      </button>
    </div>

    {formData.timeSlots.length > 0 && (
      <div style={styles.skillTagContainer}>
        {formData.timeSlots.map((slot, index) => (
          <span key={index} style={styles.skillTag}>
            {slot.start} - {slot.end}
            <button
              type="button"
              onClick={() => removeTimeSlot(index)}
              style={{
                background: "transparent",
                border: "none",
                cursor: "pointer",
                color: "#2563eb",
              }}
            >
              <X size={12} />
            </button>
          </span>
        ))}
      </div>
    )}
  </>
)}


        {/* Navigation */}
        <div style={styles.navContainer}>
          {step > 1 ? (
            <button type="button" onClick={prevStep} style={styles.btnSecondary}>
              Back
            </button>
          ) : (
            <div />
          )}
          {step < totalSteps ? (
            <button type="button" onClick={nextStep} style={styles.btnPrimary}>
              Next
            </button>
          ) : (
            <button type="submit" style={styles.btnSubmit}>
              Submit
            </button>
          )}
        </div>
      </form>
    </div>
  );
};

export default MentorForm;
