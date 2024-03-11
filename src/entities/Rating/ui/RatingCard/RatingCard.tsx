import { useCallback, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { BrowserView, MobileView } from 'react-device-detect';
import { Card as CardDeprecated } from '@/shared/ui/deprecated/Card';
import { HStack, VStack } from '@/shared/ui/redesigned/Stack';
import { Text as TextDepreacetd } from '@/shared/ui/deprecated/Text';
import { StarRating } from '@/shared/ui/deprecated/StarRating';
import { Modal } from '@/shared/ui/redesigned/Modal';
import { Input as InputDeprecated } from '@/shared/ui/deprecated/Input';
import {
  Button as ButtonDeprecated,
  ButtonSize,
  ButtonTheme,
} from '@/shared/ui/deprecated/Button';
import { Drawer } from '@/shared/ui/redesigned/Drawer';
import { ToggleFeatures } from '@/shared/lib/features';
import { Text } from '@/shared/ui/redesigned/Text';
import { Card } from '@/shared/ui/redesigned/Card';
import { Button } from '@/shared/ui/redesigned/Button';
import { Input } from '@/shared/ui/redesigned/Input';

interface RatingCardProps {
  className?: string;
  title?: string;
  feedbackTitle?: string;
  hasFeedback?: boolean;
  onCancel?: (starsCount: number) => void;
  onAccept?: (starsCount: number, feedback?: string) => void;
  rate?: number;
}

export const RatingCard = ({
  className,
  title,
  feedbackTitle,
  hasFeedback,
  onCancel,
  onAccept,
  rate,
}: RatingCardProps) => {
  const { t } = useTranslation('article');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [starsCount, setStarsCount] = useState(rate ?? 0);
  const [feedback, setFeedback] = useState('');

  const onSelectStars = useCallback(
    (selectedStarsCount: number) => {
      setStarsCount(selectedStarsCount);
      if (hasFeedback) {
        setIsModalOpen(true);
      } else {
        onAccept?.(selectedStarsCount);
      }
    },
    [hasFeedback, onAccept],
  );

  const acceptHandle = useCallback(() => {
    setIsModalOpen(false);
    onAccept?.(starsCount, feedback);
  }, [feedback, onAccept, starsCount]);

  const cancelHandle = useCallback(() => {
    setIsModalOpen(false);
    onCancel?.(starsCount);
  }, [onCancel, starsCount]);

  const modalContent = (
    <ToggleFeatures
      name="isAppRedesigned"
      on={
        <>
          <Text title={feedbackTitle} />
          <Input
            data-testid="RatingCard.Input"
            value={feedback}
            onChange={setFeedback}
            placeholder={t('Your feedback')}
          />
        </>
      }
      off={
        <>
          <TextDepreacetd title={feedbackTitle} />
          <InputDeprecated
            data-testid="RatingCard.Input"
            value={feedback}
            onChange={setFeedback}
            placeholder={t('Your feedback')}
          />
        </>
      }
    />
  );

  const content = (
    <>
      <VStack align="center" gap="8" fullWidth>
        <ToggleFeatures
          name="isAppRedesigned"
          on={<Text title={starsCount ? t('Thanks for the review') : title} />}
          off={
            <TextDepreacetd
              title={starsCount ? t('Thanks for the review') : title}
            />
          }
        />
        <StarRating
          selectedStars={starsCount}
          size={40}
          onSelect={onSelectStars}
        />
      </VStack>
      <BrowserView>
        <Modal isOpen={isModalOpen} lazy>
          <VStack fullWidth gap="32">
            {modalContent}
            <ToggleFeatures
              name="isAppRedesigned"
              on={
                <HStack fullWidth gap="16" justify="end">
                  <Button data-testid="RatingCard.Close" onClick={cancelHandle}>
                    {t('Close')}
                  </Button>
                  <Button data-testid="RatingCard.Send" onClick={acceptHandle}>
                    {t('Send')}
                  </Button>
                </HStack>
              }
              off={
                <HStack fullWidth gap="16" justify="end">
                  <ButtonDeprecated
                    data-testid="RatingCard.Close"
                    onClick={cancelHandle}
                    theme={ButtonTheme.OUTLINE_RED}
                  >
                    {t('Close')}
                  </ButtonDeprecated>
                  <ButtonDeprecated
                    data-testid="RatingCard.Send"
                    onClick={acceptHandle}
                  >
                    {t('Send')}
                  </ButtonDeprecated>
                </HStack>
              }
            />
          </VStack>
        </Modal>
      </BrowserView>
      <MobileView>
        <Drawer isOpen={isModalOpen} lazy onClose={cancelHandle}>
          <VStack gap="32">
            {modalContent}
            <ToggleFeatures
              name="isAppRedesigned"
              on={
                <Button fullWidth onClick={acceptHandle} size="l">
                  {t('Send')}
                </Button>
              }
              off={
                <ButtonDeprecated
                  fullWidth
                  onClick={acceptHandle}
                  size={ButtonSize.L}
                >
                  {t('Send')}
                </ButtonDeprecated>
              }
            />
          </VStack>
        </Drawer>
      </MobileView>
    </>
  );

  return (
    <ToggleFeatures
      name="isAppRedesigned"
      on={
        <Card max border="round-border" padding="24">
          {content}
        </Card>
      }
      off={
        <CardDeprecated className={className} max data-testid="RatingCard">
          {content}
        </CardDeprecated>
      }
    />
  );
};
