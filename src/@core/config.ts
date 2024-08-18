import type { appConfigType, Navigation } from "./types";

export const appConfig: appConfigType = {
    org: {
        title: "Antarius LLC",
        wwww: "www.antarius-msk.ru",
        title_rus: "Антариус",
        phone: "7 (495) 120-05-60",
        adress: "125475, г. Москва, ул. Петрозаводская, д. 28, корп. 4",
        email: "info@antarius-msk.com",
    }

}

export const navigation: Navigation = {
    solutions: {
        title: "Наши решения",
        slug: "solutions",
    },
    catalog: { title: "Каталог", slug: "catalog" },
    mans: { title: "Производители", slug: "manufacturers" },
    contacts: { title: "Контакты", slug: "contacts" },
    education: { title: "Обучение", slug: "education" },
    about: { title: "О компании", slug: "about" },
}