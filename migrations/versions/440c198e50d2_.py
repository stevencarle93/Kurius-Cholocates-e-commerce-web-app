"""empty message

Revision ID: 440c198e50d2
Revises: c3be8b42b632
Create Date: 2022-10-07 20:12:34.175991

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = '440c198e50d2'
down_revision = 'c3be8b42b632'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.alter_column('order_detail', 'price',
               existing_type=sa.REAL(),
               type_=sa.Float(precision=10),
               existing_nullable=False)
    op.alter_column('product', 'price',
               existing_type=sa.REAL(),
               type_=sa.Float(precision=10),
               existing_nullable=False)
    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.alter_column('product', 'price',
               existing_type=sa.Float(precision=10),
               type_=sa.REAL(),
               existing_nullable=False)
    op.alter_column('order_detail', 'price',
               existing_type=sa.Float(precision=10),
               type_=sa.REAL(),
               existing_nullable=False)
    # ### end Alembic commands ###