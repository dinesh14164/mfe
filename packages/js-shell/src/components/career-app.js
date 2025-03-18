import {mountCareerApp } from "careerApp/CareerApp";

export default function CareerApp({ element }) {
    const ref = document.createElement('app-career');
    ref.id = 'career-app';
    element.appendChild(ref);
    mountCareerApp();
}