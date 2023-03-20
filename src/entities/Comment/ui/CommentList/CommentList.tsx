import { Comment } from 'entities/Comment/model/types/comment';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import { Text } from 'shared/ui/Text/Text';
import { CommentCard } from '../CommentCard/CommentCard';
import s from './CommentList.module.scss';

interface CommentListProps {
  className?: string;
  comments?: Comment[];
  isLoading?: boolean;
}

export const CommentList = ({ className, comments, isLoading }: CommentListProps) => {
  const { t } = useTranslation();
  return (
    <div className={classNames(s.CommentList, {}, [className])}>
      {comments?.length ? (
        comments?.map((comment) => (
          <CommentCard
            key={comment.id}
            isLoading={isLoading}
            className={s.comment}
            comment={comment}
          />
        ))
      ) : (
        <Text text={t('No comments')} />
      )}
    </div>
  );
};
