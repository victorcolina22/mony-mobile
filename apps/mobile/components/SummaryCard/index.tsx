import { Text, View, ViewProps } from 'react-native';

// Components
import { ProgressBar } from '../ProgressBar';
import { RenderIf } from '../RenderIf';

// Context
import { SummaryCardContext } from './context/context';
import { SummarySubtitle } from './components/SummarySubtitle';
import { SummaryTitle } from './components/SummaryTitle';
import { SummaryValue } from './components/SummaryValue';

// Types
import { SummaryCardProps } from './types';

// Utils
import { cn } from '@/shared/utils';

const SummaryCardComposition = ({
  children,
  className,
  ...rest
}: SummaryCardProps & ViewProps) => {
  return (
    <SummaryCardContext.Provider value={{ ...rest }}>
      <View
        className={cn(
          'border border-mony-gray py-5 px-10 rounded-lg',
          className
        )}
      >
        {children}
      </View>
    </SummaryCardContext.Provider>
  );
};
SummaryCardComposition.Title = SummaryTitle;
SummaryCardComposition.Subtitle = SummarySubtitle;
SummaryCardComposition.Value = SummaryValue;

export const SummaryCard = ({
  title,
  subtitle,
  value,
  percentage,
}: SummaryCardProps) => {
  return (
    <SummaryCardComposition percentage={percentage}>
      <View>
        <SummaryCardComposition.Title>{title}</SummaryCardComposition.Title>
        <SummaryCardComposition.Subtitle>
          {subtitle}
        </SummaryCardComposition.Subtitle>
      </View>

      <View className="flex-row items-center justify-between">
        <SummaryCardComposition.Value className="mt-3">{`$${value}`}</SummaryCardComposition.Value>
        <SummaryCardComposition.Value className="mt-3">
          {percentage + '%'}
        </SummaryCardComposition.Value>
      </View>

      <View className="my-3">
        <ProgressBar />
      </View>

      <RenderIf isTrue={value === '0'}>
        <Text className="text-xs mt-3">{`${title} por ingresar`}</Text>
      </RenderIf>
    </SummaryCardComposition>
  );
};
