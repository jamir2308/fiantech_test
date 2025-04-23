"use client";

import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  TooltipProps,
} from "recharts";
import { ChartPlaceholderProps } from "@/types/componetsProps";
import { NameType, ValueType } from "recharts/types/component/DefaultTooltipContent";

const ChartPlaceholder: React.FC<ChartPlaceholderProps> = ({ product }) => {
  const data = product.performanceHistory;

  if (!data || data.length === 0) {
    return (
      <div className="w-full min-h-[16rem] h-64 bg-gray-50 border border-gray-200 rounded-lg flex flex-col items-center justify-center text-gray-600 p-4 text-center">
        <h4 className="font-semibold text-gray-700 mb-3">
          Rendimiento Histórico
        </h4>
        <p className="text-sm italic">
          No hay datos de rendimiento histórico disponibles para este producto.
        </p>
        {product.interestRate !== undefined && (
          <p className="text-sm mt-2">Tasa Actual: {product.interestRate}%</p>
        )}
        {product.riskLevel && (
          <p className="text-sm mt-1">Riesgo: {product.riskLevel}</p>
        )}
      </div>
    );
  }

  const CustomTooltip = ({ active, payload, label }: TooltipProps<ValueType, NameType>) => {
    if (active && payload && payload.length) {
      return (
        <div className="bg-white p-2 border border-gray-200 rounded shadow-sm">
          <p className="label">{`${label}`}</p>
          <p
            className="intro"
            style={{ color: payload[0].color }}
          >{`Tasa: ${payload[0].value}%`}</p>
        </div>
      );
    }
    return null;
  };

  return (
    <div className="w-full h-64 md:h-72 bg-white p-4 border border-gray-200 rounded-lg shadow-sm">
      <h4 className="text-sm font-semibold text-gray-700 mb-3 text-center">
        Rendimiento Histórico (Tasa %)
      </h4>
      <ResponsiveContainer width="100%" height="85%">
        <LineChart
          data={data}
          margin={{
            top: 5,
            right: 10,
            left: -20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" stroke="#e0e0e0" />
          <XAxis
            dataKey="month"
            fontSize={10}
            tickLine={false}
            axisLine={false}
          />
          <YAxis
            fontSize={10}
            tickLine={false}
            axisLine={false}
            tickFormatter={(value) => `${value}%`}
            domain={["auto", "auto"]}
          />
          <Tooltip content={<CustomTooltip />} />
          <Line
            type="monotone"
            dataKey="rate"
            stroke="#3b82f6"
            strokeWidth={2}
            activeDot={{ r: 6 }}
            dot={{ r: 3 }}
            name="Tasa"
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default ChartPlaceholder;
