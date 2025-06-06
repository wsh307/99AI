import { BaseEntity } from 'src/common/entity/baseEntity';
import { Column, Entity } from 'typeorm';

@Entity({ name: 'app_cats' })
export class AppCatsEntity extends BaseEntity {
  @Column({ unique: true, comment: 'App分类名称' })
  name: string;

  @Column({ comment: 'App分类排序、数字越大越靠前', default: 100 })
  order: number;

  @Column({ comment: 'App分类是否启用中 0：禁用 1：启用', default: 1 })
  status: number;

  @Column({ comment: 'App分类是否为会员专属 0：否 1：是', default: 0 })
  isMember: number;

  @Column({ comment: '非会员是否隐藏 0：否 1：是', default: 0 })
  hideFromNonMember: number;
}
