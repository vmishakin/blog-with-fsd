import { memo } from 'react';
import { ArticleDetails } from '@/entities/Article';
import { Card } from '@/shared/ui/redesigned/Card';

interface DetailsContainterProps {
  className?: string;
  id: string;
}

export const DetailsContainer = memo((props: DetailsContainterProps) => {
  const { className, id } = props;

  return (
    <Card max border="round-border" className={className} padding="24">
      <ArticleDetails id={id} />
    </Card>
  );
});
