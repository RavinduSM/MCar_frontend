import React, { useEffect } from "react";
import VehicleCard from "../../components/VehicleCard";
import { useGetVehiclesQuery } from "../../redux/api/vehicles";
import { toast } from "react-toastify";

const VehicleListing = () => {
  const { data, error, isLoading } = useGetVehiclesQuery();

  console.log(data);

  useEffect(() => {
    // Optionally handle error or loading states
    if (error) {
      toast.error("Error fetching vehicles:", error);
    }
  }, [error]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="grid lg:grid-cols-4 gap-6 lg:mx-6 lg:my-20  h-[900px] scrollbar-hide md:grid-cols-3 grid-cols-2 mx-3 my-1">
      {/* card1 */}
      {data &&
        data.vehicle.map((vehicles) => (
          <VehicleCard key={vehicles.id} vehicles={vehicles} />
        ))}
    </div>
  );
};

export default VehicleListing;
