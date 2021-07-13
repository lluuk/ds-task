import { Form } from "@/types";

export const VALID_EMAIL_REGEXP =
  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

export const sessionFormKey = "form";

export const MAPPED_FORM_KEYS: Form = {
  firstName: "First name",
  lastName: "Last name",
  email: "Email",
  phone: "Phone",
  birthday: "Birthday",
  about: "About",
  avatar: "Avatar",
};
