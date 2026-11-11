export const site = {
  name: "Midland Estate & Builders",
  owner: "Ali Zia",
  phoneDisplay: "0310-1001010",
  phoneTel: "+923101001010",
  whatsapp: "923101001010",
  email: "aliziya225@gmail.com",
  address: "8-B, Rafi Commercial, Bahria Town, Lahore",
};

export const whatsappLink = (text = "Hello Midland Estate & Builders, I have an inquiry.") =>
  `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(text)}`;
