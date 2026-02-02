import React from "react";
import Button from "components/ui/Button";
import { Drawer } from "antd";
import { Mail, Phone, MessageSquare } from "lucide-react";

const Contact = ({ isOpen, onClose }) => {
    return (
        <Drawer
            placement="right"
            width="50vw"
            onClose={onClose}
            open={isOpen}
            maskClosable
            title={
                <div>
                    <p className="text-xs font-semibold tracking-wide uppercase text-[#2FA4A9]">
                        Contact
                    </p>
                    <h1 className="text-lg md:text-xl font-bold text-[#0D2A4A]">
                        Schedule a Discovery Call
                    </h1>
                </div>
            }
            styles={{
                body: {
                    padding: 0,
                },
            }}
        >
            <div className="px-6 py-5 space-y-4 overflow-y-auto">
                <p className="text-sm text-[#4A5568]">
                    Share a bit about your systems, challenges, and what you would like help with. We usually
                    respond within 24 hours.
                </p>

                <form
                    className="space-y-4"
                    action="https://formsubmit.co/contact@collabrahtech.com"
                    method="POST"
                >
                    <input type="hidden" name="_captcha" value="false" />
                    <input
                        type="hidden"
                        name="_subject"
                        value="New enquiry from Collabrah Tech website"
                    />
                    <div>
                        <label className="block text-sm font-semibold text-[#0D2A4A] mb-1">
                            Name
                        </label>
                        <input
                            type="text"
                            name="name"
                            className="w-full rounded-xl border border-gray-200 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#2FA4A9] focus:border-[#2FA4A9] bg-white"
                            placeholder="Your name"
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-semibold text-[#0D2A4A] mb-1">
                            Email
                        </label>
                        <input
                            type="email"
                            name="email"
                            className="w-full rounded-xl border border-gray-200 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#2FA4A9] focus:border-[#2FA4A9] bg-white"
                            placeholder="you@company.com"
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-semibold text-[#0D2A4A] mb-1">
                            Company
                        </label>
                        <input
                            type="text"
                            name="company"
                            className="w-full rounded-xl border border-gray-200 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#2FA4A9] focus:border-[#2FA4A9] bg-white"
                            placeholder="Company name"
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-semibold text-[#0D2A4A] mb-1">
                            What would you like help with?
                        </label>
                        <textarea
                            rows={4}
                            name="message"
                            className="w-full rounded-xl border border-gray-200 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#2FA4A9] focus:border-[#2FA4A9] bg-white resize-none"
                            placeholder="Share a bit about your systems, challenges, or goals."
                        />
                    </div>

                    <Button
                        type="submit"
                        className="w-full bg-[#2FA4A9] hover:bg-[#2FA4A9]/90 text-white font-semibold px-6 py-3 rounded-xl flex items-center justify-center gap-2 shadow-md"
                    >
                        Submit <MessageSquare className="h-5 w-5" />
                    </Button>

                    <p className="text-xs text-[#4A5568] text-center">
                        Or reach us at{" "}
                        <a
                            href="mailto:will@collabrahtech.com"
                            className="font-semibold text-[#0D2A4A]"
                        >
                            contact@collabrahtech.com
                        </a>
                        .
                    </p>
                </form>

                <div className="mt-4 border-t border-gray-100 pt-4 space-y-2">
                    <p className="text-xs font-semibold text-[#0D2A4A] uppercase tracking-wide">
                        Prefer email or a quick call?
                    </p>

                    <div className="flex flex-col gap-2 text-sm text-[#4A5568]">
                        <div className="inline-flex items-center gap-2">
                            <Mail className="h-4 w-4 text-[#2FA4A9]" />
                            <a
                                href="mailto:contact@collabrahtech.com"
                                className="hover:text-[#0D2A4A]"
                            >
                                contact@collabrahtech.com
                            </a>
                        </div>

                        <div className="inline-flex items-center gap-2">
                            <Phone className="h-4 w-4 text-[#2FA4A9]" />
                            <span>By appointment</span>
                        </div>
                    </div>
                </div>
            </div>
        </Drawer>
    );
};

export default Contact;
