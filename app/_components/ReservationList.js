"use client";

import { useOptimistic } from "react";
import ReservationCard from "@/app/_components/ReservationCard";
import { deleteBooking } from "@/app/_lib/action";

function ReservationList({ bookings, onDelete }) {
  const [optimisticBookings, optimistingDelete] = useOptimistic(
    bookings,
    (curBookings, bookingId) => {
      return curBookings.filter((booking) => booking.id !== bookingId);
    }
  );

  async function handleDelete(bookingId) {
    optimistingDelete(bookingId);
    await deleteBooking(bookingId);
  }
  return (
    <ul className="space-y-6">
      {optimisticBookings.map((booking) => (
        <ReservationCard
          booking={booking}
          key={booking.id}
          onDelete={handleDelete}
        />
      ))}
    </ul>
  );
}

export default ReservationList;
