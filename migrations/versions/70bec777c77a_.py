"""empty message

Revision ID: 70bec777c77a
Revises: e554f0307bab
Create Date: 2022-10-13 17:13:18.502327

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = '70bec777c77a'
down_revision = 'e554f0307bab'
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