"use client";

import { useState } from "react";
import { submitApplication } from "@/lib/api";

interface ApplyFormProps {
  jobId: string;
  jobTitle: string;
}

export function ApplyForm({ jobId, jobTitle }: ApplyFormProps) {
  const [form, setForm] = useState({
    name: "",
    email: "",
    resumeLink: "",
    coverNote: "",
  });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    setErrorMsg("");
    try {
      await submitApplication({ jobId, ...form });
      setStatus("success");
    } catch (err: unknown) {
      setStatus("error");
      setErrorMsg(err instanceof Error ? err.message : "Something went wrong");
    }
  };

  if (status === "success") {
    return (
      <div className="bg-green-50 border border-green-200 rounded-lg p-8 text-center">
        <div className="text-4xl mb-3">🎉</div>
        <h3 className="text-xl font-bold text-green-800 mb-2">Application Submitted!</h3>
        <p className="text-green-700">Good luck with your application for <strong>{jobTitle}</strong>.</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div>
        <label className="block text-sm font-semibold text-[#25324B] mb-1">Full Name *</label>
        <input
          required
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
          placeholder="Jane Doe"
          className="w-full border border-[#D6DDEB] px-4 py-3 outline-none focus:border-[#4640DE] transition-colors"
        />
      </div>
      <div>
        <label className="block text-sm font-semibold text-[#25324B] mb-1">Email Address *</label>
        <input
          required
          type="email"
          value={form.email}
          onChange={(e) => setForm({ ...form, email: e.target.value })}
          placeholder="jane@example.com"
          className="w-full border border-[#D6DDEB] px-4 py-3 outline-none focus:border-[#4640DE] transition-colors"
        />
      </div>
      <div>
        <label className="block text-sm font-semibold text-[#25324B] mb-1">Resume Link *</label>
        <input
          required
          type="url"
          value={form.resumeLink}
          onChange={(e) => setForm({ ...form, resumeLink: e.target.value })}
          placeholder="https://drive.google.com/your-resume"
          className="w-full border border-[#D6DDEB] px-4 py-3 outline-none focus:border-[#4640DE] transition-colors"
        />
      </div>
      <div>
        <label className="block text-sm font-semibold text-[#25324B] mb-1">Cover Note</label>
        <textarea
          rows={5}
          value={form.coverNote}
          onChange={(e) => setForm({ ...form, coverNote: e.target.value })}
          placeholder="Tell us why you're a great fit..."
          className="w-full border border-[#D6DDEB] px-4 py-3 outline-none focus:border-[#4640DE] transition-colors resize-none"
        />
      </div>

      {status === "error" && (
        <p className="text-red-600 text-sm bg-red-50 border border-red-200 px-4 py-2">{errorMsg}</p>
      )}

      <button
        type="submit"
        disabled={status === "loading"}
        className="w-full bg-[#4640DE] text-white font-bold py-4 hover:bg-[#3b36c9] transition-colors disabled:opacity-60"
      >
        {status === "loading" ? "Submitting..." : "Apply Now"}
      </button>
    </form>
  );
}
