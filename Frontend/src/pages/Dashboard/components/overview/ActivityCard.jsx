import { Card, CardContent } from "../../../../components/ui/card";

const ActivityCard = ({ 
  title, 
  icon: Icon, 
  iconColor, 
  value, 
  children 
}) => (
  <Card className="relative overflow-hidden">
    <CardContent className="p-6">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2">
          <div className={`p-2 rounded-xl ${iconColor}`}>
            <Icon className="h-5 w-5" />
          </div>
          <h3 className="font-medium text-gray-700">{title}</h3>
        </div>
        <div className="text-sm text-gray-500">{value}</div>
      </div>
      {children}
    </CardContent>
  </Card>
);

export default ActivityCard;