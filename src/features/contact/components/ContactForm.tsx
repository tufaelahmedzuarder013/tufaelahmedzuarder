"use client";

import React, { useState } from "react";
import { Send, CheckCircle, AlertCircle } from "lucide-react";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import {
  updateField,
  setSubmitting,
  setSuccess,
  setError,
} from "../store/contactSlice";
import { contactSchema, ContactFormData } from "../schemas/contact.schema";
import { Input } from "@/components/ui/Input";
import { Select } from "@/components/ui/Select";
import { Textarea } from "@/components/ui/Textarea";
import { Button } from "@/components/ui/Button";

const PROJECT_TYPES = [
  { label: "Website", value: "Website" },
  { label: "Web App", value: "Web App" },
  { label: "E-commerce", value: "E-commerce" },
  { label: "Landing Page", value: "Landing Page" },
  { label: "UI / UX Design", value: "UI / UX Design" },
  { label: "Performance / Redesign", value: "Performance / Redesign" },
  { label: "Other", value: "Other" },
];

const BUDGET_RANGES = [
  { label: "Under $500", value: "Under $500" },
  { label: "$500 – $1,500", value: "$500 – $1,500" },
  { label: "$1,500 – $3,000", value: "$1,500 – $3,000" },
  { label: "$3,000 – $7,000", value: "$3,000 – $7,000" },
  { label: "$7,000+", value: "$7,000+" },
  { label: "Not sure yet", value: "Not sure yet" },
];

const TIMELINES = [
  { label: "ASAP", value: "ASAP" },
  { label: "1 – 2 weeks", value: "1 – 2 weeks" },
  { label: "About a month", value: "About a month" },
  { label: "Flexible", value: "Flexible" },
];

export function ContactForm() {
  const dispatch = useAppDispatch();
  const { formData, status, errorMessage } = useAppSelector(
    (state) => state.contact
  );
  const [fieldErrors, setFieldErrors] = useState<
    Partial<Record<keyof ContactFormData, string>>
  >({});

  const handleChange = (
    field: keyof ContactFormData,
    value: string
  ) => {
    dispatch(updateField({ field, value }));
    if (fieldErrors[field]) {
      setFieldErrors((prev) => ({ ...prev, [field]: undefined }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const result = contactSchema.safeParse(formData);
    if (!result.success) {
      const formattedErrors: Partial<Record<keyof ContactFormData, string>> = {};
      result.error.errors.forEach((err) => {
        const path = err.path[0] as keyof ContactFormData;
        formattedErrors[path] = err.message;
      });
      setFieldErrors(formattedErrors);
      return;
    }

    dispatch(setSubmitting());

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error("Failed to send message. Please try again or email directly.");
      }

      dispatch(setSuccess());
    } catch (err: unknown) {
      const msg = err instanceof Error ? err.message : "Something went wrong";
      dispatch(setError(msg));
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="p-8 md:p-10 rounded-3xl border border-brand-ink/10 bg-brand-surface shadow-brand"
    >
      {status === "success" && (
        <div className="p-4 mb-6 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-700 flex items-center gap-3">
          <CheckCircle className="w-5 h-5 shrink-0 text-emerald-600" />
          <p className="text-sm font-medium">
            Thank you! Your message has been sent successfully. I will get back to you shortly.
          </p>
        </div>
      )}

      {status === "error" && errorMessage && (
        <div className="p-4 mb-6 rounded-2xl bg-rose-500/10 border border-rose-500/20 text-rose-700 flex items-center gap-3">
          <AlertCircle className="w-5 h-5 shrink-0 text-rose-600" />
          <p className="text-sm font-medium">{errorMessage}</p>
        </div>
      )}

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <Input
          label="Your Name *"
          placeholder="Enter your name"
          value={formData.name}
          onChange={(e) => handleChange("name", e.target.value)}
          error={fieldErrors.name}
          required
        />
        <Input
          label="Email Address *"
          type="email"
          placeholder="Enter your email"
          value={formData.email}
          onChange={(e) => handleChange("email", e.target.value)}
          error={fieldErrors.email}
          required
        />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <Select
          label="Project Type"
          placeholder="Select project type…"
          options={PROJECT_TYPES}
          value={formData.projectType || ""}
          onChange={(e) => handleChange("projectType", e.target.value)}
        />
        <Select
          label="Budget"
          placeholder="Select budget…"
          options={BUDGET_RANGES}
          value={formData.budget || ""}
          onChange={(e) => handleChange("budget", e.target.value)}
        />
      </div>

      <Select
        label="Timeline"
        placeholder="Select timeline…"
        options={TIMELINES}
        value={formData.timeline || ""}
        onChange={(e) => handleChange("timeline", e.target.value)}
      />

      <Textarea
        label="Project Details *"
        placeholder="Tell me about your project, goals, and any reference designs or timeline requirements…"
        value={formData.message}
        onChange={(e) => handleChange("message", e.target.value)}
        error={fieldErrors.message}
        required
      />

      <Button
        type="submit"
        variant="primary"
        className="w-full justify-center mt-3"
        disabled={status === "submitting"}
        icon={<Send className="w-4 h-4" />}
      >
        {status === "submitting" ? "Sending Message…" : "Send Message"}
      </Button>

      <p className="font-mono text-xs text-brand-muted2 text-center mt-4">
        Average response time: under 24 hours · No spam guaranteed
      </p>
    </form>
  );
}
