import { useEffect, useState } from "react";
import supabase from "./supabase-client";
import BarChart from "./BarChart";
import Form from "./Form";

function Dashboard() {
  const [metrics, setMetrics] = useState([]);

  async function fetchMetrics() {
  // const response = await supabase
  //   .from("sales_deals")
  //   .select("name,value")
  //   .order("value", { ascending: false })
  //   .limit(1);

  try {
    const { data, error } = await supabase
    .from('sales_deals')
    .select(`name, total:value.sum()`) 
    
    if (error) {
      throw error;
    }

    console.log(data);
    setMetrics(data);
    return data;
  } catch (error) {
    console.error(error);
    throw error;
  }
}

  useEffect(() => {
    const getMetrics = async () => {
      await fetchMetrics();
    };
    getMetrics();

    const channel = supabase
      .channel('deal-changes')
      .on(
        'postgres_changes',
        { 
          event: '*', 
          schema: 'public', 
          table: 'sales_deals' 
        },
        payload => {
          console.log(payload);
          // It's okay to re-fetch metrics on every change as it's a small dataset
          fetchMetrics();
        })
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
      <Form metrics={metrics} />
    </div>
  );
}

export default Dashboard;
