'use client'
import { CarProps } from "@/types"
import { useState } from "react"

interface CarCardPros{
    car:CarProps;
}

const CarCard = ({car}:CarCardPros) => {
    const {city_mpg,year,transmission,make,model,drive} = car;
  return (
    <div className="car-card group">
        <div className="card-card__content">
            <h2 className="card-card__content-title">
                {make} {model}
            </h2>
        </div>
        <p>
            <span>
                Car Rent ...
            </span>
        </p>
    </div>
  )
}

export default CarCard
