"use client";
import { useRouter } from "next/navigation";
import { title } from "process";
import { ChangeEvent, SyntheticEvent, useState } from "react";
import { ITicketDocument } from "../(models)/ticket";

const TicketForm = ({
     ticket,
}: {
     ticket: ITicketDocument | { _id: string };
}) => {
     const router = useRouter();
     const EditeMode = ticket._id === "new" ? false : true;

     let defaultTicket: ITicketDocument | any = {
          title: "",
          description: "",
          priority: 1,
          progress: 0,
          status: "not started",
          category: "Hardware problem",
     };

     if (EditeMode) {
          defaultTicket = { ...ticket };
     }
     const [formData, setFormData] = useState(defaultTicket);
     const handleChange = (
          e: ChangeEvent<
               HTMLInputElement & HTMLTextAreaElement & HTMLSelectElement
          >
     ) => {
          const { name, value } = e.target;

          setFormData((prevstate: any) => ({ ...prevstate, [name]: value }));
     };

     const handleSubmit = async (e: SyntheticEvent) => {
          e.preventDefault();
          try {
               if (EditeMode) {
                    await fetch(`../api/tickets/${defaultTicket._id}`, {
                         method: "PUT",
                         body: JSON.stringify({ formData }),
                         headers: {
                              "Content-Type": "application/json",
                         },
                    });
               } else {
                    await fetch("../api/tickets", {
                         method: "POST",
                         body: JSON.stringify({ formData }),
                         headers: {
                              "Content-Type": "application/json",
                         },
                    });
               }

               router.push("/");
               router.refresh();
          } catch (error) {
               throw new Error("Failed to create ticket");
          }
     };

     return (
          <div className="flex justify-center">
               <form
                    className="flex flex-col gap-3 w-1/2"
                    method="post"
                    onSubmit={handleSubmit}
               >
                    <h3 className="text-center">
                         {EditeMode
                              ? "Update Your Ticket"
                              : "Create Your Ticket"}
                    </h3>
                    <div className="flex flex-col gap-1">
                         <label htmlFor="title">title</label>
                         <input
                              type="text"
                              id="title"
                              name="title"
                              onChange={handleChange}
                              value={formData.title}
                              required={true}
                              className="flex-1"
                         />
                    </div>
                    <div className="flex flex-col gap-1">
                         <label htmlFor="description">Description</label>
                         <textarea
                              rows={5}
                              id="description"
                              name="description"
                              onChange={handleChange}
                              value={formData.description}
                              required={true}
                              className="flex-1"
                         ></textarea>
                    </div>
                    <div className="flex flex-col gap-1">
                         <label htmlFor="category">Category</label>
                         <select
                              id="category"
                              name="category"
                              onChange={handleChange}
                              value={formData.category}
                              required={true}
                              className="flex-1"
                         >
                              <option value="Hardware problem">
                                   Hardware problem
                              </option>
                              <option value="Software problem">
                                   Software problem
                              </option>
                              <option value="Project">Project</option>
                         </select>
                    </div>
                    <div className="flex flex-col gap-1">
                         <label>Priority</label>
                         <div className="flex items-center gap-2">
                              <div className="flex flex-col items-center">
                                   <label htmlFor="priority-1">1</label>
                                   <input
                                        type="radio"
                                        id="priority-1"
                                        name="priority"
                                        onChange={handleChange}
                                        value={1}
                                        required={true}
                                        checked={formData.priority == 1}
                                   />
                              </div>
                              <div className="flex flex-col items-center">
                                   <label htmlFor="priority-2">2</label>
                                   <input
                                        type="radio"
                                        id="priority-2"
                                        name="priority"
                                        onChange={handleChange}
                                        value={2}
                                        required={true}
                                        checked={formData.priority == 2}
                                   />
                              </div>
                              <div className="flex flex-col items-center">
                                   <label htmlFor="priority-3">3</label>
                                   <input
                                        type="radio"
                                        id="priority-3"
                                        name="priority"
                                        onChange={handleChange}
                                        value={3}
                                        required={true}
                                        checked={formData.priority == 3}
                                   />
                              </div>
                              <div className="flex flex-col items-center">
                                   <label htmlFor="priority-4">4</label>
                                   <input
                                        type="radio"
                                        id="priority-4"
                                        name="priority"
                                        onChange={handleChange}
                                        value={4}
                                        required={true}
                                        checked={formData.priority == 4}
                                   />
                              </div>
                              <div className="flex flex-col items-center">
                                   <label htmlFor="priority-5">5</label>
                                   <input
                                        type="radio"
                                        id="priority-5"
                                        name="priority"
                                        onChange={handleChange}
                                        value={5}
                                        required={true}
                                        checked={formData.priority == 5}
                                   />
                              </div>
                         </div>
                    </div>
                    <div className="flex flex-col gap-1">
                         <label htmlFor="progress">Progress</label>
                         <input
                              type="range"
                              id="progress"
                              name="progress"
                              onChange={handleChange}
                              value={formData.progress}
                              required={true}
                              min={0}
                              max={100}
                              className="flex-1"
                         />
                    </div>
                    <div className="flex flex-col gap-1">
                         <label htmlFor="status">Status</label>
                         <select
                              id="status"
                              name="status"
                              onChange={handleChange}
                              value={formData.status}
                              required={true}
                              className="flex-1"
                         >
                              <option value="not started">Not started</option>
                              <option value="started">Started</option>
                              <option value="done">Done</option>
                         </select>
                    </div>
                    <button className="btn">
                         {EditeMode ? "Update Ticket" : "Create Ticket"}
                    </button>
               </form>
          </div>
     );
};

export default TicketForm;
