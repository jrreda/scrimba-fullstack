import { useEffect, useState } from "react";
import supabase from "../supabase-client";
import BarChart from "../components/BarChart";
import Form from "../components/Form";

function Dashboard() {
  const [metrics, setMetrics] = useState([]);

  async function fetchMetrics() {
    // const response = await supabase
    //   .from("sales_deals")
    //   .select("name,value")
    //   .order("value", { ascending: false })
    //   .limit(1);

    try {
      const { data, error } = await supabase.from("sales_deals").select(
        `
          value.sum(),
          ...user_profiles!inner(
            name
          )
        `
      );
      if (error) {
        throw error;
      }
      // console.log("Fetched metrics:", data);
      setMetrics(data);
    } catch (error) {
      console.error("Error fetching metrics:", error.message);
    }
  }

  useEffect(() => {
    const getMetrics = async () => {
      await fetchMetrics();
    };
    getMetrics();

    const channel = supabase
      .channel("deal-changes")
      .on(
        "postgres_changes",
        {
          event: "*",
          schema: "public",
          table: "sales_deals",
        },
        (payload) => {
          console.log(payload);
          // It's okay to re-fetch metrics on every change as it's a small dataset
          fetchMetrics();
        }
      )
      .subscribe();

    return () => {
      supabase.removeChannel(channel);
    };
  }, []);

  return (
    <div className="dashboard-wrapper">
      <div className="chart-container">
        <BarChart metrics={metrics} />
      </div>
      <Form />
    </div>
  );
}

export default Dashboard;
