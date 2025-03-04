import {mountCareerApp } from "careerApp/CareerApp";
import React, { useEffect } from "react";

export default function CareerApp() {
    useEffect(() => {
        mountCareerApp();
    }, []);
    return <app-career></app-career>
}