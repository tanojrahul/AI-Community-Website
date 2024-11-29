import { TrendingUp, TrendingDown } from 'lucide-react';

interface StatsCardProps {
  title: string;
  value: string;
  change: string;
  isPositive: boolean;
}

export const StatsCard = ({ title, value, change, isPositive }: StatsCardProps) => {
  return (
    <div className="bg-gray-800 rounded-xl p-6">
      <h3 className="text-gray-400 text-sm font-medium">{title}</h3>
      <div className="mt-2 flex items-baseline gap-4">
        <p className="text-3xl font-bold text-white">{value}</p>
        <span className={`flex items-center text-sm ${
          isPositive ? 'text-green-400' : 'text-red-400'
        }`}>
          {isPositive ? (
            <TrendingUp className="w-4 h-4 mr-1" />
          ) : (
            <TrendingDown className="w-4 h-4 mr-1" />
          )}
          {change}
        </span>
      </div>
    </div>
  );
};