import { useCountdown } from '@/hooks/useCountdown';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

export default function CountdownTimer() {
  const { hours, minutes, seconds } = useCountdown(3);
  const isExpired = hours === 0 && minutes === 0 && seconds === 0;

  if (isExpired) {
    return null;
  }

  return (
    <div className="bg-gradient-to-r from-red-500 to-red-600 text-white p-4 rounded-lg mb-6 animate-pulse">
      <div className="flex items-center justify-center space-x-2 mb-3">
        <Icon name="Clock" size={24} />
        <h3 className="text-xl font-bold">Ограниченное предложение!</h3>
      </div>
      
      <div className="text-center">
        <p className="mb-4">Скидка действует ещё:</p>
        
        <div className="flex justify-center space-x-4 mb-4">
          <div className="text-center">
            <div className="bg-white/20 rounded-lg p-3 min-w-[60px]">
              <div className="text-2xl font-bold">{String(hours).padStart(2, '0')}</div>
              <div className="text-xs uppercase tracking-wider">часов</div>
            </div>
          </div>
          
          <div className="text-center flex items-center">
            <div className="text-2xl font-bold">:</div>
          </div>
          
          <div className="text-center">
            <div className="bg-white/20 rounded-lg p-3 min-w-[60px]">
              <div className="text-2xl font-bold">{String(minutes).padStart(2, '0')}</div>
              <div className="text-xs uppercase tracking-wider">минут</div>
            </div>
          </div>
          
          <div className="text-center flex items-center">
            <div className="text-2xl font-bold">:</div>
          </div>
          
          <div className="text-center">
            <div className="bg-white/20 rounded-lg p-3 min-w-[60px]">
              <div className="text-2xl font-bold animate-bounce">{String(seconds).padStart(2, '0')}</div>
              <div className="text-xs uppercase tracking-wider">секунд</div>
            </div>
          </div>
        </div>
        
        <Badge className="bg-yellow-400 text-yellow-900 font-bold px-3 py-1">
          Экономия 50 000 ₽
        </Badge>
      </div>
    </div>
  );
}