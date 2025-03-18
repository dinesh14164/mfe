import { mount } from "dashboard/DashboardApp";

export default function CareerApp({ element }) {
    const ref = document.createElement('div');
    ref.id = 'career-app';
    element.appendChild(ref);
    mount(ref);
}