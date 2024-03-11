import { getRouteProfile } from '@/shared/constants/router';
import { classNames } from '@/shared/lib/classNames/classNames';
import { ToggleFeatures, toggleFeatures } from '@/shared/lib/features';
import { Avatar as AvatarDeprecated } from '@/shared/ui/deprecated/Avatar';
import { Text as TextDeprecated } from '@/shared/ui/deprecated/Text';
import { Skeleton as SkeletonDeprecated } from '@/shared/ui/deprecated/Skeleton';
import { Skeleton as SkeletonRedesigned } from '@/shared/ui/redesigned/Skeleton';
import { Text } from '@/shared/ui/redesigned/Text';
import { AppLink as AppLinkDeprecated } from '@/shared/ui/deprecated/AppLink';
import { HStack, VStack } from '@/shared/ui/redesigned/Stack';
import { Comment } from '../../model/types/comment';
import s from './CommentCard.module.scss';
import { Card } from '@/shared/ui/redesigned/Card';
import { AppLink } from '@/shared/ui/redesigned/AppLink';
import { Avatar } from '@/shared/ui/redesigned/Avatar';

interface CommentCardProps {
  className?: string;
  comment?: Comment;
  isLoading?: boolean;
}

export const CommentCard = ({
  className,
  comment,
  isLoading,
}: CommentCardProps) => {
  const Skeleton = toggleFeatures({
    name: 'isAppRedesigned',
    on: () => SkeletonRedesigned,
    off: () => SkeletonDeprecated,
  });

  if (isLoading) {
    return (
      <VStack
        gap="8"
        fullWidth
        className={classNames(s.CommentCard, {}, [className, s.loading])}
        data-testid="CommentCard.Loading"
      >
        <div className={s.header}>
          <Skeleton width={30} height={30} border="50%" />
          <Skeleton width={100} height={16} className={s.username} />
        </div>
        <Skeleton className={s.text} width="100%" height={50} />
      </VStack>
    );
  }

  if (!comment) {
    return null;
  }

  return (
    <ToggleFeatures
      name="isAppRedesigned"
      on={
        <Card padding="24" border="round-border" max>
          <VStack
            data-testid="CommentCard.Content"
            gap="8"
            fullWidth
            className={classNames(s.CommentCardRedesigned, {}, [className])}
          >
            <AppLink to={getRouteProfile(comment.user.id)}>
              <HStack gap="8">
                {comment.user.avatar ? (
                  <Avatar size={30} src={comment.user.avatar} />
                ) : null}
                <Text text={comment.user.username} bold />
              </HStack>
            </AppLink>
            <Text text={comment.text} />
          </VStack>
        </Card>
      }
      off={
        <VStack
          data-testid="CommentCard.Content"
          gap="8"
          fullWidth
          className={classNames(s.CommentCard, {}, [className])}
        >
          <AppLinkDeprecated
            to={getRouteProfile(comment.user.id)}
            className={s.header}
          >
            {comment.user.avatar ? (
              <AvatarDeprecated size={30} src={comment.user.avatar} />
            ) : null}
            <TextDeprecated
              className={s.username}
              title={comment.user.username}
            />
          </AppLinkDeprecated>
          <TextDeprecated className={s.text} text={comment.text} />
        </VStack>
      }
    />
  );
};
