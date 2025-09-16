"use client";

import { useState, useCallback, useMemo } from "react";
import { Mail, MessageCircle, MapPin, AlertCircle } from "lucide-react";
import AnimatedSection from "./AnimatedSection";

interface ContactInfo {
  id: string;
  title: string;
  value: string;
  href: string;
  icon: React.ReactNode;
  bgColor: string;
  textColor: string;
  hoverBgColor: string;
  hoverTextColor: string;
}

interface FormField {
  name: string;
  label: string;
  type: string;
  autoComplete?: string;
  validation: {
    required: string;
    minLength?: { value: number; message: string };
    pattern?: { value: RegExp; message: string };
  };
}

export default function Contact() {
  const contactInfo: ContactInfo[] = [
    {
      id: "email",
      title: "Email",
      value: "contato@finbank.com.br",
      href: "mailto:contato@finbank.com.br?subject=Contato via Site&body=Olá, gostaria de entrar em contato com o FinBank.",
      icon: <Mail className="w-6 h-6" />,
      bgColor: "bg-primary-100",
      textColor: "text-primary-600",
      hoverBgColor: "group-hover:bg-primary-200",
      hoverTextColor: "group-hover:text-primary-600",
    },
    {
      id: "whatsapp",
      title: "WhatsApp",
      value: "+55 (11) 99999-9999",
      href: "https://wa.me/5511999999999?text=Olá! Gostaria de saber mais sobre os serviços do FinBank.",
      icon: <MessageCircle className="w-6 h-6" />,
      bgColor: "bg-green-100",
      textColor: "text-green-600",
      hoverBgColor: "group-hover:bg-green-200",
      hoverTextColor: "group-hover:text-green-600",
    },
    {
      id: "address",
      title: "Endereço",
      value: "Av. Paulista, 1000 - Bela Vista, São Paulo - SP",
      href: "https://maps.google.com/?q=Av.+Paulista,+1000+-+Bela+Vista,+São+Paulo+-+SP,+01310-100",
      icon: <MapPin className="w-6 h-6" />,
      bgColor: "bg-red-100",
      textColor: "text-red-600",
      hoverBgColor: "group-hover:bg-red-200",
      hoverTextColor: "group-hover:text-red-600",
    },
  ];

  const formFields: FormField[] = useMemo(
    () => [
      {
        name: "name",
        label: "Nome",
        type: "text",
        autoComplete: "name",
        validation: {
          required: "Nome é obrigatório",
          minLength: {
            value: 2,
            message: "Nome deve ter pelo menos 2 caracteres",
          },
        },
      },
      {
        name: "email",
        label: "Email",
        type: "email",
        autoComplete: "email",
        validation: {
          required: "Email é obrigatório",
          pattern: {
            value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
            message: "Email inválido",
          },
        },
      },
      {
        name: "message",
        label: "Mensagem",
        type: "textarea",
        validation: {
          required: "Mensagem é obrigatória",
          minLength: {
            value: 10,
            message: "Mensagem deve ter pelo menos 10 caracteres",
          },
        },
      },
    ],
    []
  );

  const [formData, setFormData] = useState(
    formFields.reduce((acc, field) => ({ ...acc, [field.name]: "" }), {})
  );

  const [errors, setErrors] = useState(
    formFields.reduce((acc, field) => ({ ...acc, [field.name]: "" }), {})
  );

  const [touched, setTouched] = useState(
    formFields.reduce((acc, field) => ({ ...acc, [field.name]: false }), {})
  );

  const validateField = (field: FormField, value: string) => {
    if (!value.trim()) return field.validation.required;

    if (
      field.validation.minLength &&
      value.trim().length < field.validation.minLength.value
    ) {
      return field.validation.minLength.message;
    }

    if (
      field.validation.pattern &&
      !field.validation.pattern.value.test(value)
    ) {
      return field.validation.pattern.message;
    }

    return "";
  };

  const handleSubmit = useCallback(
    (e: React.FormEvent) => {
      e.preventDefault();

      const newTouched = formFields.reduce(
        (acc, field) => ({ ...acc, [field.name]: true }),
        {}
      );
      setTouched(newTouched);

      const newErrors = formFields.reduce(
        (acc, field) => ({
          ...acc,
          [field.name]: validateField(
            field,
            formData[field.name as keyof typeof formData] || ""
          ),
        }),
        {}
      );

      setErrors(newErrors);

      const hasErrors = Object.values(newErrors).some((error) => error !== "");

      if (!hasErrors) {
        console.log("Form submitted:", formData);
        setFormData(
          formFields.reduce((acc, field) => ({ ...acc, [field.name]: "" }), {})
        );
        setTouched(
          formFields.reduce(
            (acc, field) => ({ ...acc, [field.name]: false }),
            {}
          )
        );
        setErrors(
          formFields.reduce((acc, field) => ({ ...acc, [field.name]: "" }), {})
        );
      }
    },
    [formData, formFields]
  );

  const handleChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      const { name, value } = e.target;

      setFormData((prev) => ({
        ...prev,
        [name]: value,
      }));

      if (touched[name as keyof typeof touched]) {
        const field = formFields.find((f) => f.name === name);
        if (field) {
          setErrors((prev) => ({
            ...prev,
            [name]: validateField(field, value),
          }));
        }
      }
    },
    [touched, formFields]
  );

  const handleBlur = useCallback(
    (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      const { name, value } = e.target;

      setTouched((prev) => ({
        ...prev,
        [name]: true,
      }));

      const field = formFields.find((f) => f.name === name);
      if (field) {
        setErrors((prev) => ({
          ...prev,
          [name]: validateField(field, value),
        }));
      }
    },
    [formFields]
  );

  return (
    <section id="contact" className="py-12 sm:py-16 bg-white">
      <div className="max-w-7xl mx-auto py-8 sm:py-16 px-4 sm:px-6 lg:px-8">
        <AnimatedSection>
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-3 sm:mb-4">
              Entre em Contato
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-2xl mx-auto px-4">
              Tem alguma dúvida? Estamos aqui para ajudar. Entre em contato
              conosco.
            </p>
          </div>
        </AnimatedSection>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12">
          <AnimatedSection direction="left" delay={200}>
            <div>
              <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-4 sm:mb-6">
                Informações de Contato
              </h3>

              <div className="space-y-4 sm:space-y-6">
                {contactInfo.map((contact) => (
                  <a
                    key={contact.id}
                    href={contact.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center group cursor-pointer transition-all duration-200 hover:bg-gray-50 p-3 sm:p-4 rounded-lg"
                  >
                    <div
                      className={`w-10 h-10 sm:w-12 sm:h-12 ${contact.bgColor} rounded-lg flex items-center justify-center mr-3 sm:mr-4 ${contact.hoverBgColor} transition-colors duration-200 flex-shrink-0`}
                    >
                      <div
                        className={`${
                          contact.textColor
                        } group-hover:${contact.textColor.replace(
                          "600",
                          "700"
                        )} transition-colors duration-200`}
                      >
                        {contact.icon}
                      </div>
                    </div>
                    <div className="min-w-0 flex-1">
                      <h4
                        className={`font-semibold text-sm sm:text-base text-gray-900 ${contact.hoverTextColor} transition-colors duration-200`}
                      >
                        {contact.title}
                      </h4>
                      <p className="text-xs sm:text-sm text-gray-600 group-hover:text-gray-700 transition-colors duration-200 break-words">
                        {contact.value}
                      </p>
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </AnimatedSection>

          <AnimatedSection direction="right" delay={400}>
            <div>
              <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
                {formFields.map((field) => {
                  const hasError =
                    errors[field.name as keyof typeof errors] &&
                    touched[field.name as keyof typeof touched];
                  const fieldValue =
                    formData[field.name as keyof typeof formData] || "";

                  return (
                    <div key={field.name}>
                      <label
                        htmlFor={field.name}
                        className="block text-sm font-medium text-gray-700 mb-2"
                      >
                        {field.label} <span className="text-red-500">*</span>
                      </label>
                      {field.type === "textarea" ? (
                        <textarea
                          id={field.name}
                          name={field.name}
                          rows={4}
                          value={fieldValue}
                          onChange={handleChange}
                          onBlur={handleBlur}
                          autoComplete="off"
                          className={`w-full px-3 sm:px-4 py-2 sm:py-3 border rounded-lg transition-colors duration-200 resize-none text-sm sm:text-base ${
                            hasError
                              ? "border-red-500 focus:ring-2 focus:ring-red-500 focus:border-red-500"
                              : "border-gray-300 focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                          }`}
                        />
                      ) : (
                        <input
                          type={field.type}
                          id={field.name}
                          name={field.name}
                          value={fieldValue}
                          onChange={handleChange}
                          onBlur={handleBlur}
                          autoComplete={field.autoComplete}
                          className={`w-full px-3 sm:px-4 py-2 sm:py-3 border rounded-lg transition-colors duration-200 text-sm sm:text-base ${
                            hasError
                              ? "border-red-500 focus:ring-2 focus:ring-red-500 focus:border-red-500"
                              : "border-gray-300 focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                          }`}
                        />
                      )}
                      {hasError && (
                        <p className="mt-1 text-xs sm:text-sm text-red-600 flex items-center">
                          <AlertCircle className="w-3 h-3 sm:w-4 sm:h-4 mr-1 flex-shrink-0" />
                          {errors[field.name as keyof typeof errors]}
                        </p>
                      )}
                    </div>
                  );
                })}

                <button
                  type="submit"
                  className="w-full bg-primary-800 hover:bg-primary-900 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-200 shadow-lg text-sm sm:text-base"
                >
                  Enviar Mensagem
                </button>
              </form>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
